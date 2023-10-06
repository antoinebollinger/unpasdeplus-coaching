import Layout from '../../src/layout'
import Intro from '../../src/sections/entreprises/intro'
import Qui from '../../src/sections/entreprises/qui'
import Apports from '../../src/sections/entreprises/apports'
import Services from '../../src/sections/entreprises/services'
import Qualite from '../../src/sections/entreprises/qualite'
import Banner from '/public/images/banners/3.jpg'
import { siteData } from '../../src/data/metadata'

export const metadata = {
    title: `Coaching entreprise | ${siteData.title}`
}

export default function Page() {
    const onThisPage = [
        {
            title: 'Introduction',
            link: '#header'
        },
        {
            title: 'Pourquoi&nbsp;?',
            link: '#pourquoi'
        },
        {
            title: 'Mes services',
            link: '#services'
        },
        {
            title: 'Accompagnement de qualité',
            link: '#qualite'
        }
    ];

    return (
        <Layout banner={Banner} onThisPage={onThisPage}>
            <Intro />
            <Qui />
            <Apports />
            <Services />
            <Qualite />
        </Layout >
    )
}