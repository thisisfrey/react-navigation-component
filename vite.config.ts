import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: "/react-navigation-component/",
  server: {
    port: 5000,
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
});








