import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/portofolio/', // harus sesuai dengan nama repo GitHub
  plugins: [react()],
})
