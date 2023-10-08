import './style.scss';
import { data, userInfo, chatList } from './dataset';
import ChatCompiler from './chat.compiler';

import { tmpl } from './chat.tmpl';

export const Chat = new ChatCompiler('div', {
  userInfo,
  chatList,
});

export default Chat;
