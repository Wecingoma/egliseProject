import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Désactiver pour production
    minify: 'esbuild', // Minifier le code
    terserOptions: {
      compress: {
        drop_console: true, // Supprimer console.log
        drop_debugger: true, // Supprimer debugger
      },
    }as any,
  },
})
