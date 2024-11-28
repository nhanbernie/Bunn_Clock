import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url';
import path from 'path';

// Sử dụng fileURLToPath để lấy __filename và __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@shares': path.resolve(__dirname, 'src/shares'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    }
  },
})
