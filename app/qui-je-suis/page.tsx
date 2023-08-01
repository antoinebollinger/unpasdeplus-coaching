import Layout from '../../src/layout'
import Bio from '../../src/sections/bio'
import Contact from '../../src/components/contact'
import Banner from '/public/images/banners/quijesuis-intro.webp'
import QuijesuisOutro from '/public/images/banners/quijesuis-outro.webp'
import { siteData } from '../../src/data/metadata'

export const metadata = {
    title: `Qui je suis | ${siteData.title}`
}

export default function Page() {
    const headerProps = {
        pretitle: 'Envie de me connaitre un peu mieux ?'
    }

    return (
        <Layout headerProps={headerProps} banner={Banner}>
            <Bio />
            <Contact />
        </Layout>
    )
}