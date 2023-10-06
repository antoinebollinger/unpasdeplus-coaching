import Layout from '../../src/layout'
import Intro from '../../src/sections/parents/intro'
import Qui from '../../src/sections/parents/qui'
import Quoi from '../../src/sections/parents/quoi'
import Methode from '../../src/sections/parents/methode'
import Pratique from '../../src/sections/parents/pratique'
import Banner from '/public/images/banners/2_bis.jpg'
import { siteData } from '../../src/data/metadata'

export const metadata = {
    title: `Coaching santé & bien-être | ${siteData.title}`
}

export default function Page() {
    const onThisPage = [
        {
            title: 'Introduction',
            link: '#header'
        },
        {
            title: 'C\'est quoi&nbsp;?',
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

    return (
        <Layout banner={Banner} onThisPage={onThisPage}>
            <Intro />
            <Qui />
            <Quoi />
            <Methode />
            <Pratique />
        </Layout >
    )
}