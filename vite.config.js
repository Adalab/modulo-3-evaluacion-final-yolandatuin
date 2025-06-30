import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/modulo-3-evaluacion-final-yolandatuin/",
  plugins: [react()],
  server: {
    open: "/",
    watch: {
      usePolling: true
    }
  }
});





