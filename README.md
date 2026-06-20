# Servicios Generales Lima — Landing Page

Stack: **Astro 4** · **Tailwind CSS** · **Vercel**  
Objetivo: captar leads por WhatsApp para empresa de servicios generales en Lima.

---

## Estructura de carpetas

```
servicios-generales-web/
├── public/
│   ├── favicon.svg
│   ├── og-image.jpg          ← 1200×630px para WhatsApp/Facebook preview
│   ├── robots.txt
│   └── images/
│       ├── galeria/
│       │   ├── pintura-antes.webp
│       │   ├── pintura-despues.webp
│       │   ├── gasfiteria-antes.webp
│       │   └── ...
│       └── equipo/
│           └── foto-equipo.webp
│
├── src/
│   ├── layouts/
│   │   └── Layout.astro      ← SEO, Schema, GTM, Open Graph
│   │
│   ├── components/
│   │   ├── Nav.astro          (por construir)
│   │   ├── Hero.astro         ✅ listo
│   │   ├── Servicios.astro    ✅ listo
│   │   ├── Beneficios.astro   (por construir)
│   │   ├── Proceso.astro      (por construir)
│   │   ├── Galeria.astro      (por construir)
│   │   ├── Testimonios.astro  (por construir)
│   │   ├── FAQ.astro          (por construir)
│   │   ├── CTAFinal.astro     (por construir)
│   │   ├── Footer.astro       (por construir)
│   │   └── WAFloatingButton.astro  ✅ listo
│   │
│   └── pages/
│       └── index.astro        ✅ listo (ensambla todos los componentes)
│
├── astro.config.mjs           ✅ listo
├── tailwind.config.mjs        ✅ listo
├── package.json               ✅ listo
└── README.md                  ← este archivo
```

---

## Inicio rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo local
npm run dev
# → http://localhost:4321

# 3. Build de producción
npm run build

# 4. Preview del build
npm run preview
```

---

## Variables a reemplazar antes de publicar

Busca en todos los archivos los siguientes marcadores y reemplázalos:

| Marcador | Reemplazar con |
|---|---|
| `51XXXXXXXXX` | Tu número WhatsApp sin + (ej: 51987654321) |
| `https://tudominio.com` | Tu dominio real |
| `[Tu Empresa]` | Nombre real de tu empresa |
| `GTM-XXXXXXX` | Tu ID de Google Tag Manager |
| `[Nombre de tu empresa]` | Nombre para el Schema LocalBusiness |

---

## Deploy en Vercel

```bash
# Opción 1: desde CLI
npx vercel --prod

# Opción 2: conectar repositorio en vercel.com
# 1. Push a GitHub
# 2. vercel.com → "Import Git Repository" → seleccionar repo
# 3. Framework: Astro (detectado automáticamente)
# 4. Deploy automático en cada push a main
```

---

## Checklist de lanzamiento

### Contenido
- [ ] Fotografías reales de trabajos anteriores (antes/después) en WebP
- [ ] Testimonios reales con nombre + distrito + servicio
- [ ] RUC de la empresa en el footer
- [ ] Número de WhatsApp correcto en todos los componentes
- [ ] Horarios de atención actualizados

### SEO técnico
- [ ] og:image.jpg creada (1200×630px) con logo y tagline
- [ ] favicon.svg configurado
- [ ] robots.txt presente en /public
- [ ] Schema LocalBusiness con datos reales
- [ ] Dominio conectado con SSL en Vercel

### Analytics y tracking
- [ ] Google Tag Manager instalado (GTM-XXXXXXX reemplazado)
- [ ] GA4 configurado en GTM → All Pages trigger
- [ ] Meta Pixel configurado en GTM
- [ ] Evento whatsapp_click llegando a GA4 y Meta
- [ ] Google Search Console verificado
- [ ] Sitemap enviado a Search Console

### Google Business Profile
- [ ] Perfil creado y verificado en business.google.com
- [ ] 5+ fotos reales subidas
- [ ] Horarios, servicios y descripción completos
- [ ] Primera reseña solicitada a cliente de confianza

### Rendimiento
- [ ] PageSpeed Mobile ≥ 85 (verificar en pagespeed.web.dev)
- [ ] Todas las imágenes en formato WebP
- [ ] Prueba en Android real con Chrome
- [ ] Prueba en iPhone real con Safari

### Marketing inicial
- [ ] Compartir enlace en grupos de WhatsApp de clientes actuales
- [ ] Crear post de lanzamiento en Instagram/Facebook
- [ ] Activar Google Ads Search con presupuesto inicial S/.15/día
