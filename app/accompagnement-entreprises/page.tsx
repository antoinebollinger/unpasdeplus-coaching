import Layout from '../../src/layout'
import Intro from '../../src/sections/entreprises/intro'
import Qualite from '../../src/sections/entreprises/qualite'
import Banner from '/public/images/banners/entreprises.webp'
import { siteData } from '../../src/data/metadata'

export const metadata = {
    title: `Accompagnement entreprises | ${siteData.title}`
}

export default function Page() {
    const headerProps = {
        title: 'Accompagnement des entreprises',
        pretitle: 'Soutenir vos salarié.es, c\'est créer la différence',
    }

    return (
        <Layout banner={Banner} headerProps={headerProps}>
            <Intro />
            <Qualite />
        </Layout >
    )
}