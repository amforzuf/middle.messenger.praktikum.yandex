export const tmpl = `
  <section class='registration-page'>
    <p class="form-title">Регистрация</p>
    <form id='registration-page' id='form'>
      {{{firstNameInput}}}
      {{{secondNameInput}}}
      {{{loginInput}}}
      {{{emailInput}}}
      {{{phoneInput}}}
      {{{passwordInput}}}
      {{{confirmPasswordInput}}}
      {{{formButton}}}
    </form>
    <div class='form-hint'>
      <p class='form-hint-label'>Уже есть аккаунт?</p>
      {{{formHint}}}
    </div>

  </section>
`;
