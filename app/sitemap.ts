import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = 86400 // 24 hours

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://fabianroeben.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}