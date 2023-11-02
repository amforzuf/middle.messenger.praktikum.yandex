/* eslint-disable no-console */
import { Profile } from './pages/Profile';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { ServerError } from './pages/ServerError';
import { NotFound } from './pages/NotFound';
import { ChangePassword } from './pages/ChangePassword';
import { ChangeAvatar } from './pages/ChangeAvatar';
import { Chat } from './pages/Chat';
import router from './core/Router';
import AuthController from './controllers/AuthController';
import './style.scss';

enum Routes {
  Index = '/',
  Register = '/sign-up',
  Profile = '/profile',
  ServerError = '/500',
  NotFound = '/404',
  ChangePassword = '/change_password',
  ChangeAvatar = '/change_avatar',
  Messenger = '/messenger',
}

window.addEventListener('DOMContentLoaded', async () => {
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
    case Routes.ChangePassword:
      isProtectedRoute = true;
      break;
    case Routes.ChangeAvatar:
      isProtectedRoute = true;
      break;
    case Routes.Messenger:
      isProtectedRoute = true;
      break;
    default:
      Routes.NotFound;
  }

  try {
    await AuthController.fetchUser();

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
});
