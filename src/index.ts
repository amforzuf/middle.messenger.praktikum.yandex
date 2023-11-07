/* eslint-disable no-console */
import { Profile } from './pages/Profile';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { ServerError } from './pages/ServerError';
import { NotFound } from './pages/NotFound';
import { ChangePassword } from './pages/ChangePassword';
import { ChangeAvatar } from './pages/ChangeAvatar';
import { Chat } from './pages/Chat';
import { router } from './core/Router/Router';
import AuthController from './controllers/AuthController';
import ChatsController from './controllers/ChatsController';
import './style.scss';

export enum Routes {
  Index = '/',
  Register = '/sign-up',
  Profile = '/settings',
  ServerError = '/serverError',
  NotFound = '/notFound',
  ChangePassword = '/change_password',
  ChangeAvatar = '/change_avatar',
  Messenger = '/messenger',
}

window.addEventListener('DOMContentLoaded', async () => {
  const root = document.getElementById('app');
  if (root) {
    router
      .use(Routes.Index, SignIn)
      .use(Routes.Profile, Profile)
      .use(Routes.Register, SignUp)
      .use(Routes.NotFound, NotFound)
      .use(Routes.ServerError, ServerError)
      .use(Routes.ChangePassword, ChangePassword)
      .use(Routes.Messenger, Chat)
      .use(Routes.ChangeAvatar, ChangeAvatar);

    // eslint-disable-next-line prefer-const
    let isProtectedRoute = true;

    switch (window.location.pathname) {
      case Routes.Index:
      case Routes.Register:
        isProtectedRoute = false;
        break;
      default:
        break;
    }

    try {
      await AuthController.fetchUser();
      await ChatsController.getChats();

      router.start();

      if (!isProtectedRoute) {
        router.go(Routes.Profile);
      }
    } catch (e) {
      console.log(e, 'Here');
      router.start();

      if (isProtectedRoute) {
        router.go(Routes.Index);
      }
    }
  }
});
