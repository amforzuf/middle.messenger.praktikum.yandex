/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '../../api/AuthAPI';
import { Chats } from '../../api/ChatsAPI';
import { EventBus } from '../EventBus';
import { set } from '../../utils/setAndMerge';
import { Message } from '../../types/interfacesApi';

export interface State {
  user: User;
  chats: Chats[];
  selectedChat: Chats['id'] | null;
  messages?: Record<Chats['id'], Message[]>;
  chatUsers?: any;
}

export enum StorageEvent {
  UpdatedState = 'updated',
}

class Store extends EventBus {
  private state: any = {};

  getState() {
    return this.state;
  }

  set(path: string, value: unknown) {
    set(this.state, path, value);

    // eslint-disable-next-line no-console
    console.log(this.state);

    this.emit(StorageEvent.UpdatedState, this.state);
  }
}

const store = new Store();

export default store;
