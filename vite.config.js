import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://manuelver.github.io/gh-page-manuelver/',
  plugins: [react()]
})
