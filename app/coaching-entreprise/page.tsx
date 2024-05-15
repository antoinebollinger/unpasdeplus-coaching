import Layout from '../../src/layout'
import Intro from '../../src/sections/coaching-entreprise/intro'
import Banner from '/public/images/banners/3.jpg'
import { siteData } from '../../src/data/metadata'
import Enjeux from '../../src/sections/coaching-entreprise/enjeux'
import Risques from '../../src/sections/coaching-entreprise/risques'
import Performance from '../../src/sections/coaching-entreprise/performance'
import Attractivite from '../../src/sections/coaching-entreprise/attractivite'
import Cles from '../../src/sections/coaching-entreprise/cles'

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
            <Enjeux />
            <Risques />
            <Performance />
            <Attractivite />
            <Cles />
        </Layout >
    )
}