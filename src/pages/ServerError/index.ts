import { ErrorPage } from '../../components/ErrorPage';

export const ServerError = () => {
  return ErrorPage({ errorCodeText: '500', errorDescription: 'Мы уже фиксим' });
};
