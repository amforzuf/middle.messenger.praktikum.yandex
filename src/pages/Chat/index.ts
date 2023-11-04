/* eslint-disable func-names */
import { tmpl } from './chat.tmpl';
import Block from '../../core/Block';
import UserInfo from '../../components/Chat/UserInfo';
import { ChatList } from '../../components/Chat/ChatList';
import ChatsController from '../../controllers/ChatsController';
import { withChats, withSelectedChat } from '../../core/Store/withStore';

export class ChatClass extends Block {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  componentDidMount(): void {
    ChatsController.getChats();
  }

  init() {
    this.children.userInfo = new UserInfo({});
    this.children.chatList = new ChatList({});
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

export const Chat = withChats(withSelectedChat(ChatClass));
