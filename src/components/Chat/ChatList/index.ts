import ChatListItem from '../ChatListItem';
import { Block } from '../../../utils/Block';
import { tmpl } from './chatList.tmpl';
import { dataSet } from './dataSet';

export default class ChatList extends Block {
  private chatListItems: ChatListItem[] = [];

  constructor() {
    super({}, 'div');
  }

  init() {
    this.chatListItems = dataSet.items.map((item) => {
      return new ChatListItem({
        addressee: item.addressee,
        date: item.date,
        id: item.id,
        imgSrc: item.imgSrc,
        letters: item.letters,
        messege: item.messege,
      });
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
