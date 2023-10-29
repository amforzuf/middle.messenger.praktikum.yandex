import { Block } from '../../../core/Block';
import { tmpl } from './button.tmpl';
import { ButtonProps } from './types';
import './style.scss';

export class Button extends Block<ButtonProps> {
  render() {
    return this.compile(tmpl, this.props);
  }
}
