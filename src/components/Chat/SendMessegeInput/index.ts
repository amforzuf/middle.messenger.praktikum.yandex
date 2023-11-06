import Block from '../../../core/Block';
import { tmpl } from './sendMessegeInput.tmpl';
import { SendInputProps } from './types';

export class SendMessageInput extends Block<SendInputProps> {
  protected render() {
    return this.compile(tmpl, this.props);
  }
}
