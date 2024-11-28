import Layout from "../../../src/layout"
import Approche from "../../../src/sections/d-entreprises/02-bien-etre-travail-performance/approche"
import Benefices from "../../../src/sections/d-entreprises/02-bien-etre-travail-performance/benefices"
import Intro from "../../../src/sections/d-entreprises/02-bien-etre-travail-performance/intro"
import Offres from "../../../src/sections/d-entreprises/02-bien-etre-travail-performance/offres"
import Performance from "../../../src/sections/d-entreprises/02-bien-etre-travail-performance/performance"
import Banner from "/public/images/banners/entreprise.webp"

export default function Page() {
    return (
        <Layout banner={Banner}>
            <Intro />
            <Performance />
            <Benefices />
            <Offres />
            <Approche />
        </Layout>
    )
}