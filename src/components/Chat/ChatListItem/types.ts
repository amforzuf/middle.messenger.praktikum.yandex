// import { Chats } from "../../../api/ChatsAPI";

export type ChatListItemProps = {
  id: number;
  imgSrc?: string;
  letters?: string;
  addressee: string;
  date: string;
  you?: string;
  messege: string;
  counter?: string;
  events: {
    click: () => void;
  };
};
