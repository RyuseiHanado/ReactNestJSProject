/// <reference types="vitest" />
import { resolve } from 'path'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pages': resolve(__dirname, 'src/pages'),
      '@repository': resolve(__dirname, 'src/repository'),
      '@test': resolve(__dirname, 'src/test'),
      '@': resolve(__dirname, 'src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    watch: false,
    alias: {
      '@pages': resolve(__dirname, './src/pages'),
      '@repository': resolve(__dirname, 'src/repository'),
      '@test': resolve(__dirname, './src/test'),
      '@': resolve(__dirname, './src'),
    },
  },
})
