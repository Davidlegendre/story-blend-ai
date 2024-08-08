import type { APIRoute } from "astro";
import { StatusHttp, StoryBlendSchemas } from "@/lib/enums";
import { supabase } from "@/lib/supabase";
import { getResponse, getSession } from "@/lib/helpers";

export const GET: APIRoute = async () => {
  try {
    const user = await getSession();
    if (!user)
      return getResponse({
        server: StatusHttp.Unauthorized,
        message: "No tiene Autorizacion",
      });
    const { data, error } = await supabase
      .from(StoryBlendSchemas.User)
      .select("*")
      .eq("idUser", user.user.id)
      .single();
    if (error) return getResponse({ server: StatusHttp.BadRequest });

    return getResponse({ server: StatusHttp.OK, data: data });
  } catch (error) {
    console.error(error);
    return getResponse({ server: StatusHttp.BadRequest });
  }
};
