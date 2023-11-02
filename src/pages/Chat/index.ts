/* eslint-disable func-names */
import { tmpl } from './chat.tmpl';
import Block from '../../core/Block';
import UserInfo from '../../components/Chat/UserInfo';
import { dataSet } from './dataset';

export class Chat extends Block {
  init() {
    this.children.userInfo = new UserInfo({});

    // this.children.search = new Input({
    //   value: '',
    //   class: 'search-input',
    //   name: 'search',
    //   id: 'search',
    //   placeholder: 'Найти',
    //   type: 'text',
    //   required: false,
    //   isValid: true,
    // });
    this.props.chatListItems = dataSet.items;
    this.props.id = 1;
    // this.children.messageInput = new Input({
    //   value: '',
    //   class: 'chat-input',
    //   name: 'message',
    //   id: 'message',
    //   placeholder: 'Сообщение',
    //   type: 'message',
    //   required: false,
    //   isValid: true,
    // });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
