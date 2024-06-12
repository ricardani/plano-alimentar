import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/plano-alimentar/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Plano Alimentar',
        short_name: 'Plano Alimentar',
        description: 'Plano alimentar para a semana',
        theme_color: '#000000',
        icons: [
          {
            "src": "/plano-alimentar/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/plano-alimentar/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ],
        display: 'standalone'
      }
    })
  ],
})
