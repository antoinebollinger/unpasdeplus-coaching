import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import '../styles/global.scss'
import { Metadata } from 'next'
import { siteData } from '../src/data/metadata'
import { inter, roboto, urbanist, amatic } from '../styles/font'

export const metadata: Metadata = {
    title: siteData.title,
    description: siteData.description,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <html lang="en" className={`${roboto.variable} ${urbanist.variable} ${amatic.variable} ${inter.variable}`}>
            <body>
                {children}
            </body>
        </html>
    )
}