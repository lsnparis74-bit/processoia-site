// Orbe de l'agent IA (section Agents) : un cœur organique qui « réfléchit », un réseau de nœuds
// qui pulsent autour, et trois satellites qui partent agir sur des outils. Réagit au pointeur.
import * as THREE from 'three';
import { SIMPLEX, SOFT_POINT } from './glsl.js';

const BLOB_VERTEX = /* glsl */ `
uniform float uTime;
uniform float uAmp;
varying vec3 vNormal;
varying vec3 vView;
varying float vNoise;
${SIMPLEX}
void main() {
  float n = snoise(position * 0.9 + vec3(uTime * 0.22));
  float n2 = snoise(position * 2.3 - vec3(uTime * 0.35));
  vec3 p = position + normal * (n * 0.2 + n2 * 0.05) * uAmp;
  vNoise = n;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vNormal = normalize(normalMatrix * normal);
  vView = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}
`;

const BLOB_FRAGMENT = /* glsl */ `
uniform vec3 uDeep;
uniform vec3 uViolet;
uniform vec3 uCyan;
varying vec3 vNormal;
varying vec3 vView;
varying float vNoise;
void main() {
  float fres = pow(1.0 - max(dot(vNormal, vView), 0.0), 2.2);
  vec3 col = mix(uDeep, uViolet, smoothstep(-0.7, 0.9, vNoise));
  col += uViolet * (vNormal.y * 0.5 + 0.5) * 0.25;
  col = mix(col, uCyan, fres * 0.85);
  col += uCyan * pow(fres, 5.0) * 0.8;
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}
`;

const POINT_VERTEX = /* glsl */ `
uniform float uTime;
uniform float uScale;
attribute float aPhase;
attribute float aSize;
attribute float aCyan;
varying float vGlow;
varying float vCyan;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float pulse = 0.5 + 0.5 * sin(uTime * 1.8 + aPhase * 6.2831);
  vGlow = 0.4 + 0.6 * pulse;
  vCyan = aCyan;
  gl_PointSize = aSize * (0.8 + 0.4 * pulse) * uScale / -mv.z;
}
`;

const POINT_FRAGMENT = /* glsl */ `
uniform vec3 uViolet;
uniform vec3 uCyan;
varying float vGlow;
varying float vCyan;
${SOFT_POINT}
void main() {
  float a = softPoint(gl_PointCoord) * vGlow;
  if (a <= 0.002) discard;
  gl_FragColor = vec4(mix(uViolet, uCyan, vCyan), a);
  #include <colorspace_fragment>
}
`;

export class AgentOrb {
  static create(canvas, options) {
    try {
      return new AgentOrb(canvas, options);
    } catch (err) {
      console.warn('[orb] WebGL indisponible :', err);
      return null;
    }
  }

  constructor(canvas, { reduceMotion = false } = {}) {
    this.canvas = canvas;
    this.reduceMotion = reduceMotion;
    this.time = 0;
    this.running = false;
    this.pointer = { x: 0, y: 0, tx: 0, ty: 0, amp: 1, tamp: 1 };

    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    this.renderer.setClearColor(0x000000, 0);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
    this.camera.position.set(0, 0, 12);
    this.root = new THREE.Group();
    this.scene.add(this.root);

    const violet = new THREE.Color('#8f4fe6');
    const cyan = new THREE.Color('#00e5ff');

    // Cœur organique
    this.blobUniforms = {
      uTime: { value: 0 },
      uAmp: { value: 1 },
      uDeep: { value: new THREE.Color('#14042a') },
      uViolet: { value: new THREE.Color('#5b1a9e') },
      uCyan: { value: cyan }
    };
    const blob = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.35, 40),
      new THREE.ShaderMaterial({ vertexShader: BLOB_VERTEX, fragmentShader: BLOB_FRAGMENT, uniforms: this.blobUniforms })
    );
    this.root.add(blob);

    // Réseau : coque géodésique en fil + nœuds lumineux aux sommets
    this.shell = new THREE.Group();
    this.root.add(this.shell);
    const shellGeo = new THREE.IcosahedronGeometry(2.3, 1);
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(shellGeo),
      new THREE.LineBasicMaterial({ color: '#a77be0', transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    this.shell.add(edges);

    const pos = shellGeo.attributes.position;
    const seen = new Set();
    const nodes = [];
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
      const key = `${x.toFixed(3)}|${y.toFixed(3)}|${z.toFixed(3)}`;
      if (!seen.has(key)) { seen.add(key); nodes.push(x, y, z); }
    }
    const n = nodes.length / 3;
    const phases = new Float32Array(n).map(() => Math.random());
    const sizes = new Float32Array(n).map(() => 0.22 + Math.random() * 0.18);
    const cyans = new Float32Array(n).map(() => (Math.random() < 0.35 ? 1 : 0));
    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute('position', new THREE.Float32BufferAttribute(nodes, 3));
    nodeGeo.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));
    nodeGeo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    nodeGeo.setAttribute('aCyan', new THREE.BufferAttribute(cyans, 1));

    this.pointUniforms = {
      uTime: { value: 0 },
      uScale: { value: 300 },
      uViolet: { value: violet },
      uCyan: { value: cyan }
    };
    const pointMat = new THREE.ShaderMaterial({
      vertexShader: POINT_VERTEX,
      fragmentShader: POINT_FRAGMENT,
      uniforms: this.pointUniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    this.shell.add(new THREE.Points(nodeGeo, pointMat));

    // Satellites : trois orbites inclinées, chacune avec son anneau discret
    this.sats = [
      { r: 3.0, speed: 0.55, tilt: new THREE.Euler(1.1, 0.2, 0.3), phase: 0 },
      { r: 3.35, speed: -0.42, tilt: new THREE.Euler(0.4, 0.9, -0.5), phase: 2.1 },
      { r: 2.75, speed: 0.7, tilt: new THREE.Euler(-0.6, -0.4, 1.2), phase: 4.2 }
    ];
    const ringMat = new THREE.LineBasicMaterial({ color: '#00e5ff', transparent: true, opacity: 0.16, blending: THREE.AdditiveBlending, depthWrite: false });
    this.sats.forEach((s) => {
      const pts = new THREE.EllipseCurve(0, 0, s.r, s.r).getPoints(120).map((p) => new THREE.Vector3(p.x, p.y, 0));
      const ring = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts), ringMat);
      ring.rotation.copy(s.tilt);
      this.root.add(ring);
      s.matrix = new THREE.Matrix4().makeRotationFromEuler(s.tilt);
    });
    const satGeo = new THREE.BufferGeometry();
    satGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(9), 3));
    satGeo.setAttribute('aPhase', new THREE.BufferAttribute(new Float32Array([0.1, 0.4, 0.7]), 1));
    satGeo.setAttribute('aSize', new THREE.BufferAttribute(new Float32Array([0.75, 0.75, 0.75]), 1));
    satGeo.setAttribute('aCyan', new THREE.BufferAttribute(new Float32Array([1, 1, 1]), 1));
    this.satPoints = new THREE.Points(satGeo, pointMat);
    this.satPoints.frustumCulled = false;
    this.root.add(this.satPoints);
    this.tmp = new THREE.Vector3();

    // Interaction
    if (!reduceMotion) {
      canvas.addEventListener('pointermove', (e) => {
        const r = canvas.getBoundingClientRect();
        this.pointer.tx = ((e.clientX - r.left) / r.width) * 2 - 1;
        this.pointer.ty = ((e.clientY - r.top) / r.height) * 2 - 1;
      });
      canvas.addEventListener('pointerenter', () => { this.pointer.tamp = 1.9; });
      canvas.addEventListener('pointerleave', () => { this.pointer.tx = 0; this.pointer.ty = 0; this.pointer.tamp = 1; });
    }

    this.ro = new ResizeObserver(() => this.resize());
    this.ro.observe(canvas);
    this.resize();
    this.frame();
  }

  resize() {
    const w = this.canvas.clientWidth;
    const h = this.canvas.clientHeight;
    if (!w || !h) return;
    const pr = Math.min(window.devicePixelRatio || 1, 2);
    this.renderer.setPixelRatio(pr);
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.pointUniforms.uScale.value = h * pr * 0.5;
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
    const t = this.time;
    const p = this.pointer;
    p.x += (p.tx - p.x) * 0.05;
    p.y += (p.ty - p.y) * 0.05;
    p.amp += (p.tamp - p.amp) * 0.04;

    this.blobUniforms.uTime.value = t * (0.8 + p.amp * 0.4);
    this.blobUniforms.uAmp.value = p.amp;
    this.pointUniforms.uTime.value = t;

    this.root.rotation.y = t * 0.12 + p.x * 0.6;
    this.root.rotation.x = p.y * 0.4;
    this.shell.rotation.y = -t * 0.08;
    this.shell.rotation.z = t * 0.05;

    const arr = this.satPoints.geometry.attributes.position;
    this.sats.forEach((s, i) => {
      const a = s.phase + t * s.speed;
      this.tmp.set(Math.cos(a) * s.r, Math.sin(a) * s.r, 0).applyMatrix4(s.matrix);
      arr.setXYZ(i, this.tmp.x, this.tmp.y, this.tmp.z);
    });
    arr.needsUpdate = true;

    this.renderer.render(this.scene, this.camera);
  }
}
