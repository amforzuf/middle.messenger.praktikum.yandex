interface ChatListProps {
  id: number;
  imgSrc?: string;
  letters?: string;
  addressee: string;
  date: string;
  you?: string;
  messege: string;
  counter?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClick?: Function;
}

export type ChatProps = {
  id?: number;
  chatListItems?: ChatListProps[];
};
