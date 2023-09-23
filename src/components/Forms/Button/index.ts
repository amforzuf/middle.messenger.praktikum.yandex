import Handlebars from 'handlebars';
import { tmpl } from './button.tmpl';
import './style.scss'

interface ButtonProps {
  class: string;
  buttonTitle: string;
  name: string;
  id?: string;
  to? :string;
}

export const Button = (props: ButtonProps) => {
  return Handlebars.compile(tmpl)(props);
};
