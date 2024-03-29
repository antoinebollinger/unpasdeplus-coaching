import Layout from '../../src/layout'
import Contact from '../../src/sections/contact'
import Banner from '/public/images/banners/5.jpg'
import { siteData } from '../../src/data/metadata'

export const metadata = {
    title: `Contact | ${siteData.title}`
}

export default function Page() {
    return (
        <Layout banner={Banner}>
            <Contact />
        </Layout>
    )
}