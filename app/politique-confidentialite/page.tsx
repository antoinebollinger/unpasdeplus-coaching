import Layout from "../../src/layout"
import PolitiqueConfidentialite from "../../src/sections/politique-confidentialite"
import Banner from "/public/images/banners/politique-confidentialite.webp"
import { siteData } from "../../src/data/metadata"

export const metadata = {
    title: `Politique de confidentialité | ${siteData.title}`
}

export default function Page() {
    return (
        <Layout banner={Banner}>
            <PolitiqueConfidentialite />
        </Layout>
    )
}