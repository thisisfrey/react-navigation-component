import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
  //base: "./"
  base: "/react-navigation-component/", 
});

// https://thisisfrey.github.io/react-navigation-component/






