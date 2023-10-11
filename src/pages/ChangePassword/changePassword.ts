import { Input } from '../../components/Forms/Input';
import { Block } from '../../utils/Block';
import { tmpl } from './changePassword.tmpl';
import { Button } from '../../components/Forms/Button';
import { handleSubmit } from '../../utils/Validation/validateForm';

export class ChangePasswordCompiler extends Block {
  constructor() {
    super({}, 'div');
  }

  init() {
    this.children.oldPasswordInput = new Input({
      value: '',
      class: 'form-input',
      name: 'password',
      id: 'password',
      placeholder: 'Пароль',
      type: 'password',
      required: true,
      isValid: true,
    });

    this.children.newPasswordInput = new Input({
      value: '',
      class: 'form-input',
      name: 'new_password',
      id: 'new_password',
      placeholder: 'Новый пароль',
      type: 'password',
      required: true,
      isValid: true,
    });

    this.children.newPasswordConfirmInput = new Input({
      value: '',
      class: 'form-input',
      name: 'confirm_new_password',
      id: 'confirm_new_password',
      placeholder: 'Подтверждение пароля',
      type: 'password',
      required: true,
      isValid: true,
    });

    this.children.cancelBatton = new Button({
      buttonTitle: 'Отменить',
      type: 'a',
      class: 'profile-cancel-button',
      to: 'profile',
    });

    this.children.saveButton = new Button({
      buttonTitle: 'Сохранить',
      type: 'submit',
      class: 'profile-save-button',
    });
  }

  render() {
    return this.compile(tmpl, {
      title: this.props.title,
    });
  }

  addListeners() {
    const form = this.getContent()!.querySelector('form');
    if (form) {
      form.addEventListener('submit', (event) => {
        const fieldsToCheck = ['password', 'new_password'];
        handleSubmit(event, fieldsToCheck);
      });
    }
  }
}
