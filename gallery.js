// ✎ HOW TO EDIT THIS FILE (you rarely need to)
//   This file runs the popup when you click a post. Look for lines marked  ✎ EDIT  to change words.
//   Change ONLY the words inside the quote marks. Save with Cmd+S. Undo with Cmd+Z.
//   Captions are NOT here. They live in captions.js.
(function () {
  var pieces = document.querySelectorAll('.piece'), photos = document.querySelectorAll('.ph');
  if (!pieces.length && !photos.length) return;

  var here = document.currentScript || document.querySelector('script[src$="gallery.js"]');

  var box = document.createElement('div');
  box.className = 'lb';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.setAttribute('aria-label', 'Post viewer');
  box.hidden = true;
  box.innerHTML =
    '<article class="pv">' +
      '<button class="lb-x" aria-label="Close">&times;</button>' +
      '<div class="pv-media"><span class="pv-tab"></span>' +
        '<button class="lb-nav lb-prev" aria-label="Previous slide">&#8592;</button>' +
        '<figure class="pv-fig"><img class="lb-img" alt=""><span class="pv-stamp"></span></figure>' +
        '<button class="lb-nav lb-next" aria-label="Next slide">&#8594;</button>' +
        '<div class="pv-beads" aria-hidden="true"></div>' +
      '</div>' +
      '<aside class="pv-side">' +
        '<header class="pv-head"><div><span class="pv-sub"></span></div></header>' +
        '<h3 class="pv-title"></h3>' +
        '<div class="pv-cap"></div>' +
        '<p class="pv-tags"></p>' +
        '<footer class="pv-meta"><span class="pv-icons" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 12a8 8 0 1 1-2.6-5.9"/><path d="M20.5 3.5v5h-5"/></svg><svg viewBox="0 0 24 24"><path d="M12 20.3s-7.3-4.6-9.4-9A5.2 5.2 0 0 1 12 6.6a5.2 5.2 0 0 1 9.4 4.7c-2.1 4.4-9.4 9-9.4 9z"/></svg><svg viewBox="0 0 24 24"><rect x="3" y="5.5" width="18" height="13" rx="1.2"/><path d="M3 6l9 7 9-7M3 18.5l6.5-6M21 18.5l-6.5-6"/></svg></span><span class="pv-count"></span></footer>' +
      '</aside>' +
    '</article>';
  document.body.appendChild(box);

  var q = function (s) { return box.querySelector(s); };
  var img = q('.lb-img'), tab = q('.pv-tab'), beads = q('.pv-beads'), sub = q('.pv-sub'),
      title = q('.pv-title'), cap = q('.pv-cap'), tags = q('.pv-tags'), count = q('.pv-count'),
      stamp = q('.pv-stamp'), prev = q('.lb-prev'), next = q('.lb-next'), post = q('.pv');
  var dates = [], list = [], i = 0, opener = null, name = '', group = '', num = '';

  function show(n) {
    i = (n + list.length) % list.length;
    img.src = list[i];
    img.alt = name + ', ' + (i + 1) + ' of ' + list.length;
    count.textContent = (i + 1) + ' / ' + list.length;
    stamp.textContent = dates[i] || ''; stamp.hidden = !dates.length;
    var b = beads.children;
    for (var k = 0; k < b.length; k++) b[k].className = k === i ? 'on' : '';
    prev.style.visibility = next.style.visibility = list.length > 1 ? 'visible' : 'hidden';
  }
  function setCaption(slug) {
    var c = (window.CAPTIONS || {})[slug] || {};
    if (c.caption) { cap.textContent = c.caption; cap.className = 'pv-cap'; }
    // ✎ EDIT the words inside the quote marks on the next line: shown when a post has no caption yet
    else { cap.textContent = 'caption coming soon'; cap.className = 'pv-cap empty'; }
    tags.innerHTML = '';
    String(c.tags || '').split(/[\s,]+/).filter(Boolean).forEach(function (t, k) {
      var s = document.createElement('span'); s.className = 't' + (k % 4); s.textContent = t.charAt(0) === '#' ? t : '#' + t; tags.appendChild(s);
    });
  }
  function openList(items, t, g, start, el, slug, label, ds) {
    dates = ds || []; opener = el; list = items; name = t; group = g;
    post.className = 'pv' + (slug ? '' : ' solo');
    tab.textContent = label || 'now showing'; // ✎ EDIT: 'post 01' style label in the corner
    title.textContent = name;
    var gl = group === 'all pieces' ? 'q3 2026' : group; // ✎ EDIT: 'q3 2026' is the label shown on Q3 posts
    sub.textContent = slug ? (/betterhelp/i.test(gl) ? gl : 'betterhelp · ' + gl) /* ✎ EDIT: 'betterhelp · ' is the first part of the line at the top of each post */ : gl;
    beads.innerHTML = list.length <= 24 ? list.map(function () { return '<i></i>'; }).join('') : '';
    if (slug) setCaption(slug);
    // ✎ EDIT: posts without a caption show the image only (no empty caption panel). Add a caption in captions.js and the panel returns.
    var hasCap = slug && ((window.CAPTIONS || {})[slug] || {}).caption;
    if (slug && !hasCap) post.className = 'pv solo nocap';
    box.hidden = false;
    document.body.style.overflow = 'hidden';
    show(start || 0);
    requestAnimationFrame(function () { requestAnimationFrame(function () { box.classList.add('open'); }); });
    q('.lb-x').focus();
  }
  function close() {
    box.classList.remove('open');
    document.body.style.overflow = '';
    if (opener) opener.focus();
    setTimeout(function () { if (!box.classList.contains('open')) { box.hidden = true; img.removeAttribute('src'); } }, 320);
  }

  pieces.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      var n = el.querySelector('.cap small');
      openList(el.getAttribute('data-images').split('|'), el.getAttribute('data-title'), el.getAttribute('data-group'), 0, el, el.getAttribute('data-slug') || 'x', n ? (/^\d+$/.test(n.textContent.trim()) ? 'post ' + n.textContent : 'best of') : 'now showing', []);
    });
  });
  photos.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      var set = el.closest('.phset');
      openList(set.getAttribute('data-images').split('|'), set.getAttribute('data-title'), set.getAttribute('data-group'), parseInt(el.getAttribute('data-i'), 10), el, '', 'photo', (set.getAttribute('data-dates') || '').split('|'));
    });
  });
  q('.lb-x').addEventListener('click', close);
  prev.addEventListener('click', function () { show(i - 1); });
  next.addEventListener('click', function () { show(i + 1); });
  box.addEventListener('click', function (e) { if (e.target === box) close(); });
  document.addEventListener('keydown', function (e) {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') show(i - 1);
    else if (e.key === 'ArrowRight') show(i + 1);
  });
})();
