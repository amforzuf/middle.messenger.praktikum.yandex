export type HTTPMethod = (url: string, options?: Record<string, unknown>) => Promise<unknown>;

export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export type MethodOptions = {
  method: METHODS;
  data: string | Record<string, string>;
  headers: Record<string, string>;
  timeout: number;
};
