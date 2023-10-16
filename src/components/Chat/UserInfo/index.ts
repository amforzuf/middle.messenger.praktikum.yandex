/* eslint-disable object-shorthand */
import { tmpl } from './userInfo.tmpl';
import Avatar from '../../Avatar';
import './style.scss';
import { Block } from '../../../utils/Block';
import avatarImg from '../../../static/images/avatar.png';

export default class UserInfo extends Block {
  constructor() {
    super({}, 'div');
  }

  init() {
    this.children.avatar = new Avatar({
      username: 'Просто Вячеслав',
      avatarImg: avatarImg,
      class: 'user-info-avatar',
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
