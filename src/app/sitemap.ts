export const dynamic = 'force-static'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://cacsfinacc.com'

    const routes = [
        '',
        '/about',
        '/contact',
        '/blog',
        '/disclaimer',
        '/privacy',
        // Compliance
        '/compliance',
        '/compliance/bookkeeping',
        '/compliance/business-plan',
        '/compliance/cfo-services',
        '/compliance/dpt-3-filings',
        '/compliance/fdi-filing-rbi',
        '/compliance/hr-payroll',
        '/compliance/partnership-compliance',
        '/compliance/private-ltd-compliances',
        '/compliance/proprietorship',
        '/compliance/section-8-compliance',
        '/compliance/sft-return-filing',
        // Tax Filing
        '/tax-filing/15ca-15cb-filing',
        '/tax-filing/business-tax-filings',
        '/tax-filing/esi-return-filings',
        '/tax-filing/gst-returns',
        '/tax-filing/income-tax-notice',
        '/tax-filing/income-tax-return-filing',
        '/tax-filing/itr-1-filing',
        '/tax-filing/itr-2-filing',
        '/tax-filing/itr-3-filing',
        '/tax-filing/itr-4-filing',
        '/tax-filing/itr-5-filing',
        '/tax-filing/itr-6-filing',
        '/tax-filing/itr-7-filing',
        '/tax-filing/pf-pt-return-filings',
        '/tax-filing/tan-registration',
        '/tax-filing/tds-return-filings',
        // Registration
        '/registration',
        '/registration/apeda',
        '/registration/barcode-registration',
        '/registration/esi-registration',
        '/registration/fssai-license',
        '/registration/fssai-registration',
        '/registration/gst-pf-pt-registration',
        '/registration/iec',
        '/registration/lei-registration',
        '/registration/msme-registration',
        '/registration/opc',
        '/registration/private-ltd',
        '/registration/sole-proprietorship',
        '/registration/trade-license',
        '/registration/trust-registration',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))
}
