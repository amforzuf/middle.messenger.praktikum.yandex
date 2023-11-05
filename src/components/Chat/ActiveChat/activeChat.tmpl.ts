export const tmpl = `
  <div class="chat-window">
    {{#if activeChat}}
      <div class="chat-window-top">
          <div class="addressee-top-container">
            <p>{{activeChat.title}}</p>
            <div class="top-icons">
              {{{addMemberButton}}}
              {{{deleteMemberButton}}}
              {{{deleteChatButton}}}
            </div>
          </div>
        </div>
        <div class="chat-window-center">
          {{{messagesArea}}}
        </div>
        <div class="chat-window-bottom">
          <div class='chat-window-bottom-wrapper'>
            <div class='media-add'>
              <div class='media-add-icon'></div>
            </div>
            <form class='message-form'>
              {{{messageInput}}}
              <button class='send-btn' type='submit'>
                <div class='send-btn-img'></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    {{else}}
      <div class="no-addressees">
        <h1>Выберете чат и начните общение</h1>
      </div>
    {{/if}}
  </div>
`;
