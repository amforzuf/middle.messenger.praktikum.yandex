import Handlebars from 'handlebars';
import { Title } from '../../components/Forms/Title';
import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import { Hint } from '../../components/Forms/Hint';
import './style.scss'

import { tmpl } from './registration.tmpl';

export const Registration = () => {
  return Handlebars.compile(tmpl)({
    formTitle: Title({title: 'Регистрация'}),
    firstNameInput: Input({class: '', placeholder: 'Имя', name: 'first_name'}),
    secondNameInput: Input({class: '', placeholder: 'Фамилия', name: 'second_name'}),
    loginInput: Input({class: '', placeholder: 'Логин', name: 'login'}),
    emailInput: Input({class: '', placeholder: 'e-mail', name: 'email'}),
    passwordInput: Input({class: '', placeholder: 'Пароль', name: 'password'}),
    confirmPasswordInput: Input({class: '', placeholder: 'Подтверждение пароля', name: 'confirm_password'}),
    formButton: Button({class: '', buttonTitle: 'Войти', name: 'Sign up'}),
    formHint: Hint({hintText: 'Уже есть аккаунт?', to: 'login', hintLinkText: 'Войти', name: 'Sign in'})
  });
};
