/* eslint-disable no-console */
import { CreateChat, DeleteChat, ChatsAPI, UsersData, UserResponse, Chats } from '../api/ChatsAPI';
import store from '../core/Store';
import MessagesController from './MessagesController';
import Router from '../core/Router';

class ChatsController {
  private api = new ChatsAPI();

  async getChats(data?: StringIndexed): Promise<void> {
    try {
      const chats = await this.api.getChats(data);
      console.log(chats);
      chats.map(async (chat) => {
        const token = await this.getToken(chat.id);
        await MessagesController.connect(chat.id, token as string);
      });
      store.set('chats', chats);
      console.log(store.getState().chats);
    } catch (error) {
      console.log(error);
    }
  }

  public getToken(id: Chats['id']): Promise<string> {
    return this.api.getToken(id);
  }

  async createChat(data: CreateChat) {
    try {
      await this.api.create(data);
      await this.getChats();
      Router.go('/messenger');
    } catch (error) {
      console.error(error);
    }
  }

  async deleteChat(data: DeleteChat) {
    try {
      await this.api.deleteChat(data);
    } catch (error) {
      console.error(error);
    }
  }

  async addUser(id: Chats['id'], userId: UserResponse['id']): Promise<void> {
    this.api.addUsers(id, [userId]);
  }

  async getUsers(id: number) {
    try {
      let users: UserResponse[] = await this.api.getUsers(id);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      users = users.filter((user: UserResponse) => user.id !== store.getState().user.id);

      store.set('chatUsers', users);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteUser(id: Chats['id'], userId: UserResponse['id']): Promise<void> {
    try {
      await this.api.deleteUsers(id, [userId]);
    } catch (error) {
      console.error(error);
    }
  }

  selectChat(id: Chats['id']) {
    store.set('selectedChat', id);
  }
}

export default new ChatsController();
