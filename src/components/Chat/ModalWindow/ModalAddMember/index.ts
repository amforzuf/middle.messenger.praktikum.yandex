import Block from '../../../../core/Block';
import { tmpl } from '../modalWindow.tmpl';
import { ModalProps } from '../types';
import '../style.scss';
import { ModalCloseButton } from '../ModalClose';
import { AuthInput } from '../../../Forms/AuthInput';
import Validation from '../../../../utils/Validation/Validation';
import { Button } from '../../../Forms/Button';
import ChatsController from '../../../../controllers/ChatsController';
import store from '../../../../core/Store';
import { Link } from '../../../Link';

export class ModalAddMember extends Block<ModalProps> {
  init() {
    this.children.closeButton = new ModalCloseButton({
      events: {
        click: () => this.closeModel(),
      },
    });
    this.children.modalInput = new AuthInput({
      value: ``,
      class: 'modal-form-input',
      name: 'add_chat',
      placeholder: 'ID пользователя',
      type: 'number',
      validationError: false,
      validationErrorMessage: '',
      events: {
        blur: () => {
          Validation.isEmptyInput(this.children.modalInput as AuthInput);
        },
      },
    });

    this.children.submitButton = new Button({
      type: '',
      buttonTitle: 'Добавить',
      class: 'modal-form-button',
      events: {
        click: (e: Event) => {
          this.onAddClick(e);
        },
      },
    });
  }

  closeModel = () => {
    const chatModel = document.getElementById('modal-window-add-member');
    chatModel?.classList.remove('visible');
  };

  onAddClick = async (e: Event): Promise<void> => {
    e.preventDefault();
    const input = this.children.modalInput as AuthInput;
    const userId = parseInt(input.getValue(), 10);
    const chatId = store.getState().selectedChat;
    try {
      await ChatsController.addUser(chatId, userId);
      this.closeModel();
    } catch {
      this.children.error = new Link({
        to: '/messenger',
        linkText: 'произошла ошибка',
      });
    }
  };

  render() {
    return this.compile(tmpl, this.props);
  }
}
