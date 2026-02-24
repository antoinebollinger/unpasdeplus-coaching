import Layout from "../src/layout"
import dynamic from "next/dynamic"

const Intro = dynamic(() => import("../src/sections/a-accueil/intro"))
const Pourquoi = dynamic(() => import("../src/sections/a-accueil/pourquoi"))
const Offres = dynamic(() => import("../src/sections/a-accueil/offres"))
const Avis = dynamic(() => import("../src/sections/a-accueil/avis"))
const Sabrina = dynamic(() => import("../src/sections/a-accueil/sabrina"))
const Faq = dynamic(() => import("../src/sections/a-accueil/faq"))
const Apports = dynamic(() => import("../src/sections/a-accueil/apports"))
const Partenaires = dynamic(() => import("../src/sections/a-accueil/partenaires"))

export default function Page() {
    const onThisPage = [
        {
            title: "Introduction",
            link: "#top"
        },
        {
            title: "Pourquoi un coach de vie ?",
            link: "#pourquoi"
        }, {
            title: "Mes offres",
            link: "#mes-offres"
        },
        {
            title: "Avis clients",
            link: "#avis"
        },
        {
            title: "Qui suis-je ?",
            link: "#sabrina-appriou"
        },
        {
            title: "FAQ",
            link: "#faq"
        }
    ]

    return (
        <Layout onThisPage={onThisPage} >
            <Intro />
            <Pourquoi />
            <Offres />
            <Avis />
            <Sabrina />
            <Faq />
        </Layout >
    )
}