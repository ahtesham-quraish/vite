import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/vite/',  // 👈 This must match your repo name
  test: {
    globals: true,
    environment: 'jsdom',
  },
})