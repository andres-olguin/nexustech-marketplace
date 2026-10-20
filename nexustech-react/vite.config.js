import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  base: './',
  // Las fotografías locales se incluyen para que la vista previa pueda abrirse como archivo.
  build: { assetsInlineLimit: 200000 },
});
