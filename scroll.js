// ✎ HOW TO EDIT THIS FILE (you rarely need to)
//   This adds three gentle scroll effects: tiles and boxes fade up as you scroll to them,
//   a thin amber line under the top bar shows how far down you are, and the footer photo drifts slowly.
//   To turn ALL of it off: in style.css, search MY SETTINGS and set --my-scroll to off.
//   Look for lines marked  ✎ EDIT  to change speed or strength.
(function () {
  var root = document.documentElement;
  var setting = getComputedStyle(root).getPropertyValue('--my-scroll').trim();
  var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (setting === 'off' || calm) return;

  // 1. Fade up as things scroll into view
  // ✎ EDIT the list below to choose what fades in (tiles, boxes, headings, photos)
  var targets = document.querySelectorAll('.main .tile, .main .box, .main .head, .main .more-row, .frame');
  if ('IntersectionObserver' in window) {
    var seen = 0;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        // ✎ EDIT 70 to change the delay between neighbours (milliseconds)
        el.style.transitionDelay = (seen % 4) * 70 + 'ms';
        el.classList.add('in-view');
        el.addEventListener('transitionend', function done(e) {
          if (e.propertyName !== 'opacity') return;
          el.style.transitionDelay = '';
          el.classList.remove('reveal', 'in-view');
          el.removeEventListener('transitionend', done);
        });
        seen += 1;
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    targets.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
  }

  // 2. Reading-progress line under the top bar
  var bar = document.createElement('div');
  bar.className = 'read-line';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);

  // 3. Footer photo drifts slowly (parallax)
  var foot = document.querySelector('.foot-photo img');

  var ticking = false;
  function update() {
    var max = root.scrollHeight - window.innerHeight;
    bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, window.scrollY / max) : 0) + ')';
    if (foot) {
      var r = foot.parentNode.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        // ✎ EDIT 0.12 to make the drift stronger (bigger) or softer (smaller)
        foot.style.transform = 'translateY(' + Math.round((r.top - window.innerHeight / 2) * -0.12) + 'px) scale(1.12)';
      }
    }
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
