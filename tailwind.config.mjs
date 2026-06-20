// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta de marca — usar como text-brand-primary, bg-brand-accent, etc.
        brand: {
          primary:  '#1B3A6B',  // Azul marino profundo — confianza, solidez
          accent:   '#F5A623',  // Ámbar cálido — acción, conversión
          dark:     '#111827',  // Casi negro — textos principales
          muted:    '#6B7280',  // Gris medio — textos secundarios
          surface:  '#F7F8FA',  // Fondo de secciones
          success:  '#10B981',  // Verde — checkmarks, garantías
        }
      },
      fontFamily: {
        // Usar Inter desde Google Fonts o system-ui como fallback
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'], // para números/stats
      },
      fontSize: {
        'display': ['clamp(2rem, 5vw, 3.25rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h2':      ['clamp(1.75rem, 3.5vw, 2.5rem)',  { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h3':      ['1.2rem', { lineHeight: '1.4' }],
        'body':    ['1rem', { lineHeight: '1.7' }],
        'small':   ['0.875rem', { lineHeight: '1.5' }],
        'xs':      ['0.75rem', { lineHeight: '1.4' }],
      },
      borderRadius: {
        'card': '16px',
        'btn':  '10px',
      },
      boxShadow: {
        'wa':   '0 4px 20px rgba(37, 211, 102, 0.4)',
        'card': '0 8px 32px rgba(27, 58, 107, 0.1)',
      },
    },
  },
  plugins: [],
};
