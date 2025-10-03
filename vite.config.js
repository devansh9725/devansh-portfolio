import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying to GitHub project pages (user.github.io/<repo>), set base to '/<repo>/'.
// For custom domains or root (user.github.io), keep base as '/'.
export default defineConfig({
  plugins: [react()],
  base: '/devansh9725/',
})
