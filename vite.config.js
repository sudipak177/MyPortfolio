import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Change `your-repo-name` to your actual GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: '/',
});
