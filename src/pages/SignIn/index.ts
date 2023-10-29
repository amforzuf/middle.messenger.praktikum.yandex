/* eslint-disable no-console */
import { Input } from '../../components/Forms/Input';
import { Block } from '../../core/Block';
import { tmpl } from './signin.tmpl';
import { Hint } from '../../components/Forms/Hint';
import { Button } from '../../components/Forms/Button';
import { handleSubmit } from '../../utils/Validation/validateForm';
import AuthController from '../../controllers/AuthController';

export class SignIn extends Block {
  init() {
    this.props.title = 'Логин';

    this.children.formHint = new Hint({
      hintText: 'Нет аккаунта?',
      to: 'signup',
      hintLinkText: 'Зарегистрироваться',
      name: 'Sign up',
    });

    this.children.loginInput = new Input({
      value: '',
      class: 'form-input',
      name: 'login',
      id: 'login',
      placeholder: 'Введите логин',
      type: 'text',
      required: true,
      isValid: true,
    });

    this.children.passwordInput = new Input({
      value: '',
      class: 'form-input',
      name: 'password',
      id: 'password',
      placeholder: 'Введите пароль',
      type: 'password',
      required: true,
      isValid: true,
    });

    this.children.formButton = new Button({
      buttonTitle: 'Войти',
      type: 'submit',
      events: {
        click: () => this.onSubmit(),
      },
    });
  }

  onSubmit() {
    const values = Object.values(this.children)
      .filter((child) => child instanceof Input)
      .map((child) => [(child as Input).getName(), (child as Input).getValue()]);
    const data = Object.fromEntries(values);
    console.log(data, 'signin data');
    AuthController.signin(data);
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
        const fieldsToCheck = ['login', 'password'];
        handleSubmit(event, fieldsToCheck);
      });
    }
  }
}
