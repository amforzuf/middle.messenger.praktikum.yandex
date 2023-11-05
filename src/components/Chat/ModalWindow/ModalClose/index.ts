import { ModalCloseButtonProps } from './types';
import Block from '../../../../core/Block';
import './style.scss';

import { tmpl } from './modalClose.tmpl';

export class ModalCloseButton extends Block<ModalCloseButtonProps> {
  render() {
    return this.compile(tmpl, this.props);
  }
}
