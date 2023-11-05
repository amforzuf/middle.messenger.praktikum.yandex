export const tmpl = `
  <section class='login-page'>
    <p class="form-title">Вход</p>
    <form id='login-page' id='form'>
      {{{loginInput}}}
      {{{passwordInput}}}
      {{{formButton}}}
    </form>
    <div class='form-hint'>
      <p class='form-hint-label'>Нет аккаунта?</p>
      {{{formHint}}}
    </div>
  </section>
`;
