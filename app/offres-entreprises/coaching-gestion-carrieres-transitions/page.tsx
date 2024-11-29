import Layout from "../../../src/layout"
import Intro from "../../../src/sections/d-entreprises/01-gestion-carrieres-transitions/intro"
import Pourquoi from "../../../src/sections/d-entreprises/01-gestion-carrieres-transitions/pourquoi"
import Offre from "../../../src/sections/d-entreprises/01-gestion-carrieres-transitions/offre"
import Banner from "/public/images/banners/entreprise.webp"
import Temoignages from "../../../src/sections/d-entreprises/01-gestion-carrieres-transitions/temoignages"

export default function Page() {
    const onThisPage = [
        {
            title: "Gestion des carrières & transitions",
            link: "#header"
        },
        {
            title: "Pourquoi investir dans le coaching",
            link: "#pourquoi"
        },
        {
            title: "Mon offre de coaching",
            link: "#offre"
        },
        {
            title: "Témoignages",
            link: "#temoignages"
        }]

    return (
        <Layout banner={Banner} onThisPage={onThisPage}>
            <Intro />
            <Pourquoi />
            <Offre />
            <Temoignages />
        </Layout>
    )
}