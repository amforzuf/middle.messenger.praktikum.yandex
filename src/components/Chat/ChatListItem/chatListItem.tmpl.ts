export const tmpl = `
  <div class="chatListItem">
    <div class='userInfoAvatar'>
      {{#if imgSrc}}
        <img src="{{imgSrc}}" alt=""/>
      {{else}}
        <div class='noAvatar'>
          <p>{{letters}}</p>
        </div>
      {{/if}}
    </div>
    <div class='chatInfo'>
      <div class='chatInfoMeta'>
        <p class="addressee">{{addressee}}</p>
        <p class="date">{{date}}</p>
      </div>
      <div class='chatInfoData'>
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
`;
