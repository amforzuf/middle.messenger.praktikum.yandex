/* eslint-disable import/no-duplicates */
import { Chats } from '../../../api/ChatsAPI';
import Block from '../../../core/Block';
import { withChats, withMessages, withSelectedChat } from '../../../core/Store/withStore';
import { IconButton } from '../IconButton';
import { tmpl } from './activeChat.tmpl';
import { Messages } from '../Messages';
import { isEqual } from '../../../utils/commonUtils';

import './styles.scss';
import MessagesController from '../../../controllers/MessagesController';
import { SendForm } from '../SendForm';

export class ActiveChatClass extends Block {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  init() {
    this.children.deleteChatButton = new IconButton({
      class: 'delete-chat-button',
      events: {
        click: () => this.openModel('modal-window-delete-chat'),
      },
    });
    this.children.addMemberButton = new IconButton({
      class: 'add-chat-member-button',
      events: {
        click: () => this.openModel('modal-window-add-member'),
      },
    });
    this.children.deleteMemberButton = new IconButton({
      class: 'delete-chat-member-button',
      events: {
        click: () => this.openModel('modal-window-delete-member'),
      },
    });

    const formEvents = { submit: (e: Event) => this.onMessageSubmit(e) };

    this.children.form = new SendForm({
      events: formEvents,
    });
  }

  onMessageSubmit(e: Event): void {
    e.preventDefault();
    if (e.target != null && e.target instanceof HTMLFormElement) {
      if (this.children.form instanceof SendForm) {
        const { form } = this.children;
        const value = form.getValue();
        if (value != null && value.message.trim().length > 0) {
          MessagesController.sendMessage(this.props.selectedChat, value.message);
          form.clearForm();
        }
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  componentDidUpdate(oldProps: any, newProps: any): boolean {
    if (isEqual(oldProps, newProps)) {
      if (newProps.selectedChat != null) {
        if (
          isEqual(
            oldProps.messages[this.props.selectedChat],
            newProps.messages[this.props.selectedChat]
          )
        ) {
          this.children.messagesArea = new Messages({
            messages: this.props.messages[this.props.selectedChat],
            id: 'messages-area',
          });
          setTimeout(() => {
            const messagesArea = document.getElementById('messages-area');
            if (messagesArea != null) {
              messagesArea.scrollTop = messagesArea.scrollHeight;
            }
          }, 0);
        }
      }
      return true;
    }
    return false;
  }

  openModel = (id: string) => {
    const addChatModel = document.getElementById(id);

    addChatModel?.classList.add('visible');
  };

  render() {
    const activeChat = (this.props.chats as Chats[]).find(
      (chat) => chat.id === this.props.selectedChat
    );

    return this.compile(tmpl, { ...this.props, activeChat });
  }
}

export const ActiveChat = withChats(withMessages(withSelectedChat(ActiveChatClass)));
