import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/devansh-portfolio/', // must match your repo name, keep the trailing slash
})
