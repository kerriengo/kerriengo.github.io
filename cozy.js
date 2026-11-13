// ✎ HOW TO EDIT THIS FILE (you rarely need to)
//   This adds the cozy coffee-shop touches: the "now serving" line, the little cup in the sidebar,
//   and the "surprise me" link. Look for lines marked  ✎ EDIT  to change the words.
//   Change ONLY the words inside the quote marks. Save with Cmd+S.
//   To turn ALL of it off: delete the cozy.js script line at the bottom of a page, or set --my-cozy: none in style.css.
(function () {
  var script = document.currentScript || document.querySelector('script[src$="cozy.js"]');
  var base = script && script.src ? script.src.replace(/cozy\.js.*$/, '') : '';

  // ✎ EDIT the greetings below (morning, afternoon, evening, late night)
  var greetings = [
    'fresh brew, good morning',
    'afternoon refill, welcome in',
    'evening cup, come on in',
    'late-night pour, cozy hours'
  ];
  var h = new Date().getHours();
  var greet = h >= 5 && h < 12 ? greetings[0] : h < 17 ? greetings[1] : h < 22 ? greetings[2] : greetings[3];

  // ✎ EDIT the cup's little sayings below. One shows each time you click the cup.
  var sayings = [
    'one sugar?',
    'oat milk, obviously',
    'refills are free',
    'pull up a chair',
    'the good table is by the window',
    'extra foam, always'
  ];

  var intro = document.querySelector('.intro');
  if (intro) {
    var chip = document.createElement('p');
    chip.className = 'cafe-chip';
    chip.innerHTML = '<span class="cafe-dot" aria-hidden="true"></span>now serving &middot; ' + greet +
      ' &nbsp;&middot;&nbsp; <a class="ul" href="#" id="surprise">surprise me</a>';
    intro.parentNode.insertBefore(chip, intro);
    // ✎ EDIT the list of pages "surprise me" can open
    var pages = ['q1-feel-lighter', 'q2-with-you', 'q3-we-believe-in-better', 'q4-holiday-campaign',
      'y25-september-tentpole', 'social-impact', 'y25-seasonal-messaging', 'y25-culture-and-trends', 'photography'];
    document.getElementById('surprise').addEventListener('click', function (e) {
      e.preventDefault();
      window.location.href = base + 'work/' + pages[Math.floor(Math.random() * pages.length)] + '.html';
    });
  }

  var side = document.querySelector('.side');
  if (side) {
    var cup = document.createElement('button');
    cup.type = 'button';
    cup.className = 'cup';
    cup.setAttribute('aria-label', 'A cup of coffee. Click for a little note.');
    cup.innerHTML = '<span class="steam" aria-hidden="true"><i></i><i></i><i></i></span>' +
      '<svg viewBox="0 0 64 48" aria-hidden="true"><path d="M8 14h38v16a14 14 0 0 1-14 14H22A14 14 0 0 1 8 30z"/><path d="M46 18h5a6 6 0 0 1 0 12h-5"/><path d="M4 46h46"/></svg>' +
      '<span class="cup-note" role="status" aria-live="polite"></span>';
    side.appendChild(cup);
    var note = cup.querySelector('.cup-note'), n = 0;
    cup.addEventListener('click', function () {
      note.textContent = sayings[n % sayings.length];
      n += 1;
      cup.classList.add('pour');
      setTimeout(function () { cup.classList.remove('pour'); }, 900);
    });
  }
})();
