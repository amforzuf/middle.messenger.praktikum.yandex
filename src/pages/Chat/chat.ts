import { tmpl } from './chat.tmpl';
import { Block } from '../../utils/Block';
import { Input } from '../../components/Forms/Input';
import UserInfo from '../../components/Chat/UserInfo';
import { dataSet } from './dataset';
import { handleSubmit } from '../../utils/Validation/validateForm';
import { ChatProps } from './types';

export class ChatCompiler extends Block {
  constructor() {
    const ListData = dataSet;
    // const ListDataHandler = ListData.items.map((item) => {
    //   return {
    //     ...item,
    //     onClick: () => {
    //       this.setProps({
    //         ...this.props,
    //         id: item.id,
    //         addressee: item.addressee,
    //       });
    //     },
    //   };
    // });
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
    // this.children.adresseeAvatar = 'Джо Байданов';
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

    // const chatWindow = document.querySelector('.chat-window-center');
    // if(chatWindow) {
    //   chatWindow.scrollTop = chatWindow.scrollHeight;
    // }

  }

  render() {
    return this.compile(tmpl, this.props);
  }

  addListeners() {
    const form = this.getContent()!.querySelector('form');
    if (form) {
      form.addEventListener('submit', (event) => {
        const fieldsToCheck = ['message'];
        handleSubmit(event, fieldsToCheck);
        // const messageInput = document.getElementById('message');
        // if(messageInput) {
        //   this.children.messageInput = new Input({
        //     value: '',
        //     class: 'chat-input',
        //     name: 'message',
        //     id: 'message',
        //     placeholder: 'Сообщение',
        //     type: 'message',
        //     required: false,
        //     isValid: true,
        //   });
        // }
      });
    }
  }
}
