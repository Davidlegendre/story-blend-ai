import { s as supabase } from '../../../chunks/supabase_D0aHbkSm.mjs';
import { S as StatusHttp, a as StoryBlendSchemas } from '../../../chunks/enums_Cb9x7Jmh.mjs';
import { a as getSession, g as getResponse } from '../../../chunks/helpers_odyhUvGW.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const session = await getSession();
    if (!session) return getResponse({
      server: StatusHttp.Unauthorized,
      message: "No tiene Autorizacion"
    });
    const data = await request.json();
    const { data: res } = await supabase.from(StoryBlendSchemas.User).select("idUser").eq("idUser", data.id);
    console.error(data);
    if (res && res.length > 0) {
      await supabase.from(StoryBlendSchemas.User).update({
        fullName: data.user_metadata.full_name,
        photoUser: data.user_metadata.avatar_url,
        email: data.user_metadata.email
      }).eq("idUser", data.id);
      return getResponse({
        server: StatusHttp.Created,
        message: "Usuario Modificado"
      });
    }
    const user = {
      idUser: data.id,
      fullName: data.user_metadata.full_name,
      photoUser: data.user_metadata.avatar_url,
      email: data.user_metadata.email
    };
    const { error } = await supabase.from(StoryBlendSchemas.User).insert(user);
    if (error) {
      console.error(error);
      return getResponse({
        server: StatusHttp.BadRequest,
        message: "Json invalido"
      });
    }
    return getResponse({
      server: StatusHttp.Created,
      message: "Usuario Creado"
    });
  } catch (error) {
    console.error(error);
    return getResponse({
      server: StatusHttp.BadRequest,
      message: "Json invalido"
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
