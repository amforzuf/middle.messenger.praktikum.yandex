import { Input } from '../../components/Forms/Input';
import { Block } from '../../utils/Block';
import { RegistrationProps } from './types';
import { tmpl } from './registration.tmpl';
import { Hint } from '../../components/Forms/Hint';
import { Button } from '../../components/Forms/Button';
import { handleSubmit } from '../../utils/Validation/validateForm';

export class RegistrationCompiler extends Block<RegistrationProps> {
  constructor(props: RegistrationProps) {
    super(props, 'div');
  }

  init() {
    this.children.formHint = new Hint({
      hintText: 'Уже есть аккаунт?',
      to: 'login',
      hintLinkText: 'Войти',
      name: 'Sign in',
    });

    this.children.firstNameInput = new Input({
      value: '',
      class: 'form-input',
      name: 'first_name',
      id: 'first_name',
      placeholder: 'Имя',
      type: 'text',
      required: true,
      isValid: true,
    });

    this.children.secondNameInput = new Input({
      value: '',
      class: 'form-input',
      name: 'second_name',
      id: 'second_name',
      placeholder: 'Фамилия',
      type: 'text',
      required: true,
      isValid: true,
    });

    this.children.loginInput = new Input({
      value: '',
      class: 'form-input',
      name: 'login',
      id: 'login',
      placeholder: 'Логин',
      type: 'text',
      required: true,
      isValid: true,
    });

    this.children.emailInput = new Input({
      value: '',
      class: 'form-input',
      name: 'email',
      id: 'email',
      placeholder: 'email',
      type: 'text',
      required: true,
      isValid: true,
    });

    this.children.passwordInput = new Input({
      value: '',
      class: 'form-input',
      name: 'password',
      id: 'password',
      placeholder: 'Пароль',
      type: 'password',
      required: true,
      isValid: true,
    });

    this.children.confirmPasswordInput = new Input({
      value: '',
      class: 'form-input',
      name: 'confirm_password',
      id: 'confirm_password',
      placeholder: 'Подтверждение пароля',
      type: 'password',
      required: true,
      isValid: true,
    });

    this.children.formButton = new Button({
      buttonTitle: 'Зарегистрироваться',
      type: 'submit',
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
        const fieldsToCheck = ['login', 'password', 'second_name', 'first_name', 'email'];
        handleSubmit(event, fieldsToCheck);
      });
    }
  }
}
