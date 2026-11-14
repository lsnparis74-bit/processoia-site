// ProcessoIA · orchestration du site : scroll fluide, scène 3D du hero pilotée par le scroll,
// animations de sections, langues EN/FR/PT.
import { I18N } from './i18n.js';

const { gsap, ScrollTrigger, SplitText, Lenis, lucide } = window;
const root = document.documentElement;
const qs = (s, el = document) => el.querySelector(s);
const qsa = (s, el = document) => [...el.querySelectorAll(s)];
const mq = (q) => window.matchMedia(q).matches;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

if (!gsap || !ScrollTrigger || !SplitText) {
  root.classList.remove('js');
  throw new Error('GSAP indisponible : la page reste lisible sans animation.');
}
gsap.registerPlugin(ScrollTrigger, SplitText);
ScrollTrigger.config({ ignoreMobileResize: true });

const reduceMotion = mq('(prefers-reduced-motion: reduce)');
const finePointer = mq('(hover: hover) and (pointer: fine)');
const LANGS = ['en', 'fr', 'pt'];
const STORAGE_KEY = 'processoia_lang';

/* =========================================================
   Langues
   ========================================================= */
const read = (obj, path) => path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj);

// Chaque langue a sa propre page (/, /fr/, /pt/) pour être indexée : la langue vient de la page elle-même
const LANG_URLS = { en: '/', fr: '/fr/', pt: '/pt/' };

function detectLang() {
  const page = (root.lang || 'en').slice(0, 2).toLowerCase();
  return LANGS.includes(page) ? page : 'en';
}

let lang = detectLang();
let t = I18N[lang];

// Première visite sur la page anglaise : on bascule vers la langue du navigateur si le site la propose
if (lang === 'en') {
  let saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  const nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
  if (!saved && nav !== 'en' && LANG_URLS[nav]) location.replace(LANG_URLS[nav] + location.hash);
}

function applyText() {
  qsa('[data-i18n]').forEach((el) => {
    const v = read(t, el.dataset.i18n);
    if (typeof v === 'string') el.textContent = v;
  });
  qsa('[data-i18n-alt]').forEach((el) => { const v = read(t, el.dataset.i18nAlt); if (v) el.alt = v; });
  qsa('[data-i18n-aria]').forEach((el) => { const v = read(t, el.dataset.i18nAria); if (v) el.setAttribute('aria-label', v); });
  document.title = t.meta.title;
  qs('meta[name="description"]')?.setAttribute('content', t.meta.description);
  qs('[data-lang-current]').textContent = lang.toUpperCase();
  qsa('[data-set-lang]').forEach((b) => b.setAttribute('aria-checked', String(b.dataset.setLang === lang)));
  qs('[data-burger]')?.setAttribute('aria-label', menuOpen ? t.ui.close : t.ui.menu);
  buildMarquee();
  buildTerminal();
}

async function setLang(next) {
  if (next === lang || !LANG_URLS[next]) return;
  try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
  await gsap.to(qs('.curtain'), { opacity: 1, duration: reduceMotion ? 0 : 0.35, ease: 'power2.out' });
  location.href = LANG_URLS[next] + location.hash;
}

// Retour arrière depuis une autre langue : la page revient du cache avec le rideau encore fermé
addEventListener('pageshow', (e) => { if (e.persisted) gsap.set(qs('.curtain'), { opacity: 0 }); });

/* =========================================================
   Scroll fluide
   ========================================================= */
let lenis = null;
function initLenis() {
  if (reduceMotion || !Lenis) return;
  lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.95 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

function scrollToTarget(hash) {
  const target = hash === '#top' ? 0 : qs(hash);
  if (target == null) return;
  if (lenis) {
    lenis.scrollTo(target, { duration: 1.8, easing: (x) => 1 - Math.pow(1 - x, 4) });
  } else if (target === 0) {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  } else {
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  }
  if (target !== 0) {
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }
}

function initAnchors() {
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const hash = a.getAttribute('href');
    if (hash.length < 2) return;
    e.preventDefault();
    closeMenu();
    scrollToTarget(hash);
  });
}

/* =========================================================
   Hero : scène 3D pilotée par le scroll
   ========================================================= */
const heroParams = { morph: 0, reveal: reduceMotion ? 1 : 0, chips: 0, shift: 1, camZ: 9, camY: 0, lookY: 0 };
let heroTl = null;

function initHero() {
  const hero = qs('.hero');
  const stage = qs('[data-hero-stage]');
  const intro = qs('[data-hero-intro]');
  const hint = qs('[data-scroll-hint]');
  const veil = qs('[data-hero-veil]');
  const chapters = qsa('[data-chapter]');
  const hudItems = qsa('[data-hud-item]');
  const hudFill = qs('[data-hud-fill]');

  chapters.forEach((ch) => gsap.set(qsa('[data-ch-item]', ch), { y: 50, opacity: 0 }));
  gsap.set(chapters, { autoAlpha: 0 });

  const chIn = (ch) => gsap.timeline()
    .set(ch, { autoAlpha: 1 })
    .to(qsa('[data-ch-item]', ch), { y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: 'power3.out' });
  const chOut = (ch) => gsap.timeline()
    .to(qsa('[data-ch-item]', ch), { y: -40, opacity: 0, stagger: 0.05, duration: 0.4, ease: 'power2.in' })
    .set(ch, { autoAlpha: 0 });

  // Début de chaque chapitre sur la timeline (sert au HUD)
  const STARTS = [0.7, 2.9, 5.3, 7.75];
  let hudIdx = -2;
  const updateHud = (progress, time) => {
    hudFill.style.transform = `scaleY(${progress.toFixed(4)})`;
    let idx = -1;
    STARTS.forEach((s, i) => { if (time >= s) idx = i; });
    if (idx === hudIdx) return;
    hudIdx = idx;
    hudItems.forEach((li, i) => li.classList.toggle('is-active', i === idx));
    chapters.forEach((ch, i) => ch.classList.toggle('is-live', i === idx));
  };

  heroTl = gsap.timeline({
    defaults: { ease: 'none' },
    onUpdate() { updateHud(this.progress(), this.time()); },
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      // Histoire raccourcie (4,4 écrans avant) : le visiteur atteint plus vite « Qui je suis » et les offres
      end: () => '+=' + Math.round(window.innerHeight * (mq('(max-width: 860px)') ? 2.4 : 3)),
      pin: stage,
      scrub: reduceMotion ? true : 1,
      anticipatePin: 1,
      invalidateOnRefresh: true
    }
  });

  heroTl
    .to(intro, { autoAlpha: 0, y: -90, duration: 0.9, ease: 'power2.in' }, 0)
    .to(hint, { autoAlpha: 0, duration: 0.4 }, 0)
    .to(heroParams, { chips: 1, duration: 0.8 }, 0.45)
    .add(chIn(chapters[0]), 0.7)
    .add(chOut(chapters[0]), 2.25)
    .to(heroParams, { morph: 1, camZ: 8.8, duration: 1.5, ease: 'power2.inOut' }, 2.1)
    .add(chIn(chapters[1]), 3.1)
    .add(chOut(chapters[1]), 4.65)
    .to(heroParams, { morph: 2, camZ: 8.6, camY: 1.2, duration: 1.5, ease: 'power2.inOut' }, 4.5)
    .add(chIn(chapters[2]), 5.5)
    .add(chOut(chapters[2]), 7.05)
    .to(heroParams, { morph: 3, shift: 0, camZ: 8.4, camY: 3.4, lookY: -1.3, duration: 1.7, ease: 'power2.inOut' }, 6.9)
    .to(veil, { opacity: 0.25, duration: 1.2 }, 7)
    .add(chIn(chapters[3]), 8)
    .to({}, { duration: 1.3 }, 8.8);
}

function loadHeroScene() {
  return import('./hero-scene.js')
    .then(({ HeroScene }) => {
      const stage = qs('[data-hero-stage]');
      const scene = HeroScene.create(qs('[data-hero-canvas]'), heroParams, { chips: qsa('[data-chip]'), reduceMotion });
      if (!scene) return;
      new IntersectionObserver(([e]) => (e.isIntersecting ? scene.start() : scene.stop())).observe(stage);
    })
    .catch((err) => console.warn('[hero] scène 3D non chargée :', err));
}

/* =========================================================
   Préchargement et entrée
   ========================================================= */
function heroIn() {
  return gsap.timeline()
    .from('.hero__line', { yPercent: 115, duration: 1.5, stagger: 0.12, ease: 'expo.out' })
    .from('[data-intro-item]', { y: 28, opacity: 0, duration: 1.3, stagger: 0.08, ease: 'expo.out' }, 0.25)
    .from('[data-nav]', { y: -30, opacity: 0, duration: 1.1, ease: 'expo.out', clearProps: 'transform,opacity' }, 0.2)
    .to('[data-hud]', { opacity: 1, duration: 1.2 }, 0.6)
    .from('.hero__scroll > *', { y: 12, opacity: 0, duration: 1, stagger: 0.1, ease: 'expo.out' }, 0.8)
    .to(heroParams, { reveal: 1, duration: 3, ease: 'expo.out' }, 0);
}

function runIntro(ready) {
  const pre = qs('.preloader');
  if (reduceMotion) {
    gsap.set(pre, { display: 'none' });
    gsap.set('[data-hud]', { opacity: 1 });
    return;
  }
  const count = qs('[data-preload-count]');
  const c = { v: 0 };
  const tl = gsap.timeline();
  // Préchargement court : le titre et le bouton doivent apparaître vite, surtout sur téléphone
  tl.to(c, { v: 100, duration: 0.6, ease: 'power2.inOut', onUpdate: () => { count.textContent = String(Math.round(c.v)).padStart(3, '0'); } })
    .to('.preloader__bar span', { scaleX: 1, duration: 0.6, ease: 'power2.inOut' }, 0)
    .add(() => {
      // On attend les polices et la scène 3D, 1,2 s au plus
      tl.pause();
      Promise.race([ready, wait(1200)]).then(() => tl.resume());
    }, 0.6)
    .to(pre, { yPercent: -100, duration: 0.8, ease: 'expo.inOut' }, 0.65)
    .set(pre, { display: 'none' })
    .add(heroIn(), 0.95);
}

/* =========================================================
   Titres et textes animés
   ========================================================= */
const headingFx = new Map();

function buildHeadings() {
  if (reduceMotion) return;
  qsa('[data-split]').forEach((el) => {
    if (el.dataset.revealed === '1') return;
    const split = SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      linesClass: 'split-line',
      autoSplit: true,
      onSplit(self) {
        const tween = gsap.from(self.lines, {
          yPercent: 115,
          rotate: 2.5,
          transformOrigin: '0% 0%',
          duration: 1.3,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 86%', once: true },
          onComplete: () => {
            el.dataset.revealed = '1';
            headingFx.delete(el);
            self.revert();
          }
        });
        el._fxTween = tween;
        return tween;
      }
    });
    headingFx.set(el, split);
  });
}

function revertHeadings() {
  headingFx.forEach((split, el) => {
    el._fxTween?.scrollTrigger?.kill();
    el._fxTween?.kill();
    split.revert();
  });
  headingFx.clear();
}

let wordsFx = null;
function buildWords() {
  const el = qs('[data-words]');
  if (!el || reduceMotion) return;
  const split = SplitText.create(el, { type: 'words' });
  const tween = gsap.fromTo(split.words, { opacity: 0.14 }, {
    opacity: 1,
    ease: 'none',
    stagger: 0.08,
    scrollTrigger: { trigger: el, start: 'top 82%', end: 'bottom 48%', scrub: true }
  });
  wordsFx = { split, tween };
}

function revertWords() {
  if (!wordsFx) return;
  wordsFx.tween.scrollTrigger?.kill();
  wordsFx.tween.kill();
  wordsFx.split.revert();
  wordsFx = null;
}

function initReveals() {
  if (reduceMotion) return;
  qsa('[data-reveal]').forEach((el) => {
    gsap.from(el, { y: 40, autoAlpha: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
  });
  qsa('[data-stagger]').forEach((wrap) => {
    gsap.from(wrap.children, { y: 50, autoAlpha: 0, duration: 1.2, stagger: 0.09, ease: 'expo.out', scrollTrigger: { trigger: wrap, start: 'top 88%', once: true } });
  });
}

/* =========================================================
   Bandeau défilant (vitesse liée au scroll)
   ========================================================= */
const marquee = { rows: [], boost: 0, active: false };

function buildMarquee() {
  const sets = [t.marquee.row1, t.marquee.row2];
  qsa('[data-marquee-track]').forEach((track, i) => {
    const unit = sets[i].map((l) => `<span class="mq__item">${esc(l)}</span><span class="mq__sep"></span>`).join('');
    track.innerHTML = unit.repeat(4);
  });
  marquee.rows.forEach((m) => { m.half = m.track.scrollWidth / 2; });
}

function initMarquee() {
  marquee.rows = qsa('[data-marquee]').map((row) => {
    const track = qs('[data-marquee-track]', row);
    return { track, dir: Number(row.dataset.marquee), x: 0, half: track.scrollWidth / 2 };
  });
  if (reduceMotion) return;
  ScrollTrigger.create({
    trigger: '.marquee',
    start: 'top bottom',
    end: 'bottom top',
    onToggle: (self) => { marquee.active = self.isActive; },
    onUpdate: (self) => { marquee.boost = gsap.utils.clamp(-8, 8, self.getVelocity() / 260); },
    onRefresh: () => marquee.rows.forEach((m) => { m.half = m.track.scrollWidth / 2; })
  });
  gsap.ticker.add((time, dt) => {
    if (!marquee.active) return;
    marquee.boost *= 0.94;
    marquee.rows.forEach((m) => {
      if (!m.half) return;
      m.x = gsap.utils.wrap(-m.half, 0, m.x - dt * 0.045 * m.dir * (1 + Math.abs(marquee.boost)));
      m.track.style.transform = `translate3d(${m.x.toFixed(2)}px, 0, 0) skewX(${(-marquee.boost * 0.9).toFixed(2)}deg)`;
    });
  });
}

/* =========================================================
   Cartes (offres, ce que j'automatise) : inclinaison 3D au survol
   ========================================================= */
function initCards() {
  const tilt = finePointer && !reduceMotion;
  qsa('[data-card]').forEach((card) => {
    let rx = null;
    let ry = null;
    if (tilt) {
      gsap.set(card, { transformPerspective: 900 });
      rx = gsap.quickTo(card, 'rotationX', { duration: 0.8, ease: 'power3' });
      ry = gsap.quickTo(card, 'rotationY', { duration: 0.8, ease: 'power3' });
    }
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`);
      card.style.setProperty('--my', `${(py * 100).toFixed(1)}%`);
      if (rx) { rx((0.5 - py) * 9); ry((px - 0.5) * 11); }
    });
    card.addEventListener('pointerleave', () => { if (rx) { rx(0); ry(0); } });
  });
}

/* =========================================================
   Comment ça marche : tracé lumineux + journal d'exécution
   ========================================================= */
function initFlow() {
  const flow = qs('[data-flow]');
  const svg = qs('[data-flow-svg]');
  const track = qs('[data-flow-track]');
  const line = qs('[data-flow-line]');
  const packet = qs('[data-flow-packet]');
  const steps = qsa('[data-step]');
  const st = { p: reduceMotion ? 1 : 0, len: 0, stops: [] };

  const draw = () => {
    if (!st.len) return;
    const l = st.len * st.p;
    line.style.strokeDashoffset = String(st.len - l);
    const pt = line.getPointAtLength(l);
    packet.setAttribute('cx', pt.x.toFixed(1));
    packet.setAttribute('cy', pt.y.toFixed(1));
    packet.style.opacity = st.p > 0.005 ? '1' : '0';
    steps.forEach((s, i) => s.classList.toggle('is-active', st.p > 0.005 && l >= st.stops[i] - 2));
  };

  const layout = () => {
    const fr = flow.getBoundingClientRect();
    if (!fr.width) return;
    const pts = steps.map((s) => {
      const r = qs('.step__node', s).getBoundingClientRect();
      return [r.left + r.width / 2 - fr.left, r.top + r.height / 2 - fr.top];
    });
    svg.setAttribute('viewBox', `0 0 ${fr.width.toFixed(1)} ${fr.height.toFixed(1)}`);
    const vertical = Math.abs(pts[pts.length - 1][0] - pts[0][0]) < 4;
    let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
    for (let i = 1; i < pts.length; i++) {
      const [x0, y0] = pts[i - 1];
      const [x1, y1] = pts[i];
      if (vertical) {
        d += ` L${x1.toFixed(1)},${y1.toFixed(1)}`;
      } else {
        const dx = (x1 - x0) / 2;
        const bend = (i % 2 ? -1 : 1) * 56;
        d += ` C${(x0 + dx).toFixed(1)},${(y0 + bend).toFixed(1)} ${(x1 - dx).toFixed(1)},${(y1 + bend).toFixed(1)} ${x1.toFixed(1)},${y1.toFixed(1)}`;
      }
    }
    track.setAttribute('d', d);
    line.setAttribute('d', d);
    st.len = line.getTotalLength();
    st.stops = vertical ? pts.map((p) => p[1] - pts[0][1]) : pts.map((_, i) => (i * st.len) / (pts.length - 1));
    line.style.strokeDasharray = `${st.len} ${st.len}`;
    draw();
  };

  if (!reduceMotion) {
    gsap.to(st, { p: 1, ease: 'none', onUpdate: draw, scrollTrigger: { trigger: flow, start: 'top 72%', end: 'bottom 50%', scrub: 0.8 } });
  }
  layout();
  ScrollTrigger.addEventListener('refresh', layout);
}

let terminalState = 'idle';
let terminalTl = null;

function setTerminalStatus(done) {
  qs('[data-terminal]').classList.toggle('is-done', done);
  qs('[data-terminal-status]').textContent = done ? t.ui.logDone : t.ui.logRunning;
}

function buildTerminal() {
  const body = qs('[data-terminal-body]');
  if (!body) return;
  terminalTl?.kill();
  const parts = t.diagram.example.split('→').map((s) => s.trim()).filter(Boolean);
  const tags = t.diagram.steps.map((s) => s.label.toLowerCase());
  body.innerHTML = parts.map((txt, i) => `
    <div class="log-line">
      <span class="log-tag">[${esc(tags[i] || 'step')}]</span>
      <span class="log-arrow">${i ? '↳' : '▸'}</span>
      <span class="log-text" data-full="${esc(txt)}"></span>
      <svg class="log-ok" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
    </div>`).join('');
  if (terminalState !== 'idle' || reduceMotion) finishTerminal();
  else setTerminalStatus(false);
}

function finishTerminal() {
  qsa('.log-line').forEach((l) => {
    l.style.opacity = '1';
    const tx = qs('.log-text', l);
    tx.textContent = tx.dataset.full;
    const ok = qs('.log-ok', l);
    ok.style.opacity = '1';
    ok.style.transform = 'none';
  });
  terminalState = 'done';
  setTerminalStatus(true);
}

function playTerminal() {
  if (terminalState !== 'idle') return;
  terminalState = 'playing';
  const tl = gsap.timeline({ onComplete: () => { terminalState = 'done'; setTerminalStatus(true); } });
  qsa('.log-line').forEach((line) => {
    const tx = qs('.log-text', line);
    const full = tx.dataset.full;
    const o = { n: 0 };
    tl.set(line, { opacity: 1 })
      .add(() => tx.classList.add('is-typing'))
      .to(o, { n: full.length, duration: full.length * 0.024, ease: 'none', onUpdate: () => { tx.textContent = full.slice(0, Math.round(o.n)); } })
      .add(() => tx.classList.remove('is-typing'))
      .to(qs('.log-ok', line), { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(3)' })
      .to({}, { duration: 0.25 });
  });
  terminalTl = tl;
}

function initTerminal() {
  if (reduceMotion) return;
  ScrollTrigger.create({ trigger: '[data-terminal]', start: 'top 78%', once: true, onEnter: playTerminal });
}

/* =========================================================
   Pourquoi l'IA : avant / après lié au scroll, compteurs
   ========================================================= */
function initCompare() {
  const befores = qsa('[data-before]');
  const afters = qsa('[data-after]');
  const beam = qs('[data-beam]');
  if (reduceMotion) {
    befores.forEach((b) => { qs('.compare__strike', b).style.transform = 'scaleX(1)'; b.style.opacity = '.5'; });
    return;
  }
  gsap.set(afters, { opacity: 0.28 });
  const tl = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: '[data-compare]', start: 'top 62%', end: 'bottom 58%', scrub: 0.8 } });
  befores.forEach((b, i) => {
    tl.to(qs('.compare__strike', b), { scaleX: 1, duration: 1 }, i)
      .to(b, { opacity: 0.45, duration: 1 }, i)
      .to(afters[i], { opacity: 1, duration: 0.7 }, i + 0.3)
      .fromTo(qs('svg', afters[i]), { scale: 0.3, rotate: -90 }, { scale: 1, rotate: 0, duration: 0.7, ease: 'back.out(2)' }, i + 0.3);
  });

  gsap.matchMedia().add({ desktop: '(min-width: 861px)', mobile: '(max-width: 860px)' }, (ctx) => {
    const { desktop } = ctx.conditions;
    gsap.fromTo(beam, desktop ? { top: '0%', left: -1 } : { left: '0%', top: -1 }, {
      ...(desktop ? { top: '74%' } : { left: '74%' }),
      ease: 'none',
      scrollTrigger: { trigger: '[data-compare]', start: 'top 62%', end: 'bottom 58%', scrub: 0.8 }
    });
  });
}

function initCounters() {
  if (reduceMotion) return;
  qsa('[data-count]').forEach((el) => {
    const from = Number(el.dataset.from);
    const to = Number(el.dataset.to);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const o = { v: from };
    el.textContent = prefix + from + suffix;
    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => gsap.to(o, { v: to, duration: 2.2, ease: 'expo.out', onUpdate: () => { el.textContent = prefix + Math.round(o.v) + suffix; } })
    });
  });
  qsa('[data-fill]').forEach((el) => {
    gsap.fromTo(el, { backgroundPosition: '0% 0%' }, { backgroundPosition: '0% 100%', duration: 1.8, ease: 'expo.inOut', scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
  });
}

/* =========================================================
   Prise de rendez-vous : source de chaque bouton, Calendly intégré
   ========================================================= */
// Chaque lien Cal.com porte déjà sa source (utm_content) ; on ajoute la langue de la page (utm_campaign)
function initBookingLinks() {
  qsa('a[href*="cal.com/"]').forEach((a) => {
    try {
      const u = new URL(a.href);
      u.searchParams.set('utm_campaign', lang);
      a.href = u.toString();
    } catch (e) {}
  });
}

// Le module Cal.com n'est chargé qu'à l'approche de la section, pour ne pas ralentir la page
function initBookingEmbed() {
  const frame = qs('[data-booking]');
  if (!frame) return;
  let started = false;
  const start = () => {
    if (started) return;
    started = true;
    // Chargeur officiel de Cal.com : met les appels en file d'attente le temps que embed.js arrive
    (function (C, A, L) { const p = (a, ar) => { a.q.push(ar); }; const d = C.document; C.Cal = C.Cal || function () { const cal = C.Cal; const ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement('script')).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === 'string') { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ['initNamespace', namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, 'https://app.cal.com/embed/embed.js', 'init');
    const Cal = window.Cal;
    Cal('init', 'booking', { origin: 'https://cal.com' });
    Cal.ns.booking('inline', {
      elementOrSelector: frame,
      calLink: frame.dataset.calLink,
      config: { layout: 'month_view', theme: 'dark', utm_source: 'processoia.com', utm_medium: 'website', utm_content: 'embed', utm_campaign: lang }
    });
    Cal.ns.booking('ui', { theme: 'dark', layout: 'month_view', hideEventTypeDetails: false });
  };
  new IntersectionObserver(([e], obs) => {
    if (!e.isIntersecting) return;
    obs.disconnect();
    start();
  }, { rootMargin: '600px 0px' }).observe(frame);
}

// Le bloc témoignage reste caché tant qu'aucune citation réelle n'est renseignée dans i18n.js
function initQuote() {
  const q = qs('[data-quote]');
  if (q && t.work.quote.text.trim()) q.hidden = false;
}

/* =========================================================
   Pourquoi moi : portrait révélé
   ========================================================= */
function initPortrait() {
  const fig = qs('[data-portrait]');
  if (!fig || reduceMotion) return;
  const frame = qs('[data-portrait-frame]', fig);
  const img = qs('img', frame);
  const scan = qs('[data-portrait-scan]', fig);
  const corners = qsa('.portrait__corner', fig);
  gsap.timeline({ scrollTrigger: { trigger: fig, start: 'top 80%', once: true } })
    .fromTo(frame, { clipPath: 'inset(100% 0% 0% 0% round 26px)' }, { clipPath: 'inset(0% 0% 0% 0% round 26px)', duration: 1.6, ease: 'expo.inOut' })
    .fromTo(img, { scale: 1.35 }, { scale: 1, duration: 2, ease: 'expo.out' }, 0.2)
    .fromTo(scan, { top: '0%', opacity: 1 }, { top: '100%', duration: 1.4, ease: 'power2.inOut' }, 0.7)
    .to(scan, { opacity: 0, duration: 0.3 }, 2)
    .from(corners, { scale: 0, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'back.out(2.5)' }, 1.1);
  gsap.fromTo(img, { yPercent: 0 }, { yPercent: -11, ease: 'none', scrollTrigger: { trigger: fig, start: 'top bottom', end: 'bottom top', scrub: true } });
}

/* =========================================================
   Processus : cartes empilées
   ========================================================= */
function initStack() {
  if (reduceMotion) return;
  const stack = qs('[data-stack]');
  const cards = qsa('[data-stack-card]');
  const nums = cards.map((c) => qs('.stack__num', c));
  let geo = [];

  const measure = () => {
    cards.forEach((c) => { c.style.transform = ''; });
    const top = stack.getBoundingClientRect().top + window.scrollY;
    const gap = parseFloat(getComputedStyle(stack).rowGap) || 0;
    let acc = 0;
    geo = cards.map((c) => {
      const F = top + acc;
      acc += c.offsetHeight + gap;
      return { F, stick: parseFloat(getComputedStyle(c).top) || 0 };
    });
  };

  const render = () => {
    if (!geo.length) return;
    const s = window.scrollY;
    const vh = window.innerHeight;
    cards.forEach((card, i) => {
      // Remplissage du grand numéro à l'arrivée de la carte
      const v = geo[i].F - s;
      const fill = gsap.utils.clamp(0, 1, (vh * 0.85 - v) / (vh * 0.5));
      nums[i].style.backgroundPosition = `0% ${(fill * 100).toFixed(1)}%`;
      // Recul de la carte quand la suivante la recouvre
      const next = geo[i + 1];
      if (!next) return;
      const vn = next.F - s;
      const k = gsap.utils.clamp(0, 1, (vh - vn) / (vh - next.stick));
      const scale = 1 - k * 0.05 * (cards.length - 1 - i);
      card.style.transform = `scale(${scale.toFixed(4)})`;
      card.style.setProperty('--dim', (k * 0.55).toFixed(3));
    });
  };

  ScrollTrigger.create({ trigger: stack, start: 'top bottom', end: 'bottom top', onRefresh: () => { measure(); render(); }, onUpdate: render });
}

/* =========================================================
   FAQ
   ========================================================= */
function initFaq() {
  qsa('[data-acc]').forEach((acc) => {
    const btn = qs('.acc__btn', acc);
    btn.addEventListener('click', () => {
      const open = !acc.classList.contains('is-open');
      qsa('[data-acc].is-open').forEach((o) => {
        if (o === acc) return;
        o.classList.remove('is-open');
        qs('.acc__btn', o).setAttribute('aria-expanded', 'false');
      });
      acc.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', String(open));
      setTimeout(() => ScrollTrigger.refresh(), 650);
    });
  });
}

/* =========================================================
   Pied de page
   ========================================================= */
function initFooter() {
  if (reduceMotion) return;
  const mark = qs('[data-footer-mark]');
  const split = SplitText.create(mark, { type: 'chars' });
  gsap.from(split.chars, {
    yPercent: 100, opacity: 0, duration: 1.4, stagger: 0.045, ease: 'expo.out',
    scrollTrigger: { trigger: mark, start: 'top 98%', once: true },
    onComplete: () => split.revert()
  });
}

/* =========================================================
   Navigation, langue, menu mobile
   ========================================================= */
let menuOpen = false;

function initNav() {
  const nav = qs('[data-nav]');
  ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate(self) {
      const y = self.scroll();
      nav.classList.toggle('is-scrolled', y > 30);
      if (!menuOpen) nav.classList.toggle('is-hidden', self.direction === 1 && y > 320);
    }
  });
  gsap.to('.progress span', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.3 } });
}

function initLangMenu() {
  const box = qs('[data-lang]');
  const btn = qs('.lang__btn', box);
  const close = () => { box.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); };
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = !box.classList.contains('is-open');
    box.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
    if (open) qs('[aria-checked="true"]', box)?.focus();
  });
  qsa('[data-set-lang]', box).forEach((b) => b.addEventListener('click', (e) => {
    e.preventDefault();
    close();
    btn.focus();
    setLang(b.dataset.setLang);
  }));
  document.addEventListener('click', (e) => { if (!box.contains(e.target)) close(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && box.classList.contains('is-open')) { close(); btn.focus(); }
  });
}

function openMenu() {
  const menu = qs('[data-mmenu]');
  const burger = qs('[data-burger]');
  menuOpen = true;
  menu.classList.add('is-open');
  burger.setAttribute('aria-expanded', 'true');
  burger.setAttribute('aria-label', t.ui.close);
  qs('[data-nav]').classList.remove('is-hidden');
  lenis?.stop();
  if (!reduceMotion) {
    gsap.fromTo(qsa('.mmenu__links a, .mmenu__cta', menu), { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, stagger: 0.05, duration: 0.9, delay: 0.1, ease: 'expo.out' });
  }
}

function closeMenu() {
  if (!menuOpen) return;
  menuOpen = false;
  qs('[data-mmenu]').classList.remove('is-open');
  const burger = qs('[data-burger]');
  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-label', t.ui.menu);
  lenis?.start();
}

function initMenu() {
  const burger = qs('[data-burger]');
  burger.addEventListener('click', () => (menuOpen ? closeMenu() : openMenu()));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOpen) { closeMenu(); burger.focus(); }
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 1100) closeMenu(); });
}

/* =========================================================
   Micro-interactions : boutons magnétiques, curseur
   ========================================================= */
function initMagnetic() {
  if (!finePointer || reduceMotion) return;
  qsa('.magnetic').forEach((el) => {
    const xTo = gsap.quickTo(el, 'x', { duration: 0.8, ease: 'elastic.out(1, 0.4)' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.8, ease: 'elastic.out(1, 0.4)' });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - r.left - r.width / 2) * 0.3);
      yTo((e.clientY - r.top - r.height / 2) * 0.4);
    });
    el.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
  });
}

function initCursor() {
  if (!finePointer || reduceMotion) return;
  root.classList.add('has-cursor');
  const cur = qs('.cursor');
  const dot = qs('.cursor__dot');
  const ring = qs('.cursor__ring');
  gsap.set([dot, ring], { xPercent: -50, yPercent: -50, x: -100, y: -100 });
  const dx = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3' });
  const dy = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3' });
  const rx = gsap.quickTo(ring, 'x', { duration: 0.55, ease: 'power3' });
  const ry = gsap.quickTo(ring, 'y', { duration: 0.55, ease: 'power3' });
  window.addEventListener('pointermove', (e) => { dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY); cur.style.opacity = '1'; }, { passive: true });
  document.addEventListener('pointerover', (e) => {
    cur.classList.toggle('is-hover', !!e.target.closest('a, button, [data-card]'));
  });
  document.documentElement.addEventListener('pointerleave', () => { cur.style.opacity = '0'; });
}

/* =========================================================
   Captures du CRM : rangée courbée sur l'intérieur d'un cylindre.
   Les captures défilent de droite à gauche : le centre est à plat face au
   visiteur, les bords se courbent vers lui et s'effacent en fondu.
   Une boîte CSS ne se courbe pas : chaque capture est découpée en bandes
   verticales, chacune tournée de quelques degrés autour de l'axe du
   cylindre. La capture entière tourne ensuite autour du même axe.
   Glisser pour faire défiler, survol pour arrêter, clic pour agrandir.
   ========================================================= */
function initCurve() {
  const CAMERA = 1.6; // distance de la caméra, en rayons du cylindre
  const SLICES = 16; // bandes par capture
  const deg = (rad) => (rad * 180) / Math.PI;
  const turn = (a, r) => `translateZ(${r}px) rotateY(${a}deg) translateZ(${-r}px)`;

  qsa('[data-curve]').forEach((root) => {
    const band = qs('[data-curve-band]', root);
    const wrap = root.closest('.case__media') || root;
    const caption = qs('[data-curve-caption]', wrap);
    const zoom = qs('[data-curve-zoom]', wrap);
    const items = qsa('[data-curve-source] img', root).map((img) => ({ thumb: img.getAttribute('src'), full: img.dataset.full, alt: img.alt }));
    const n = items.length;
    if (!band || !n) return;
    const first = qs('[data-curve-source] img', root);
    const aspect = (+first.getAttribute('width') || 16) / (+first.getAttribute('height') || 9);
    const opt = (key, fallback) => (Number.isFinite(parseFloat(root.dataset[key])) ? parseFloat(root.dataset[key]) : fallback);
    const gap = opt('gap', 8) / 100;
    const cruise = reduceMotion ? 0 : 1 / opt('speed', 5); // captures par seconde
    const fade = opt('fade', 12);
    const mask = `linear-gradient(90deg, transparent, #000 ${fade}%, #000 ${100 - fade}%, transparent)`;
    band.style.maskImage = mask;
    band.style.webkitMaskImage = mask;

    let L = null; // mise en place calculée pour la taille actuelle
    let tiles = [];
    let c = 0; // capture au centre, en continu (0,5 = à mi-chemin entre deux)
    let v = 0; // vitesse, en captures par seconde
    let hovered = false;
    let dragging = false;
    let shown = null;

    const wrapIndex = (k) => ((k % n) + n) % n;

    const render = () => {
      if (!L) return;
      const lo = c - L.columns / 2;
      tiles.forEach((tile, j) => {
        // Chaque capture du DOM porte le numéro k de la file qui tombe dans la boucle visible
        const k = j + L.columns * (Math.floor((lo - j) / L.columns) + 1);
        const a = (c - k) * L.pitch;
        if (tile.k !== k) {
          tile.k = k;
          const item = items[wrapIndex(k)];
          const src = L.full ? item.full : item.thumb;
          tile.imgs.forEach((img) => { if (img.getAttribute('src') !== src) img.src = src; });
        }
        tile.el.style.transform = turn(a, L.r);
        tile.el.style.visibility = Math.abs(a) > L.limit ? 'hidden' : 'visible';
      });
      const centre = wrapIndex(Math.round(c));
      if (centre !== shown && caption) {
        shown = centre;
        caption.textContent = items[centre].alt;
      }
    };

    const build = () => {
      const width = band.clientWidth;
      const height = band.clientHeight;
      const narrow = width < 640;
      // Sur téléphone, une courbe plus douce garde la capture du centre lisible
      const bend = (Math.min(85, Math.max(5, narrow ? opt('bendMobile', 38) : opt('bend', 60))) * Math.PI) / 180;
      // Rayon qui place le bord du cadre à « bend » radians sur l'arc, vu depuis la caméra
      const arc = (CAMERA - 1 + Math.cos(bend)) / (2 * CAMERA * Math.sin(bend));
      const h = Math.min((opt('tile', 70) / 100) * height, ((narrow ? opt('maxMobile', 70) : opt('max', 48)) / 100) * width / aspect);
      const r = width * arc;
      if (!(h > 0) || !(r > 0)) return;
      const unit = deg(h / r); // arc couvert par une hauteur de capture
      const pitch = (aspect + gap) * unit; // arc entre deux captures
      const limit = deg(bend) + (aspect * unit) / 2; // au-delà, la capture est hors champ
      const columns = Math.min(24, Math.max(2, Math.ceil((2 * limit) / pitch)));
      L = { r, pitch, limit: Math.min(limit, (columns * pitch) / 2), columns, full: h * aspect * (window.devicePixelRatio || 1) > 880 };
      band.style.perspective = `${r * CAMERA}px`;
      const share = aspect / SLICES;
      const w = aspect * h;
      band.textContent = '';
      tiles = Array.from({ length: columns }, () => {
        const el = document.createElement('div');
        el.className = 'curve__tile';
        el.dataset.tile = '';
        el.style.cssText = `left:calc(50% - ${w / 2}px);top:calc(50% - ${h / 2}px);width:${w}px;height:${h}px`;
        const imgs = [];
        for (let s = 0; s < SLICES; s++) {
          const strip = document.createElement('div');
          strip.className = 'curve__strip';
          // Un pixel de plus que sa part, pour qu'aucun fil ne s'ouvre entre deux bandes
          strip.style.cssText = `left:${((aspect - share) / 2) * h}px;width:${share * h + (s === SLICES - 1 ? 0 : 1)}px;height:${h}px;transform:${turn((aspect / 2 - (s + 0.5) * share) * unit, r)}`;
          const img = document.createElement('img');
          img.alt = '';
          img.draggable = false;
          img.decoding = 'async';
          img.style.cssText = `left:${-s * share * h}px;width:${w}px;height:${h}px`;
          strip.appendChild(img);
          el.appendChild(strip);
          imgs.push(img);
        }
        band.appendChild(el);
        return { el, imgs, k: null };
      });
      render();
    };

    const tick = (time, deltaMs) => {
      const dt = Math.min(deltaMs, 64) / 1000;
      if (!dragging) {
        // Ralentit jusqu'à l'arrêt au survol, puis cale la capture la plus proche au centre
        const target = hovered ? 0 : cruise;
        v += (target - v) * (1 - Math.exp(-dt * 3));
        c += v * dt;
        if (target === 0 && Math.abs(v) < 0.08) c += (Math.round(c) - c) * (1 - Math.exp(-dt * 6));
      }
      render();
    };

    const open = (k) => {
      if (!openLightbox) return;
      openLightbox(items, wrapIndex(k), {
        from: zoom,
        // Au retour, la rangée montre au centre la dernière capture regardée
        onClose: (i) => {
          let d = wrapIndex(i - Math.round(c));
          if (d > n / 2) d -= n;
          c = Math.round(c) + d;
          v = 0;
          hovered = band.matches(':hover');
          render();
        },
      });
    };
    zoom?.addEventListener('click', () => open(Math.round(c)));

    band.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') hovered = true; });
    band.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') hovered = false; });

    // Glisser à la souris ou au doigt ; un simple clic sur une capture l'agrandit
    let pid = null;
    let startX = 0;
    let startY = 0;
    let lastX = 0;
    let lastT = 0;
    band.addEventListener('pointerdown', (e) => {
      if (e.button !== 0 || !L) return;
      pid = e.pointerId;
      startX = lastX = e.clientX;
      startY = e.clientY;
      lastT = performance.now();
    });
    band.addEventListener('pointermove', (e) => {
      if (e.pointerId !== pid) return;
      if (!dragging) {
        const mx = e.clientX - startX;
        if (Math.abs(mx) < 6 || Math.abs(mx) < Math.abs(e.clientY - startY)) return;
        dragging = true;
        v = 0;
        band.setPointerCapture(pid);
        root.classList.add('is-dragging');
      }
      const now = performance.now();
      // Au centre, 1 pixel glissé = 1 pixel parcouru
      const dc = -(e.clientX - lastX) / (L.r * ((L.pitch * Math.PI) / 180));
      c += dc;
      v = v * 0.6 + (dc / (Math.max(8, now - lastT) / 1000)) * 0.4;
      lastX = e.clientX;
      lastT = now;
    });
    const end = (e) => {
      if (e.pointerId !== pid) return;
      pid = null;
      if (dragging) {
        dragging = false;
        root.classList.remove('is-dragging');
        v = performance.now() - lastT > 90 ? 0 : Math.max(-4, Math.min(4, v)); // élan du lancer
      } else if (e.type === 'pointerup') {
        const el = e.target.closest('[data-tile]');
        const tile = el && tiles.find((t) => t.el === el);
        if (tile) open(tile.k);
      }
    };
    band.addEventListener('pointerup', end);
    band.addEventListener('pointercancel', end);

    let frame = 0;
    new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(build);
    }).observe(band);

    // L'animation ne tourne que lorsque la rangée est à l'écran
    let running = false;
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) { running = true; gsap.ticker.add(tick); }
      else if (!entry.isIntersecting && running) { running = false; gsap.ticker.remove(tick); }
    }).observe(root);

    v = cruise;
    root.classList.add('is-ready');
  });
}

/* =========================================================
   Agrandissement des captures dans une fenêtre
   ========================================================= */
let openLightbox = null;
function initGallery() {
  const box = qs('[data-lightbox]');
  if (!box || typeof box.showModal !== 'function') return;
  const img = qs('[data-lightbox-img]', box);
  const caption = qs('[data-lightbox-caption]', box);
  let items = [];
  let current = 0;
  let options = {};
  const show = (n) => {
    current = (n + items.length) % items.length;
    img.src = items[current].full;
    img.alt = items[current].alt;
    caption.textContent = items[current].alt;
  };
  openLightbox = (list, index, opts = {}) => {
    items = list;
    options = opts;
    show(index);
    box.showModal();
    lenis?.stop();
  };
  qs('[data-lightbox-prev]', box).addEventListener('click', () => show(current - 1));
  qs('[data-lightbox-next]', box).addEventListener('click', () => show(current + 1));
  qs('[data-lightbox-close]', box).addEventListener('click', () => box.close());
  // Un clic hors de l'image (sur le fond) ferme la fenêtre
  box.addEventListener('click', (e) => { if (e.target === box || e.target.classList.contains('lightbox__fig')) box.close(); });
  box.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
  box.addEventListener('close', () => {
    lenis?.start();
    options.onClose?.(current);
    options.from?.focus({ preventScroll: true });
  });
}

/* =========================================================
   Démarrage
   ========================================================= */
function init() {
  lucide?.createIcons({ attrs: { 'stroke-width': 1.75 } });
  applyText();
  initLenis();
  initAnchors();

  // Ordre du document : le pin du hero doit être créé avant les déclencheurs qui le suivent
  initHero();
  initMarquee();
  buildHeadings();
  initReveals();
  initCards();
  initFlow();
  initTerminal();
  initCompare();
  initCounters();
  initQuote();
  initGallery();
  initCurve();
  initBookingLinks();
  initBookingEmbed();
  initPortrait();
  initStack();
  initFaq();
  initNav();
  initLangMenu();
  initMenu();
  initMagnetic();
  initCursor();

  root.classList.add('is-ready');

  const fonts = document.fonts ? document.fonts.ready : Promise.resolve();
  fonts.then(() => {
    // Découpages en mots et en lettres une fois les polices prêtes (sinon les mesures sont fausses)
    buildWords();
    initFooter();
    buildMarquee();
    ScrollTrigger.refresh();
  });
  const scene = loadHeroScene();
  runIntro(Promise.all([fonts, scene]));
}

init();
