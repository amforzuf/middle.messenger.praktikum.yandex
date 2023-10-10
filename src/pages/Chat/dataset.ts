/* eslint-disable @typescript-eslint/ban-types */
interface ChatLitsItems {
  // eslint-disable-next-line no-use-before-define
  items: ChatListProps[];
}
interface ChatListProps {
  id: number;
  imgSrc?: string;
  letters?: string;
  addressee: string;
  date: string;
  you?: string;
  messege: string;
  counter?: string;
  onClick?: Function;
}

export const dataSet: ChatLitsItems = {
  items: [
    {
      id: 1,
      letters: 'ОМ',
      addressee: 'Олег Монгол',
      date: '14:40',
      messege: 'Все-таки соска твоя чики-пики',
      you: ':',
    },
    {
      id: 2,
      letters: 'ЛЯ',
      addressee: 'Леонид Якуб',
      date: 'Вс',
      messege: 'Лавандос пачка папирос да я ...',
      counter: '12',
    },
    {
      id: 3,
      letters: 'ТЯ',
      addressee: 'Тренажер ЯндексПрактикум',
      date: 'Ср',
      messege: 'Хватит уже издеваться',
      you: ':',
    },
    {
      id: 4,
      letters: 'ДБ',
      addressee: 'Джо Байданов',
      date: '17.09.2023',
      messege: 'Спасибо, что поднял',
      counter: '5',
    },
  ],
};
