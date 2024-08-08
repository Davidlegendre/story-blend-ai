import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";
import type { Provider } from "@supabase/supabase-js";
import { StatusHttp } from "@/lib/enums";
import { getResponse } from "@/lib/helpers";

export const POST: APIRoute = async ({ request, redirect, url }) => {
  const formData = await request.formData();
  const provider = formData.get("provider")?.toString();

  const validProviders = ["google"];
  if (provider && validProviders.includes(provider)) {
    const origin = url.origin
    console.log(origin)
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider as Provider,
      options: {
        redirectTo: `${origin}/api/auth/callback`
      },
    });

    if (error) {
      return getResponse({server: StatusHttp.InternalServerException, message: error.message});
    }
    return redirect(data.url);
  }
  return getResponse({server: StatusHttp.InternalServerException, message: "not include provider"})
};