export const dynamic = 'force-static'
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'CACS FinAcc',
        short_name: 'CACS FinAcc',
        description: 'Virtual CFO, Tax Filing & Compliance Services',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#1678fb',
        icons: [
            {
                src: '/favicon.ico',
                sizes: '64x64 32x32 24x24 16x16',
                type: 'image/x-icon',
            },
            {
                src: '/Image/logo.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/Image/cacshero.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
