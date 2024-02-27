import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Adjust this to match your GitHub repository name
  server: {
    hmr: {
      port: 8080, // use a valid port number
    },
  },
});

