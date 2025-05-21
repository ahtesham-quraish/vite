import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [react(), eslint()],
  base: '/vite/', // 👈 This must match your repo name
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
