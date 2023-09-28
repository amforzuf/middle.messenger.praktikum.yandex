import Handlebars from 'handlebars';
import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import { Avatar } from '../../components/Avatar';

import './style.scss';
import image from '../../static/images/avatar.png';
import { tmpl } from './profile.tmpl';

export const Profile = () => {
  return Handlebars.compile(tmpl)({
    profileAvatar: Avatar({ avatarImg: image, username: 'Просто Вячеслав' }),
    firstNameInput: Input({ class: '', placeholder: 'Имя', name: 'first_name' }),
    secondNameInput: Input({ class: '', placeholder: 'Фамилия', name: 'second_name' }),
    loginInput: Input({ class: '', placeholder: 'Логин', name: 'login' }),
    emailInput: Input({ class: '', placeholder: 'email', name: 'email' }),
    phoneInput: Input({ class: '', placeholder: 'Телефон', name: 'phone' }),
    saveButton: Button({ class: 'profile-save-button', buttonTitle: 'Сохранить', name: 'save' }),
    cancelBatton: Button({
      class: 'profileCancelButton',
      buttonTitle: 'Отменить',
      name: 'cancel',
      to: 'chat',
    }),
  });
};
