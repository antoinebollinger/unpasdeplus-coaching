import { MetadataRoute } from 'next'
import { siteData } from '../src/data/metadata'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteData.url,
            lastModified: new Date(),
        },
        {
            url: `${siteData.url}/accompagnement-parents`,
            lastModified: new Date(),
        },
        {
            url: `${siteData.url}/accompagnement-entreprises`,
            lastModified: new Date(),
        },
        {
            url: `${siteData.url}/qui-je-suis`,
            lastModified: new Date(),
        },
        {
            url: `${siteData.url}/contact`,
            lastModified: new Date(),
        },
        {
            url: `${siteData.url}/mentions-legales`,
            lastModified: new Date(),
        },
    ]
}