import Handlebars from 'handlebars';

import tmpl from './avatar.tmpl';

interface AvatarProps {
  avatarImg?: unknown;
  username: string;
  class?: string;
}

// eslint-disable-next-line import/prefer-default-export
export const Avatar = (props: AvatarProps) => {
  return Handlebars.compile(tmpl)(props);
};
