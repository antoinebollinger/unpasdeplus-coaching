import Layout from '../../src/layout'
import Intro from '../../src/sections/parents/intro'
import Qui from '../../src/sections/parents/qui'
import Quoi from '../../src/sections/parents/quoi'
import Methode from '../../src/sections/parents/methode'
import Pratique from '../../src/sections/parents/pratique'
import Banner from '/public/images/banners/2_bis.jpg'
import { siteData } from '../../src/data/metadata'

export const metadata = {
    title: `Coaching santé & bien-être | ${siteData.title}`,
    description: 'Un accompagnement individuel pour vous aider à prendre soin de votre santé physique et mentale en relevant vos défis quotidiens. Acquérir des habitudes mentales pour gagner en sérénité et en confiance en soi.'
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