import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Ensure this matches the `dist` folder name used in Vercel config
    rollupOptions: {
      input: {
        main: './index.html'  // Ensure the main entry point is correct
      }
    }
  }
})
