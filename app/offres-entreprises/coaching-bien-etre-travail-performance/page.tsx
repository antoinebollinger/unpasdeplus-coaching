import Layout from "../../../src/layout"
import Intro from "../../../src/sections/d-entreprises/02-bien-etre-travail-performance/intro"
import Performance from "../../../src/sections/d-entreprises/02-bien-etre-travail-performance/performance"
import Benefices from "../../../src/sections/d-entreprises/02-bien-etre-travail-performance/benefices"
import Offres from "../../../src/sections/d-entreprises/02-bien-etre-travail-performance/offres"
import Approches from "../../../src/sections/d-entreprises/02-bien-etre-travail-performance/approches"
import Banner from "/public/images/banners/entreprise.webp"
import Temoignages from "../../../src/sections/d-entreprises/02-bien-etre-travail-performance/temoignages"

export default function Page() {
    const onThisPage = [
        {
            title: "Bien-être au travail & performance",
            link: "#header"
        },
        {
            title: "Pourquoi favoriser le bien-être",
            link: "#performance"
        },
        {
            title: "Les bénéfices concrets",
            link: "#benefices"
        },
        {
            title: "Quelles sont les clés",
            link: "#offres"
        },
        {
            title: "Notre approche",
            link: "#approches"
        },
        {
            title: "Témoignages",
            link: "#temoignages"
        }
    ]

    return (
        <Layout banner={Banner} onThisPage={onThisPage}>
            <Intro />
            <Performance />
            <Benefices />
            <Offres />
            <Approches />
            <Temoignages />
        </Layout>
    )
}