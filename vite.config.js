// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

const slides = ['slide1', 'slide2'];

export default defineConfig({
  plugins: [
    /* your plugins */
  ],
  build: {
    outDir: 'dist/client',
    rollupOptions: {
      input: {
        slide1: path.resolve(__dirname, `src/slides/slide1/slide1.jsx`),
        slide2: path.resolve(__dirname, `src/slides/slide1/slide1.jsx`),
        slide3: path.resolve(__dirname, `src/slides/slide2/slide2.jsx`),
      },
      output: {

        assetFileNames: (item) => {
          let ext = item.name.split('.').at(-1);
          if (item.name.includes('.')) {
            return `${item.name.split('.')[0]}/${
              item.name.split('.')[0]
            }.${ext}`;
          }
        },
      },
    },
  },
});
