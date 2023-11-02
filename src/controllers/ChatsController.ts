/* eslint-disable no-console */
import {
  CreateChat,
  DeleteChat,
  ChatsAPI,
  UsersData,
  UserResponse,
  IndexedString,
} from '../api/ChatsAPI';
import store from '../core/Store';
import MessagesController from './MessagesController';

class ChatsController {
  private api = new ChatsAPI();

  async getChats(data?: IndexedString) {
    try {
      const chats = await this.api.getChats(data);
      chats.map(async (chat) => {
        const token = await this.getToken(chat.id);
        await MessagesController.connect(chat.id, token as string);
      });
      store.set('chats', chats);
    } catch (error) {
      console.log(error);
    }
  }

  async getToken(id: number): Promise<string | void> {
    try {
      await this.api.getToken(id);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error) {
      console.error(error);
    }
  }

  async createChat(data: CreateChat) {
    try {
      await this.api.createChat(data);
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

  async addUsers(data: UsersData) {
    try {
      await this.api.addUsers(data);

      await this.getUsers(data.chatId);
    } catch (error) {
      console.error(error);
    }
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

  async deleteUsers(data: UsersData) {
    try {
      await this.api.deleteUsers(data);
      await this.getUsers(data.chatId);
    } catch (error) {
      console.error(error);
    }
  }
}

export default new ChatsController();
