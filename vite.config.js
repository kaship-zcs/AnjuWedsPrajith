import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three/')) return 'vendor-three'
          if (id.includes('@react-three/fiber') || id.includes('@react-three/drei')) return 'vendor-r3f'
          if (id.includes('framer-motion')) return 'vendor-motion'
        },
      },
    },
    chunkSizeWarningLimit: 900,
  },
})
