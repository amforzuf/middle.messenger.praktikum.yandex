/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon';
import HTTPTransport, { Method } from '.';

describe('HTTPTransport', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  let instance: HTTPTransport;
  let requests: SinonFakeXMLHttpRequest[] = [];

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global.XMLHttpRequest = xhr;

    xhr.onCreate = (request: SinonFakeXMLHttpRequest) => {
      requests.push(request);
    };

    instance = new HTTPTransport('./auth');
  });

  afterEach(() => {
    requests = [];
    xhr.restore();
  });

  describe('Request Methods', () => {
    it('should send GET request', () => {
      instance.get('/user');
      const [request] = requests;
      expect(request.method).to.eq(Method.Get);
    });

    it('should send POST request', () => {
      instance.post('/user', {
        data: {
          test: 1,
          test2: 2,
        },
      });

      const [request] = requests;
      expect(request.method).to.eq(Method.Post);
    });

    it('should send PUT request', () => {
      instance.put('/user', {
        data: {
          test: 1,
        },
      });

      const [request] = requests;
      expect(request.method).to.eq(Method.Put);
    });

    it('should send PATCH request', () => {
      instance.patch('/user', {
        data: {
          test: 1,
        },
      });

      const [request] = requests;
      expect(request.method).to.eq(Method.Patch);
    });

    it('should send DELETE request', () => {
      instance.delete('/user');

      const [request] = requests;
      expect(request.method).to.eq(Method.Delete);
    });
  });

  describe('Response Handling', () => {
    it('should handle successful GET request', async () => {
      const responseData = { id: 1, name: 'John Doe' };
      const expectedResponse = JSON.stringify(responseData);

      instance.get('/user').then((response) => {
        expect(response).to.deep.equal(responseData);
      });

      const [request] = requests;
      request.respond(200, { 'Content-Type': 'application/json' }, expectedResponse);
    });

    it('should handle failed GET request', async () => {
      instance.get('/nonexistent').catch((error) => {
        expect(error).to.exist;
      });

      const [request] = requests;
      request.respond(404, null, '');
    });

    it('should handle successful POST request', async () => {
      const requestData = { name: 'New User', email: 'new@example.com' };
      const responseData = { id: 123, ...requestData };
      const expectedResponse = JSON.stringify(responseData);

      instance.post('/create', { data: requestData }).then((response) => {
        expect(response).to.deep.equal(responseData);
      });

      const [request] = requests;
      request.respond(201, { 'Content-Type': 'application/json' }, expectedResponse);
    });

    it('should handle successful PUT request', async () => {
      const requestData = { name: 'Updated User' };
      const responseData = { id: 1, ...requestData };
      const expectedResponse = JSON.stringify(responseData);

      instance.put('/update', { data: requestData }).then((response) => {
        expect(response).to.deep.equal(responseData);
      });

      const [request] = requests;
      request.respond(200, { 'Content-Type': 'application/json' }, expectedResponse);
    });

    it('should handle failed PUT request', async () => {
      instance.put('/nonexistent').catch((error) => {
        expect(error).to.exist;
      });

      const [request] = requests;
      request.respond(500, null, '');
    });

    it('should handle successful PATCH request', async () => {
      const requestData = { name: 'Patched User' };
      const responseData = { id: 1, ...requestData };
      const expectedResponse = JSON.stringify(responseData);

      instance.patch('/update', { data: requestData }).then((response) => {
        expect(response).to.deep.equal(responseData);
      });

      const [request] = requests;
      request.respond(200, { 'Content-Type': 'application/json' }, expectedResponse);
    });

    it('should handle successful DELETE request', async () => {
      instance.delete('/remove').then((response) => {
        expect(response).to.be.undefined;
      });

      const [request] = requests;
      request.respond(204, null, '');
    });

    it('should handle failed DELETE request', async () => {
      instance.delete('/nonexistent').catch((error) => {
        expect(error).to.exist;
      });

      const [request] = requests;
      request.respond(403, null, '');
    });
  });
});
