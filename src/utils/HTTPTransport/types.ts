/* eslint-disable @typescript-eslint/no-explicit-any */
export type HTTPMethod = (url: string, options?: Record<string, any>) => Promise<unknown>;

export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}
