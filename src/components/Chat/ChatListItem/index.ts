/* eslint-disable @typescript-eslint/no-empty-function */
import { tmpl } from './chatListItem.tmpl';
import Block from '../../../core/Block';
import './style.scss';
import { ChatListItemProps } from './types';

export default class ChatListItem extends Block<ChatListItemProps> {
  render() {
    return this.compile(tmpl, this.props);
  }
}
