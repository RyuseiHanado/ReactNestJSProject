/// <reference types="vitest" />
import { resolve } from 'path'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pages': resolve(__dirname, 'src/pages'),  // ← 追加
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
      '@test': resolve(__dirname, './src/test'),
      '@': resolve(__dirname, './src'),
    },
  },
})
