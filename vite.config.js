import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // يضمن أن المسارات النسبية تعمل بشكل صحيح
  build: {
    outDir: 'dist'
  }
})
