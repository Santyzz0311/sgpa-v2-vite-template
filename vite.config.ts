import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@auth': '/src/auth',
      '@core': '/src/core',
      '@utils': '/src/utils',
    }
  }
});
