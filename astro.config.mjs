// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://quarks-studio.com',
  trailingSlash: 'always', // coincide con canonical/hreflang actuales (/es/)
  build: { format: 'directory' }, // genera es/index.html
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', es: 'es-AR' },
      },
      filter: (page) => !page.includes('/404'),
    }),
    icon(),
  ],
});