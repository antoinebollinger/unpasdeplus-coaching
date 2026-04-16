import Layout from "../../../src/layout"
import Intro from "../../../src/sections/c-particuliers/01-confiance-en-soi/intro"
import Consequences from "../../../src/sections/c-particuliers/01-confiance-en-soi/consequences"
import Possible from "../../../src/sections/c-particuliers/01-confiance-en-soi/possible"
import Accompagnement from "../../../src/sections/c-particuliers/01-confiance-en-soi/accompagnement"
import Temoignages from "../../../src/sections/c-particuliers/01-confiance-en-soi/temoignages"

import Banner from "/public/images/banners/confiance-en-soi.webp"
import { siteData } from "../../../src/data/metadata"
import Qui from "../../../src/sections/c-particuliers/01-confiance-en-soi/qui"
import Pourquoi from "../../../src/sections/c-particuliers/01-confiance-en-soi/pourquoi"

export const metadata = {
    title: `Coaching confiance en soi | ${siteData.title}`,
    description: "Un accompagnement individuel pour vous aider à prendre soin de votre santé physique et mentale en relevant vos défis quotidiens. Acquérir des habitudes mentales pour gagner en sérénité et en confiance en soi."
}

export default function Page() {
    const onThisPage = [
        {
            title: "Le coaching confiance en soi",
            link: "#header"
        },
        {
            title: "En pratique",
            link: "#accompagnement"
        },
        {
            title: "Témoignages",
            link: "#temoignages"
        }
    ]

    return (
        <Layout banner={Banner} onThisPage={onThisPage}>
            <Intro />
            <Consequences />
            <Possible />
            <Accompagnement />
            <Qui />
            <Pourquoi />
            <Temoignages />
        </Layout >
    )
}