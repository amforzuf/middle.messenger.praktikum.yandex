import { Input } from '../../components/Forms/Input';
import { Block } from '../../utils/Block';
import { LoginProps } from './types';
import { tmpl } from './login.tmpl';
import { Hint } from '../../components/Forms/Hint';
import { Button } from '../../components/Forms/Button';
import { handleSubmit } from '../../utils/Validation/validateForm';

export class LoginCompiler extends Block<LoginProps> {
  constructor(props: LoginProps) {
    super(props, 'div');
  }

  init() {
    this.children.formHint = new Hint({
      hintText: 'Нет аккаунта?',
      to: 'registration',
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
        const fieldsToCheck = ['login', 'password'];
        handleSubmit(event, fieldsToCheck);
      });
    }
  }
}
