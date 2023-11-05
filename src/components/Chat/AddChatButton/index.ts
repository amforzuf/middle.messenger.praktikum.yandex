import Block from '../../../core/Block';
import { tmpl } from './addChatButton.tmpl';
import { AddChatButtonButtonProps } from './types';
import './style.scss';

export class AddChatButton extends Block<AddChatButtonButtonProps> {
  render() {
    return this.compile(tmpl, this.props);
  }
}
