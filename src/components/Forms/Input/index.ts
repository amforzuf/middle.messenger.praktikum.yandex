import Handlebars from 'handlebars';

import { tmpl } from './input.tmpl';

import './style.scss'

interface InputProps {
  class: string;
  placeholder: string;
  name: string;
}

export const Input = (props: InputProps) => {
  return Handlebars.compile(tmpl)(props);
};
