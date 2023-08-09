import Layout from '../../src/layout'
import MentionsLegales from '../../src/sections/mentions-legales'
import Banner from '/public/images/banners/legals.webp'
import { siteData } from '../../src/data/metadata'

export const metadata = {
    title: `Mentions légales | ${siteData.title}`
}

export default function Page() {
    const headerProps = {
        title: 'Mentions légales'
    }

    return (
        <Layout headerProps={headerProps} banner={Banner}>
            <MentionsLegales />
        </Layout>
    )
}