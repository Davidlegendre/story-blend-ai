import { StoryBlendSchemas } from "@/lib/enums";
import { getOnlyParamsClass } from "@/lib/helpers";
import { UserCreateDto } from "@/lib/StoryBlendModels/user.create.dto";
import { supabase } from "@/lib/supabase";

export const meData = async (email?: string) => {
    try {   
      if(!email) return null
        const { data, error } = await supabase
          .from(StoryBlendSchemas.User)
          .select(getOnlyParamsClass(UserCreateDto))
          .eq("email", email)
          .single();
    
        if (error) return null;
    
        return data
      } catch (error) {
        console.error(error);
        return null;
      }
}