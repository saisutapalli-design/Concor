
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Using an empty string or './' makes the build portable to any path (e.g. github.io/repo-name/)
  base: './', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure the build generates a single index.html that can find its chunks
    emptyOutDir: true,
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        // Prevents issues with some hosting providers ignoring files with specific characters
        manualChunks: undefined,
      },
    },
  },
});
