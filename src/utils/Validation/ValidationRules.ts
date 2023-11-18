import { AuthInput } from '../../components/Forms/AuthInput';

export class Validation {
  public static isEmptyInput(_input: AuthInput): boolean {
    const isEmpty: boolean = this.isEmptyInputWithoutRender(_input);
    if (!isEmpty) {
      _input.removeError();
    } else {
      _input.setError('Поле не должно быть пустым');
    }
    return isEmpty;
  }

  public static isEmptyInputWithoutRender(_input: AuthInput): boolean {
    return (
      _input.getValue() === '' || _input.getValue() === undefined || _input.getValue() === null
    );
  }

  public static arePasswordsEqual(_input: AuthInput, _secondInput: AuthInput): void {
    const isPasswordFirst = this.isEmptyInput(_input);
    const isPasswordSecond = this.isEmptyInput(_secondInput);
    const isEmpty = isPasswordFirst || isPasswordSecond;
    if (!isEmpty) {
      if (_input.getValue() === _secondInput.getValue()) {
        _input.removeError();
        _secondInput.removeError();
      } else {
        _secondInput.setError('Пароли не совпадают');
      }
    }
  }

  public static isValidName(_input: AuthInput): void {
    const nameRegex = /^[A-Za-zА-Яа-я][A-Za-zА-Яа-я-]*$/;
    const res: boolean = nameRegex.test(_input.getValue());
    if (res) {
      _input.removeError();
    } else {
      _input.setError(
        'Первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов'
      );
    }
  }

  public static isValidLogin(_input: AuthInput): void {
    const loginRegex = /^(?!^\d+$)[A-Za-z0-9_-]{3,20}$/;
    const res: boolean = loginRegex.test(_input.getValue());
    if (res) {
      _input.removeError();
    } else {
      _input.setError(
        'От 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов'
      );
    }
  }

  public static isEmail(_input: AuthInput): void {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const res: boolean = emailRegex.test(_input.getValue());
    if (res) {
      _input.removeError();
    } else {
      _input.setError('Неправильный формат email');
    }
  }

  public static isValidPassword(_input: AuthInput): void {
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,40}$/;
    const res: boolean = passwordRegex.test(_input.getValue());
    if (res) {
      _input.removeError();
    } else {
      _input.setError('От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра');
    }
  }

  public static isPhone(_input: AuthInput): void {
    const phoneRegex = /^\+?\d{10,15}$/;
    const res: boolean = phoneRegex.test(_input.getValue());
    if (res) {
      _input.removeError();
    } else {
      _input.setError('От 10 до 15 символов, состоит из цифр, может начинается с плюса');
    }
  }

  public static isNonEmptyMessage(_input: AuthInput): boolean {
    const isEmpty: boolean = this.isEmptyInput(_input);
    if (!isEmpty) {
      _input.removeError();
    } else {
      _input.setError('Поле не должно быть пустым');
    }
    return isEmpty;
  }
}

export default Validation;
