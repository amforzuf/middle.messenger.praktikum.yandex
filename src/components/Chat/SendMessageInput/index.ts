import Block from '../../../core/Block';
import { tmpl } from './sendMessageInput.tmpl';
import { SendInputProps } from './types';

export class SendMessageInput extends Block<SendInputProps> {
  public constructor({ name, isAutofocus = false, events = {}, value = '' }: SendInputProps) {
    const props = {
      name,
      isAutofocus,
      events,
      value,
    };
    super(props);
  }

  public get value(): string {
    return this.element?.querySelector('input')?.value ?? '';
  }

  public get name(): string {
    return this.props.name;
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
