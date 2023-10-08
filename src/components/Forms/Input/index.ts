import { tmpl } from './input.tmpl';
import { InputProps } from './types';
import * as Validation from '../../../utils/Validation/validation';
import { Tooltip } from '../../Tooltip';
import './style.scss';
import { Block } from '../../../utils/Block';

export class Input extends Block<InputProps> {
  private tooltip: Tooltip | null = null;

  private isValid: boolean = false;

  private inputElement!: HTMLInputElement;

  constructor(props: InputProps) {
    super(props, 'div');
    this.setupEventListeners();
  }

  private setupEventListeners() {
    this.inputElement = this.element!.querySelector('.form-input')!;
    this.inputElement.addEventListener('blur', this.handleBlur.bind(this));
  }

  private handleBlur() {
    const { value, name } = this.inputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const validators: { [key: string]: (value: string) => boolean } = {
      first_name: Validation.validateFirstName,
      second_name: Validation.validateFirstName,
      login: Validation.validateLogin,
      email: Validation.validateEmail,
      password: Validation.validatePassword,
      confirm_password: (value: string) => {
        return value === passwordInput.value;
      },
      phone: Validation.validatePhone,
    };

    const errorMessage: { [key: string]: string } = {
      first_name: 'Имя невалидно',
      second_name: 'Фимилия невалидна',
      login: 'Логин невалиден',
      email: 'email невалиден',
      password: 'Пароль невалиден',
      phone: 'Номер телефона невалиден',
      confirm_password: 'Пароли не совпадают',
    };

    if (validators[name](value)) {
      this.isValid = true;
      this.hideTooltip();
    } else {
      this.isValid = false;
      this.showTooltip(errorMessage[name]);
    }
  }

  private showTooltip(errorMessage: string) {
    this.hideTooltip();
    this.tooltip = new Tooltip(errorMessage);
    const content = this.tooltip.getContent();
    if (this.element && this.tooltip && content) {
      this.element.appendChild(content);
    }
  }

  private hideTooltip() {
    if (this.tooltip) {
      const content = this.tooltip.getContent();
      if (content && content.parentNode) {
        content.parentNode.removeChild(content);
      }
      this.tooltip = null;
    }
  }

  render() {
    return this.compile(tmpl, { ...this.props, isValid: this.isValid });
  }
}
