export const tmpl = `
  <section class="profile">
    <h1>Смена пароля</h1>
    <div class="profile-top-container">
      {{{profileAvatar}}}
    </div>
    <form>
      {{{oldPasswordInput}}}
      {{{newPasswordInput}}}
      {{{newPasswordConfirmInput}}}
      <div class="save-container">
        {{{saveButton}}}
        {{{cancelBatton}}}
      </div>
    </form>

  </section>
`;
