import { tmpl } from './chatList.tmpl';
import './style.scss';
import Block from '../../../core/Block';
import { Chats } from '../../../api/ChatsAPI';
import { ChatListItem } from '../ChatListItem';
import { withChats } from '../../../core/Store/withStore';
import ChatsController from '../../../controllers/ChatsController';

class ChatListClass extends Block {
  render() {
    this.children.chatListItems = (this.props.chats as Chats[]).map((chat) => {
      return new ChatListItem({ chat });
    });
    return this.compile(tmpl, this.props);
  }
}

export const ChatList = withChats(ChatListClass);
