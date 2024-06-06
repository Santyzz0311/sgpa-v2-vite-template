import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@auth': '/src/modules/auth',
      '@core': '/src/modules/core',
      '@utils': '/src/utils',
      '@pages': '/src/pages',
    }
  }
});
