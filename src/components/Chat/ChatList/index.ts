import ChatListItem from '../ChatListItem';

interface ChatListItems {
  // eslint-disable-next-line no-use-before-define
  items: ChatListProps[];
}

interface ChatListProps {
  imgSrc?: string;
  letters?: string;
  addressee: string;
  date: string;
  you?: string;
  counter?: string;
  messege: string;
}

export default class ChatList {
  private data: ChatListItems;

  constructor(data: ChatListItems) {
    this.data = data;
  }

  render(): string {
    const chatList = this.data.items
      // eslint-disable-next-line array-callback-return
      .map((item) => {
        // eslint-disable-next-line no-new
        new ChatListItem('div', item);
      })
      .join('');

    return chatList;
  }
}
