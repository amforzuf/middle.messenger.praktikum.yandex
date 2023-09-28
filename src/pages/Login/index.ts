import Handlebars from 'handlebars';
import { Title } from '../../components/Forms/Title';
import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import { Hint } from '../../components/Forms/Hint';
import './style.scss';

import { tmpl } from './login.tmpl';

export const Login = () => {
  return Handlebars.compile(tmpl)({
    formTitle: Title({ title: 'Вход' }),
    loginInput: Input({ class: '', placeholder: 'e-mail', name: 'login' }),
    passwordInput: Input({ class: '', placeholder: 'Пароль', name: 'password' }),
    formButton: Button({ class: '', buttonTitle: 'Войти', name: 'Sign in' }),
    formHint: Hint({
      hintText: 'Нет аккаунта?',
      to: 'registration',
      hintLinkText: 'Зарегистрироваться',
      name: 'Sign up',
    }),
  });
};
