/* eslint-disable @typescript-eslint/no-empty-function */
import { tmpl } from './chatListItem.tmpl';
import { Block } from '../../../utils/Block';
import './style.scss';
import { ChatListItemProps } from './types';

export default class ChatListItem extends Block<ChatListItemProps> {
  constructor(props: ChatListItemProps) {
    super(props, 'div');
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
