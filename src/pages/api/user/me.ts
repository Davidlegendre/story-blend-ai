import { StatusHttp, StoryBlendSchemas } from "@/lib/enums";
import { getOnlyParamsClass, getResponse } from "@/lib/Helpers/helpers.global";
import { UserCreateDto } from "@/lib/models/user.create.dto";
import { supabase } from "@/lib/supabase";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {

  try {   
    const {email} = await request.json()
      const { data, error } = await supabase
        .from(StoryBlendSchemas.User)
        .select(getOnlyParamsClass(UserCreateDto))
        .eq("email", email)
        .single();
  
      if (error) return getResponse({server: StatusHttp.BadRequest, statusText: error.message});
  
      return getResponse({server: StatusHttp.OK, data: data})
    } catch (error) {
      console.error(error);
      return getResponse({server: StatusHttp.BadRequest, statusText: error.message});
    }
  }

  