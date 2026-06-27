import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const registryRoot = path.resolve(__dirname, 'registry/md3')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      {
        find: '@/registry/md3',
        replacement: registryRoot,
      },
      {
        find: '@/lib',
        replacement: path.join(registryRoot, 'lib'),
      },
      {
        find: '@/hooks',
        replacement: path.join(registryRoot, 'hooks'),
      },
    ],
  },
})
