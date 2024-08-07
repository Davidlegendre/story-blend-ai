import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";
import { PostFetch } from "../../../lib/fetchHelpers/fetchHelper";
import { StatusHttp } from "../../../lib/enums";
import { getResponse } from "../../../lib/helpers/helpers";

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
  const authCode = url.searchParams.get("code");

  if (!authCode) {
    return getResponse({ server: StatusHttp.BadRequest, message: "No Code Provider" });
  }

  const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);

  if (error) {
    return new Response(error.message, {
      status: StatusHttp.InternalServerException.status,
    });
  }

  const { access_token, refresh_token, user } = data.session;
  await PostFetch(`${url.origin}/api/user/createUser`, user);
  
  cookies.set("sb-access-token", access_token, {
    path: "/",
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/",
  });
  return redirect("/");
};
