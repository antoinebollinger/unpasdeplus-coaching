import Layout from "../../src/layout"
import Intro from "../../src/sections/coaching-entreprise/intro"
import Banner from "/public/images/banners/entreprise.webp"
import { siteData } from "../../src/data/metadata"
import Enjeux from "../../src/sections/coaching-entreprise/enjeux"
import Risques from "../../src/sections/coaching-entreprise/risques"
import Performance from "../../src/sections/coaching-entreprise/performance"
import Attractivite from "../../src/sections/coaching-entreprise/attractivite"
import Cles from "../../src/sections/coaching-entreprise/cles"

export const metadata = {
    title: `Coaching entreprise | ${siteData.title}`,
    description: "Prendre soin de la santé physique et mentale de vos collaborateurs, c'est être attentif à la qualité de vie au travail et renforcer de meilleures conditions de travail."
}

export default function Page() {
    const onThisPage = [
        {
            title: "Introduction",
            link: "#header"
        },
        {
            title: "Les enjeux",
            link: "#enjeux"
        },
        {
            title: "Bien-être et performance",
            link: "#performance"
        },
        {
            title: "Les clés pour accompagner la parentalité",
            link: "#cles"
        }
    ]

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