/* FABIAN — animations layer (vanilla, no deps)
   - Respects prefers-reduced-motion
   - Uses IntersectionObserver for scroll triggers
   - Only animates transform / opacity / text content
*/
(function () {
  'use strict';

  var REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var IS_MOBILE = window.matchMedia && window.matchMedia('(max-width: 768px)').matches;

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  // ---------- HERO: halo + bubbles + third ring + shimmer ----------
  function setupHeroVisual() {
    var visual = document.querySelector('.hero-visual');
    if (!visual) return;

    // halo
    if (!visual.querySelector('.bottle-halo')) {
      var halo = document.createElement('div');
      halo.className = 'bottle-halo';
      halo.setAttribute('aria-hidden', 'true');
      visual.insertBefore(halo, visual.firstChild);
    }

    // third golden orbital ring
    if (!visual.querySelector('.fabian-ring-gold')) {
      var ring = document.createElement('div');
      ring.className = 'fabian-ring-gold';
      ring.setAttribute('aria-hidden', 'true');
      visual.insertBefore(ring, visual.firstChild);
    }

    // bubbles (skip on mobile/reduced)
    if (!IS_MOBILE && !REDUCED && !visual.querySelector('.fabian-bubbles')) {
      var holder = document.createElement('div');
      holder.className = 'fabian-bubbles';
      holder.setAttribute('aria-hidden', 'true');
      var count = 10;
      for (var i = 0; i < count; i++) {
        var b = document.createElement('span');
        b.className = 'bubble';
        var size = 6 + Math.random() * 14;      // 6 - 20 px
        var leftPct = 18 + Math.random() * 64;  // 18 - 82 %
        var dur = 7 + Math.random() * 9;        // 7 - 16 s
        var delay = -Math.random() * 12;        // negative => start mid-animation
        var driftX = (Math.random() * 60 - 30); // -30 .. +30 px
        var driftY = -(80 + Math.random() * 30); // -80 .. -110 vh
        b.style.width = size + 'px';
        b.style.height = size + 'px';
        b.style.left = leftPct + '%';
        b.style.animationDuration = dur.toFixed(2) + 's';
        b.style.animationDelay = delay.toFixed(2) + 's';
        b.style.setProperty('--bx', driftX.toFixed(1) + 'px');
        b.style.setProperty('--by', driftY.toFixed(1) + 'vh');
        holder.appendChild(b);
      }
      visual.appendChild(holder);
    }

    // shimmer on hero script/eyebrow (only the eyebrow exists; h-script is optional in markup)
    var heroText = document.querySelector('.hero-text');
    if (heroText) {
      var eyebrow = heroText.querySelector('.eyebrow');
      if (eyebrow) eyebrow.classList.add('fabian-shimmer');
      var script = heroText.querySelector('.h-script');
      if (script) script.classList.add('fabian-shimmer');
    }
  }

  // ---------- COUNT-UP ----------
  // easeOutExpo / easeOutQuart
  function easeOutExpo(t) { return t === 1 ? 1 : 1 - Math.pow(2, -10 * t); }
  function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }

  // Parse a localized number+suffix string like "₽14–18 млрд", "2 800+", "+11 %", "$130 млн", "3,7 года", "2031"
  // Returns { prefix, value, fraction, suffix, hasRange, secondValue } or null.
  function parseNumeric(raw) {
    if (raw == null) return null;
    var str = String(raw).trim();
    // Find a numeric token (allow comma or dot decimal, allow non-breaking spaces inside group)
    // Use first "number" we find as the animation target.
    var re = /(-?\d{1,3}(?:[\s ]\d{3})*|\d+)(?:[.,](\d+))?/;
    var m = str.match(re);
    if (!m) return null;
    var intPart = m[1].replace(/[\s ]/g, '');
    var fracPart = m[2] || '';
    var value = parseInt(intPart, 10);
    if (isNaN(value)) return null;
    var fracVal = fracPart ? parseInt(fracPart, 10) : 0;
    var fracLen = fracPart.length;
    var fullNum = m[0];
    var idx = m.index;
    var prefix = str.slice(0, idx);
    var suffix = str.slice(idx + fullNum.length);
    return {
      raw: str,
      prefix: prefix,
      value: value,
      frac: fracVal,
      fracLen: fracLen,
      suffix: suffix,
      original: str
    };
  }

  function formatWithGroups(n) {
    // Format integer with non-breaking spaces as group separator to match the original style
    var s = String(Math.round(n));
    return s.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  function renderCount(parsed, currentValue) {
    var intPart;
    if (parsed.fracLen) {
      // animate as float
      var rounded = currentValue.toFixed(parsed.fracLen);
      // keep the decimal separator from original (comma in RU, dot otherwise)
      var sep = parsed.original.indexOf(',') !== -1 ? ',' : '.';
      rounded = rounded.replace('.', sep);
      intPart = rounded;
    } else {
      // integers > 999 get group separators
      if (parsed.value >= 1000) intPart = formatWithGroups(currentValue);
      else intPart = String(Math.round(currentValue));
    }
    return parsed.prefix + intPart + parsed.suffix;
  }

  function animateCount(el, parsed, opts) {
    if (!el || !parsed) return;
    opts = opts || {};
    var duration = opts.duration || 1500;
    var ease = opts.ease || easeOutQuart;
    var target = parsed.fracLen ? parsed.value + parsed.frac / Math.pow(10, parsed.fracLen) : parsed.value;
    var start = null;
    el.classList.add('counting');
    function step(ts) {
      if (start === null) start = ts;
      var t = Math.min(1, (ts - start) / duration);
      var v = target * ease(t);
      el.textContent = renderCount(parsed, v);
      if (t < 1) requestAnimationFrame(step);
      else {
        el.textContent = parsed.original; // restore exact original (preserves dashes, ranges, etc.)
        el.classList.remove('counting');
      }
    }
    requestAnimationFrame(step);
  }

  // Observe element, run once when it enters viewport
  function onceVisible(el, fn, opts) {
    if (!el) return;
    if (!('IntersectionObserver' in window)) { fn(); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          fn(e.target);
          io.unobserve(e.target);
        }
      });
    }, opts || { threshold: 0.25 });
    io.observe(el);
  }

  function setupCountUps() {
    if (REDUCED) return;

    // Targets: hero-meta .num, market-num .v, fin-cell .val, tl-year
    var selectors = [
      '.hero-meta .num',
      '.market-num .v',
      '.fin-cell .val',
      '.tl-year'
    ];

    selectors.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) {
        // Skip if i18n hasn't filled yet — wait one tick
        var original = el.textContent.trim();
        if (!original) return;
        var parsed = parseNumeric(original);
        if (!parsed) return;

        // Hold the target as a data attr so re-runs (e.g., language change) keep original
        el.dataset.countupOriginal = original;
        el.setAttribute('data-countup', '1');

        // Briefly render "0" + suffix to avoid layout shift
        el.textContent = renderCount(parsed, 0);

        onceVisible(el, function () {
          // re-read original (in case i18n updated it)
          var freshRaw = el.dataset.countupOriginal || original;
          var freshParsed = parseNumeric(freshRaw) || parsed;
          var dur = sel === '.hero-meta .num' ? 1600
                  : sel === '.tl-year' ? 1200
                  : 1400;
          var easeFn = sel === '.hero-meta .num' ? easeOutExpo : easeOutQuart;
          animateCount(el, freshParsed, { duration: dur, ease: easeFn });
        }, { threshold: 0.35 });
      });
    });
  }

  // ---------- PRODUCT shine + scale-in ----------
  function setupProduct() {
    var wrap = document.querySelector('.product-image-wrap');
    if (!wrap) return;
    if (!IS_MOBILE && !REDUCED && !wrap.querySelector('.fabian-shine')) {
      var s = document.createElement('div');
      s.className = 'fabian-shine';
      s.setAttribute('aria-hidden', 'true');
      wrap.appendChild(s);
    }
    onceVisible(wrap, function () { wrap.classList.add('fabian-in'); }, { threshold: 0.25 });
  }

  // ---------- ABOUT pillars stagger ----------
  function setupPillars() {
    var grid = document.querySelector('.pillars');
    if (!grid) return;
    onceVisible(grid, function () { grid.classList.add('fabian-in'); }, { threshold: 0.2 });
  }

  // ---------- MARKET grid in ----------
  function setupMarket() {
    var grid = document.querySelector('.market-numbers');
    if (!grid) return;
    onceVisible(grid, function () { grid.classList.add('fabian-in'); }, { threshold: 0.2 });
  }

  // ---------- INVESTORS fin-grid ----------
  function setupFinGrid() {
    var grid = document.querySelector('.fin-grid');
    if (!grid) return;
    onceVisible(grid, function () { grid.classList.add('fabian-in'); }, { threshold: 0.2 });
  }

  // ---------- TIMELINE ----------
  function setupTimeline() {
    var tl = document.querySelector('.timeline');
    if (!tl) return;

    // Add the vertical line
    var line = tl.querySelector('.fabian-tl-line');
    if (!line) {
      line = document.createElement('div');
      line.className = 'fabian-tl-line';
      line.setAttribute('aria-hidden', 'true');
      tl.insertBefore(line, tl.firstChild);
    }

    // Per-step in
    var steps = tl.querySelectorAll('.tl-step');
    steps.forEach(function (step) {
      onceVisible(step, function () { step.classList.add('fabian-in'); }, { threshold: 0.3 });
    });

    if (REDUCED) {
      line.style.height = '100%';
      return;
    }

    var ticking = false;
    function update() {
      var rect = tl.getBoundingClientRect();
      var viewH = window.innerHeight || document.documentElement.clientHeight;
      var total = tl.offsetHeight;
      // progress = how far the viewport center has passed through the timeline
      var center = viewH * 0.55;
      var passed = center - rect.top;
      var pct = Math.max(0, Math.min(1, passed / total));
      line.style.height = (pct * 100).toFixed(2) + '%';
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
  }

  // ---------- HEADER shadow on scroll ----------
  function setupHeader() {
    var hdr = document.querySelector('.site-header');
    if (!hdr) return;
    function check() {
      if (window.scrollY > 12) hdr.classList.add('fabian-scrolled');
      else hdr.classList.remove('fabian-scrolled');
    }
    window.addEventListener('scroll', check, { passive: true });
    check();
  }

  // ---------- BOTTOM BAR entrance + ripple ----------
  function setupBottomBar() {
    var bar = document.querySelector('.bottom-bar');
    if (!bar) return;
    requestAnimationFrame(function () {
      setTimeout(function () { bar.classList.add('fabian-ready'); }, 200);
    });

    if (REDUCED) return;

    function addRipple(btn) {
      // remove old ripple
      var old = btn.querySelector('.fabian-ripple');
      if (old) old.remove();
      var r = document.createElement('span');
      r.className = 'fabian-ripple';
      btn.appendChild(r);
      setTimeout(function () { if (r && r.parentNode) r.parentNode.removeChild(r); }, 500);
    }

    bar.querySelectorAll('.theme-switch button, .history-nav button').forEach(function (btn) {
      btn.addEventListener('click', function () { addRipple(btn); });
    });
  }

  // ---------- FORM success pulse ----------
  function setupForm() {
    var form = document.querySelector('.form-card');
    if (!form) return;
    var btn = form.querySelector('button[type="submit"], .btn');
    if (!btn) return;
    btn.addEventListener('click', function () {
      if (REDUCED) return;
      btn.classList.remove('fabian-pulsed');
      // force reflow so the animation can restart
      void btn.offsetWidth;
      btn.classList.add('fabian-pulsed');
      setTimeout(function () { btn.classList.remove('fabian-pulsed'); }, 400);
    });
  }

  // ---------- INIT ----------
  ready(function () {
    try { setupHeroVisual(); } catch (e) {}
    try { setupHeader(); } catch (e) {}
    try { setupPillars(); } catch (e) {}
    try { setupProduct(); } catch (e) {}
    try { setupMarket(); } catch (e) {}
    try { setupFinGrid(); } catch (e) {}
    try { setupTimeline(); } catch (e) {}
    try { setupBottomBar(); } catch (e) {}
    try { setupForm(); } catch (e) {}
    // count-ups last (so i18n had a chance to swap defaults)
    setTimeout(function () { try { setupCountUps(); } catch (e) {} }, 60);
  });
})();
