export const tmpl = `
<div>
  <input
    class="form-input {{class}}"
    id="{{name}}"
    autofocus
    name="{{name}}"
    placeholder="{{placeholder}}"
    type="{{type}}"
    value="{{value}}"
  />
  {{#if validationError}}
        <p class="tooltip">{{validationErrorMessage}}</p>
  {{/if}}
</div>
`;
