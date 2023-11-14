import Layout from '../../src/layout'
import Intro from '../../src/sections/entreprise/intro'
import Qui from '../../src/sections/entreprise/qui'
import Apports from '../../src/sections/entreprise/apports'
import Services from '../../src/sections/entreprise/services'
import Qualite from '../../src/sections/entreprise/qualite'
import Banner from '/public/images/banners/3.jpg'
import { siteData } from '../../src/data/metadata'

export const metadata = {
    title: `Coaching entreprise | ${siteData.title}`,
    description: 'Prendre soin de la santé physique et mentale de vos collaborateurs, c\'est être attentif à la qualité de vie au travail et renforcer de meilleures conditions de travail.'
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