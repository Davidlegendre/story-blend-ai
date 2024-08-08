import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";
import { PostFetch } from "@/lib/Helpers/fetchHelper";
import { StatusHttp } from "@/lib/enums";
import { getResponse } from "@/lib/helpers";

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
  const authCode = url.searchParams.get("code");
  
  if (!authCode) {
    return getResponse({ server: StatusHttp.BadRequest, message: "No Code Provider" });
  }
  console.log("authcode paso")
  const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);

  if (error) {
    return getResponse({server:StatusHttp.InternalServerException})
  }
  console.log("session paso")
  const { access_token, refresh_token, user } = data.session;
 
  
  cookies.set("sb-access-token", access_token, {
    path: "/",
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/",
  });
  console.log("cookie paso")
  await PostFetch(`${url.origin}/api/user/createUser`, user);
  return redirect("/");
};
