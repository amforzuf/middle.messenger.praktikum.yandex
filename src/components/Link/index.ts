import Handlebars from 'handlebars';

import { tmpl } from './link.tmpl';

interface LinkProps {
  to: string;
  text: string;
}

export const Link = (props: LinkProps) => {
  return Handlebars.compile(tmpl)(props);
};