import Block from '../../../core/Block';
import { tmpl } from './messages.tmpl';
import { MessagesProps } from './types';
import './style.scss';

export class Messages extends Block<MessagesProps> {
  render() {
    return this.compile(tmpl, this.props);
  }
}
