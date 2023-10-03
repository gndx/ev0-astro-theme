import type { ManifestOptions } from 'vite-plugin-pwa';
import config from '../config/config.json';

export const manifest: Partial<ManifestOptions> = {
  name: config.site.title,
  short_name: config.site.title,
  description: config.site.description,
  theme_color: '#ffffff',
  background_color: '#0e0d0d',
  display: 'minimal-ui',
  start_url: '/',
  scope: '/',
  lang: 'ES',
  icons: [
    {
      src: '/favicons/favicon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/favicons/favicon-256x256.png',
      sizes: '256x256',
      type: 'image/png',
    },
    {
      src: '/favicons/favicon-256x256.png',
      sizes: '256x256',
      type: 'image/png',
      purpose: 'any maskable',
    },
  ],
  categories: ['blog'],
};
