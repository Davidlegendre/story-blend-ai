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
