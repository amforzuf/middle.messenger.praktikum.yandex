import { ErrorPage } from '../../components/ErrorPage';

export const NotFound = () => {
  return ErrorPage({ errorCodeText: '404', errorDescription: 'Страница не найдена' });
};
