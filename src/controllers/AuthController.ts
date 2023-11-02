/* eslint-disable no-console */
import { AuthAPI, SignInData, SignUpData } from '../api/AuthAPI';
import Router from '../core/Router';
import store from '../core/Store';

class AuthController {
  private api = new AuthAPI();

  async signin(data: SignInData) {
    try {
      await this.api.signin(data);

      await this.fetchUser();

      Router.go('/profile');
    } catch (error) {
      console.log(error);
    }
  }

  async signup(data: SignUpData) {
    try {
      await this.api.signup(data);
      await this.fetchUser();
      Router.go('/profile');
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    try {
      await this.api.logout();
      store.set('user', undefined);
      Router.go('/');
    } catch (error) {
      console.log(error);
    }
  }

  async fetchUser() {
    // eslint-disable-next-line no-useless-catch
    try {
      const user = await this.api.getUser();

      store.set('user', user);
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthController();
