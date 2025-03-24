import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import ui from '@nuxt/ui/vite'

const configUI = {
  ui: {
    colors: {
      primary: 'green',
      neutral: 'neutral'
    }, 
    input: {
      slots: {
        base: ['border-2 border-green-500'],
      },
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ui(configUI),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

