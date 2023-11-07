/* eslint-disable func-names */
import Handlebars from 'handlebars';
import moment from 'moment';
import store from '../../../core/Store';

Handlebars.registerHelper('formatDate', function (date) {
  const momentDate = moment(date);
  const today = moment().startOf('day');

  if (momentDate.isSame(today, 'day')) {
    return momentDate.format('HH:mm');
  }
  return momentDate.format('D MMM, HH:mm');
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
Handlebars.registerHelper('ifYou', function (this: any, messageUserId, options) {
  const userId = store.getState().user?.id;
  if (userId === messageUserId) {
    return options.fn(this);
  }
  return options.inverse(this);
});

export const tmpl = `
  <div id="{{id}}" class="chat-window-center">
      {{#each messages}}
        {{#if this.user_id}}
          {{#ifYou this.user_id}}
            <div class='message-container right-message'>
              <div class='message my-message'>
                <p class="chat-message">{{this.content}}</p>
                <div class='message-time'>
                  <p>{{formatDate this.time}}</p>
                </div>
                {{#if this.is_read}}
                  <div class='read'>
                    <div class='read-icon'></div>
                  </div>
                {{else}}
                  <div class='unread'>
                    <div class='unread-icon'></div>
                  </div>
                {{/if}}
              </div>
            </div>
          {{else}}
            <div class='message-container'>
              <div class='message addressee-message'>
                <p class="chat-message">{{this.content}}</p>
                <div class='message-time'>
                  <p>{{formatDate this.time}}</p>
                </div>
                {{#if this.is_read}}
                  <div class='read'>
                    <div class='read-icon'></div>
                  </div>
                {{else}}
                  <div class='unread'>
                    <div class='unread-icon'></div>
                  </div>
                {{/if}}
              </div>
            </div>
          {{/ifYou}}

        {{/if}}
      {{/each}}
  </div>`;
