const REQUEST_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function convertToQueryString(data: Record<string, any>) {
  let queryString = '?';
  for (const key in data) {
    // eslint-disable-next-line no-prototype-builtins
    if (data.hasOwnProperty(key)) {
      queryString += `${key}=${data[key]}&`;
    }
  }
  queryString = queryString.slice(0, queryString.length - 1);
  return queryString;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type HTTPMethod = (url: string, options?: Record<string, any>) => Promise<unknown>;

export default class HTTPTransport {
  public get: HTTPMethod = (url, options = {}) => {
    return this.makeRequest(url, { ...options, method: REQUEST_METHODS.GET }, options.timeout);
  };

  public post: HTTPMethod = (url, options = {}) => {
    return this.makeRequest(url, { ...options, method: REQUEST_METHODS.POST }, options.timeout);
  };

  public put: HTTPMethod = (url, options = {}) => {
    return this.makeRequest(url, { ...options, method: REQUEST_METHODS.PUT }, options.timeout);
  };

  public delete: HTTPMethod = (url, options = {}) => {
    return this.makeRequest(url, { ...options, method: REQUEST_METHODS.DELETE }, options.timeout);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public makeRequest = (url: string, options: Record<string, any>, timeout = 5000) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      let requestData;

      if (options.method === REQUEST_METHODS.GET) {
        requestData = convertToQueryString(options.data);
        url += requestData;
      }

      xhr.open(options.method, url);

      for (const header in options.headers) {
        // eslint-disable-next-line no-prototype-builtins
        if (options.headers.hasOwnProperty(header)) {
          xhr.setRequestHeader(header, options.headers[header]);
        }
      }

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (options.method === REQUEST_METHODS.GET || !requestData) {
        xhr.send();
      } else {
        xhr.send(requestData);
      }
    });
  };
}
