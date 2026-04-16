import Layout from "../../../src/layout"
import Intro from "../../../src/sections/d-entreprises/01-parentalite-entreprise/intro"
import Pourquoi from "../../../src/sections/d-entreprises/01-parentalite-entreprise/pourquoi"
import Enjeux from "../../../src/sections/d-entreprises/01-parentalite-entreprise/enjeux"
import Accompagnement from "../../../src/sections/d-entreprises/01-parentalite-entreprise/accompagnement"
import Performance from "../../../src/sections/d-entreprises/01-parentalite-entreprise/benefices"

import Banner from "/public/images/banners/entreprise.webp"
import { siteData } from "../../../src/data/metadata"

export const metadata = {
    title: `Coaching parentalité en entreprise | ${siteData.title}`,
    description: "Prendre soin de la santé physique et mentale de vos collaborateurs, c'est être attentif à la qualité de vie au travail et renforcer de meilleures conditions de travail."
}

export default function Page() {
    const onThisPage = [
        {
            title: "Introduction",
            link: "#header"
        },
        {
            title: "Pourquoi&nbsp;?",
            link: "#pourquoi"
        },
        {
            title: "Les enjeux",
            link: "#enjeux"
        },
        {
            title: "Mon accompagnement",
            link: "#accompagnement"
        },
        {
            title: "Les bénéfices",
            link: "#benefices"
        }
    ]

    return (
        <Layout banner={Banner} onThisPage={onThisPage}>
            <Intro />
            <Pourquoi />
            <Enjeux />
            <Accompagnement />
            <Performance />
        </Layout >
    )
}