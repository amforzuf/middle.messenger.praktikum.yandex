import { AuthInput } from '../../components/Forms/AuthInput';

export class Validation {
  public static isEmptyInput(_input: AuthInput): boolean {
    const isEmpty: boolean = this.isEmptyInputWithoutRender(_input);
    if (!isEmpty) {
      _input.removeError();
    } else {
      _input.setError('Input cannot be empty');
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
      _input.setError('Invalid name format');
    }
  }

  public static isValidLogin(_input: AuthInput): void {
    const loginRegex = /^(?!^\d+$)[A-Za-z0-9_-]{3,20}$/;
    const res: boolean = loginRegex.test(_input.getValue());
    if (res) {
      _input.removeError();
    } else {
      _input.setError('Invalid login format');
    }
  }

  public static isEmail(_input: AuthInput): void {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const res: boolean = emailRegex.test(_input.getValue());
    if (res) {
      _input.removeError();
    } else {
      _input.setError('Invalid email format');
    }
  }

  public static isValidPassword(_input: AuthInput): void {
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,40}$/;
    const res: boolean = passwordRegex.test(_input.getValue());
    if (res) {
      _input.removeError();
    } else {
      _input.setError('Invalid password format');
    }
  }

  public static isPhone(_input: AuthInput): void {
    const phoneRegex = /^\+?\d{10,15}$/;
    const res: boolean = phoneRegex.test(_input.getValue());
    if (res) {
      _input.removeError();
    } else {
      _input.setError('Invalid phone format');
    }
  }

  public static isNonEmptyMessage(_input: AuthInput): boolean {
    const isEmpty: boolean = this.isEmptyInput(_input);
    if (!isEmpty) {
      _input.removeError();
    } else {
      _input.setError('Message cannot be empty');
    }
    return isEmpty;
  }
}

export default Validation;
