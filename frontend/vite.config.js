import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // This makes the server listen on all network interfaces
    port: ,  // Optionally, specify a port
  }
})
