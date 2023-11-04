import moment from 'moment';
import Handlebars from 'handlebars';

Handlebars.registerHelper('lastMessage', (array) => {
  if (array && array.length > 0) {
    return array[array.length - 1].message;
  }
  return '';
});

Handlebars.registerHelper('lastItemDate', (array) => {
  if (array && array.length > 0) {
    return moment(new Date(array[array.length - 1].date)).format('L');
  }

  return '';
});

Handlebars.registerHelper('ifIdsEqual', (id, opts) => {
  const idActive = window.location.pathname.slice(1);
  if (idActive === id) {
    return opts.fn('background-color: #A8D8EA');
  }

  return opts.inverse({});
});

Handlebars.registerHelper('ifLastPerson', (array, opts) => {
  if (array && array.length > 0) {
    if (array[array.length - 1].author !== 'Вы') {
      return opts.fn(array[array.length - 1].message);
    }

    return opts.inverse(array[array.length - 1].message);
  }

  return '';
});

export const tmpl = `
  <div {{#ifIdsEqual chat.id}} class="chat-list-item active" {{else}} class="chat-list-item" {{/ifIdsEqual}} >
    <div class='user-info-avatar'>
      {{#if chat.avatar}}
        <img src="https://ya-praktikum.tech/api/v2/resources{{chat.avatar}}" alt=""/>
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
          <p class="date">{{date}}</p>
        {{/if}}
      </div>
      <div class='chat-info-data'>
        {{#ifLastPerson chat.last_message.content}}
          <p class="messege">{{chat.last_message.content}}</p>
        {{else}}
          <p class="you">Вы{{you}}</p>
          <p class="messege">{{chat.last_message.content}}</p>
        {{/ifLastPerson}}
      </div>
    </div>
    {{#if chat.unread_count}}
      <div class='counter'><p>{{chat.unread_count}}</p></div>
    {{/if}}
  </div>
`;

// export const tmpl = `

//     <div class='user-info-avatar'>
//       {{#if chat.avatar}}
//         <img src="https://ya-praktikum.tech/api/v2/resources{{chat.avatar}}" alt=""/>
//       {{else}}
//         <div class='no-avatar'>
//           <p>:)</p>
//         </div>
//       {{/if}}
//     </div>

// `;
