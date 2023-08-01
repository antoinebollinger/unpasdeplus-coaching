import Layout from '../src/layout'
import Intro from '../src/sections/intro'
import MonParcours from '../src/sections/mon-parcours'
import Contact from '../src/components/contact'
import Banner from '/public/images/banners/home.webp'

export default function Page() {
    const onThisPage = [
        {
            title: 'Ma mission',
            link: '#mamission'
        },
        {
            title: 'Mon parcours',
            link: '#mon-parcours'
        },
        {
            title: 'Contact',
            link: '#contact'
        }
    ]

    return (
        <Layout banner={Banner} onThisPage={onThisPage} >
            <Intro />
            <MonParcours />
            <Contact />
        </Layout >
    )
}