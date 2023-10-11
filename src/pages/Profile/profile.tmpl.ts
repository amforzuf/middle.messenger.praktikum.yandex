export const tmpl = `
  <section class="profile">
    <h1>Ваш профиль</h1>
    <div class="profile-top-container">
      {{{profileAvatar}}}
      <div class="change-btns">
        <p>Изменить аватарку</p>
        <a id='changePasswordButton' href="change_password">Изменить пароль</a>
        <a href="login">Выйти</a>
      </div>
    </div>
    <form>
      {{{firstNameInput}}}
      {{{secondNameInput}}}
      {{{loginInput}}}
      {{{emailInput}}}
      {{{phoneInput}}}
      <div class="save-container">
        {{{saveButton}}}
        {{{cancelBatton}}}
      </div>
    </form>

    {{{popupPassword}}}
  </section>
`;
