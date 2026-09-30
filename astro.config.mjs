// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export const SITE = 'https://adararelief.com';

export default defineConfig({
  site: 'https://adararelief.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    //compress HTML output
    html: { compressHTML: true },
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'viewport',
  },
});
