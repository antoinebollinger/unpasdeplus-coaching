import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import '../styles/global.scss'
import { Metadata } from 'next'
import { siteData } from '../src/data/metadata'
import { inter, roboto, urbanist, amatic } from '../styles/font'
import GoogleAnalytics from '../src/components/google'

export const metadata: Metadata = {
    metadataBase: new URL('https://unpasdeplus-coaching.fr'),
    title: siteData.title,
    description: siteData.description,
    openGraph: {
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
            <body>
                {children}
            </body>
        </html>
    )
}