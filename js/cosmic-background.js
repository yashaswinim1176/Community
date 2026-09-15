/**
 * MAGNOVITE CINEMATIC 3D MILKY DUST GALAXY ANIMATION ENGINE - 4K ULTRA-HD EDITION
 * Exact identical replica of MagNovite (https://magnovite.christuniversity.in/)
 * 
 * 4K Ultra-HD & Zoomed-In Specifications:
 * - 4K Crisp Rendering: 256x256 high-resolution mipmapped stellar sprite texture & native DPR support up to 3.0
 * - 260,000+ Fine Monochrome Milky Dust Particles (110k arms, 85k core, 65k background field)
 * - Closer Zoomed-In Perspective: restingCameraZ = 5.8, restingCameraY = 0.20, lookAt = (0, -0.22, 0)
 * - Elevated Galaxy Plane: y = -0.45 for front-and-center home page framing
 * - Identical 4-Beat Cinematic Opening Detonation Sequence:
 *     Beat 1 (p: 0.00 -> 0.18): Breathing singularity seed & pre-blast implosion
 *     Beat 2/3 (p: 0.18 -> 0.62): Ballistic burst, screen rumble/shake, per-particle ignition delay, white-out blast
 *     Beat 4 (p: 0.62 -> 1.00): Vortex accretion swirl curving into 2-arm logarithmic Milky Galaxy
 *     Steady State: 3D rotating Milky Galaxy, mouse parallax, scroll depth, smooth camera framing
 * - Pure White Star Flare with 4 Diffraction Cross Spikes and Luminous Halo (Mc & Nc shaders)
 * - Seamless UI fade-in synced to cosmic opening sequence (--ui-fade)
 */

(function () {
  'use strict';

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCosmicEngine);
  } else {
    initCosmicEngine();
  }

  function initCosmicEngine() {
    if (typeof THREE === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
      script.onload = () => buildCosmicScene();
      document.head.appendChild(script);
    } else {
      buildCosmicScene();
    }
  }

  function buildCosmicScene() {
    let container = document.getElementById('cosmic-bg');
    if (!container) {
      container = document.createElement('div');
      container.id = 'cosmic-bg';
      container.setAttribute('aria-hidden', 'true');
      document.body.prepend(container);
    }

    // Fullscreen fixed background with zero occlusion on pitch-black space
    Object.assign(container.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      zIndex: '-1',
      pointerEvents: 'none',
      overflow: 'hidden',
      backgroundColor: '#000000'
    });

    const isMobile = window.innerWidth <= 768 || ('ontouchstart' in window && window.innerWidth <= 1024);

    // 4K High-Definition fine particle counts & wide radius
    const galaxyConfig = isMobile ? {
      armParticles: 45000,
      coreParticles: 38000,
      bgStars: 32000,
      arms: 2,
      armSpread: 0.76,
      radius: 9.0,
      coreRadius: 1.0,
      thickness: 0.22,
      tiltAngle: 15 * Math.PI / 180
    } : {
      armParticles: 110000,
      coreParticles: 85000,
      bgStars: 65000,
      arms: 2,
      armSpread: 0.76,
      radius: 9.6,
      coreRadius: 1.05,
      thickness: 0.22,
      tiltAngle: 15 * Math.PI / 180
    };

    // Scene & Perspective Camera Setup (Zoomed in closer so galaxy pops right up in front)
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(56, window.innerWidth / window.innerHeight, 0.1, 500);
    const restingCameraZ = 5.8; // Zoomed in closer (from 7.0 to 5.8)
    const restingCameraY = 0.20;
    camera.position.set(0, restingCameraY, 4.2);
    camera.lookAt(0, -0.22, 0);

    // 4K Ultra-HD WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: false,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const dpr = Math.min(window.devicePixelRatio || 1, 3.0); // 4K native pixel ratio support up to 3.0
    renderer.setPixelRatio(dpr);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    container.appendChild(renderer.domElement);

    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';

    // ─── 1. 4K High-Definition Particle Sprite Texture Generator (256x256) ───
    function createStellarTexture() {
      const c = document.createElement('canvas');
      c.width = 256;
      c.height = 256;
      const ctx = c.getContext('2d');
      const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
      grad.addColorStop(0.12, 'rgba(255, 255, 255, 0.96)');
      grad.addColorStop(0.35, 'rgba(255, 255, 255, 0.50)');
      grad.addColorStop(0.60, 'rgba(255, 255, 255, 0.14)');
      grad.addColorStop(0.85, 'rgba(255, 255, 255, 0.02)');
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 256, 256);
      const tex = new THREE.CanvasTexture(c);
      tex.generateMipmaps = true;
      tex.minFilter = THREE.LinearMipmapLinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.needsUpdate = true;
      return tex;
    }

    const stellarMap = createStellarTexture();

    // Box-Muller Gaussian Random Generator (s() from MagNovite)
    function gaussian() {
      let u = 0, v = 0;
      while (u === 0) u = Math.random();
      while (v === 0) v = Math.random();
      return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    }

    // ─── 2. Geometry & Detailed Attribute Generation (zc() from MagNovite) ───
    const totalParticles = galaxyConfig.armParticles + galaxyConfig.coreParticles + galaxyConfig.bgStars;
    const posArr = new Float32Array(totalParticles * 3);
    const colArr = new Float32Array(totalParticles * 3);
    const dirArr = new Float32Array(totalParticles * 3);
    const randArr = new Float32Array(totalParticles * 4);
    let pIdx = 0;

    function addParticle(x, y, z, baseBrightness, scaleFactor = 1.0) {
      posArr[pIdx * 3] = x;
      posArr[pIdx * 3 + 1] = y;
      posArr[pIdx * 3 + 2] = z;

      // Pure monochrome milky dust color (identical to MagNovite u = (0.3 + base * 0.7) * l)
      const u = (0.3 + baseBrightness * 0.7) * scaleFactor;
      colArr[pIdx * 3] = u;
      colArr[pIdx * 3 + 1] = u;
      colArr[pIdx * 3 + 2] = u;

      // Blast direction vector (aDir)
      const uDir = Math.random() * 2.0 - 1.0;
      const phi = Math.random() * Math.PI * 2.0;
      const sinT = Math.sqrt(1.0 - uDir * uDir);
      const spd = 0.6 + Math.random() * 0.8;

      dirArr[pIdx * 3] = sinT * Math.cos(phi) * spd;
      dirArr[pIdx * 3 + 1] = sinT * Math.sin(phi) * (0.5 + Math.random() * 0.7);
      dirArr[pIdx * 3 + 2] = uDir * spd;

      // Random parameters (aRand) for ignition delay, explosion speed, turbulence & size
      randArr[pIdx * 4] = Math.random();
      randArr[pIdx * 4 + 1] = Math.random();
      randArr[pIdx * 4 + 2] = Math.random();
      randArr[pIdx * 4 + 3] = Math.random();

      pIdx++;
    }

    // A. Spiral Arm Particles: 2-arm logarithmic Milky Dust spiral
    for (let i = 0; i < galaxyConfig.armParticles; i++) {
      const branchAngle = ((i % galaxyConfig.arms) / galaxyConfig.arms) * Math.PI * 2;
      const r = Math.pow(Math.random(), 0.65) * galaxyConfig.radius;
      const spinAngle = branchAngle + Math.log(1 + r * 2.5) * 1.8 + gaussian() * galaxyConfig.armSpread * (0.15 + (r / galaxyConfig.radius) * 0.85);
      const x = Math.cos(spinAngle) * r;
      const y = gaussian() * galaxyConfig.thickness * (0.3 + 0.7 * (r / galaxyConfig.radius));
      const z = Math.sin(spinAngle) * r;
      const normR = r / galaxyConfig.radius;

      addParticle(x, y, z, Math.max(0.05, 1.0 - normR * 0.8 + Math.random() * 0.15));
    }

    // B. Galactic Bulge Core Particles: Dense, luminous white nuclear core
    for (let i = 0; i < galaxyConfig.coreParticles; i++) {
      const r = Math.pow(Math.abs(gaussian()), 0.85) * galaxyConfig.coreRadius * 0.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.cos(phi) * 0.35;
      const z = r * Math.sin(phi) * Math.sin(theta);

      addParticle(x, y, z, 0.4 + Math.random() * 0.3, 0.32);
    }

    // C. Deep Cosmic Background Starfield
    for (let i = 0; i < galaxyConfig.bgStars; i++) {
      const dist = i < galaxyConfig.bgStars * 0.4 ? 4 + Math.random() * 8 : 12 + Math.random() * 43;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = dist * Math.sin(phi) * Math.cos(theta);
      const y = dist * Math.sin(phi) * Math.sin(theta);
      const z = dist * Math.cos(phi);

      addParticle(x, y, z, 0.03 + Math.random() * 0.18);
    }

    const galaxyGeometry = new THREE.BufferGeometry();
    galaxyGeometry.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
    galaxyGeometry.setAttribute('color', new THREE.BufferAttribute(colArr, 3));
    galaxyGeometry.setAttribute('aDir', new THREE.BufferAttribute(dirArr, 3));
    galaxyGeometry.setAttribute('aRand', new THREE.BufferAttribute(randArr, 4));

    // Shader Uniforms
    const uProgress = { value: 0.0 };
    const uTime = { value: 0.0 };

    // 4K Fine Grain Particle Sizing
    const galaxyMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.024 : 0.020,
      sizeAttenuation: true,
      map: stellarMap,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      opacity: 0.84
    });

    // Exact MagNovite physics vertex shader
    galaxyMaterial.onBeforeCompile = (shader) => {
      shader.uniforms.uP = uProgress;
      shader.uniforms.uTime = uTime;

      shader.vertexShader = `
        attribute vec3 aDir;
        attribute vec4 aRand;
        uniform float uP;
        uniform float uTime;
        ${shader.vertexShader}
      `;

      shader.vertexShader = shader.vertexShader.replace(
        '#include <begin_vertex>',
        `
        vec3 transformed = vec3(position);
        float p = uP;

        // ─── BEAT 1: CHARGING SINGULARITY (p 0.00 → 0.18) ───
        // A tight seed that breathes, then implodes just before it blows.
        float pulse = 0.5 + 0.5 * sin(uTime * 5.0 + aRand.w * 6.2831);
        float implode = 1.0 - 0.6 * smoothstep(0.09, 0.18, p);
        float coreRadius = 0.17 * (0.20 + aRand.y) * (0.78 + 0.40 * pulse) * implode;

        // ─── BEAT 2/3: DETONATION → EXPANSION (p 0.18 → 0.62) ───
        // Per-particle ignition delay gives the shockwave a thickness
        float delay = aRand.x * 0.05;
        float tb = clamp((p - 0.18 - delay) / 0.44, 0.0, 1.0);

        // Ballistic burst: near-instant launch, then drag bleeds off the speed
        float burst = 1.0 - exp(-4.5 * tb);

        // Wide velocity spread
        float speedVar = 0.18 + 1.30 * pow(aRand.z, 1.5);
        float explosionRadius = coreRadius + burst * speedVar * 15.0;

        vec3 scatteredPos = aDir * explosionRadius;

        // Turbulence: held to ~10% of the blast radius so the debris curls
        float turb = burst * (0.6 + 0.8 * aRand.y);
        scatteredPos += turb * vec3(
          sin(uTime * 0.90 + aRand.w * 20.0),
          cos(uTime * 0.75 + aRand.x * 17.0),
          sin(uTime * 0.60 + aRand.y * 23.0)
        ) * 1.8;

        // ─── BEAT 4: ACCRETION INTO THE GALAXY (p 0.62 → 1.00) ───
        // Staggered by target radius: core knits first, arms sweep in behind
        float tm = clamp((p - 0.62) / 0.38, 0.0, 1.0);
        float stagger = clamp(length(position) / 12.0, 0.0, 1.0);
        float m = clamp((tm - stagger * 0.38) / 0.62, 0.0, 1.0);
        m = m * m * (3.0 - 2.0 * m);

        vec3 infall = mix(scatteredPos, position, m);

        // Swirl the in-fall around the galactic axis
        float swirl = (1.0 - m) * 2.4 * (0.55 + 0.55 * aRand.z);
        float cs = cos(swirl);
        float sn = sin(swirl);
        transformed = vec3(
          infall.x * cs - infall.z * sn,
          infall.y,
          infall.x * sn + infall.z * cs
        );
        `
      );

      shader.vertexShader = shader.vertexShader.replace(
        '#include <color_vertex>',
        `
        #include <color_vertex>

        // A short white-out at the instant of detonation
        float ignite = exp(-26.0 * abs(uP - 0.20));
        // Debris cools as it flies, then brightens back as galaxy forms
        float cool = mix(1.0, 0.72, smoothstep(0.20, 0.42, uP)) + 0.28 * smoothstep(0.62, 0.95, uP);
        vColor *= cool * (1.0 + 3.2 * ignite);
        `
      );

      shader.vertexShader = shader.vertexShader.replace(
        '#include <fog_vertex>',
        `
        #include <fog_vertex>

        // During charge, show only sparse subset of seed
        float seedMask = step(aRand.y, 0.15);
        float ignited = smoothstep(0.17, 0.23, p);
        float visibility = max(seedMask * smoothstep(0.0, 0.06, p), ignited);

        // Sprites flare at the blast and cool back to resting size
        float flare = exp(-16.0 * abs(p - 0.21));
        float sizeBoost = 1.0 + 2.4 * (1.0 - smoothstep(0.20, 0.80, p)) + 3.0 * flare;
        gl_PointSize *= sizeBoost * visibility;
        `
      );
    };

    const galaxyPoints = new THREE.Points(galaxyGeometry, galaxyMaterial);
    galaxyPoints.rotation.x = galaxyConfig.tiltAngle;
    galaxyPoints.position.y = -0.45; // Elevated for closer zoom framing
    scene.add(galaxyPoints);

    // ─── 3. Exact Central Star Flare (Mc & Nc from MagNovite) ───
    const flareUniforms = {
      uIntensity: { value: 0.0 },
      uCore: { value: 1.0 },
      uSpike: { value: 0.0 }
    };

    const flareVert = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const flareFrag = `
      precision highp float;
      varying vec2 vUv;
      uniform float uIntensity;
      uniform float uCore;
      uniform float uSpike;

      void main() {
        vec2 q = (vUv - 0.5) * 2.0;
        float d = length(q);
        float halo = pow(max(0.0, 1.0 - d), 3.6);
        float core = pow(max(0.0, 1.0 - d * 3.0), 8.0) * uCore;

        // Diffraction spikes
        float fade = pow(max(0.0, 1.0 - d), 1.5);
        float sx = pow(max(0.0, 1.0 - abs(q.y) * 16.0), 2.0);
        float sy = pow(max(0.0, 1.0 - abs(q.x) * 16.0), 2.0);
        float spikes = (sx + sy) * fade * uSpike;

        float a = (halo * 0.45 + core + spikes * 0.5) * uIntensity;
        gl_FragColor = vec4(vec3(1.0), clamp(a, 0.0, 1.0));
      }
    `;

    const flareMat = new THREE.ShaderMaterial({
      vertexShader: flareVert,
      fragmentShader: flareFrag,
      uniforms: flareUniforms,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending
    });

    const flareMesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), flareMat);
    flareMesh.position.copy(galaxyPoints.position);
    flareMesh.renderOrder = 2;
    scene.add(flareMesh);

    // ─── 4. Animation Helpers (Exact Ce, we, Te, Ee, De, Oe from MagNovite) ───
    function Ce(min, max, val) {
      const r = Math.min(1, Math.max(0, (val - min) / (max - min)));
      return r * r * (3 - 2 * r);
    }

    function we(val, min, max) {
      const r = Math.min(1, Math.max(0, (val - min) / (max - min)));
      return Math.sin(r * Math.PI) ** 2 * (r > 0 && r < 1 ? 1 : 0);
    }

    function Te(a, b, t) {
      return a + (b - a) * t;
    }

    function Ee(e) {
      return e < 0.14 ? 0.20 : e < 0.18 ? 0.09 : e < 0.34 ? 0.62 : e < 0.62 ? 0.30 : Te(0.22, 0.12, (e - 0.62) / 0.38);
    }

    function De(e, t) {
      const n = 0.5 + 0.5 * Math.sin(t * 0.7);
      const r = 1 - Ce(0.16, 0.26, e);
      const i = we(e, 0.17, 0.32);
      const a = Ce(0.66, 1.0, e);
      return {
        scale: Te(0.7, 1.6, Ce(0, 0.16, e)) * r + 3.6 * i + (2.5 + 0.12 * n) * a,
        intensity: 0.95 * Ce(0, 0.08, e) * r + 1.6 * i + (0.72 + 0.07 * n) * a,
        spike: r * 0.9 + i * 0.5
      };
    }

    function Oe(e) {
      return Te(Te(4.2, 8.0, Ce(0.17, 0.36, e)), restingCameraZ, Ce(0.5, 1.0, e));
    }

    // ─── 5. Mouse Parallax & Scroll Listeners ───
    let mouseX = 0, mouseY = 0;
    let targetMouseX = 0, targetMouseY = 0;
    let scrollRot = 0, targetScrollRot = 0;
    let prevScrollOffset = 0;

    window.addEventListener('mousemove', (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });

    const getScrollRange = () => Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);

    window.addEventListener('scroll', () => {
      targetScrollRot = (window.scrollY / getScrollRange()) * Math.PI * 2;
    }, { passive: true });

    // ─── 6. Render Loop (Exact ke() from MagNovite) ───
    let progressE = 0.0;
    let isBlastFinished = false;
    let prevTime = performance.now();
    let galaxyContinuousRot = 0;
    let isVisible = true;
    let lastUiFade = '';

    document.addEventListener('visibilitychange', () => {
      isVisible = !document.hidden;
      if (isVisible) prevTime = performance.now();
    });

    function renderLoop() {
      requestAnimationFrame(renderLoop);
      if (!isVisible) return;

      const now = performance.now();
      const deltaSec = Math.min((now - prevTime) / 1000, 0.1);
      prevTime = now;

      uTime.value += deltaSec;

      // Advance opening cinematic beats
      if (!isBlastFinished) {
        progressE = Math.min(1.0, progressE + deltaSec * Ee(progressE));
        uProgress.value = progressE;
        if (progressE >= 1.0) {
          isBlastFinished = true;
        }
      }

      const pVal = uProgress.value;

      // Smooth UI emergence sync (--ui-fade)
      const uiFadeVal = Ce(0.78, 0.97, pVal).toFixed(4);
      if (uiFadeVal !== lastUiFade) {
        document.documentElement.style.setProperty('--ui-fade', uiFadeVal);
        lastUiFade = uiFadeVal;
      }

      // Smooth scroll rotation tracking
      if (isBlastFinished) {
        const scrollDiff = targetScrollRot - prevScrollOffset;
        prevScrollOffset += scrollDiff * Math.min(deltaSec * 4.0, 1.0);
      }

      // Continuous galaxy rotation
      galaxyContinuousRot += deltaSec * 0.08;
      galaxyPoints.rotation.x = galaxyConfig.tiltAngle;
      galaxyPoints.rotation.y = prevScrollOffset + galaxyContinuousRot;

      // Flare attributes
      const flareParam = De(pVal, uTime.value);
      flareMesh.scale.set(flareParam.scale, flareParam.scale, 1);
      flareUniforms.uIntensity.value = flareParam.intensity;
      flareUniforms.uSpike.value = flareParam.spike;

      // Smooth mouse lerping
      mouseX += (targetMouseX - mouseX) * Math.min(deltaSec * 4.0, 1.0);
      mouseY += (targetMouseY - mouseY) * Math.min(deltaSec * 4.0, 1.0);

      // Screen rumble / camera shake during detonation
      let shakeX = 0, shakeY = 0;
      let camZ = restingCameraZ;
      if (!isBlastFinished) {
        camZ = Oe(pVal);
        const shakeMag = pVal < 0.18 ? 0 : 0.22 * Math.exp(-16.0 * (pVal - 0.18));
        shakeX = Math.sin(uTime.value * 47.0) * shakeMag;
        shakeY = Math.cos(uTime.value * 39.0) * shakeMag;
      }

      // Parallax camera positioning
      const parallaxX = isMobile ? 0 : mouseX * 0.15;
      const parallaxY = isMobile ? 0 : -mouseY * 0.12;
      camera.position.set(parallaxX + shakeX, restingCameraY + parallaxY + shakeY, camZ);
      camera.lookAt(0, -0.22, 0);
      flareMesh.quaternion.copy(camera.quaternion);

      renderer.render(scene, camera);
    }

    renderLoop();

    // ─── Trigger Replay helper ───
    window.replayCosmicScene = function () {
      progressE = 0.0;
      uProgress.value = 0.0;
      isBlastFinished = false;
      document.documentElement.style.setProperty('--ui-fade', '0');
    };

    // Replay when brand logo or replay button clicked
    const brandLinks = document.querySelectorAll('.brand, .brand-mark, .cosmic-replay-btn');
    brandLinks.forEach((el) => {
      el.style.cursor = 'pointer';
      el.addEventListener('click', (e) => {
        if (el.tagName === 'BUTTON' || el.classList.contains('brand-mark') || el.classList.contains('brand')) {
          window.replayCosmicScene();
        }
      });
    });

    // ─── Window Resize Listener (4K resolution handling) ───
    function updateCameraAspect() {
      const e = window.innerWidth / window.innerHeight;
      camera.aspect = e;
      camera.near = 0.1;
      camera.far = 500;
      if (e < 1.4) {
        const t = 56 * Math.PI / 180;
        const n = 2 * Math.atan(Math.tan(t / 2) * 1.4);
        const r = 2 * Math.atan(Math.tan(n / 2) / e);
        camera.fov = Math.min(82, r * 180 / Math.PI);
      } else {
        camera.fov = 56;
      }
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 3.0));
    }

    window.addEventListener('resize', updateCameraAspect);
    updateCameraAspect();
  }
})();
