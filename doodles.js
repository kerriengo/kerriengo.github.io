// ✎ HOW TO EDIT THIS FILE (you rarely need to)
//   Every doodle on the site is drawn here in ONE style: flat colour, thick cream outline, soft shadow.
//   Doodles: coffee cup (sidebar), heart (footer, click it), camera (About, click it), phone (Work),
//   paper plane (campaign pages), Fujifilm-style camera (Photography), clapperboard (Production).
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
    phone: svg('0 0 40 52',
      '<g ' + O + '><rect x="7" y="3" width="26" height="46" rx="6" fill="#3a2f27"/></g>' +
      '<rect x="11" y="10" width="18" height="30" rx="2" fill="#6f93a8"/>' +
      '<path transform="translate(0 -2)" d="M20 33c-4-3-5-5-5-6.5a2.6 2.6 0 0 1 5-.8a2.6 2.6 0 0 1 5 .8c0 1.5-1 3.5-5 6.5z" fill="#fce4c1"/>' +
      '<rect x="16" y="5.5" width="8" height="2" rx="1" fill="#fce4c1"/><rect x="16" y="43.5" width="8" height="2" rx="1" fill="#fce4c1"/>'),
    fuji: svg('0 0 72 54',
      '<g ' + O + '><rect x="4" y="13" width="64" height="35" rx="5" fill="#3a2f27"/></g>' +
      '<rect x="4" y="13" width="64" height="13" rx="5" fill="#d4b491"/><rect x="4" y="21" width="64" height="5" fill="#d4b491"/>' +
      '<rect x="14" y="6" width="11" height="8" rx="1.5" fill="#c8964f"/><rect x="45" y="7" width="8" height="7" rx="1" fill="#b0735d"/><circle cx="60" cy="9" r="3.4" fill="#fce4c1"/>' +
      '<rect x="9" y="16" width="15" height="6" rx="1.5" fill="#6f93a8"/>' +
      '<circle cx="39" cy="35" r="14" fill="#d4b491" stroke="#fce4c1" stroke-width="2.4"/><circle cx="39" cy="35" r="10" fill="#3a2f27"/>' +
      '<circle class="lens-in" cx="39" cy="35" r="6.4" fill="#6f93a8"/><circle cx="36.4" cy="32.4" r="1.9" fill="#fce4c1"/>'),
    balloon: svg('0 0 40 58',
      '<path d="M20 44c0 6-3 8-1 14" fill="none" stroke="#fce4c1" stroke-width="3.4" stroke-linecap="round"/>' +
      '<g ' + O + '><ellipse cx="20" cy="20" rx="15" ry="17" fill="#6f93a8"/><path d="M16 36h8l-4 7z" fill="#6f93a8"/></g>' +
      '<path d="M12 14q2-6 8-6" fill="none" stroke="#fce4c1" stroke-width="2.6" stroke-linecap="round"/>'),
    sprout: svg('0 0 48 48',
      '<path d="M24 44V22" fill="none" stroke="#fce4c1" stroke-width="8" stroke-linecap="round"/>' +
      '<path d="M24 44V22" fill="none" stroke="#84814d" stroke-width="3.4" stroke-linecap="round"/>' +
      '<g ' + O + '><path d="M24 24C24 12 14 6 5 8c0 10 8 17 19 16z" fill="#95a882"/><path d="M24 20c0-9 8-14 17-12c0 9-7 14-17 12z" fill="#c8964f"/></g>'),
    gift: svg('0 0 48 48',
      '<g ' + O + '><rect x="6" y="20" width="36" height="24" rx="3" fill="#b0735d"/><rect x="4" y="13" width="40" height="10" rx="3" fill="#c8964f"/>' +
      '<path d="M24 13c-8 0-13-3-10-8c4-3 10 2 10 8zM24 13c8 0 13-3 10-8c-4-3-10 2-10 8z" fill="#fce4c1"/></g>' +
      '<rect x="21" y="13" width="6" height="31" fill="#fce4c1"/>'),
    star: svg('0 0 48 48',
      '<path d="M24 4l6 13 14 2-10 10 3 14-13-7-13 7 3-14L4 19l14-2z" fill="#c8964f" ' + O + '/>' +
      '<path d="M16 17l8-9" fill="none" stroke="#fce4c1" stroke-width="2.4" stroke-linecap="round"/>'),
    leaf: svg('0 0 48 48',
      '<path d="M24 46V28" fill="none" stroke="#fce4c1" stroke-width="7" stroke-linecap="round"/>' +
      '<path d="M24 46V28" fill="none" stroke="#6b4630" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M24 4c10 6 17 14 12 24c-3 3-8 4-12 3c-4 1-9 0-12-3C7 18 14 10 24 4z" fill="#b4684a" ' + O + '/>' +
      '<path d="M24 10v22M24 18l-6-4M24 24l7-5M24 28l-6-3" fill="none" stroke="#fce4c1" stroke-width="2" stroke-linecap="round"/>'),
    note: svg('0 0 48 48',
      '<g fill="none" stroke="#fce4c1" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><path d="M18 9l24-5M18 9v27M42 4v26"/><ellipse cx="12" cy="37" rx="7" ry="5"/><ellipse cx="36" cy="31" rx="7" ry="5"/></g>' +
      '<g fill="#6f93a8" stroke="#6f93a8" stroke-width="4.5" stroke-linecap="round"><path d="M18 9l24-5M18 9v27M42 4v26" fill="none"/><ellipse cx="12" cy="37" rx="7" ry="5" stroke="none"/><ellipse cx="36" cy="31" rx="7" ry="5" stroke="none"/></g>'),
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

  // ---------- 4. phone by the Work heading (not interactive) ----------
  if (onWork) {
    var wh = document.querySelector('.main .head h2');
    if (wh) wh.appendChild(el('span', 'doodle inline-doodle phone-doodle', D.phone));
  }

  // ---------- 5. paper plane on campaign pages (not interactive) ----------
  if (inWork && !isPhoto && !isProd) {
    var b = document.querySelector('.main .box');
    // ✎ EDIT which doodle each campaign gets. Names: plane, balloon, sprout, gift, star, leaf, note
    var pick = { 'q1-feel-lighter': 'balloon', 'q2-with-you': 'plane', 'q3-we-believe-in-better': 'sprout', 'q4-holiday-campaign': 'gift',
      'y25-september-tentpole': 'star', 'social-impact': 'plane', 'y25-seasonal-messaging': 'leaf', 'y25-culture-and-trends': 'note' };
    var slug = path.replace(/^.*\//, '').replace('.html', '');
    if (b) { b.classList.add('has-doodle'); b.appendChild(el('span', 'doodle plane', D[pick[slug] || 'plane'])); }
  }

  // ---------- 6. Fujifilm-style camera in the lower right of the Photography intro box (click for a shutter flash) ----------
  if (isPhoto) {
    var pb = document.querySelector('.has-sticker');
    if (pb) {
      var fb = el('button', 'doodle fuji-cam', D.fuji, { type: 'button', 'aria-label': 'click the shutter' });
      pb.appendChild(fb);
      fb.addEventListener('click', function () { fb.classList.add('click'); setTimeout(function () { fb.classList.remove('click'); }, 350); });
    }
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
