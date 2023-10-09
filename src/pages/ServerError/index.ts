import ServerErrorCompiler from './serverError';

export const ServerError = new ServerErrorCompiler({
  statusCode: '500',
  comment: 'Мы уже фиксим',
});
