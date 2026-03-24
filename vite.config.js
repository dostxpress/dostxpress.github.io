import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// GitHub Pages project URL: https://<user>.github.io/dostxpress_website/
// If your repo name differs, change the base path below.
export default define Config(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: '/',
}))
