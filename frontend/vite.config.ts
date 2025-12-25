
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
  server: {
    port: Number(process.env.VITE_PORT) || 3000,
    open: true,
    host: process.env.VITE_HOST || 'localhost',
    headers: {
      'Content-Security-Policy': "frame-src 'self' https://cdn.paddle.com https://sandbox-buy.paddle.com https://buy.paddle.com; script-src 'self' https://cdn.paddle.com 'unsafe-inline'; frame-ancestors 'self' https://sandbox-buy.paddle.com https://buy.paddle.com;"
    }
  },
});