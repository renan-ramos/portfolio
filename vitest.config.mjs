import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { configDefaults, defineConfig } from 'vitest/config'

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
    exclude: [...configDefaults.exclude, 'e2e/**'],
    setupFiles: ['./vitest.setup.ts'],
    server: {
      deps: {
        inline: ['next-intl']
      }
    }
  }
})
