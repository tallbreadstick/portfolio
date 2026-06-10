import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import tailwindcss from '@tailwindcss/vite'

// Set BASE_PATH=/repo-name/ when deploying to a GitHub project page.
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [tailwindcss(), solid()],
})
