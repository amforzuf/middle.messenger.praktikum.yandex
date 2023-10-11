import NotFoundCompiler from './notFound';

export const NotFound = new NotFoundCompiler({
  statusCode: '404',
  comment: 'Страница не найдена',
});
