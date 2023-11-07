export const tmpl = `
  <div>
    <input
      {{#if isAutofocus }} autofocus {{/if}}
      class="form-input chat-input"
      id={{name}}
      placeholder="Напишите сообщение"
      type='{{type}}'
      name={{name}}
      type="text"
      value='{{value}}'
    />
  </div>
`;
