import Handlebars from 'handlebars';
import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import Avatar from '../../components/Avatar';
import image from '../../static/images/avatar.png';

import { tmpl } from './changePassword.tmpl';

const avatar = new Avatar('div', {
  avatarImg: `${image}`,
  username: 'Просто Вячеслав',
});

export const ChangePassword = () => {
  return Handlebars.compile(tmpl)({
    profileAvatar: avatar,
    oldPasswordInput: Input({ class: '', placeholder: 'Старый пароль', name: 'oldPassword' }),
    newPasswordInput: Input({ class: '', placeholder: 'Новый пароль', name: 'newPassword' }),
    newPasswordConfirmInput: Input({
      class: '',
      placeholder: 'Подтверждение пароля',
      name: 'newPassword',
    }),
    saveButton: Button({
      class: 'profile-save-button',
      buttonTitle: 'Сохранить',
      name: 'change_password',
    }),
    cancelBatton: Button({
      class: 'profile-cancel-button',
      buttonTitle: 'Отменить',
      name: 'cancel',
      to: 'profile',
    }),
  });
};
