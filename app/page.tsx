import Layout from "../src/layout"
import Intro from "../src/sections/accueil/intro"
import Offres from "../src/sections/accueil/offres"
import Sabrina from "../src/sections/accueil/sabrina"
import Apports from "../src/sections/accueil/apports"
import Partenaires from "../src/sections/accueil/partenaires"
import Banner from "/public/images/banners/accueil.webp"

export default function Page() {
    const onThisPage = [
        {
            title: "Introduction",
            link: "#top"
        },
        {
            title: "Mes offres",
            link: "#mes-offres"
        },
        {
            title: "Sabrina Appriou",
            link: "#sabrina-appriou"
        },
        {
            title: "Apports du coaching",
            link: "#apports-coaching"
        },
        {
            title: "Mes partenaires",
            link: "#mes-partenaires"
        }
    ]

    return (
        <Layout banner={Banner} onThisPage={onThisPage} >
            <Intro />
            <Offres />
            <Sabrina />
            <Apports />
            <Partenaires />
        </Layout >
    )
}