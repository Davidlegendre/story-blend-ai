import { s as supabase } from '../../../chunks/supabase_D0aHbkSm.mjs';
import { P as PostFetch } from '../../../chunks/fetchHelper_C0Nx4GbL.mjs';
import { S as StatusHttp } from '../../../chunks/enums_Cb9x7Jmh.mjs';
import { g as getResponse } from '../../../chunks/helpers_odyhUvGW.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ url, cookies, redirect }) => {
  const authCode = url.searchParams.get("code");
  if (!authCode) {
    return getResponse({ server: StatusHttp.BadRequest, message: "No Code Provider" });
  }
  const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);
  if (error) {
    return new Response(error.message, {
      status: StatusHttp.InternalServerException.status
    });
  }
  const { access_token, refresh_token, user } = data.session;
  await PostFetch(`${url.origin}/api/user/createUser`, user);
  cookies.set("sb-access-token", access_token, {
    path: "/"
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/"
  });
  return redirect("/");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
