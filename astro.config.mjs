// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://servicios-generales-web.vercel.app/', // ← Tu URL de Vercel (o tu dominio cuando lo tengas)
  integrations: [
    tailwind({
      // Aplica estilos base de Tailwind — recomendado para reset consistente
      applyBaseStyles: true,
    }),
    sitemap(),
  ],
  image: {
    // sharp para optimización automática de imágenes a WebP
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
