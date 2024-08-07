export class ResponseModel<T> {
  server: { status: number; text: string };
  message?: string;
  data?: T;  
}
