# 🌌 NEXUS — College Technical Community Platform

[![Live Demo](https://img.shields.io/badge/Live%20Website-Vercel-black?style=for-the-badge&logo=vercel)](https://nexus-community-web.vercel.app)
[![Three.js](https://img.shields.io/badge/Three.js-r128-white?style=for-the-badge&logo=three.js&logoColor=black)](https://threejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

> A modern, dependency-free college technical community platform featuring an interactive **4K Ultra-HD 3D Cosmic Milky Galaxy simulation** in pure Three.js WebGL, wrapped in a high-contrast **Starlight White & Platinum Silver** glassmorphic interface.

---

## 🌐 Live Website URL

🔗 **Live Deployment:** [https://nexus-community-web.vercel.app](https://nexus-community-web.vercel.app) *(Deployment Link)*

---

## ✨ Key Features

### 🌌 1. 4K Ultra-HD 3D Cosmic Milky Galaxy Simulation
- **260,000 High-Definition Stardust Particles**: Generated via Box-Muller Gaussian mathematics mimicking natural spiral galaxy arm distribution.
- **Ultra-HD Particle Engine**: Custom 256×256 radial gradient stardust sprite with hardware trilinear mipmapping (LinearMipmapLinearFilter) and device pixel ratios up to 3.0 for razor-sharp 4K rendering.
- **Cinematic 4-Beat Detonation Sequence**:
  1. *Singularity Inception*: Breathing cosmic seed pulses at the core.
  2. *Ballistic Shockwave Burst*: Dynamic camera recoil and screen rumble as cosmic dust detonates outwards.
  3. *Accretion Vortex Swirl*: Gravitational pull draws particles into dual sweeping logarithmic spiral arms.
  4. *Continuous 3D Parallax*: Responsive mouse-following perspective tilt with smooth damping and continuous rotational drift.
- **Pure Pitch-Black Canvas (#000000)**: Zero light leakage or ambient occlusion, producing authentic astronomical contrast.

### 💎 2. High-Contrast Starlight White & Platinum Silver UI
- Complete elimination of muddy purple-blue hues in favor of crisp **Diamond Starlight White (#ffffff)** and **Platinum Silver (#cbd5e1)**.
- Translucent obsidian glass cards with starlight borders (gba(255, 255, 255, 0.15)).
- Radiant hover states, pill chips, and glow lighting synced directly with the background cosmic particle engine.

### ⚡ 3. Dynamic Event Ecosystem
- **Zero-Dependency Vanilla JS Engine**: Fast, lightweight performance without bloated frameworks or build steps.
- **Live Search & Category Filtering**: Instantly search across Hackathons, Workshops, Competitions, and Seminars.
- **Dynamic Event Details Page**: Clean query-parameter routing (pages/event-details.html?id=<event-id>) that renders schedules, guidelines, eligibility, team size, and interactive FAQ accordions.
- **Interactive Registration Modal**: Built-in modal forms with validation and success states.

---

## 📂 Project Structure

```
community-website/
│
├── index.html                   # Main landing page & hero section
├── style.css                    # Master stylesheet (Starlight contrast theme)
│
├── js/
│   ├── cosmic-background.js     # 4K Ultra-HD Three.js 3D Milky Galaxy engine
│   ├── script.js                # Core UI logic, search, category filter & modal
│   ├── hackathons.js            # Hackathon event datasets
│   ├── workshops.js             # Workshop event datasets
│   ├── competitions.js          # Competition event datasets
│   ├── seminars.js              # Seminar event datasets
│   ├── events.js                # General events & past archives
│   └── event-details.js         # Dynamic details page handler
│
├── pages/
│   └── event-details.html       # Dynamic details page template
│
├── images/                      # SVG icons & category graphics
│   ├── hackathons/
│   ├── workshops/
│   ├── competitions/
│   ├── seminars/
│   └── events/
│
├── .gitignore                   # Git ignore configuration
└── README.md                    # Project documentation & live links
```

---

## 🚀 Getting Started (Local Development)

Because NEXUS is built with clean vanilla web standards, no build tools or package installations are required.

### Run with Python:
```bash
python -m http.server 8000
```

### Run with Node.js:
```bash
npx serve .
```

Open your browser at **http://localhost:8000**.

---

## ☁️ Deployment on Vercel

This repository is optimized for instant deployment on [Vercel](https://vercel.com).

### Deploy via Vercel CLI:
```bash
# 1. Login to Vercel
npx vercel login yashaswinim1176@gmail.com

# 2. Deploy to production
npx vercel --prod --yes
```

### Deploy via GitHub:
1. Push this repository to your GitHub account: https://github.com/yashaswinim1176/Community
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import the repository and click **Deploy**.

---

## 🛠️ Built With

- **HTML5 & CSS3** — Semantic layout, CSS Grid, Flexbox, and CSS Custom Properties.
- **Vanilla JavaScript (ES6+)** — Modular datasets, URL query parameters, and IntersectionObserver.
- **Three.js (r128)** — WebGL 3D particle simulation and camera kinematics.

---

## 👤 Author

- **GitHub**: [@yashaswinim1176](https://github.com/yashaswinim1176)
- **Email**: yashaswinim1176@gmail.com
