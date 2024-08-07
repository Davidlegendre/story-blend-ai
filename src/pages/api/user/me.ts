import type { APIRoute } from "astro";
import { StatusHttp, StoryBlendSchemas } from "../../../lib/enums";
import { supabase } from "../../../lib/supabase";
import { getResponse, getSession } from "../../../lib/helpers/helpers";

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
      .eq("idUser", user.user.id);
    return error
      ? getResponse({ server: StatusHttp.BadRequest })
      : getResponse({ server: StatusHttp.OK, data: data.length > 0 ? data[0] : data });
  } catch (error) {
    console.error(error);
    return getResponse({ server: StatusHttp.BadRequest });
  }
};
