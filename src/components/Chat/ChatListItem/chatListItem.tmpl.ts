/* eslint-disable func-names */
import moment from 'moment';
import Handlebars from 'handlebars';
import store from '../../../core/Store';

Handlebars.registerHelper('formatDate', function (date) {
  const momentDate = moment(date);
  const today = moment().startOf('day');

  if (momentDate.isSame(today, 'day')) {
    return momentDate.format('HH:mm');
  }
  return momentDate.format('D MMM, HH:mm');
});

Handlebars.registerHelper('formatMessage', function (messege: string) {
  const formatMessege = messege;
  if (formatMessege.length > 20) {
    return `${formatMessege.substring(0, 20)}...`;
  }
  return formatMessege;
});

Handlebars.registerHelper('selectedChat', function (chatId) {
  if (store.getState().selectedChat === chatId) {
    return 'active';
  }
  return null;
});

export const tmpl = `
  <div class='chat-list-item {{selectedChat chat.id}}' id={{chat.id}}>
    <div class='user-info-avatar'>
      {{#if chat.avatar}}
        <div class='no-avatar'>
          <img src="https://ya-praktikum.tech/api/v2/resources{{chat.avatar}}" alt=""/>
        </div>
      {{else}}
        <div class='no-avatar'>
          <p>:)</p>
        </div>
      {{/if}}
    </div>
    <div class='chat-info'>
      <div class='chat-info-meta'>
        <p class="addressee">{{chat.title}}</p>
        {{#if chat.last_message.time}}
          <p class="date">{{formatDate chat.last_message.time}}</p>
        {{/if}}
      </div>
      <div class='chat-info-data'>
        {{#if chat.last_message.content}}
          <p class="you">{{chat.last_message.user.first_name}}:</p>
          <p class="messege">{{formatMessage chat.last_message.content}}</p>
        {{else}}
        {{/if}}
      </div>
    </div>
    {{#if chat.unread_count}}
      <div class='counter'><p>{{chat.unread_count}}</p></div>
    {{/if}}
  </div>
`;
