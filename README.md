<div align="center">

# 🌌 Fluxora — AI-Powered Landing Page Experience

### A Modern, AI-Generated SaaS Hero Section Built with React, Vite, Express & Gemini AI

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Express](https://img.shields.io/badge/Express-4-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-Media%20CDN-3448C5?logo=cloudinary&logoColor=white)](https://cloudinary.com/)
[![Deployed on Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?logo=netlify&logoColor=white)](https://www.netlify.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Fluxora** is a visually polished, AI-assisted landing page experience that blends a hand-crafted React/Tailwind frontend with AI-generated visual assets — combining generative image creation, AI video synthesis, and cloud media delivery into a single, production-ready full-stack web application.

</div>

---

## 📖 Project Overview

**Fluxora** is a full-stack, SaaS-style landing page application designed to demonstrate how modern AI tools can be integrated directly into a real-world frontend engineering workflow — from design ideation to final production deployment.

Rather than relying on static stock assets, this project's hero section uses an **AI-generated background video** (created with Kling AI from an AI-generated image, hosted on Cloudinary, and served dynamically through a custom Express API endpoint) layered beneath a fully responsive React + TailwindCSS UI scaffolded with the help of **Google AI Studio**.

**Why this project exists:**
- To showcase a practical, end-to-end **AI-augmented development workflow** — not just "AI wrote my code," but AI used deliberately across design, asset generation, and UI assistance.
- To demonstrate **full-stack proficiency**: a TypeScript/Express backend serving a Vite-powered React frontend, with a dedicated API layer for dynamic media resolution.
- To solve the common problem of **expensive, generic landing-page visuals** by replacing them with custom AI-generated imagery and video — at a fraction of the production cost and time.

**Main Use Case:** A reusable, production-grade hero section / landing page template for SaaS products, startups, and portfolios that want a cinematic, AI-generated visual identity without a video production budget.

---

## ✨ Features

- 🎬 **AI-Generated Background Video** — Cinematic hero video generated via Kling AI and streamed from Cloudinary's global CDN.
- 🖼️ **AI-Generated Imagery Pipeline** — Source visuals created using ChatGPT's image generation, then animated into video.
- ⚡ **Lightning-Fast Vite Build** — Instant HMR in development, optimized production bundles on build.
- 🧩 **Full-Stack TypeScript** — Unified type safety across an Express backend and React frontend.
- 🎨 **Modern Responsive UI** — Built with TailwindCSS 4 and Framer Motion (via `motion`) for fluid, professional animations.
- 🔌 **Dynamic Media Resolver API** — A dedicated `/api/video-url` endpoint decouples the frontend from hardcoded media URLs, enabling easy asset swaps without redeploying the UI.
- 🧠 **Gemini AI Integration Ready** — Pre-wired with `@google/genai` for future generative AI features (chat, content generation, personalization).
- ☁️ **Cloud-Native Media Hosting** — All heavy media assets are offloaded to Cloudinary instead of bundled into the app, keeping the build lightweight.
- 🚀 **One-Command Deployment** — Production-ready build pipeline (`vite build` + `esbuild`) outputs a single deployable Node server bundle.
- 🔒 **Environment-Based Secrets Management** — Clean `.env` separation for API keys and runtime URLs.
- 🌐 **SaaS-Style Architecture** — Structured like a real product: API layer, frontend layer, build pipeline, and deployment config all separated cleanly.

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **React 19** | Component-driven UI architecture |
| **TypeScript** | Type-safe application logic |
| **Vite 6** | Next-gen build tool & dev server |
| **TailwindCSS 4** | Utility-first, modern styling |
| **Motion (Framer Motion)** | Smooth, production-grade UI animations |
| **Lucide React** | Lightweight, consistent icon system |

### Backend
| Technology | Purpose |
|---|---|
| **Express.js** | Lightweight API & static-serving server |
| **Node.js (tsx / esbuild)** | TypeScript execution & production bundling |
| **dotenv** | Environment variable management |

### AI & Generative Tooling
| Tool | Role in Project |
|---|---|
| **ChatGPT** | Generated the AI source imagery used as the basis for the hero visual |
| **Kling AI** | Transformed the AI-generated image into a cinematic AI-generated video |
| **Google AI Studio** | Assisted in UI/UX design scaffolding and rapid frontend prototyping |
| **Google Gemini API (`@google/genai`)** | Integrated for extensible, server-side generative AI capability |

### Media & Deployment
| Service | Purpose |
|---|---|
| **Cloudinary** | Cloud hosting & global CDN delivery of the AI-generated background video |
| **Netlify** | Production hosting & continuous deployment platform |

---

## 🧭 Architecture & Workflow

### High-Level Flow

```
┌──────────────────┐     ┌────────────────────┐     ┌─────────────────────┐
│   ChatGPT (AI)    │────▶│   Kling AI (Video)  │────▶│  Cloudinary (CDN)   │
│  Image Generation │     │  Image → Video Gen   │     │   Hosted Asset URL  │
└──────────────────┘     └────────────────────┘     └──────────┬──────────┘
                                                                  │
                                                                  ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                          Express Server (server.ts)                     │
│   • Serves API routes (/api/health, /api/video-url)                     │
│   • Resolves and returns the Cloudinary-hosted video URL dynamically    │
│   • In dev: proxies requests through Vite middleware                    │
│   • In prod: serves the compiled static bundle from /dist               │
└──────────────────────────────────┬──────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                     React + Vite Frontend (src/)                        │
│   • Fetches the background video URL from /api/video-url                │
│   • Renders the responsive hero UI with TailwindCSS + Motion            │
│   • Designed/prototyped with assistance from Google AI Studio           │
└──────────────────────────────────┬──────────────────────────────────────┘
                                    │
                                    ▼
                         ┌────────────────────┐
                         │   Netlify Hosting    │
                         │  Production Deployment│
                         └────────────────────┘
```

**Workflow breakdown:**
1. **AI Image Generation** — A base hero visual is generated using ChatGPT's image generation capability.
2. **AI Video Generation** — The image is animated into a cinematic clip using Kling AI.
3. **Media Hosting** — The finished video is uploaded to Cloudinary for optimized, CDN-backed delivery.
4. **Dynamic Resolution** — The Express backend exposes a `/api/video-url` endpoint that returns the current Cloudinary asset URL, decoupling the frontend from hardcoded links.
5. **UI Rendering** — The React frontend (scaffolded with Google AI Studio's design assistance) fetches and renders the video as a full-bleed hero background.
6. **Build & Deploy** — Vite compiles the frontend; esbuild bundles the Express server into a single production artifact, ready for deployment on Netlify.

---

## 📂 Folder Structure

```
fluxora/
├── server.ts              # Express server: API routes + Vite/static integration
├── index.html             # App entry HTML, mounts React root
├── metadata.json          # App metadata (name, description, capabilities)
├── package.json           # Dependencies & npm scripts (dev/build/start)
├── tsconfig.json          # TypeScript compiler configuration (paths, JSX, target)
├── vite.config.ts         # Vite build config (React + Tailwind plugins, aliases)
├── .env.example           # Environment variable template (API keys, app URL)
├── .gitignore              # Ignored files (node_modules, dist, .env, etc.)
├── README.md               # Project documentation (this file)
└── src/                    # React application source (components, assets, styles)
```

**Key files explained:**
- **`server.ts`** — The heart of the backend. Hosts the `/api/health` and `/api/video-url` endpoints, and conditionally runs Vite in middleware mode (dev) or serves the compiled `/dist` bundle (production).
- **`vite.config.ts`** — Configures the React and TailwindCSS Vite plugins, sets up the `@/` import alias, and manages HMR/file-watching behavior for AI-assisted editing environments.
- **`metadata.json`** — Declares the app's identity and capabilities, including server-side Gemini API access.
- **`.env.example`** — Documents the required `GEMINI_API_KEY` and `APP_URL` environment variables without exposing real secrets.

---

## ⚙️ Installation & Local Setup

**Prerequisites:** [Node.js](https://nodejs.org/) (v18+ recommended)

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/fluxora.git
cd fluxora

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local
# Then edit .env.local and add your GEMINI_API_KEY

# 4. Run the development server
npm run dev
```

The app will be available at **`http://localhost:3000`**.

### Available Scripts
| Command | Description |
|---|---|
| `npm run dev` | Starts the Express + Vite development server |
| `npm run build` | Builds the frontend (Vite) and bundles the server (esbuild) for production |
| `npm start` | Runs the compiled production server (`dist/server.cjs`) |
| `npm run preview` | Previews the built frontend locally |
| `npm run lint` | Type-checks the project with `tsc --noEmit` |
| `npm run clean` | Removes build artifacts |

---

## 🚀 Deployment

### Netlify Deployment
1. Push your repository to GitHub.
2. Connect the repository to [Netlify](https://www.netlify.com/).
3. Set the build command to `npm run build` and the publish directory to `dist`.
4. Add the required environment variables (see below) under **Site settings → Environment variables**.
5. Trigger a deploy — Netlify will build and host the production bundle automatically.

### Environment Variables
| Variable | Description |
|---|---|
| `GEMINI_API_KEY` | API key for Google Gemini AI calls |
| `APP_URL` | The deployed application URL (used for self-referential links/callbacks) |

### Cloudinary Integration
Background media is hosted on **Cloudinary** rather than bundled with the app. The video URL is currently resolved server-side in `server.ts` via the `/api/video-url` endpoint, making it straightforward to swap assets, add multiple variants, or move the URL into an environment variable / Cloudinary API lookup for full dynamic control.

---

## 🖼️ Screenshots

| Home / Hero Section | Responsive Mobile View |
|---|---|
| <img width="1920" height="1080" alt="Screenshot 2026-06-30 225522" src="https://github.com/user-attachments/assets/40386be8-0604-44f7-a4f0-eb11d02a7465" /> | <img width="627" height="1013" alt="image" src="https://github.com/user-attachments/assets/b3aa0d4d-9aa7-4981-b410-36b711b20f57" /> |

| AI Video Background | UI Animations |
|---|---|
| <img width="1440" height="900" alt="Frame 1" src="https://github.com/user-attachments/assets/a2c0ee6c-0fbf-4de4-a8d5-66eb2d38ef13" /> | <img width="1892" height="966" alt="image" src="https://github.com/user-attachments/assets/7de18026-cc26-4b95-9eb2-9a0cf601197f" /> |

## 🔮 Future Improvements

- 🤖 Integrate live Gemini-powered chat/content generation within the UI.
- 🖼️ Build an in-app AI asset generation panel (image + video) using ChatGPT and Kling AI APIs directly.
- 📊 Add an analytics dashboard for visitor engagement and conversion tracking.
- 🌍 Implement multi-language (i18n) support for global audiences.
- 🧪 Add automated testing (Vitest + React Testing Library) and CI/CD via GitHub Actions.
- 🔐 Move the Cloudinary video URL into a fully dynamic, environment-driven configuration.
- 🎛️ Add a CMS-style admin panel for non-technical content updates.

---

## 👤 Author

**Your Name**
Full-Stack Developer | AI-Augmented Web Engineering

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?logo=linkedin&logoColor=white)](https://linkedin.com/in/your-profile)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?logo=github&logoColor=white)](https://github.com/your-username)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-FF5722?logo=googlechrome&logoColor=white)](https://your-portfolio.com)

---

## 📜 License

This project is licensed under the **MIT License** — free to use, modify, and distribute.

---

<div align="center">

### ⭐ If this project showcases the kind of full-stack, AI-integrated engineering you're looking for, consider giving it a star!

**Keywords:** AI project · AI-powered platform · full-stack project · modern web application · SaaS-style application · responsive web application · AI-generated media · Cloudinary integration · Netlify deployment · React TypeScript Express

</div>
