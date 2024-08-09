import { StoryBlendSchemas } from "@/lib/enums";
import { getOnlyParamsClass } from "@/lib/helpers";
import { UserPublic } from "@/lib/StoryBlendModels/user.public.dto";
import { supabase } from "@/lib/supabase";

export const publicDataUser = async (id: string) : Promise<any | null> => {
    try {
        const { data, error } = await supabase
          .from(StoryBlendSchemas.User)
          .select(getOnlyParamsClass(UserPublic))
          .eq("idUser", id)
          .single();
        if (error) return null;
        return data
      } catch (error) {
        console.error(error);
        return null;
      }
}