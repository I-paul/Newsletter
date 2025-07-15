// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/research/mobilitynewstracker/jul_14/dist/',
  plugins: [react(),
    tailwindcss (),
  ],
});
