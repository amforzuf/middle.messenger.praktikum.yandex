import Handlebars from 'handlebars';
import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import { Avatar } from '../../components/Avatar';
import image from '../../static/images/avatar.png'

import { tmpl } from './changePassword.tmpl';

export const ChangePassword = () => {

  return Handlebars.compile(tmpl)({
    profileAvatar: Avatar({avatarImg: image, username: 'Просто Вячеслав'}),
    oldPasswordInput: Input({class: '', placeholder: 'Старый пароль', name: 'oldPassword'}),
    newPasswordInput: Input({class: '', placeholder: 'Новый пароль', name: 'newPassword'}),
    newPasswordConfirmInput: Input({class: '', placeholder: 'Подтверждение пароля', name: 'newPassword'}),
    saveButton: Button({class: 'profileSaveButton', buttonTitle: 'Сохранить', name: 'change_password'}),
    cancelBatton: Button({class: 'profileCancelButton', buttonTitle: 'Отменить', name: 'cancel', to: 'profile'}),
  });
};
