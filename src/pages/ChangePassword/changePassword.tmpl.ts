import Handlebars from 'handlebars';

export const tmpl = `
  <section class="profile">
    <h1>Смена пароля</h1>
    <div class="profileTopContainer">
      {{{profileAvatar}}}
    </div>
    <form>
      {{{oldPasswordInput}}}
      {{{newPasswordInput}}}
      {{{newPasswordConfirmInput}}}
      <div class="saveContainer">
        {{{saveButton}}}
        {{{cancelBatton}}}
      </div>
    </form>

  </section>
`;
