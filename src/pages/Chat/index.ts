/* eslint-disable func-names */
import { tmpl } from './chat.tmpl';
import Block from '../../core/Block';
import UserInfo from '../../components/Chat/UserInfo';
import { ChatList } from '../../components/Chat/ChatList';
import { withChats, withSelectedChat, withMessages } from '../../core/Store/withStore';
import { SearchInput } from '../../components/Chat/SearchInput';
import ChatsController from '../../controllers/ChatsController';
import { AddChatButton } from '../../components/Chat/AddChatButton';
import { ModalAddChat } from '../../components/Chat/ModalWindow/ModalAddChat';
import { ActiveChat } from '../../components/Chat/ActiveChat';
import { ModalDeleteChat } from '../../components/Chat/ModalWindow/ModalDeleteChat';
import { ModalAddMember } from '../../components/Chat/ModalWindow/ModalAddMember';
import { ModalDeleteMember } from '../../components/Chat/ModalWindow/ModalDeleteMember';

export class ChatClass extends Block {
  init() {
    this.children.userInfo = new UserInfo({});
    this.children.chatList = new ChatList({});
    this.children.modalAddChat = new ModalAddChat({
      modalFormId: 'add-chat',
      modalTitle: 'Создание чата',
    });
    this.children.modalDeleteChat = new ModalDeleteChat({
      modalFormId: 'delete-chat',
      modalTitle: 'Удалить чат?',
    });
    this.children.modalAddMember = new ModalAddMember({
      modalFormId: 'add-member',
      modalTitle: 'Добавить участникa',
    });
    this.children.modalDeleteMember = new ModalDeleteMember({
      modalFormId: 'delete-member',
      modalTitle: 'Удалить участникa',
    });
    this.children.addChatButton = new AddChatButton({
      buttonTitle: 'Создать чат',
      events: {
        click: () => {
          this.openAddChatModel();
        },
      },
    });
    this.children.searchInput = new SearchInput({
      events: {
        keyup: (e) => this.searchChats(e),
      },
    });
    this.children.chat = new ActiveChat({});
  }

  searchChats = async (e: Event) => {
    if (e.target != null) {
      const input = e.target as HTMLInputElement;
      const searchChatsData: StringIndexed = {
        title: input.value,
      };
      await ChatsController.getChats(searchChatsData);
    }
  };

  openAddChatModel = () => {
    const addChatModel = document.getElementById('modal-window-add-chat');

    addChatModel?.classList.add('visible');
  };

  render() {
    return this.compile(tmpl, this.props);
  }
}

export const Chat = withChats(withMessages(withSelectedChat(ChatClass)));
