import mdx from '@astrojs/mdx';
import prefetch from "@astrojs/prefetch";
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import Compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';
import { VitePWA } from 'vite-plugin-pwa';

import config from './src/config/config.json';
import { manifest } from './src/utils/manifest';

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url ? config.site.base_url : 'http://localhost:4321/',
  base: config.site.base_path ? config.site.base_path : '/',
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true,
    },
  },
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'material-theme-palenight',
        wrap: true,
      },
      drafts: true,
    }),
    Compress(),
    prefetch(),
    robotsTxt({
      host: config.site.base_url ? config.site.base_url : 'http://localhost:4321/',
      policy: [
        {
          userAgent: 'Googlebot',
          allow: '/',
          crawlDelay: 10,
        },
        {
          userAgent: '*',
          allow: '/',
          crawlDelay: 10,
        },
      ],
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      entryLimit: 10000,
    }),
    tailwind(),
  ],
  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        manifest,
        workbox: {
          globDirectory: 'dist',
          globPatterns: ['**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}'],
          navigateFallback: null,
        },
      }),
    ],
  },
});
