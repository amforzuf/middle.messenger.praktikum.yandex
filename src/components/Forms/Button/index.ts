import { Block } from '../../../utils/Block';
import { tmpl } from './button.tmpl';
import { ButtonProps } from './types';
import './style.scss';

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props, 'div');
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
