import Block from '../../../core/Block';
import { tmpl } from './modalWindow.tmpl';
import { ModalProps } from './types';
import './style.scss';

export class ModalWindow extends Block<ModalProps> {
  render() {
    return this.compile(tmpl, this.props);
  }
}
