// ✎ HOW TO EDIT THIS FILE (you rarely need to)
//   Every doodle on the site is drawn here in ONE style: flat colour, thick cream outline, soft shadow.
//   Doodles: coffee cup (sidebar), heart (footer, click it), camera (About, click it), pencil (Work),
//   paper plane (campaign pages), film canister (Photography), clapperboard (Production).
//   To change a doodle's colours, change the #hex colours inside its drawing below. Save with Cmd+S.
//   To hide all stickers and doodles: in style.css, search MY SETTINGS and set --my-stickers to none.
(function () {
  var O = 'stroke="#fce4c1" stroke-width="5" stroke-linejoin="round" stroke-linecap="round" paint-order="stroke"';
  function svg(vb, inner, cls) {
    return '<svg class="doodle-svg ' + (cls || '') + '" viewBox="' + vb + '" aria-hidden="true" focusable="false">' + inner + '</svg>';
  }

  // ---------- the drawings ----------
  var D = {
    cup: svg('0 0 80 76',
      '<g class="steam-g" fill="none" stroke="#fce4c1" stroke-width="3.5" stroke-linecap="round">' +
        '<path class="st st1" d="M27 18q-5-4 0-8q5-4 0-8"/><path class="st st2" d="M38 18q-5-4 0-8q5-4 0-8"/><path class="st st3" d="M49 18q-5-4 0-8q5-4 0-8"/></g>' +
      '<path d="M60 34h5a8 8 0 0 1 0 16h-5" fill="none" stroke="#fce4c1" stroke-width="12" stroke-linecap="round"/>' +
      '<path d="M60 34h5a8 8 0 0 1 0 16h-5" fill="none" stroke="#b0735d" stroke-width="4.5" stroke-linecap="round"/>' +
      '<g ' + O + '><ellipse cx="37" cy="66" rx="31" ry="6" fill="#d4b491"/>' +
        '<path d="M14 26h46v16a18 18 0 0 1-18 18h-10a18 18 0 0 1-18-18z" fill="#b0735d"/></g>' +
      '<ellipse cx="37" cy="26" rx="23" ry="4.5" fill="#6b4630"/>' +
      '<path d="M37 49c-6-4-8-7-8-9a4 4 0 0 1 8-1a4 4 0 0 1 8 1c0 2-2 5-8 9z" fill="#fce4c1"/>', 'cup-svg'),
    heart: svg('0 0 48 48',
      '<path d="M24 41C8 30 5 21 5 15C5 9 10 5 15 5C19 5 22 7 24 11C26 7 29 5 33 5C38 5 43 9 43 15C43 21 40 30 24 41Z" fill="#b4684a" ' + O + '/>' +
      '<path d="M13 15q2-5 7-4" fill="none" stroke="#fce4c1" stroke-width="2.6" stroke-linecap="round"/>'),
    pencil: svg('0 0 48 48',
      '<g transform="rotate(-40 24 24)" ' + O + '><rect x="19" y="4" width="10" height="30" rx="1.5" fill="#c8964f"/>' +
      '<path d="M19 34h10l-5 10z" fill="#fce4c1"/></g>' +
      '<g transform="rotate(-40 24 24)"><rect x="19" y="4" width="10" height="6" fill="#b4684a"/><path d="M22 40h4l-2 4z" fill="#3a2f27"/></g>'),
    plane: svg('0 0 56 48',
      '<path d="M4 22L52 4L36 44L26 30Z" fill="#95a882" ' + O + '/>' +
      '<path d="M26 30L52 4M26 30L24 42L32 36" fill="none" stroke="#fce4c1" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>'),
    canister: svg('0 0 40 56',
      '<g ' + O + '><rect x="6" y="14" width="28" height="38" rx="4" fill="#6f93a8"/><rect x="10" y="7" width="20" height="9" rx="2" fill="#c8964f"/><rect x="17" y="1" width="6" height="7" rx="1" fill="#fce4c1"/></g>' +
      '<rect x="10" y="26" width="20" height="16" rx="1.5" fill="#fce4c1"/>' +
      '<text x="20" y="38" font-size="10" text-anchor="middle" fill="#b0735d" font-family="Courier New, monospace" font-weight="700">400</text>'),
    clapper: svg('0 0 56 52',
      '<g ' + O + '><rect x="6" y="22" width="44" height="26" rx="3" fill="#3a2f27"/></g>' +
      '<path d="M13 32h30M13 39h18" stroke="#fce4c1" stroke-width="2.4" stroke-linecap="round" fill="none"/>' +
      '<g class="clap-top"><g ' + O + '><rect x="4" y="10" width="48" height="12" rx="2" fill="#c8964f"/></g>' +
      '<path d="M14 10l-5 12M26 10l-5 12M38 10l-5 12M50 10l-5 12" stroke="#3a2f27" stroke-width="4" fill="none"/></g>')
  };

  function el(tag, cls, html, attrs) {
    var e = document.createElement(tag);
    e.className = cls;
    if (html) e.innerHTML = html;
    for (var k in (attrs || {})) e.setAttribute(k, attrs[k]);
    return e;
  }
  var path = location.pathname;
  var onWork = /\/work\.html$/.test(path);
  var inWork = /\/work\/[^/]+\.html$/.test(path);
  var isPhoto = /photography\.html$/.test(path), isProd = /production\.html$/.test(path);

  // ---------- 1. the permanent coffee cup, redrawn in the doodle style ----------
  var cup = document.querySelector('.cup');
  if (cup) {
    var old = cup.querySelector('svg'), steam = cup.querySelector('.steam');
    if (steam) steam.remove();
    if (old) old.outerHTML = D.cup;
  }

  // ---------- 2. heart in the footer (click it for a little love) ----------
  var fh = document.querySelector('.foot-form .foot-h');
  if (fh) {
    var hb = el('button', 'doodle heart-btn', D.heart, { type: 'button', 'aria-label': 'send a little love' });
    fh.appendChild(hb);
    hb.addEventListener('click', function () {
      var r = hb.getBoundingClientRect();
      for (var i = 0; i < 6; i++) {
        var h = el('span', 'float-heart', D.heart);
        h.style.left = (r.left + r.width / 2 - 9) + 'px';
        h.style.top = (r.top + r.height / 2 - 9) + 'px';
        h.style.setProperty('--dx', (Math.random() * 90 - 45) + 'px');
        h.style.setProperty('--dr', (Math.random() * 40 - 20) + 'deg');
        h.style.animationDelay = (i * 70) + 'ms';
        document.body.appendChild(h);
        setTimeout((function (n) { return function () { n.remove(); }; })(h), 1600);
      }
    });
  }

  // ---------- 3. camera on About (click for a flash) ----------
  var cam = document.querySelector('.st-cam'), pol = document.querySelector('.polaroid-lg');
  if (cam && pol) {
    cam.setAttribute('role', 'button'); cam.setAttribute('tabindex', '0'); cam.setAttribute('aria-label', 'take a photo');
    cam.removeAttribute('aria-hidden');
    var snap = function () { pol.classList.remove('snap'); void pol.offsetWidth; pol.classList.add('snap'); };
    cam.addEventListener('click', snap);
    cam.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); snap(); } });
  }

  // ---------- 4. pencil by the Work heading (not interactive) ----------
  if (onWork) {
    var wh = document.querySelector('.main .head h2');
    if (wh) wh.appendChild(el('span', 'doodle inline-doodle pencil', D.pencil));
  }

  // ---------- 5. paper plane on campaign pages (not interactive) ----------
  if (inWork && !isPhoto && !isProd) {
    var b = document.querySelector('.main .box');
    if (b) { b.classList.add('has-doodle'); b.appendChild(el('span', 'doodle plane', D.plane)); }
  }

  // ---------- 6. film canister on Photography (wiggles on hover) ----------
  if (isPhoto) {
    var pb = document.querySelector('.has-sticker');
    if (pb) pb.appendChild(el('span', 'doodle canister', D.canister));
  }

  // ---------- 7. clapperboard on Production (click it) ----------
  if (isProd) {
    var sl = document.querySelector('.soon-line');
    if (sl) {
      var cl = el('button', 'doodle inline-doodle clapper', D.clapper, { type: 'button', 'aria-label': 'clap' });
      sl.appendChild(cl);
      cl.addEventListener('click', function () { cl.classList.add('open'); setTimeout(function () { cl.classList.remove('open'); }, 450); });
    }
  }
})();
