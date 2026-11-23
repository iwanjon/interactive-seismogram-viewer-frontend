//import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
//export default defineConfig({
//  plugins: [react()],
//  server: {
//    port: 5174,
//    strictPort: true,
//  },
//})


import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables from the .env file
  const env = loadEnv(mode, process.cwd(), '')

  return {
    // Read the base path from .env, fallback to '/' if not found
    base: env.VITE_APP_BASE_PATH || '/',
    plugins: [react()],
    server: {
      port: 5174,
      strictPort: true,
    },
  }
})
