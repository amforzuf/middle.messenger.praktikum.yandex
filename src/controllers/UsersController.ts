/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
import {
  UsersAPI,
  UsersProfileData,
  UsersProfilePassword,
  SearchData,
  UsersResponse,
} from '../api/UsersApi';
import Router from '../core/Router';
import AuthController from './AuthController';
import ChatsController from './ChatsController';

class UsersController {
  private api = new UsersAPI();

  async profileInfoChange(data: UsersProfileData) {
    try {
      await this.api.profileInfoChange(data);
      await AuthController.fetchUser();
      await ChatsController.getChats();
      Router.go('/messenger');
    } catch (error) {
      console.log(error);
    }
  }

  async profilePasswordChange(data: UsersProfilePassword) {
    try {
      await this.api.profilePasswordChange(data);
      await AuthController.fetchUser();
      Router.go('/profile');
    } catch (error) {
      console.log(error);
    }
  }

  async search(data: SearchData): Promise<UsersResponse | void> {
    try {
      await this.api.search(data);
    } catch (e: any) {
      console.error(e.reason);
    }
  }

  async avatarChange(data: FormData) {
    try {
      await this.api.avatarChange(data);
      await AuthController.fetchUser();
      Router.go('/profile');
    } catch (error) {
      console.log(error);
      Router.go('/500');
    }
  }
}

export default new UsersController();
