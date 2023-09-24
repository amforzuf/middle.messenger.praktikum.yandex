import Handlebars from 'handlebars';
import { Input } from '../../components/Forms/Input';
import { UserInfo } from '../../components/Chat/UserInfo';
import ChatList from '../../components/Chat/ChatList';
import './style.scss'
import image from '../../static/images/avatar.png'
import { data } from './dataset';

import { tmpl } from './chat.tmpl';

export const Chat = () => {
  return Handlebars.compile(tmpl)({
    userInfo: UserInfo({username: 'Просто Вячеслав', avatarImg: image}),
    search: Input({class: 'searchInput', placeholder: 'Найти', name: 'search'}),
    chatListItems: ChatList(data)
  });
};
