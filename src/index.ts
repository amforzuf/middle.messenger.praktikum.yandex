/* eslint-disable no-else-return */
import { NotFound } from './pages/NotFound';
import './style.scss';
import { Block } from './utils/Block';
import { Main } from './pages/Main';
import { ServerError } from './pages/ServerError';
import { Login } from './pages/Login';
import { Registration } from './pages/Registration';
import { Profile } from './pages/Profile';
import { ChangePassword } from './pages/ChangePassword';
import { Chat } from './pages/Chat';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')!;
  const getPage = () => {
    const path = window.location.pathname;
    // const pathSegments = window.location.pathname.split('/');
    // if (pathSegments.length === 3 && pathSegments[1] === 'chat') {
    //   const chatId = pathSegments[2];
    //   return Chat;
    // }
    // if (window.location.pathname === 'chat') {
    //   return Chat;
    // }
    switch (path) {
      case '/':
        return Main;
      case '/serverError':
        return ServerError;
      case '/login':
        return Login;
      case '/registration':
        return Registration;
      case '/profile':
        return Profile;
      case '/change_password':
        return ChangePassword;
      case '/chat':
        return Chat;
      default:
        return NotFound;
    }
    // if (path === '/') {
    //   return Main;
    // } else if (path === 'serverError') {
    //   return ServerError;
    // } else if (path === 'login') {
    //   return Login;
    // } else if (path === 'registration') {
    //   return Registration;
    // } else if (path === 'profile') {
    //   return Profile;
    // } else if (path === 'change_password') {
    //   return ChangePassword;
    // } else if (path.includes('chat')) {
    //   return ChangePassword;
    // }
    // return NotFound;
  };

  const page: Block<object> = getPage();
  root.append(page.element as HTMLElement);
  page.dispatchComponentDidMount();
});
