import Handlebars from 'handlebars';

import { tmpl } from './popup.tmpl';

import './style.scss'

interface PopupProps {
  class: string;
  children: any;
}

export const Popup = (props: PopupProps) => {
  return Handlebars.compile(tmpl)(props);
};
