/* eslint-disable no-console */
import { AuthInput } from '../../components/Forms/AuthInput';
import { tmpl } from './signin.tmpl';
import { Hint } from '../../components/Forms/Hint';
import { Button } from '../../components/Forms/Button';
import AuthController from '../../controllers/AuthController';
import SubmitPage from '../../utils/Validation/SubmitPage';
import { SignInData } from '../../api/AuthAPI';
import Validation from '../../utils/Validation/ValidationRules';

export class SignIn extends SubmitPage {
  constructor() {
    super((formData) => {
      const data = {
        login: formData.get('login') as string,
        password: formData.get('password') as string,
      };
      AuthController.signin(data as SignInData);
    }, 'SignInPage');
  }

  init() {
    this.props.title = 'Вход';

    this.children.formHint = new Hint({
      hintLinkText: 'Зарегистрироваться',
      to: '/sign-up',
    });

    this.children.loginInput = new AuthInput({
      value: '',
      class: 'form-input',
      name: 'login',
      placeholder: 'Введите логин',
      type: 'text',
      validationError: false,
      validationErrorMessage: '',
      events: {
        blur: () => {
          Validation.isValidLogin(this.children.loginInput as AuthInput);
        },
      },
    });

    this.children.passwordInput = new AuthInput({
      value: '',
      class: 'form-input',
      name: 'password',
      placeholder: 'Введите пароль',
      type: 'password',
      validationError: false,
      validationErrorMessage: '',
      events: {
        blur: () => {
          Validation.isValidPassword(this.children.passwordInput as AuthInput);
        },
      },
    });

    this.children.formButton = new Button({
      buttonTitle: 'Войти',
      type: 'submit',
    });

    this.props.checkInput = [this.children.loginInput, this.children.passwordInput];
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
