import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    postcss({
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
      extract: true,
    })
  ]
})
