import { tmpl } from './chat.tmpl';
import { Block } from '../../utils/Block';
import { Input } from '../../components/Forms/Input';
import UserInfo from '../../components/Chat/UserInfo';
import { dataSet } from './dataset';

export class ChatCompiler extends Block {
  constructor() {
    // const ListData = dataSet;
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
    super(
      {
        // id: undefined,
        // chatListItems: ListDataHandler,
        chatListItems: [],
      },
      'div'
    );
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
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
