import Handlebars from 'handlebars';
import './style.scss'

import { tmpl } from './main.tmpl';

export const Main = () => {
  return Handlebars.compile(tmpl)({});
};
