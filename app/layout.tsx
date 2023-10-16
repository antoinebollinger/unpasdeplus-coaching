import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import '../styles/global.scss'
import { Metadata } from 'next'
import { siteData } from '../src/data/metadata'
import { inter, roboto, urbanist, amatic } from '../styles/font'
import GoogleAnalytics from '../src/components/google'
import SiteName from '../src/components/siteName'

export const metadata: Metadata = {
    metadataBase: new URL('https://unpasdeplus-coaching.fr'),
    applicationName: siteData.title,
    title: siteData.title,
    description: siteData.description,
    keywords: ['santé mentale', 'santé physique', 'mouvement', 'coaching', 'activité physique adaptée', 'objectifs', 'motivation', 'bien-être'],
    authors: [{ name: siteData.author, url: 'https://antoinebollinger.fr' }],
    openGraph: {
        siteName: siteData.title,
        title: siteData.title,
        description: siteData.description,
        images: '/opengraph-image.jpg'
    },
    twitter: {
        title: siteData.title,
        description: siteData.description,
        images: '/twitter-image.jpg'
    },
    themeColor: "#421556"
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <html lang="fr" className={`${roboto.variable} ${urbanist.variable} ${amatic.variable} ${inter.variable}`}>
            <GoogleAnalytics />
            <SiteName />
            <body>
                {children}
            </body>
        </html>
    )
}