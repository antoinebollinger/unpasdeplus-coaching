import Layout from '../../src/layout'
import Parentalite from '../../src/sections/parentalite'
import MieuxEtre from '../../src/sections/mieux-etre'
import Outdoor from '../../src/sections/outdoor'
import Contact from '../../src/components/contact'
import Banner from '/public/images/banners/particuliers.webp'
import { siteData } from '../../src/data/metadata'

export const metadata = {
    title: `Offres particuliers | ${siteData.title}`
}

export default function Page() {
    const onThisPage = [
        {
            title: "Parentalité",
            link: "#parentalite"
        },
        {
            title: "De l'image du corps à l'image de soi",
            link: "#mieux-etre"
        },
        {
            title: "Coaching Outdoor",
            link: "#outdoor"
        }
    ]

    return (
        <Layout banner={Banner} onThisPage={onThisPage}>
            <Parentalite />
            <MieuxEtre />
            <Outdoor />
            <Contact />
        </Layout>
    )
}