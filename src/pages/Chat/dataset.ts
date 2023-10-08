/* eslint-disable object-shorthand */
import UserInfo from '../../components/Chat/UserInfo';
import avatarImg from '../../static/images/avatar.png';
import ChatList from '../../components/Chat/ChatList';

interface ChatLitsItems {
  // eslint-disable-next-line no-use-before-define
  items: ChatListProps[];
}
interface ChatListProps {
  imgSrc?: string;
  letters?: string;
  addressee: string;
  date: string;
  you?: string;
  messege: string;
  counter?: string;
}

export const data: ChatLitsItems = {
  items: [
    {
      letters: 'ОМ',
      addressee: 'Олег Монгол',
      date: '14:40',
      messege: 'Все-таки соска твоя чики-пики',
      you: ':',
    },
    {
      letters: 'ЛЯ',
      addressee: 'Леонид Якуб',
      date: 'Вс',
      messege: 'Лавандос пачка папирос да я ...',
      counter: '12',
    },
    {
      letters: 'ТЯ',
      addressee: 'Тренажер ЯндексПрактикум',
      date: 'Ср',
      messege: 'Хватит уже издеваться',
      you: ':',
    },
    {
      letters: 'ДБ',
      addressee: 'Джо Байданов',
      date: '17.09.2023',
      messege: 'Спасибо, что поднял',
      counter: '5',
    },
  ],
};

export const chatList = new ChatList(data);

export const userInfo = new UserInfo('div', {
  avatarImg: avatarImg,
  username: 'Просто Вячеслав',
});
