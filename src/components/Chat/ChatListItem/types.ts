import { Chats } from '../../../api/ChatsAPI';

export type ChatListItemProps = {
  chat: Chats;
  selectedChat: Chats['id'];
  events?: Record<string, (args: unknown) => void>;
};
