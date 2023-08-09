import Layout from '../../src/layout'
import Entreprises from '../../src/sections/entreprises'
import Contact from '../../src/sections/contact'
import Banner from '/public/images/banners/entreprises.webp'
import { siteData } from '../../src/data/metadata'

export const metadata = {
    title: `Offres entreprises | ${siteData.title}`
}

export default function Page() {
    return (
        <Layout banner={Banner}>
            <Entreprises />
            <Contact />
        </Layout>
    )
}