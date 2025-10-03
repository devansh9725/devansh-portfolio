# Devansh Wadhvana — Portfolio (Vite + React + Tailwind)

A sleek, dark-themed portfolio to showcase skills, projects, and experience.

## Quick Start (Local)
```bash
npm install
npm run dev
# open http://localhost:5173
```

## Personalize
- Edit `src/components/Portfolio.jsx` — replace TODOs (email, LinkedIn, education, experience, resume path, etc.).
- Add/remove projects in the `PROJECTS` array.
- Put your PDF resume at project root and name it `Devansh_Wadhvana_Resume.pdf` (or adjust the link).

---

## Deploy — GitHub Pages (recommended)
1. **Create a new GitHub repo** (e.g., `devansh-portfolio`).
2. **Upload** these files (or push via git).
3. If deploying to `user.github.io/<repo>` (project pages), you may need to set a base path:
   - Open `vite.config.js` and change `base: '/'` to `base: '/<repo>/'` (replace `<repo>` with your repo name).
4. Ensure the included GitHub Actions workflow exists at `.github/workflows/deploy.yml`.
5. Push to `main`. The workflow will build and publish to Pages automatically.
6. Open your repo **Settings → Pages** to see the live URL.

## Deploy — Netlify
- Create a new site from your GitHub repo.
- Build command: `npm run build`
- Publish directory: `dist`
- (Optional) The included `netlify.toml` already sets these.

## Deploy — Vercel
- Import the repo in Vercel.
- Framework preset: **Vite**
- Build command: `npm run build`
- Output: `dist`

## Tech
- React 18, Vite 5, Tailwind CSS 3, Framer Motion, lucide-react.
