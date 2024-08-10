export class ResponseModel<T> {
  server: { status: number; text: string };
  statusText?: string;
  data?: T;  
}
