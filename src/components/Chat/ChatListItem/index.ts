/* eslint-disable @typescript-eslint/no-empty-function */
import { tmpl } from './chatListItem.tmpl';
import Block from '../../../core/Block';
import './style.scss';
import { ChatListItemProps } from './types';
import { withSelectedChat } from '../../../core/Store/withStore';
import store from '../../../core/Store';

class ChatListItemClass extends Block {
  constructor(props: ChatListItemProps) {
    super({
      ...props,
      events: {
        ...props?.events,
        click: () => {
          store.set('selectedChat', this.props.chat.id);
          this.props.class = 'active';
          this.removeActiveFromOthers();
        },
      },
    });
  }

  removeActiveFromOthers = () => {
    const chatListItems = document.querySelectorAll('.chat-list-item');
    chatListItems.forEach((item) => {
      if (item !== this.element) {
        item.classList.remove('active');
      }
    });
  };

  render() {
    return this.compile(tmpl, this.props);
  }
}

export const ChatListItem = withSelectedChat(ChatListItemClass);
