import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Repo `dostxpress.github.io` + custom domain dostxpress.com → site is served at URL
// root (/). A subpath base (e.g. /repo-name/) would break CSS/JS asset URLs.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
})
