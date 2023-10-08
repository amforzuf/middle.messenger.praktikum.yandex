import { Block } from '../../../utils/Block';
import { tmpl } from './hint.tmpl';
import './style.scss';
import { HintProps } from './types';

export class Hint extends Block<HintProps> {
  constructor(props: HintProps) {
    super(props, 'div');
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
