export const tmpl = `
  <section class="profile">
    <h1>Ваш профиль</h1>
    <div class="profile-top-container">
      {{{profileAvatar}}}
      <div class="change-btns">
        {{{changeAvatarLink}}}
        {{{changePasswordLink}}}
        {{{logoutButton}}}
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
