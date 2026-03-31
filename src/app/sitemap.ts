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
        '/services/virtual-cfo',
        '/services/nri-taxation',
        '/services/company-registration',
        '/services/ngo-trust-registration',
        '/services/accounting-bookkeeping',
        '/services/roc-compliance',
        '/services/payroll-hr-compliance',
        '/services/audit-support',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))
}
