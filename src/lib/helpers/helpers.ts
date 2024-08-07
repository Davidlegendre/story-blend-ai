import { ResponseModel } from "../models/Response.model";
import { supabase } from "../supabase";

export const getResponse = (ResponseModel: ResponseModel<any>) => {
  return new Response(JSON.stringify(ResponseModel), {
    status: ResponseModel.server.status,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getSession = async () => {
  const user = (await supabase.auth.getSession()).data.session;
  return user ?? null;
};

/**obtiene los parametros o propiedades de la clase pero string y seguido de comas */
export function getOnlyParamsClass(clase: Function): string {
  const st = clase
    .toString()
    .replaceAll(";", ",")
    .replaceAll(`class ${clase.name} {`, "")
    .replaceAll("}", "")
    .replaceAll("\n", "")
    .replaceAll(" ", "")
    .trim();
  return st.substring(0, st.length - 1);
}
