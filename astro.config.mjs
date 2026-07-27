// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://luminexstar.ae',
  image: {
    service: passthroughImageService(),
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});