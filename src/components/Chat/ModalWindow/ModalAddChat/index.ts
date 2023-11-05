import Block from '../../../../core/Block';
import { tmpl } from '../modalWindow.tmpl';
import { ModalProps } from '../types';
import '../style.scss';
import { ModalCloseButton } from '../ModalClose';
import { AuthInput } from '../../../Forms/AuthInput';
import Validation from '../../../../utils/Validation/Validation';
import { Button } from '../../../Forms/Button';
import ChatsController from '../../../../controllers/ChatsController';
import { CreateChat } from '../../../../api/ChatsAPI';

export class ModalAddChat extends Block<ModalProps> {
  init() {
    this.children.closeButton = new ModalCloseButton({
      events: {
        click: () => this.closeAddChatModel(),
      },
    });
    this.children.modalInput = new AuthInput({
      value: ``,
      class: 'modal-form-input',
      name: 'add_chat',
      placeholder: 'Название чата',
      type: 'text',
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
      buttonTitle: 'Создать',
      class: 'modal-form-button',
      events: {
        click: (e: Event) => {
          this.onCreateClick(e);
          this.closeAddChatModel();
        },
      },
    });
  }

  closeAddChatModel = () => {
    const addChatModel = document.getElementById('modal-window-add-chat');
    addChatModel?.classList.remove('visible');
  };

  onCreateClick = async (e: Event): Promise<void> => {
    e.preventDefault();
    const input = this.children.modalInput as AuthInput;
    const createChatData: CreateChat = {
      title: input.getValue(),
    };
    await ChatsController.createChat(createChatData);
  };

  render() {
    return this.compile(tmpl, this.props);
  }
}
