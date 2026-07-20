import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: /* true, */'app.publisher-website.test',
    port: 5800,
    open: false, // if string , opens it as a url 

    /* proxy: {
      '/': {
        target: 'http://publisher-website.test',
        changeOrigin: true
      },
     

    } */
  }

})
