export const dynamic = 'force-static'
import type { MetadataRoute } from 'next'
import { services } from '@/lib/services'
import { blogPosts } from '@/lib/blog-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://cacsfinaccservices.com'

    const routes: MetadataRoute.Sitemap = [
        { url: baseUrl, changeFrequency: 'weekly', priority: 1, lastModified: new Date() },
        { url: `${baseUrl}/about`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },
        { url: `${baseUrl}/contact`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },
        { url: `${baseUrl}/blog`, changeFrequency: 'daily', priority: 0.9, lastModified: new Date() },
        { url: `${baseUrl}/services`, changeFrequency: 'weekly', priority: 0.9, lastModified: new Date() },
        { url: `${baseUrl}/disclaimer`, changeFrequency: 'monthly', priority: 0.5, lastModified: new Date() },
        { url: `${baseUrl}/privacy`, changeFrequency: 'monthly', priority: 0.5, lastModified: new Date() },
    ]

    const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        changeFrequency: 'weekly',
        priority: 0.9,
        lastModified: new Date()
    }))

    const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.id}`,
        changeFrequency: 'weekly',
        priority: 0.8,
        lastModified: new Date()
    }))

    return [...routes, ...serviceRoutes, ...blogRoutes]
}
