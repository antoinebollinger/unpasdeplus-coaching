import Layout from "../../../src/layout"
import Intro from "../../../src/sections/offres-particulers/coaching-perte-de-poids/intro"
import Quoi from "../../../src/sections/offres-particulers/coaching-perte-de-poids/quoi"
import Temoignages from "../../../src/sections/offres-particulers/coaching-perte-de-poids/temoignages"

import Banner from "/public/images/banners/perte-de-poids.webp"
import { siteData } from "../../../src/data/metadata"
import Methode from "../../../src/sections/offres-particulers/coaching-perte-de-poids/methode"
import Resultat from "../../../src/sections/offres-particulers/coaching-perte-de-poids/resultat"

export const metadata = {
    title: `Coaching perte de poids | ${siteData.title}`,
    description: "Au-delà de l'objectif perte de poids, le parcours coaching perte de poids vous accompagne à développer une meilleure image de soi, une meilleure confiance en soi, en vos capacités pour un impact positif dans votre quotidien."
}

export default function Page() {
    const onThisPage = [
        {
            title: "Le coaching perte de poids",
            link: "#top"
        },
        {
            title: "Témoignages",
            link: "#temoignages"
        }
    ]

    return (
        <Layout banner={Banner} onThisPage={onThisPage}>
            <Intro />
            <Quoi />
            <Methode />
            <Resultat />
            <Temoignages />
        </Layout >
    )
}