import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('.', import.meta.url))
      },
      {
        find: /^next\/navigation$/,
        replacement: fileURLToPath(
          new URL('./node_modules/next/navigation.js', import.meta.url)
        )
      }
    ]
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    server: {
      deps: {
        inline: ['next-intl']
      }
    }
  }
})
