export const tmpl = `
{{#if to}}
  <button class="form-button {{class}}" name="{{name}}">
    <a href="{{to}}">{{buttonTitle}}</a>
  </button>
{{else}}
  <button class="form-button {{class}}" name="{{name}}">
    <p>{{buttonTitle}}</p>
  </button>
{{/if}}
`;
