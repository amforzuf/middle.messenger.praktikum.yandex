import { ChatListItem } from '../ChatListItem';

interface ChatLitsItems {
  // eslint-disable-next-line no-use-before-define
  items: ChatListProps[];
}

interface ChatListProps {
  imgSrc?: string;
  letters?: string;
  addressee: string;
  date: string;
  you?: string;
  messege: string;
  counter?: string;
}

export default function ChatList(data: ChatLitsItems) {
  const chatList = data.items
    .map((item) => {
      return ChatListItem(item);
    })
    .join('');
  return chatList;
}
