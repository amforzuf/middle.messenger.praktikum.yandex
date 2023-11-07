import { Message } from '../../../types/interfacesApi';

export interface MessagesProps {
  messages: Message[];
  id: string;
  events?: Record<string, (event: Event) => void>;
}
