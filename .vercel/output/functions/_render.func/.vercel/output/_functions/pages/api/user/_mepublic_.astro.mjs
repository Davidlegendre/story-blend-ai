import { a as StoryBlendSchemas, S as StatusHttp } from '../../../chunks/enums_Cb9x7Jmh.mjs';
import { s as supabase } from '../../../chunks/supabase_D0aHbkSm.mjs';
import { b as getOnlyParamsClass, g as getResponse } from '../../../chunks/helpers_odyhUvGW.mjs';
export { renderers } from '../../../renderers.mjs';

class UserPublic {
  idUser;
  photoUser;
  fechaNacimiento;
  historiasPublicas;
  mdPortada;
  likes;
  promedioLikesHistorias;
  followers;
  fechaUltimoAcceso;
  fullName;
  email;
}

const GET = async ({ params }) => {
  try {
    const { mepublic } = params;
    const { data, error } = await supabase.from(StoryBlendSchemas.User).select(getOnlyParamsClass(UserPublic)).eq("idUser", mepublic);
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
