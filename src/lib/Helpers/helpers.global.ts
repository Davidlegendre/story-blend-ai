import { ResponseModel } from '../models/Response.model';

export const getResponse = (ResponseModel: ResponseModel<any>) => { 
  const response = new Response(
    JSON.stringify(ResponseModel),
     {
       status: ResponseModel.server.status,
       statusText: ResponseModel.statusText,
       headers: {
         "Content-Type": "application/json",
       },
     }
   );
  return response
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
