import { tmpl } from './chat.tmpl';
import Block from '../../utils/Block';
import { ChatProps } from './types';

export default class ChatCompiler extends Block<ChatProps> {
  render() {
    return this._compile(tmpl, this._props);
  }
}
