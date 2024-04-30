import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteCompression from 'vite-plugin-compression';
import { compression } from 'vite-plugin-compression2'

export default defineConfig({
  plugins: [
    react(), 
    viteCompression(), 
    compression(),
    // compression({ algorithm: 'gzip' }),
  ],
  base: '/CV/',
})
