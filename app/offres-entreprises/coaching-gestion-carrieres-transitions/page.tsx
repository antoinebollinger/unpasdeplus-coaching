import Layout from "../../../src/layout"
import Intro from "../../../src/sections/d-entreprises/03-carriere-parentalite/intro"
import Banner from "/public/images/banners/entreprise.webp"

export default function Page() {
    return (
        <Layout banner={Banner}>
            <Intro />
        </Layout>
    )
}