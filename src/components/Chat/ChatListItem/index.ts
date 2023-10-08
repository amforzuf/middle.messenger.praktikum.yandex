import { tmpl } from './chatListItem.tmpl';
import Block from '../../../utils/Block';
import './style.scss';

type ChatListProps = {
  imgSrc?: string;
  letters?: string;
  addressee: string;
  date: string;
  you?: string;
  messege: string;
  counter?: string;
};

export default class ChatListItem extends Block<ChatListProps> {
  render() {
    return this._compile(tmpl, this._props);
  }
}
