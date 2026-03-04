import Layout from "../../src/layout"
import { siteData } from "../../src/data/metadata"
import Posts from "../../src/sections/blog/posts"

export const metadata = {
    title: `Blog | ${siteData.title}`
}

export default async function Page() {
    return (
        <Layout className="bg-gray-100">
            <Posts />
        </Layout >
    )
}