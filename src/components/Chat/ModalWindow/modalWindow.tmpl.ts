export const tmpl = `
<div class='modal-container {{class}}' id="modal-window-{{modalFormId}}">
  <div" class="modal-window">
    <div class='modal-header'>
      <h3 class='modal-title'>{{{modalTitle}}}</h3>
      {{{closeButton}}}
    </div>
    <form class='modal-form'>
      {{{modalInput}}}
      {{{submitButton}}}
      {{{error}}}
    </form>
  </div>
<div>
`;
