import Handlebars from 'handlebars';
import { tmpl } from './hint.tmpl';
import './style.scss'

interface HintProps {
  hintText?: string;
  to?: string;
  hintLinkText: string;
  imgSrc?: any;
  name: string;
}

export const Hint = (props: HintProps) => {
  return Handlebars.compile(tmpl)(props);
};
