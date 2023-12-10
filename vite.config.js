import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import shadowDomCss from 'vite-plugin-shadow-dom-css';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), shadowDomCss.default()]
});

