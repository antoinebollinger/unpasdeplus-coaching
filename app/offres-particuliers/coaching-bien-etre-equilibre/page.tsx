import Layout from "../../../src/layout"
import Intro from "../../../src/sections/c-particuliers/01-bien-etre-equilibre/intro"
import Qui from "../../../src/sections/c-particuliers/01-bien-etre-equilibre/qui"
import Quoi from "../../../src/sections/c-particuliers/01-bien-etre-equilibre/quoi"
import Pratique from "../../../src/sections/c-particuliers/01-bien-etre-equilibre/pratique"
import Banner from "/public/images/banners/bien-etre-equilibre.webp"
import { siteData } from "../../../src/data/metadata"
import Temoignages from "../../../src/sections/c-particuliers/01-bien-etre-equilibre/temoignages"

export const metadata = {
    title: `Coaching bien-être & équilibre | ${siteData.title}`,
    description: "Un accompagnement individuel pour vous aider à prendre soin de votre santé physique et mentale en relevant vos défis quotidiens. Acquérir des habitudes mentales pour gagner en sérénité et en confiance en soi."
}

export default function Page() {
    const onThisPage = [
        {
            title: "Le coaching bien-être & équilibre",
            link: "#header"
        },
        {
            title: "En pratique",
            link: "#pratique"
        },
        {
            title: "Témoignages",
            link: "#temoignages"
        }
    ]

    return (
        <Layout banner={Banner} onThisPage={onThisPage}>
            <Intro />
            <Qui />
            <Quoi />
            <Pratique />
            <Temoignages />
        </Layout >
    )
}