export const tmpl = `
    <div class='chat-page'>
      <div class="chat-list">
        {{{userInfo}}}
        {{{search}}}
        <div class='chat-list'>
          {{#each chatListItems}}
            <div class="chat-list-item">
              <div class='user-info-avatar'>
                {{#if imgSrc}}
                  <img src="{{imgSrc}}" alt=""/>
                {{else}}
                  <div class='no-avatar'>
                    <p>{{letters}}</p>
                  </div>
                {{/if}}
              </div>
              <div class='chat-info'>
                <div class='chat-info-meta'>
                  <p class="addressee">{{addressee}}</p>
                  <p class="date">{{date}}</p>
                </div>
                <div class='chat-info-data'>
                  {{#if you}}
                    <p class="you">Вы{{you}}</p>
                    <p class="messege">{{messege}}</p>
                  {{else}}
                    <p class="messege">{{messege}}</p>
                  {{/if}}
                </div>
              </div>
              {{#if counter}}
                <div class='counter'><p>{{counter}}</p></div>
              {{/if}}
            </div>
          {{/each}}
        </div>
      </div>
      {{#if id}}
      <div class="chat-window">
        {{#each chatListItems}}
          <div class='chat-window-top'>
            <p>{{chatAdresse}}</p>
          </div>
          <div class='chat-window-center'>
            {{#each chatDate}}
              <div class='chat-date'>
                <p>{{chatDateItem}}</p>
              </div>
              {{#if myMessages}}
                <div class='right-message'>
                </div>
              {{else}}
                <p class="messege">{{messege}}</p>
              {{/if}}
            {{/each}}



          </div>
          {{#if read}}
            <div class='counter'><p>{{counter}}</p></div>
          {{/if}}
        {{/each}}
      </div>
      {{else}}
      <div class="chat-window">
        <div class="no-addressees">
          <h1>Выберете чат и начните общение</h1>
        </div>
      </div>
      {{/if}}
    </div>
`;
