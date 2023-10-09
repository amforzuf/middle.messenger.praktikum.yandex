import { Input } from '../../components/Forms/Input';
import { Block } from '../../utils/Block';
import Avatar from '../../components/Avatar';
import { tmpl } from './profile.tmpl';
import { Button } from '../../components/Forms/Button';
import { handleSubmit } from '../../utils/Validation/validateForm';
import avataerImg from '../../static/images/avatar.png';
import { userData } from './userData';

export class ProfileCompiler extends Block {
  constructor() {
    super({}, 'div');
  }

  init() {
    this.children.profileAvatar = new Avatar({
      username: 'Просто Вячеслав',
      avatarImg: avataerImg,
      class: 'profile-avatar',
    });

    this.children.firstNameInput = new Input({
      value: '',
      class: 'form-input',
      name: 'first_name',
      id: 'first_name',
      placeholder: userData.firstName,
      type: 'text',
      required: true,
      isValid: true,
    });

    this.children.secondNameInput = new Input({
      value: '',
      class: 'form-input',
      name: 'second_name',
      id: 'second_name',
      placeholder: userData.secondName,
      type: 'text',
      required: true,
      isValid: true,
    });

    this.children.loginInput = new Input({
      value: '',
      class: 'form-input',
      name: 'login',
      id: 'login',
      placeholder: userData.login,
      type: 'text',
      required: true,
      isValid: true,
    });

    this.children.emailInput = new Input({
      value: '',
      class: 'form-input',
      name: 'email',
      id: 'email',
      placeholder: userData.email,
      type: 'text',
      required: true,
      isValid: true,
    });

    this.children.phoneInput = new Input({
      value: '',
      class: 'form-input',
      name: 'phone',
      id: 'phone',
      placeholder: userData.phone,
      type: 'text',
      required: true,
      isValid: true,
    });

    this.children.cancelBatton = new Button({
      buttonTitle: 'Отменить',
      type: 'a',
      class: 'profile-cancel-button',
      to: 'chat',
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
        const fieldsToCheck = ['login', 'phone', 'first_name', 'second_name', 'email'];
        handleSubmit(event, fieldsToCheck);
      });
    }
  }
}
