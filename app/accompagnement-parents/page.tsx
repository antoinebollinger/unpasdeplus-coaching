import Layout from '../../src/layout'
import Intro from '../../src/sections/parents/intro'
import Qui from '../../src/sections/parents/qui'
import Quoi from '../../src/sections/parents/quoi'
import Methode from '../../src/sections/parents/methode'
import Pratique from '../../src/sections/parents/pratique'
import Banner from '/public/images/banners/parents.webp'
import { siteData } from '../../src/data/metadata'

export const metadata = {
    title: `Accompagnement parents | ${siteData.title}`
}

export default function Page() {
    const onThisPage = [
        {
            title: 'Introduction',
            link: '#header'
        },
        {
            title: 'C\'est quoi ?',
            link: '#quoi'
        },
        {
            title: 'Ma méthode',
            link: '#methode'
        },
        {
            title: 'En pratique',
            link: '#pratique'
        }
    ];

    const headerProps = {
        title: 'Accompagnement des parents',
    }

    return (
        <Layout banner={Banner} headerProps={headerProps} onThisPage={onThisPage}>
            <Intro />
            <Qui />
            <Quoi />
            <Methode />
            <Pratique />
        </Layout >
    )
}