/* eslint-disable import/no-duplicates */
import { Chats } from '../../../api/ChatsAPI';
import Block from '../../../core/Block';
import {
  withChats,
  withMessages,
  withSelectedChat,
  withWrittenMessage,
} from '../../../core/Store/withStore';
import { IconButton } from '../IconButton';
import { tmpl } from './activeChat.tmpl';
import { Messages } from '../Messages';
import { isEqual } from '../../../utils/commonUtils';
import Validation from '../../../utils/Validation/Validation';

import './styles.scss';
import { AuthInput } from '../../Forms/AuthInput';
import { SendButton } from '../SendButton';
import MessagesController from '../../../controllers/MessagesController';
import { SendMessageInput } from '../SendMessegeInput';

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
    this.children.messageInput = new SendMessageInput({
      events: {
        blur: () => {
          Validation.isEmptyInput(this.children.modalInput as AuthInput);
        },
      },
      keyboardEvents: {
        keydown: (e: KeyboardEvent) => this.sendMessage(e),
      },
    });
    this.children.sendBtn = new SendButton({
      class: 'send-btn',
    });
  }

  sendMessage = async (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      const input = e.target as HTMLInputElement;
      MessagesController.sendMessage(this.props.selectedChat, input.value);
    }
  };

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
            const messagesContainer = document.getElementById('messages');
            if (messagesContainer != null) {
              messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
          }, 100);
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

export const ActiveChat = withChats(
  withMessages(withSelectedChat(withWrittenMessage(ActiveChatClass)))
);
