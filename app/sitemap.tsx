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
            url: `${siteData.url}/offres-particuliers`,
            lastModified: new Date(),
        },
        {
            url: `${siteData.url}/offres-particuliers/coaching-bien-etre-equilibre`,
            lastModified: new Date(),
        },
        {
            url: `${siteData.url}/offres-particuliers/coaching-perte-de-poids`,
            lastModified: new Date(),
        },
        {
            url: `${siteData.url}/offres-entreprises`,
            lastModified: new Date(),
        },
        {
            url: `${siteData.url}/offres-entreprises/coaching-bien-etre-travail-performance`,
            lastModified: new Date(),
        },
        {
            url: `${siteData.url}/offres-entreprises/coaching-carriere-parentalite`,
            lastModified: new Date(),
        },
        {
            url: `${siteData.url}/offres-entreprises/coaching-gestion-carrieres-transitions`,
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