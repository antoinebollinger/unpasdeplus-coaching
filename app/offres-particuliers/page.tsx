import Layout from "../../src/layout"
import Offres from "../../src/sections/c-particuliers/offres"
import Banner from "/public/images/banners/contact.webp"
import { siteData } from "../../src/data/metadata"

export const metadata = {
    title: `Offres Particuliers | ${siteData.title}`
}

export default function Page() {
    return (
        <Layout banner={Banner}>
            <Offres />
        </Layout>
    )
}