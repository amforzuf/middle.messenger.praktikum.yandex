import { Block } from '../../../core/Block';
import { tmpl } from './hint.tmpl';
import './style.scss';
import { HintProps } from './types';

export class Hint extends Block<HintProps> {
  render() {
    return this.compile(tmpl, this.props);
  }
}
