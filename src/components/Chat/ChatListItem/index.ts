import Handlebars from 'handlebars';
import { tmpl } from './chatListItem.tmpl';
import './style.scss';

interface ChatListProps {
  imgSrc?: string;
  letters?: string;
  addressee: string;
  date: string;
  you?: string;
  messege: string;
  counter?: string;
}

export const ChatListItem = (props: ChatListProps) => {
  return Handlebars.compile(tmpl)(props);
};
