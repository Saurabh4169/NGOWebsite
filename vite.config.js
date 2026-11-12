import { resolve } from 'path';
import { defineConfig } from 'vite';

// Multi-page Vite configuration for FGSCBI NGO website
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        programs: resolve(__dirname, 'programs.html'),
        recognitions: resolve(__dirname, 'recognitions.html'),
        news: resolve(__dirname, 'news.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        careers: resolve(__dirname, 'careers.html'),
        contact: resolve(__dirname, 'contact.html'),
        donate: resolve(__dirname, 'donate.html'),
        services: resolve(__dirname, 'services.html'),
        notfound: resolve(__dirname, '404.html'),
      },
    },
  },
});

