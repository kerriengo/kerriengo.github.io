// ✎ HOW TO EDIT THIS FILE (you rarely need to)
//   This sends your contact forms. Look for lines marked  ✎ EDIT  to change the messages people see.
//   Change ONLY the words inside the quote marks. Save with Cmd+S.
// Sends the contact form without leaving the page.
document.querySelectorAll('.foot-form, .contact-form').forEach(function (form) {
  var note = form.querySelector('.form-note');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (form.action.indexOf('YOUR_FORM_ID') !== -1) {
      note.textContent = 'the form is not connected yet. add your Formspree ID first.'; // ✎ EDIT
      return;
    }
    var btn = form.querySelector('button');
    btn.disabled = true;
    note.textContent = 'sending...'; // ✎ EDIT
    fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
      .then(function (r) {
        if (r.ok) { form.reset(); note.textContent = "sent! i'll write back soon ✦"; }
        // ✎ EDIT the words inside the quote marks on the next line: shown if sending fails
        else { note.textContent = 'something went wrong. try again or email me.'; }
      })
      // ✎ EDIT the words inside the quote marks on the next line: shown if sending fails
      .catch(function () { note.textContent = 'something went wrong. try again or email me.'; })
      .finally(function () { btn.disabled = false; });
  });
});
