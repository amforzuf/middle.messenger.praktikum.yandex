/* eslint-disable no-console */
import { UsersAPI, IUsersProfileData, IUsersProfilePassword } from '../api/UsersApi';
import Router from '../core/Router';
// import store from '../core/Store';

class UsersController {
  private api = new UsersAPI();

  async profileInfoChange(data: IUsersProfileData) {
    try {
      await this.api.profileInfoChange(data);

      Router.go('/profile');
    } catch (error) {
      console.log(error);
    }
  }

  async profilePasswordChange(data: IUsersProfilePassword) {
    try {
      await this.api.profilePasswordChange(data);

      Router.go('/profile');
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UsersController();
