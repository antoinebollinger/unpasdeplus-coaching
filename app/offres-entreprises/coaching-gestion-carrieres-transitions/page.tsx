import Layout from "../../../src/layout"
import Intro from "../../../src/sections/d-entreprises/01-gestion-carrieres-transitions/intro"
import Offre from "../../../src/sections/d-entreprises/01-gestion-carrieres-transitions/offre"
import Pourquoi from "../../../src/sections/d-entreprises/01-gestion-carrieres-transitions/pourquoi"
import Banner from "/public/images/banners/entreprise.webp"

export default function Page() {
    return (
        <Layout banner={Banner}>
            <Intro />
            <Pourquoi />
            <Offre />
        </Layout>
    )
}