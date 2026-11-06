// Scène 3D du hero : un nuage de particules qui passe, au fil du scroll, par quatre états.
// 0 chaos (les tâches éparpillées) → 1 noyau (l'IA comprend) → 2 orbites (l'automatisation tourne) → 3 grille (l'ordre retrouvé).
// Les quatre positions de chaque particule sont précalculées ; le shader les mélange selon uMorph (piloté par GSAP).
import * as THREE from 'three';
import { SIMPLEX, SOFT_POINT } from './glsl.js';

const VERTEX = /* glsl */ `
uniform float uTime;
uniform float uMorph;
uniform float uReveal;
uniform float uSize;
uniform float uScale;
uniform vec3 uViolet;
uniform vec3 uCyan;
uniform vec3 uWhite;

attribute vec3 aChaos;
attribute vec3 aCore;
attribute vec4 aOrbit;   // anneau, phase, rayon, vitesse
attribute vec3 aGrid;
attribute vec4 aRand;
attribute float aTrail;  // 1 = tête d'un paquet de données, 0 = fin de traînée

varying vec3 vColor;
varying float vAlpha;

${SIMPLEX}

mat3 rotY(float a) { float c = cos(a), s = sin(a); return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c); }
mat3 rotX(float a) { float c = cos(a), s = sin(a); return mat3(1.0, 0.0, 0.0, 0.0, c, s, 0.0, -s, c); }

void main() {
  float t = uTime;

  // 0. Chaos : dérive lente dans un champ de bruit
  float nt = t * 0.05;
  vec3 chaos = aChaos + vec3(
    snoise(aChaos * 0.16 + vec3(nt, 0.0, 0.0)),
    snoise(aChaos * 0.16 + vec3(0.0, nt + 17.0, 0.0)),
    snoise(aChaos * 0.16 + vec3(0.0, 0.0, nt + 31.0))
  ) * 1.2;

  // 1. Noyau : sphère de Fibonacci qui tourne et respire
  mat3 spin = rotY(t * 0.16) * rotX(0.35);
  vec3 core = spin * aCore * (1.0 + 0.035 * sin(t * 1.3 + aRand.w * 6.2831));

  // 2. Orbites : des paquets de données circulent sur six anneaux inclinés
  float ang = aOrbit.y + t * aOrbit.w;
  vec3 o = vec3(cos(ang), sin(ang), 0.0) * aOrbit.z;
  o = rotY(aOrbit.x * 1.0472 + t * 0.04) * rotX(1.2 + aOrbit.x * 0.38) * o;
  float keepCore = step(aRand.x, 0.26);
  vec3 orbit = mix(o, spin * aCore * 0.6, keepCore);

  // 3. Grille : un plan ordonné, parcouru d'une houle douce
  vec3 grid = aGrid;
  grid.y += sin(grid.x * 0.5 + t * 0.8) * 0.16 + sin(grid.z * 0.65 - t * 0.6) * 0.12;

  // Transitions décalées par particule pour un mouvement organique
  float d = aRand.y * 0.35;
  float k1 = smoothstep(0.0 + d, 0.65 + d, uMorph);
  float k2 = smoothstep(1.0 + d, 1.65 + d, uMorph);
  float k3 = smoothstep(2.0 + d, 2.65 + d, uMorph);

  vec3 pos = mix(chaos, core, k1);
  pos = mix(pos, orbit, k2);
  pos = mix(pos, grid, k3);

  // Tourbillon pendant les transitions
  float bump = 4.0 * (k1 * (1.0 - k1) + k2 * (1.0 - k2) + k3 * (1.0 - k3));
  pos += vec3(
    snoise(pos * 0.45 + vec3(t * 0.2)),
    snoise(pos * 0.45 + vec3(9.0 + t * 0.2)),
    snoise(pos * 0.45 + vec3(21.0 + t * 0.2))
  ) * bump * 0.5;

  // Entrée de page : les particules arrivent de loin
  pos *= mix(2.4, 1.0, uReveal);

  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;

  // Couleur et intensité selon l'état
  float corePulse = 0.5 + 0.5 * sin(core.y * 2.6 - t * 2.0);
  float gridPulse = smoothstep(0.86, 1.0, sin(length(aGrid.xz - vec2(0.0, -3.0)) * 0.75 - t * 1.4));

  vec3 cChaos = mix(uViolet, uCyan, step(0.88, aRand.w));
  vec3 cCore = mix(uViolet, uCyan, clamp(aRand.w * 0.55 + corePulse * 0.45, 0.0, 1.0));
  vec3 cOrbit = mix(mix(uCyan, uWhite, aTrail * aTrail * 0.6), cCore, keepCore);
  vec3 cGrid = mix(uViolet, uCyan, gridPulse);

  float aChaosA = 0.36 + 0.6 * aRand.z;
  float aCoreA = 0.4 + 0.6 * corePulse;
  float aOrbitA = mix(0.25 + 0.75 * aTrail, aCoreA, keepCore);
  float aGridA = 0.3 + 0.7 * gridPulse;

  vec3 col = mix(cChaos, cCore, k1);
  col = mix(col, cOrbit, k2);
  col = mix(col, cGrid, k3);
  float a = mix(aChaosA, aCoreA, k1);
  a = mix(a, aOrbitA, k2);
  a = mix(a, aGridA, k3);

  float depth = -mv.z;
  a *= smoothstep(32.0, 7.0, depth) * uReveal;
  vColor = col;
  vAlpha = a;

  float size = uSize * (0.5 + aRand.z);
  size *= 1.0 + aTrail * 0.6 * k2 * (1.0 - k3);
  size *= 1.0 + gridPulse * 0.6 * k3;
  gl_PointSize = min(size * uScale / depth, 64.0);
}
`;

const FRAGMENT = /* glsl */ `
varying vec3 vColor;
varying float vAlpha;
${SOFT_POINT}
void main() {
  float a = softPoint(gl_PointCoord) * vAlpha;
  if (a <= 0.002) discard;
  gl_FragColor = vec4(vColor, a);
  #include <colorspace_fragment>
}
`;

// Ancrages 3D des étiquettes de tâches (chapitre 1), aspirées vers le noyau au chapitre 2.
const CHIP_ANCHORS = [
  [-4.6, 2.3, 0.5], [-1.0, 2.9, -0.5], [2.4, 2.5, 0.8], [4.3, 1.9, -1.0],
  [3.2, -0.7, 1.6], [4.4, -2.1, 0.0], [1.0, -2.5, 1.2], [-2.4, 0.8, 1.8]
];

const smooth = (a, b, x) => { const k = Math.min(Math.max((x - a) / (b - a), 0), 1); return k * k * (3 - 2 * k); };

function buildAttributes(count, mobile) {
  const chaos = new Float32Array(count * 3);
  const core = new Float32Array(count * 3);
  const orbit = new Float32Array(count * 4);
  const grid = new Float32Array(count * 3);
  const rand = new Float32Array(count * 4);
  const trail = new Float32Array(count);

  const RINGS = 6;
  const PACKETS = 4;
  const golden = Math.PI * (3 - Math.sqrt(5));
  const cols = Math.ceil(Math.sqrt(count * 2.1));
  const rows = Math.ceil(count / cols);
  // Sur mobile la scène est réduite (voir resize) : la grille est plus large et plus proche pour remplir l'écran
  const gridW = mobile ? 18 : 24;
  const gridD = mobile ? 22 : 18;
  const gridZ0 = mobile ? 6 : 3.5;

  for (let i = 0; i < count; i++) {
    // Chaos : ellipsoïde large, plus dense vers le centre
    const u = Math.random() * 2 - 1;
    const th = Math.random() * Math.PI * 2;
    const r = 2.5 + Math.pow(Math.random(), 0.6) * 9.5;
    const s = Math.sqrt(1 - u * u);
    chaos[i * 3] = s * Math.cos(th) * r * 1.35;
    chaos[i * 3 + 1] = u * r * 0.62;
    chaos[i * 3 + 2] = s * Math.sin(th) * r * 0.75 - 1.5;

    // Noyau : sphère de Fibonacci + un cinquième des points à l'intérieur
    const fy = 1 - (i / (count - 1)) * 2;
    const fr = Math.sqrt(1 - fy * fy);
    const ft = golden * i;
    const cr = i % 5 === 0 ? 0.55 + Math.random() * 1.15 : 1.85;
    core[i * 3] = Math.cos(ft) * fr * cr;
    core[i * 3 + 1] = fy * cr;
    core[i * 3 + 2] = Math.sin(ft) * fr * cr;

    // Orbites : paquets avec traînée, plus un fil continu et discret sur chaque anneau
    const ring = i % RINGS;
    const dir = ring % 2 ? -1 : 1;
    let phase;
    if (Math.random() < 0.3) {
      phase = Math.random() * Math.PI * 2;
      trail[i] = 0.12;
    } else {
      const packet = Math.floor(Math.random() * PACKETS);
      const spread = Math.pow(Math.random(), 1.7) * 1.2;
      phase = packet * ((Math.PI * 2) / PACKETS) + ring * 0.9 - spread * dir;
      trail[i] = 1 - spread / 1.2;
    }
    orbit[i * 4] = ring;
    orbit[i * 4 + 1] = phase;
    orbit[i * 4 + 2] = 2.75 + ring * 0.17 + (Math.random() - 0.5) * 0.06;
    orbit[i * 4 + 3] = dir * (0.38 + ring * 0.035);

    // Grille
    const gx = i % cols;
    const gz = Math.floor(i / cols);
    grid[i * 3] = (gx / (cols - 1) - 0.5) * gridW;
    grid[i * 3 + 1] = -1.5;
    grid[i * 3 + 2] = gridZ0 - (gz / Math.max(rows - 1, 1)) * gridD;

    rand[i * 4] = Math.random();
    rand[i * 4 + 1] = Math.random();
    rand[i * 4 + 2] = Math.random();
    rand[i * 4 + 3] = Math.random();
  }
  return { chaos, core, orbit, grid, rand, trail };
}

export class HeroScene {
  static create(canvas, params, options) {
    try {
      return new HeroScene(canvas, params, options);
    } catch (err) {
      console.warn('[hero] WebGL indisponible :', err);
      return null;
    }
  }

  constructor(canvas, params, { chips = [], reduceMotion = false } = {}) {
    this.canvas = canvas;
    this.params = params;
    this.reduceMotion = reduceMotion;
    this.mobile = canvas.clientWidth < 860;
    this.time = 0;
    this.running = false;
    this.mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    this.v = new THREE.Vector3();
    this.w = 1;
    this.h = 1;
    this.aspect = 1.6;
    this.chipScale = { x: 1, y: 1, yOff: 0 };

    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'high-performance' });
    this.renderer.setClearColor(0x000000, 0);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    this.group = new THREE.Group();
    this.scene.add(this.group);

    const count = this.mobile ? 6500 : 14000;
    const a = buildAttributes(count, this.mobile);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(a.core, 3));
    geo.setAttribute('aChaos', new THREE.BufferAttribute(a.chaos, 3));
    geo.setAttribute('aCore', new THREE.BufferAttribute(a.core, 3));
    geo.setAttribute('aOrbit', new THREE.BufferAttribute(a.orbit, 4));
    geo.setAttribute('aGrid', new THREE.BufferAttribute(a.grid, 3));
    geo.setAttribute('aRand', new THREE.BufferAttribute(a.rand, 4));
    geo.setAttribute('aTrail', new THREE.BufferAttribute(a.trail, 1));

    this.uniforms = {
      uTime: { value: 0 },
      uMorph: { value: 0 },
      uReveal: { value: 0 },
      uSize: { value: this.mobile ? 0.11 : 0.095 },
      uScale: { value: 400 },
      uViolet: { value: new THREE.Color('#8f4fe6') },
      uCyan: { value: new THREE.Color('#00e5ff') },
      uWhite: { value: new THREE.Color('#ffffff') }
    };
    const mat = new THREE.ShaderMaterial({
      vertexShader: VERTEX,
      fragmentShader: FRAGMENT,
      uniforms: this.uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    this.group.add(this.points);

    this.chips = chips.map((el, i) => ({ el, anchor: new THREE.Vector3(...CHIP_ANCHORS[i % CHIP_ANCHORS.length]) }));
    this.chipsHidden = false;

    this._onResize = () => this.resize();
    window.addEventListener('resize', this._onResize);
    if (!reduceMotion) {
      this._onMove = (e) => {
        this.mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
        this.mouse.ty = (e.clientY / window.innerHeight) * 2 - 1;
      };
      window.addEventListener('pointermove', this._onMove, { passive: true });
    }
    this.resize();
    this.frame();
  }

  resize() {
    const w = this.canvas.clientWidth;
    const h = this.canvas.clientHeight;
    if (!w || !h) return;
    const aspect = w / h;
    const pr = Math.min(window.devicePixelRatio || 1, w < 860 ? 1.5 : 1.75);
    this.renderer.setPixelRatio(pr);
    this.renderer.setSize(w, h, false);
    this.camera.aspect = aspect;
    this.camera.fov = aspect < 0.8 ? 58 : aspect < 1.2 ? 48 : 40;
    this.camera.updateProjectionMatrix();
    this.uniforms.uScale.value = h * pr * 0.5;
    this.w = w;
    this.h = h;
    this.aspect = aspect;
    // Sur écran étroit, on resserre la scène pour garder le noyau et les orbites dans le cadre
    const s = Math.min(Math.max(aspect / 1.3, 0.62), 1);
    this.group.scale.setScalar(s);
    // Sur mobile, le texte occupe le bas de l'écran : les étiquettes restent dans la moitié haute
    this.chipScale = aspect < 1
      ? { x: Math.min(Math.max(aspect / 1.78, 0.3), 1), y: 0.75, yOff: 1.9 }
      : { x: Math.min(aspect / 1.78, 1), y: 1, yOff: 0 };
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.last = performance.now();
    this.renderer.setAnimationLoop(() => this.frame());
  }

  stop() {
    this.running = false;
    this.renderer.setAnimationLoop(null);
  }

  frame() {
    const now = performance.now();
    const dt = Math.min((now - (this.last || now)) / 1000, 0.05);
    this.last = now;
    if (!this.reduceMotion) this.time += dt;

    const p = this.params;
    const u = this.uniforms;
    u.uTime.value = this.time;
    u.uMorph.value = p.morph;
    u.uReveal.value = p.reveal;

    const m = this.mouse;
    m.x += (m.tx - m.x) * 0.04;
    m.y += (m.ty - m.y) * 0.04;

    const wide = this.aspect > 1.1;
    this.group.position.set(p.shift * (wide ? 1.5 : 0), p.shift * (wide ? 0 : 0.9), 0);
    this.camera.position.set(m.x * 0.55, p.camY - m.y * 0.35, p.camZ);
    this.camera.lookAt(0, p.lookY, 0);

    this.updateChips();
    this.renderer.render(this.scene, this.camera);
  }

  updateChips() {
    if (!this.chips.length) return;
    const p = this.params;
    const k = smooth(0.12, 0.85, p.morph);
    const vis = p.chips * (1 - k) * p.reveal;
    if (vis <= 0.001) {
      if (!this.chipsHidden) {
        this.chips.forEach((c) => { c.el.style.opacity = '0'; });
        this.chipsHidden = true;
      }
      return;
    }
    this.chipsHidden = false;
    const target = this.group.position;
    const pull = k * k;
    const v = this.v;
    this.chips.forEach((c, i) => {
      const cs = this.chipScale;
      v.set(c.anchor.x * cs.x, c.anchor.y * cs.y + cs.yOff + Math.sin(this.time * 0.8 + i * 1.7) * 0.12, c.anchor.z);
      v.lerp(target, pull);
      v.project(this.camera);
      const x = (v.x * 0.5 + 0.5) * this.w;
      const y = (-v.y * 0.5 + 0.5) * this.h;
      c.el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -50%) scale(${(1 - k * 0.7).toFixed(3)})`;
      c.el.style.opacity = String(v.z < 1 ? vis : 0);
    });
  }
}
