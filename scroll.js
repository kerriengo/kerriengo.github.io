// ✎ HOW TO EDIT THIS FILE (you rarely need to)
//   This adds two gentle scroll effects: a thin amber line under the top bar shows how far down you are,
//   and the footer photo drifts slowly.
//   To turn ALL of it off: in style.css, search MY SETTINGS and set --my-scroll to off.
//   Look for lines marked  ✎ EDIT  to change speed or strength.
(function () {
  var root = document.documentElement;
  var setting = getComputedStyle(root).getPropertyValue('--my-scroll').trim();
  var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (setting === 'off' || calm) return;

  // 1. Reading-progress line under the top bar
  var bar = document.createElement('div');
  bar.className = 'read-line';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);

  // 2. Footer photo drifts slowly (parallax)
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
