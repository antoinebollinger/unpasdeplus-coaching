import Layout from '../src/layout'
import Intro from '../src/sections/intro'
import ApportsCoaching from '../src/sections/apports-coaching'
import Temoignages from '../src/sections/temoignages'
import Contact from '../src/sections/contact'
import Banner from '/public/images/banners/home.webp'

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

    const headerProps = {
        pretitle: 'Trouvez les clés et les ressources pour faire face aux défis quotidiens',
        title: 'Votre partenaire mental',
    }

    return (
        <Layout banner={Banner} headerProps={headerProps} onThisPage={onThisPage} >
            <Intro />
            <ApportsCoaching />
            <Temoignages />
            <Contact />
        </Layout >
    )
}