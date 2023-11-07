import Block from '../../../core/Block';
import { SendButton } from '../SendButton';
import { SendMessageInput } from '../SendMessageInput';
import { tmpl } from './sendForm.tmpl';
import { SendFormProps } from './types';
import './style.scss';

export class SendForm extends Block<SendFormProps> {
  constructor({ events = {} }: SendFormProps) {
    const props = {
      events,
    };
    super(props);
  }

  init() {
    this.children.messageInput = new SendMessageInput({
      name: 'message',
      isAutofocus: true,
    });

    this.children.sendBtn = new SendButton({
      class: 'send-btn',
    });
  }

  public getValue(): { message: string } | null {
    if (this.children.messageInput) {
      const input = this.children.messageInput as SendMessageInput;
      const object = {
        message: input.value,
      };
      return object;
    }
    return null;
  }

  public clearForm(): void {
    if (this.children.messageInput instanceof SendMessageInput) {
      const input = this.children.messageInput as SendMessageInput;
      const inputElement = input.element?.querySelector('input');
      if (inputElement) {
        inputElement.value = '';
      }
    }
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
