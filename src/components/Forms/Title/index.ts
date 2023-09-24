import Handlebars from 'handlebars';

import { tmpl } from './title.tmpl';
import './style.scss'

interface LinkProps {
  title: string;
}

export const Title = (props: LinkProps) => {
  return Handlebars.compile(tmpl)(props);
};
