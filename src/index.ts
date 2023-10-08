import { NotFound } from './pages/NotFound';
import './style.scss';
import { Block } from './utils/Block';
import { Main } from './pages/Main';
import { ServerError } from './pages/ServerError';
import { Login } from './pages/Login';
import { Registration } from './pages/Registration';
import { Profile } from './pages/Profile';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')!;
  const getPage = () => {
    switch (window.location.pathname) {
      case '/':
        return Main;
      case '/500':
        return ServerError;
      case '/login':
        return Login;
      case '/registration':
        return Registration;
      case '/profile':
        return Profile;
      default:
        return NotFound;
    }
  };

  const page: Block<object> = getPage();
  root.append(page.element as HTMLElement);
  page.dispatchComponentDidMount();
});
