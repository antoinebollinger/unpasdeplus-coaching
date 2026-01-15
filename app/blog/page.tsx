import Layout from "../../src/layout"
import Banner from "/public/images/banners/accueil.webp"
import { siteData } from "../../src/data/metadata"
import Posts from "../../src/sections/blog/posts"

export const metadata = {
    title: `Blog | ${siteData.title}`
}

export default async function Page() {
    return (
        <Layout banner={Banner} className="bg-gray-100">
            <Posts />
        </Layout >
    )
}