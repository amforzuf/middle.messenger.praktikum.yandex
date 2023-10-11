/* eslint-disable @typescript-eslint/ban-types */
import { Block } from '../../utils/Block';
import './style.scss';

import { tmpl } from './main.tmpl';

type MainProps = {};

export class MainCompiler extends Block<MainProps> {
  constructor(props: MainProps) {
    super(props, 'div');
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
