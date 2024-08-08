// With `output: 'hybrid'` configured:
// export const prerender = false;
import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";
import { getResponse } from "@/lib/helpers";
import { StatusHttp } from "@/lib/enums";

export const GET: APIRoute = async ({ cookies, redirect }) => {
  const {error} = await supabase.auth.signOut()
  await cookies.delete("sb-access-token", { path: "/" });
  await cookies.delete("sb-refresh-token", { path: "/" });
  if(error) return getResponse({server: StatusHttp.InternalServerException})
  return redirect("/");
};