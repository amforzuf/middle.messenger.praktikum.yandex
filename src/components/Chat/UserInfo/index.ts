import { tmpl } from './userInfo.tmpl';
import './style.scss';
import Block from '../../../utils/Block';
import { UserInfoProps } from './types';

export default class UserInfo extends Block<UserInfoProps> {
  render() {
    return this._compile(tmpl, this._props);
  }
}
