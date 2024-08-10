import { StoryBlendSchemas } from "@/lib/enums";
import type { UserCreateDto } from "@/lib/models/user.create.dto";
import { supabase } from "@/lib/supabase";

export const createUserHandler = async (usuario: { id: string, name: string, email: string, image: string }) => {
  
    try {   
        //averiguo si existe un usuario ya con ese id
        const { data, error: err } = await supabase
          .from(StoryBlendSchemas.User)
          .select("idUser")
          .eq("email", usuario.email).single();
    
        //si hay un usuario acabo aqui
        if(data) return
    
        //si no hay entonces
        const user: UserCreateDto = {
          fullName: usuario.name,
          photoUser: usuario.image,
          email: usuario.email,
        };
    
        const { error } = await supabase.from(StoryBlendSchemas.User).insert(user);
        if (error) {
          console.error(error);
          return
        }
    
        return true
      } catch (error) {
        console.error(error);
        return false
      }
}