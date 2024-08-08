import { s as supabase } from '../../../chunks/supabase_D0aHbkSm.mjs';
import { S as StatusHttp } from '../../../chunks/enums_Cb9x7Jmh.mjs';
import { g as getResponse } from '../../../chunks/helpers_odyhUvGW.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, redirect }) => {
  const formData = await request.formData();
  const provider = formData.get("provider")?.toString();
  const validProviders = ["google"];
  if (provider && validProviders.includes(provider)) {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: "http://localhost:4321/api/auth/callback"
      }
    });
    if (error) {
      return getResponse({ server: StatusHttp.InternalServerException, message: error.message });
    }
    return redirect(data.url);
  }
  return getResponse({ server: StatusHttp.InternalServerException, message: "not include provider" });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
