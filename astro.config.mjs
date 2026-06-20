// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://tudominio.com', // ← reemplazar con tu dominio real
  integrations: [
    tailwind({
      // Aplica estilos base de Tailwind — recomendado para reset consistente
      applyBaseStyles: true,
    }),
  ],
  image: {
    // sharp para optimización automática de imágenes a WebP
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
