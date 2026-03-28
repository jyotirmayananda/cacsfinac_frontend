export const dynamic = 'force-static'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://cacsfinaccservices.com'

    const routes = [
        '',
        '/about',
        '/contact',
        '/blog',
        '/disclaimer',
        '/privacy',
        // Services
        '/services',
        '/services/income-tax-filing',
        '/services/gst-services',
        '/services/accounting-bookkeeping',
        '/services/virtual-cfo',
        '/services/company-registration',
        '/services/roc-compliance',
        '/services/audit-support',
        '/services/ngo-trust-registration',
        '/services/other-registrations',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))
}
