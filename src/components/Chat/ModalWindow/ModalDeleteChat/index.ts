import Block from '../../../../core/Block';
import { tmpl } from '../modalWindow.tmpl';
import { ModalProps } from '../types';
import '../style.scss';
import { ModalCloseButton } from '../ModalClose';
import { Button } from '../../../Forms/Button';
import ChatsController from '../../../../controllers/ChatsController';
import store from '../../../../core/Store';
import { DeleteChat } from '../../../../api/ChatsAPI';

export class ModalDeleteChat extends Block<ModalProps> {
  init() {
    this.children.closeButton = new ModalCloseButton({
      events: {
        click: () => this.closeModel(),
      },
    });

    this.children.submitButton = new Button({
      type: '',
      buttonTitle: 'Удалить',
      class: 'modal-form-button',
      events: {
        click: (e: Event) => {
          this.onDeleteClick(e);
          this.closeModel();
        },
      },
    });
  }

  closeModel = () => {
    const chatModel = document.getElementById('modal-window-delete-chat');
    chatModel?.classList.remove('visible');
  };

  onDeleteClick = async (e: Event): Promise<void> => {
    e.preventDefault();
    const delteChatData: DeleteChat = {
      chatId: store.getState().selectedChat,
    };
    await ChatsController.deleteChat(delteChatData);
    await ChatsController.getChats();
  };

  render() {
    return this.compile(tmpl, this.props);
  }
}
