/* eslint-disable func-names */
import { tmpl } from './chat.tmpl';
import { Block } from '../../utils/Block';
import { Input } from '../../components/Forms/Input';
import UserInfo from '../../components/Chat/UserInfo';
import { dataSet } from './dataset';
import { handleSubmit } from '../../utils/Validation/validateForm';

export class ChatCompiler extends Block {
  constructor() {
    super({}, 'div');
  }

  init() {
    this.children.userInfo = new UserInfo();

    this.children.search = new Input({
      value: '',
      class: 'search-input',
      name: 'search',
      id: 'search',
      placeholder: 'Найти',
      type: 'text',
      required: false,
      isValid: true,
    });
    this.props.chatListItems = dataSet.items;
    this.props.id = 1;
    this.children.messageInput = new Input({
      value: '',
      class: 'chat-input',
      name: 'message',
      id: 'message',
      placeholder: 'Сообщение',
      type: 'message',
      required: false,
      isValid: true,
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }

  addListeners() {
    const form = this.getContent()!.querySelector('form');
    if (form) {
      form.addEventListener('submit', (event: Event) => {
        const fieldsToCheck = ['message'];
        handleSubmit(event, fieldsToCheck);
      });
    }
    window.addEventListener('load', function () {
      const chatWindow = document.querySelector('.chat-window-center');
      if (chatWindow) {
        chatWindow.scrollTop = chatWindow.scrollHeight;
      }
    });
  }
}
