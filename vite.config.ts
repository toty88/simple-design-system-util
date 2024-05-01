import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ outDir: 'dist' })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'hooks-utils',
      formats: ['es', 'umd']
    }
  },
  resolve: { alias: { '@': resolve(__dirname, './src') } }
})

// peer-dependency => dependencias indirectas para satisfacer requisitos de NUESTRA lib
