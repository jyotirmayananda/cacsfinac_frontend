export const dynamic = 'force-static'
import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://cacsfinaccservices.com';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/profile/', '/api/', '/auth/', '/login', '/signup', '/forgot-password', '/reset-password'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
