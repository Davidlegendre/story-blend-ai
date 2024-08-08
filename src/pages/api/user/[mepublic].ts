import type { APIRoute } from "astro";
import { StatusHttp, StoryBlendSchemas } from "@/lib/enums";
import { supabase } from "@/lib/supabase";
import { getOnlyParamsClass, getResponse } from "@/lib/helpers";
import { UserPublic } from "@/lib/StoryBlendModels/user.public.dto";
export const GET: APIRoute = async ({ params }) => {
  try {
    const { mepublic } = params;
    const { data, error } = await supabase
      .from(StoryBlendSchemas.User)
      .select(getOnlyParamsClass(UserPublic))
      .eq("idUser", mepublic)
      .single();
    if (error) return getResponse({ server: StatusHttp.BadRequest });
    return getResponse({ server: StatusHttp.OK, data: data });
  } catch (error) {
    console.error(error);
    return getResponse({ server: StatusHttp.BadRequest });
  }
};
