import { IconButtonProps } from './types';
import Block from '../../../core/Block';
import './style.scss';

import { tmpl } from './IconButton.tmpl';

export class IconButton extends Block<IconButtonProps> {
  render() {
    return this.compile(tmpl, this.props);
  }
}
