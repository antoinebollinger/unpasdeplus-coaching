import Layout from "../../src/layout"
import Offres from "../../src/sections/d-entreprises/offres"
import Banner from "/public/images/banners/entreprise.webp"
import { siteData } from "../../src/data/metadata"

export const metadata = {
    title: `Offres Entreprises | ${siteData.title}`
}

export default function Page() {
    return (
        <Layout banner={Banner}>
            <Offres />
        </Layout>
    )
}