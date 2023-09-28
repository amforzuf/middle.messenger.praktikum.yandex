import Handlebars from 'handlebars';
import { tmpl } from './userInfo.tmpl';
import './style.scss';

interface UserInfoProps {
  avatarImg: string;
  username: string;
}

export const UserInfo = (props: UserInfoProps) => {
  return Handlebars.compile(tmpl)(props);
};
