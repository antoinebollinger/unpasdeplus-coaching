import { MetadataRoute } from "next"
import { siteData } from "../src/data/metadata"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteData.url,
            lastModified: new Date(),
        },
        {
            url: `${siteData.url}/a-propos-de-moi`,
            lastModified: new Date(),
        },
        {
            url: `${siteData.url}/coaching-bien-etre-equilibre`,
            lastModified: new Date(),
        },
        {
            url: `${siteData.url}/coaching-perte-de-poids`,
            lastModified: new Date(),
        },
        {
            url: `${siteData.url}/coaching-entreprise`,
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
        {
            url: `${siteData.url}/politique-confidentialite`,
            lastModified: new Date(),
        },
    ]
}