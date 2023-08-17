import Layout from '../src/layout'
import Intro from '../src/sections/accueil/intro'
import Liens from '../src/sections/accueil/liens'
import Approche from '../src/sections/accueil/approche'
import Apports from '../src/sections/accueil/apports'
import Temoignages from '../src/sections/accueil/temoignages'
import Banner from '/public/images/banners/accueil.webp'

export default function Page() {
    const onThisPage = [
        {
            title: 'Introduction',
            link: '#header'
        },
        {
            title: 'Apports du coaching',
            link: '#apports-coaching'
        },
        {
            title: 'Témoignages',
            link: '#temoignages'
        }
    ];

    return (
        <Layout banner={Banner} onThisPage={onThisPage} >
            <Intro />
            <Liens />
            <Approche />
            <Apports />
            <Temoignages />
        </Layout >
    )
}