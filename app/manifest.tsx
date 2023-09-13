import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Un Pas de Plus website',
        short_name: 'Un Pas de Plus',
        description: 'Le site de votre coach en développement personnel Sabrina Appriou, fondatrice d\'Un Pas De Plus.',
        scope: 'https://unpasdeplus-coaching.fr/',
        start_url: 'https://unpasdeplus-coaching.fr',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#421556',
        icons: [
            {
                src: '/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: '/icon-256x256.png',
                sizes: '256x256',
                type: 'image/png'
            },
            {
                src: '/icon-384x384.png',
                sizes: '384x384',
                type: 'image/png'
            },
            {
                src: '/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png'
            },
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
                purpose: 'maskable'
            },
        ],
    }
}