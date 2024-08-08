import { s as supabase } from './supabase_D0aHbkSm.mjs';

const getResponse = (ResponseModel2) => {
  return new Response(JSON.stringify(ResponseModel2), {
    status: ResponseModel2.server.status,
    headers: {
      "Content-Type": "application/json"
    }
  });
};
const getSession = async () => {
  const user = (await supabase.auth.getSession()).data.session;
  return user ?? null;
};
function getOnlyParamsClass(clase) {
  const st = clase.toString().replaceAll(";", ",").replaceAll(`class ${clase.name} {`, "").replaceAll("}", "").replaceAll("\n", "").replaceAll(" ", "").trim();
  return st.substring(0, st.length - 1);
}

export { getSession as a, getOnlyParamsClass as b, getResponse as g };
