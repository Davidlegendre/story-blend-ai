import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";
import { StatusHttp, StoryBlendSchemas } from "../../../lib/enums";
import type { User } from "@supabase/supabase-js";
import { UserCreateDto } from "../../../lib/StoryBlendModels/user.create.dto";
import { getResponse, getSession } from "../../../lib/helpers";

export const POST: APIRoute = async ({ request }) => {
  try {
    const session = await getSession()
    if(!session) return getResponse({
      server: StatusHttp.Unauthorized,
      message: "No tiene Autorizacion",
    });
    const data: User = await request.json();
    //averiguo si existe un usuario ya con ese id
    const { data: res } = await supabase
      .from(StoryBlendSchemas.User)
      .select("idUser")
      .eq("idUser", data.id);

    console.error(data);
    //si hay un usuario acabo aqui

    if (res && res.length > 0) {
      await supabase.from(StoryBlendSchemas.User).update({
        fullName: data.user_metadata.full_name,
        photoUser: data.user_metadata.avatar_url,
        email: data.user_metadata.email,
      }).eq('idUser', data.id);

      return getResponse({
        server: StatusHttp.Created,
        message: "Usuario Modificado",
      });
    }

    //si no hay entonces
    const user: UserCreateDto = {
      idUser: data.id,
      fullName: data.user_metadata.full_name,
      photoUser: data.user_metadata.avatar_url,
      email: data.user_metadata.email,
    };

    const { error } = await supabase.from(StoryBlendSchemas.User).insert(user);
    if (error) {
      console.error(error);
      return getResponse({
        server: StatusHttp.BadRequest,
        message: "Json invalido",
      });
    }

    return getResponse({
      server: StatusHttp.Created,
      message: "Usuario Creado",
    });
  } catch (error) {
    console.error(error);
    return getResponse({
      server: StatusHttp.BadRequest,
      message: "Json invalido",
    });
  }
};
