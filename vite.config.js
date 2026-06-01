import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    allowedHosts: ["uprising-mocha-untreated.ngrok-free.dev"]
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (!id.includes('node_modules')) return;
          if (id.includes('react-dom') || id.includes('react-router-dom') || id.includes('/react/')) return 'vendor';
          if (id.includes('react-bootstrap') || id.includes('/bootstrap/')) return 'bootstrap';
          if (id.includes('react-tsparticles') || id.includes('tsparticles')) return 'particles';
          if (id.includes('react-pdf') || id.includes('pdfjs')) return 'pdf';
          if (id.includes('framer-motion')) return 'motion';
        },
      },
    },
  },
})
