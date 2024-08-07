import Layout from "../../src/layout"
import MentionsLegales from "../../src/sections/mentions-legales"
import Banner from "/public/images/banners/mentions-legales.webp"
import { siteData } from "../../src/data/metadata"

export const metadata = {
    title: `Mentions légales | ${siteData.title}`
}

export default function Page() {
    return (
        <Layout banner={Banner}>
            <MentionsLegales />
        </Layout>
    )
}