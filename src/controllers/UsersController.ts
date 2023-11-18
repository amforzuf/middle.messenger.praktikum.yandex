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
import { router } from '../core/Router/Router';
import AuthController from './AuthController';
import ChatsController from './ChatsController';
import { Routes } from '..';

class UsersController {
  private api = new UsersAPI();

  async profileInfoChange(data: UsersProfileData) {
    try {
      await this.api.profileInfoChange(data);
      await AuthController.fetchUser();
      await ChatsController.getChats();
      router.go('/messenger');
    } catch (error) {
      console.log(error);
    }
  }

  async profilePasswordChange(data: UsersProfilePassword) {
    try {
      await this.api.profilePasswordChange(data);
      await AuthController.fetchUser();
      router.go(Routes.Profile);
    } catch (error) {
      console.log(error);
    }
  }

  async search(data: SearchData): Promise<UsersResponse | void> {
    try {
      await this.api.search(data);
    } catch (error) {
      console.error(error);
    }
  }

  async avatarChange(data: FormData) {
    try {
      await this.api.avatarChange(data);
      await AuthController.fetchUser();
      router.go(Routes.Profile);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UsersController();
