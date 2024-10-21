import Layout from "../src/layout"
import Banner from "/public/images/banners/accueil.webp"
import dynamic from "next/dynamic"

const Intro = dynamic(() => import("../src/sections/accueil/intro"))
const Offres = dynamic(() => import("../src/sections/accueil/offres"))
const Sabrina = dynamic(() => import("../src/sections/accueil/sabrina"))
const Apports = dynamic(() => import("../src/sections/accueil/apports"))
const Partenaires = dynamic(() => import("../src/sections/accueil/partenaires"))

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