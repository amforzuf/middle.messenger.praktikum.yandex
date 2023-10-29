import { AvatarProps } from './types';
import Block from '../../core/Block';

import { tmpl } from './avatar.tmpl';

export class Avatar extends Block<AvatarProps> {
  render() {
    return this.compile(tmpl, this.props);
  }
}
