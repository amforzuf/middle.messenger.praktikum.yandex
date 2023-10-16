import { AvatarProps } from './types';
import { Block } from '../../utils/Block';

import tmpl from './avatar.tmpl';

export default class Avatar extends Block<AvatarProps> {
  render() {
    return this.compile(tmpl, this.props);
  }
}
