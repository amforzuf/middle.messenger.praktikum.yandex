/* eslint-disable no-console */
import { AuthInput } from '../../components/Forms/AuthInput';
import SubmitPage from '../../utils/Validation/SubmitPage';
import AuthController from '../../controllers/AuthController';
import { tmpl } from './signup.tmpl';
import { Hint } from '../../components/Forms/Hint';
import { Button } from '../../components/Forms/Button';
import Validation from '../../utils/Validation/ValidationRules';
import { SignUpData } from '../../api/AuthAPI';

export class SignUp extends SubmitPage {
  constructor() {
    super((formData) => {
      const data = {
        login: formData.get('login') as string,
        password: formData.get('password') as string,
        first_name: formData.get('first_name') as string,
        second_name: formData.get('second_name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
      };
      AuthController.signup(data as SignUpData);
    }, 'SignUpPage');
  }

  init() {
    this.children.formHint = new Hint({
      hintLinkText: 'Вход',
      to: '/',
    });

    this.children.firstNameInput = new AuthInput({
      value: '',
      class: 'form-input',
      name: 'first_name',
      placeholder: 'Имя',
      type: 'text',
      validationError: false,
      validationErrorMessage: '',
      events: {
        blur: () => {
          Validation.isValidName(this.children.firstNameInput as AuthInput);
        },
      },
    });

    this.children.secondNameInput = new AuthInput({
      value: '',
      class: 'form-input',
      name: 'second_name',
      placeholder: 'Фамилия',
      type: 'text',
      validationError: false,
      validationErrorMessage: '',
      events: {
        blur: () => {
          Validation.isValidName(this.children.secondNameInput as AuthInput);
        },
      },
    });

    this.children.loginInput = new AuthInput({
      value: '',
      class: 'form-input',
      name: 'login',
      placeholder: 'Логин',
      type: 'text',
      validationError: false,
      validationErrorMessage: '',
      events: {
        blur: () => {
          Validation.isValidLogin(this.children.loginInput as AuthInput);
        },
      },
    });

    this.children.emailInput = new AuthInput({
      value: '',
      class: 'form-input',
      name: 'email',
      placeholder: 'email',
      type: 'text',
      validationError: false,
      validationErrorMessage: '',
      events: {
        blur: () => {
          Validation.isEmail(this.children.emailInput as AuthInput);
        },
      },
    });

    this.children.phoneInput = new AuthInput({
      value: '',
      class: 'form-input',
      name: 'phone',
      placeholder: 'Номер телефона',
      type: 'text',
      validationError: false,
      validationErrorMessage: '',
      events: {
        blur: () => {
          Validation.isPhone(this.children.phoneInput as AuthInput);
        },
      },
    });

    this.children.passwordInput = new AuthInput({
      value: '',
      class: 'form-input',
      name: 'password',
      placeholder: 'Пароль',
      type: 'password',
      validationError: false,
      validationErrorMessage: '',
      events: {
        blur: () => {
          Validation.isValidPassword(this.children.passwordInput as AuthInput);
        },
      },
    });

    this.children.confirmPasswordInput = new AuthInput({
      value: '',
      class: 'form-input',
      name: 'confirm_password',
      placeholder: 'Подтверждение пароля',
      type: 'password',
      validationError: false,
      validationErrorMessage: '',
      events: {
        blur: () => {
          Validation.arePasswordsEqual(
            this.children.passwordInput as AuthInput,
            this.children.confirmPasswordInput as AuthInput
          );
        },
      },
    });

    this.children.formButton = new Button({
      buttonTitle: 'Зарегистрироваться',
      type: 'submit',
    });

    this.props.checkInput = [
      this.children.firstNameInput,
      this.children.secondNameInput,
      this.children.loginInput,
      this.children.emailInput,
      this.children.phoneInput,
      this.children.passwordInput,
      this.children.confirmPasswordInput,
    ];
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
