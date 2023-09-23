import Handlebars from 'handlebars';

import { tmpl } from './avatar.tmpl';

interface AvatarProps {
  avatarImg?: any;
  username: string;
  class?: string;
}

export const Avatar = (props: AvatarProps) => {
  return Handlebars.compile(tmpl)(props);
};
