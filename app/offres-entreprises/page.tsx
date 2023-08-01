import Layout from '../../src/layout'
import Contact from '../../src/components/contact'
import Banner from '/public/images/banners/entreprises.webp'
import { siteData } from '../../src/data/metadata'

export const metadata = {
    title: `Offres entreprises | ${siteData.title}`
}

export default function Page() {
    return (
        <Layout banner={Banner}>
            <Contact />
        </Layout>
    )
}