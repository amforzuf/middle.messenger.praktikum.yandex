import requestError from '../../utils/requestError';
import queryStringify from '../../utils/queryStringify';
import { RequestOptions } from '../../types/interfacesApi';

type HTTPMethod = (path: string, options?: RequestOptions) => Promise<XMLHttpRequest>;

const BASE_URL = 'https://ya-praktikum.tech/api/v2';

export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export class HTTPTransport {
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${BASE_URL}${endpoint}`;
  }

  get: HTTPMethod = (path, options = {}) =>
    this.request(`${this.endpoint + path}${queryStringify(options.data)}`, { method: METHODS.GET });

  post: HTTPMethod = (path, options = {}) =>
    this.request(this.endpoint + path, { ...options, method: METHODS.POST });

  put: HTTPMethod = (path, options = {}) =>
    this.request(this.endpoint + path, { ...options, method: METHODS.PUT });

  delete: HTTPMethod = (path, options = {}) =>
    this.request(this.endpoint + path, { ...options, method: METHODS.DELETE });

  request = (url: string, options: RequestOptions) => {
    const { method = 'GET', data, headers } = options as RequestOptions;

    return new Promise<XMLHttpRequest>((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);

      if (headers) {
        Object.entries(headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value as string);
        });
      }

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          reject(
            new Error(
              `Request failed with status ${xhr.status}, ${
                xhr.response?.reason || 'Unexpected error.'
              }`
            )
          );
        }
      };

      xhr.onabort = () => reject(new Error(`Request aborted. ${requestError(xhr)}`));
      xhr.onerror = () => reject(new Error(`Request error. ${requestError(xhr)}`));
      xhr.ontimeout = () => reject(new Error(`Request timeout. ${requestError(xhr)}`));

      xhr.withCredentials = true;
      xhr.responseType = 'json';

      xhr.setRequestHeader(
        'Content-Security-Policy',
        "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'"
      );
      xhr.setRequestHeader('X-XSS-Protection', '1; mode=block');
      xhr.setRequestHeader('X-Content-Type-Options', 'nosniff');

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else if (data instanceof FormData) {
        // xhr.setRequestHeader('Content-Type', 'multipart/form-data');
        xhr.send(data);
      } else {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
