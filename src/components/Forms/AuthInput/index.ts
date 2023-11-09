import Block from '../../../core/Block';
import { tmpl } from './authInput.tmpl';
import { AuthInputProps } from './types';

export class AuthInput extends Block<AuthInputProps> {
  public getValue() {
    return (this.element as HTMLInputElement).getElementsByTagName('input')[0].value;
  }

  public setValue(value: string) {
    return ((this.element as HTMLInputElement).getElementsByTagName('input')[0].value = value);
  }

  public isValid(): boolean {
    return !this.props.validationError;
  }

  public removeError() {
    if (this.props.validationError) {
      this.props.validationError = false;
    }
  }

  public setError(message: string) {
    if (!this.props.validationError) {
      this.props.validationError = true;
      this.props.validationErrorMessage = message;
    }
  }

  public _addEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      (this.element as HTMLInputElement)
        .getElementsByTagName('input')[0]
        .addEventListener(eventName, events[eventName as keyof typeof events]);
    });
  }

  render() {
    return this.compile(tmpl, { ...this.props });
  }
}
