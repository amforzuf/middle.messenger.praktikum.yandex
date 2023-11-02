import { AuthInput } from '../../components/Forms/AuthInput';
import { Avatar } from '../../components/Avatar';
import { tmpl } from './profile.tmpl';
import { Button } from '../../components/Forms/Button';
import Validation from '../../utils/Validation/Validation';
import AuthController from '../../controllers/AuthController';
import UsersController from '../../controllers/UsersController';
import SubmitPage from '../../utils/Validation/SubmitPage';
import { IUsersProfileData } from '../../api/UsersApi';
import store from '../../core/Store';
import { Link } from '../../components/Link';

export class Profile extends SubmitPage {
  constructor() {
    super((formData) => {
      const data = {
        login: formData.get('login') as string,
        first_name: formData.get('first_name') as string,
        second_name: formData.get('second_name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
      };
      UsersController.profileInfoChange(data as IUsersProfileData);
      AuthController.fetchUser();
    }, 'ProfilePage');
  }

  componentDidMount(): void {
    AuthController.fetchUser();
  }

  init() {
    this.children.profileAvatar = new Avatar({
      username: `${store.getState().user?.first_name} ${store.getState().user?.second_name}`,
      avatarImg: `${store.getState().user?.avatar}`,
      class: 'profile-avatar',
    });

    this.children.changePasswordLink = new Link({
      to: '/change_password',
      linkText: 'Сменить пароль',
    });

    this.children.changeAvatarLink = new Link({
      to: '/change_avatar',
      linkText: 'Сменить аватар',
    });

    this.children.logoutButton = new Button({
      class: 'just-text',
      buttonTitle: 'Выйти',
      events: {
        click: () => {
          AuthController.logout();
        },
      },
    });

    this.children.firstNameInput = new AuthInput({
      value: `${store.getState().user?.first_name}`,
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
      value: `${store.getState().user?.second_name}`,
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
      value: `${store.getState().user?.login}`,
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
      value: `${store.getState().user?.email}`,
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
      value: `${store.getState().user?.phone}`,
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

    this.children.cancelBatton = new Link({
      linkText: 'Назад',
      class: 'back-link',
      to: '/messenger',
    });

    this.children.saveButton = new Button({
      buttonTitle: 'Сохранить',
      type: 'submit',
      class: 'profile-save-button',
    });

    this.props.checkInput = [
      this.children.firstNameInput,
      this.children.secondNameInput,
      this.children.loginInput,
      this.children.emailInput,
      this.children.phoneInput,
    ];
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
