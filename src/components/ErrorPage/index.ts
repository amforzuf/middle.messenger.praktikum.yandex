import Handlebars from 'handlebars';

import { tmpl } from './errorPage.tmpl';

import './style.scss';

interface ErrorPageProps {
  errorCodeText: string;
  errorDescription: string;
}

export const ErrorPage = (props: ErrorPageProps) => {
  return Handlebars.compile(tmpl)(props);
};
