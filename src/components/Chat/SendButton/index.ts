import { SendButtonProps } from './types';
import Block from '../../../core/Block';

import { tmpl } from './sendButton.tmpl';

export class SendButton extends Block<SendButtonProps> {
  render() {
    return this.compile(tmpl, this.props);
  }
}
