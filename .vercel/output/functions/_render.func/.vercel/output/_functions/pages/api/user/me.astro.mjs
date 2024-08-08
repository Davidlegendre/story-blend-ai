import { S as StatusHttp, a as StoryBlendSchemas } from '../../../chunks/enums_Cb9x7Jmh.mjs';
import { s as supabase } from '../../../chunks/supabase_D0aHbkSm.mjs';
import { a as getSession, g as getResponse } from '../../../chunks/helpers_odyhUvGW.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async () => {
  try {
    const user = await getSession();
    if (!user)
      return getResponse({
        server: StatusHttp.Unauthorized,
        message: "No tiene Autorizacion"
      });
    const { data, error } = await supabase.from(StoryBlendSchemas.User).select("*").eq("idUser", user.user.id);
    return error ? getResponse({ server: StatusHttp.BadRequest }) : getResponse({ server: StatusHttp.OK, data: data.length > 0 ? data[0] : data });
  } catch (error) {
    console.error(error);
    return getResponse({ server: StatusHttp.BadRequest });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
