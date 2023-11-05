import { AuthInput } from '../../components/Forms/AuthInput';
import { tmpl } from './changePassword.tmpl';
import { Button } from '../../components/Forms/Button';
import Validation from '../../utils/Validation/Validation';
import AuthController from '../../controllers/AuthController';
import UsersController from '../../controllers/UsersController';
import SubmitPage from '../../utils/Validation/SubmitPage';
import { UsersProfilePassword } from '../../api/UsersApi';
import { Link } from '../../components/Link';

export class ChangePassword extends SubmitPage {
  constructor() {
    super((formData) => {
      const data = {
        oldPassword: formData.get('old_password') as string,
        newPassword: formData.get('password_confirm') as string,
      };
      UsersController.profilePasswordChange(data as UsersProfilePassword);
      AuthController.fetchUser();
    }, 'ChangePasswordPage');
  }

  componentDidMount(): void {
    AuthController.fetchUser();
  }

  init() {
    this.children.oldPassword = new AuthInput({
      value: ``,
      class: 'form-input',
      name: 'old_password',
      placeholder: 'Пароль',
      type: 'password',
      validationError: false,
      validationErrorMessage: '',
      events: {
        blur: () => {
          Validation.isValidPassword(this.children.oldPassword as AuthInput);
        },
      },
    });

    this.children.newPassword = new AuthInput({
      value: ``,
      class: 'form-input',
      name: 'password',
      placeholder: 'Новый пароль',
      type: 'password',
      validationError: false,
      validationErrorMessage: '',
      events: {
        blur: () => {
          Validation.isValidPassword(this.children.newPassword as AuthInput);
        },
      },
    });

    this.children.newPasswordConfirm = new AuthInput({
      value: ``,
      class: 'form-input',
      name: 'password_confirm',
      placeholder: 'Подтверждение пароля',
      type: 'password',
      validationError: false,
      validationErrorMessage: '',
      events: {
        blur: () => {
          Validation.arePasswordsEqual(
            this.children.newPassword as AuthInput,
            this.children.newPasswordConfirm as AuthInput
          );
        },
      },
    });

    this.children.cancelBatton = new Link({
      linkText: 'Назад',
      class: 'back-link',
      to: '/profile',
    });

    this.children.saveButton = new Button({
      buttonTitle: 'Сохранить',
      type: 'submit',
      class: 'profile-save-button',
    });

    this.props.checkInput = [
      this.children.oldPassword,
      this.children.newPassword,
      this.children.newPasswordConfirm,
    ];
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
