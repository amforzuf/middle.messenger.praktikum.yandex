/* eslint-disable object-shorthand */
import { tmpl } from './userInfo.tmpl';
import { Avatar } from '../../Avatar';
import './style.scss';
import Block from '../../../core/Block';
import store from '../../../core/Store';
import { Link } from '../../Link';

export default class UserInfo extends Block {
  init() {
    this.children.avatar = new Avatar({
      username: `${store.getState().user?.first_name} ${store.getState().user?.second_name}`,
      avatarImg: `${store.getState().user?.avatar}`,
      class: 'user-info-avatar',
    });
    this.children.profileLink = new Link({
      to: '/profile',
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
