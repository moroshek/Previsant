import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer': ['framer-motion'],
          'ui-vendor': ['@radix-ui/react-label', '@radix-ui/react-navigation-menu', '@radix-ui/react-scroll-area', '@radix-ui/react-slot'],
          'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
          'utils': ['clsx', 'tailwind-merge', 'class-variance-authority'],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase limit to 1MB
  },
})
