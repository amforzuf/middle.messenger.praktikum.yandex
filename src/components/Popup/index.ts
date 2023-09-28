import Handlebars from 'handlebars';

import { tmpl } from './popup.tmpl';

import './style.scss';

interface PopupProps {
  class: string;
  children: HTMLElement;
}

export const Popup = (props: PopupProps) => {
  return Handlebars.compile(tmpl)(props);
};
