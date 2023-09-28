import { Profile } from '../pages/Profile';
import { Main } from '../pages/Main';
import { Login } from '../pages/Login';
import { Registration } from '../pages/Registration';
import { ServerError } from '../pages/ServerError';
import { Chat } from '../pages/Chat';
import { ChangePassword } from '../pages/ChangePassword';

// eslint-disable-next-line import/prefer-default-export
export const routes: Record<string, string> = {
  '/profile': Profile(),
  '/': Main(),
  '/login': Login(),
  '/registration': Registration(),
  '/serverError': ServerError(),
  '/chat': Chat(),
  '/change_password': ChangePassword(),
};
