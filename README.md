<div align="center">

# 🌌 Fluxora — AI-Generated Hero Section

### A polished landing page hero UI, built using Google AI Studio

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deployed on Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?logo=netlify&logoColor=white)](https://www.netlify.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### 🔗 [**View Live Demo →**](https://fluxora-app-ai.netlify.app/)

</div>

---

## 📖 About

**Fluxora** is a single-page landing/hero section UI generated and built using **Google AI Studio**. It's a front-end design exercise — a clean, animated hero layout with navigation, a lead-capture form, and a partner logo strip, set against an AI-generated video background.

This is a UI/front-end project, not a full backend product — there's no real authentication, database, or persisted lead storage behind the contact form.

---

## ✨ What's in it

- Animated hero section built with **React + TailwindCSS + Motion**
- Pill-style navigation bar with dropdown
- "Get Started" lead-capture modal with a simple form
- Partner logos strip
- Full-bleed background video, fetched dynamically from a small Express endpoint
- Responsive layout for desktop and mobile

---

## 🎬 Background Video

The background video is an AI-generated clip created with **Kling AI** (image-to-video) and hosted on **Cloudinary**. The Express server exposes a `/api/video-url` route that returns the video URL, which the React app fetches on load and plays as the hero background.

---

## 🛠️ Tech Stack

| Layer | Tools |
|---|---|
| UI Generation | Google AI Studio |
| Frontend | React 19, TypeScript, Vite, TailwindCSS, Motion, Lucide Icons |
| Backend | Express (serves the app + the `/api/video-url` endpoint) |
| Media | Kling AI (video generation), Cloudinary (hosting/CDN) |
| Hosting | Netlify |

---

## 📂 Folder Structure

```
fluxora/
├── server.ts            # Express server — serves the app + /api/video-url
├── index.html            # HTML entry point
├── metadata.json         # AI Studio app metadata
├── package.json           # Dependencies & scripts
├── tsconfig.json          # TypeScript config
├── vite.config.ts          # Vite build config
├── .env.example            # Env variable template
├── src/
│   ├── App.tsx              # Main hero section UI (nav, video bg, modal, footer)
│   ├── main.tsx              # React entry point
│   └── index.css              # Global styles
└── README.md
```

---

## ⚙️ Running Locally

**Prerequisites:** Node.js

```bash
# Clone the repo
git clone https://github.com/<your-username>/fluxora.git
cd fluxora

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your GEMINI_API_KEY in .env.local

# Run the dev server
npm run dev
```

App runs at `http://localhost:3000`.

### Scripts
| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Build frontend + bundle server for production |
| `npm start` | Run the production build |
| `npm run preview` | Preview the built frontend |
| `npm run lint` | Type-check with `tsc` |

---

## 🚀 Deployment

🌐 **Live:** [https://fluxora-app-ai.netlify.app/](https://fluxora-app-ai.netlify.app/)

Deployed on **Netlify**:
1. Push the repo to GitHub.
2. Connect it on Netlify.
3. Build command: `npm run build` · Publish directory: `dist`
4. Add the environment variables below.

| Variable | Description |
|---|---|
| `GEMINI_API_KEY` | API key (declared via AI Studio metadata) |
| `APP_URL` | Deployed app URL |

---

## 🖼️ Screenshots

| Home / Hero Section | Responsive Mobile View |
|---|---|
| <img width="1895" height="965" alt="Hero Section" src="https://github.com/user-attachments/assets/247f4f32-2e9f-44dd-ad38-3640ec07218a" /> | <img width="601" height="894" alt="Mobile View" src="https://github.com/user-attachments/assets/56fa565a-ae63-4777-856f-9ebea8c54b79" /> |

| AI Video Background | UI Animations |
|---|---|
| <img width="1440" height="900" alt="AI Video" src="https://github.com/user-attachments/assets/a2c0ee6c-0fbf-4de4-a8d5-66eb2d38ef13" /> | <img width="1892" height="966" alt="Animations" src="https://github.com/user-attachments/assets/7de18026-cc26-4b95-9eb2-9a0cf601197f" /> |

---

## 👤 Author

**Antony Steve A**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/antony-steve/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?logo=github&logoColor=white)](https://github.com/AntonySteve)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-FF5722?logo=googlechrome&logoColor=white)](https://antonysteve.lovable.app/)

---

## 📜 License

MIT
