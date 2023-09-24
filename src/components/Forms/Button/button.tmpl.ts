export const tmpl =
`
{{#if to}}
  <button class="formButton {{class}}" name="{{name}}">
    <a href="{{to}}">{{buttonTitle}}</a>
  </button>
{{else}}
  <button class="formButton {{class}}" name="{{name}}">
    <p>{{buttonTitle}}</p>
  </button>
{{/if}}
`;
