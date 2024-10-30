import Layout from "../../src/layout"
import Banner from "/public/images/banners/blog.webp"
import { siteData } from "../../src/data/metadata"
import Main from "../../src/sections/blog/main"

export const metadata = {
    title: `Blog | ${siteData.title}`
}

export default async function Page() {
    return (
        <Layout banner={Banner} className="bg-gray-100">
            <Main />
        </Layout >
    )
}