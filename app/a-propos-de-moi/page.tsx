import Layout from "../../src/layout"
import Bio from "../../src/sections/b-a-propos-de-moi/bio"
import { siteData } from "../../src/data/metadata"

export const metadata = {
    title: `À propos de moi | ${siteData.title}`,
    description: `Sabrina Appriou, fondatrice Un pas de plus Coaching, coach consultante professionnelle certifiée RNCP, basée à Vannes (56). ${siteData.description}`
}

export default function Page() {
    const onThisPage = [
        {
            title: "À propos de moi",
            link: "#top"
        }
    ]

    return (
        <Layout onThisPage={onThisPage}>
            <Bio />
        </Layout>
    )
}