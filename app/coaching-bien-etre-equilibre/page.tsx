import Layout from '../../src/layout'
import Intro from '../../src/sections/coaching-bien-etre-equilibre/intro'
import Qui from '../../src/sections/coaching-bien-etre-equilibre/qui'
import Quoi from '../../src/sections/coaching-bien-etre-equilibre/quoi'
import Methode from '../../src/sections/coaching-bien-etre-equilibre/methode'
import Pratique from '../../src/sections/coaching-bien-etre-equilibre/pratique'
import Banner from '/public/images/banners/2_bis.jpg'
import { siteData } from '../../src/data/metadata'

export const metadata = {
    title: `Coaching bien-être & équilibre | ${siteData.title}`,
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
            title: 'En pratique',
            link: '#pratique'
        }
    ];

    return (
        <Layout banner={Banner} onThisPage={onThisPage}>
            <Intro />
            <Qui />
            <Quoi />
            {/* <Methode /> */}
            <Pratique />
        </Layout >
    )
}