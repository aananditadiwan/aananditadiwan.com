import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // If mode is 'github', use the GitHub Pages subfolder
  const basePath = mode === 'github' ? '/aananditadiwan.com/' : '/';

  return {
    plugins: [react()],
    base: basePath,
  };
});
