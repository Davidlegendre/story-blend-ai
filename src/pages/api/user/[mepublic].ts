import type { APIRoute } from "astro";
import { StatusHttp, StoryBlendSchemas } from "../../../lib/enums";
import { supabase } from "../../../lib/supabase";
import { getResponse, getSession } from "../../../lib/helpers/helpers";
import { type UserModel } from "../../../interfaces/user.interface";

export const GET: APIRoute = async ({params}) => {
  try {
    const {mepublic} = params
    const { data, error } = await supabase
      .from(StoryBlendSchemas.User)
      .select("idUser,photoUser,likes")
      .eq("idUser", mepublic);
      
    return error
      ? getResponse({ server: StatusHttp.BadRequest })
      : getResponse({ server: StatusHttp.OK, data: data.length > 0 ? data[0] : data });
  } catch (error) {
    console.error(error);
    return getResponse({ server: StatusHttp.BadRequest });
  }
};
