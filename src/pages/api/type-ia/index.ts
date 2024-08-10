import { StatusHttp, StoryBlendSchemas } from "@/lib/enums";
import { getResponse } from "@/lib/Helpers/helpers.global";
import { supabase } from "@/lib/supabase";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {

    const {data, error} = await supabase.from(StoryBlendSchemas.TypeAI)
    .select("*");

    const groupedData = data.reduce((acc, item) => {
        const { provider, ...content } = item;
    
        // Si el provider no existe en el acumulador, lo creamos
        if (!acc[provider]) {
          acc[provider] = {
            provider: provider,
            models: []
          };
        }
    
        // Agregar el objeto a la lista de content de su correspondiente provider
        acc[provider].content.push(content);
    
        return acc;
      }, {});


      const d =  Object.values(groupedData)

    return getResponse({server: StatusHttp.OK, data: d})
  }

  