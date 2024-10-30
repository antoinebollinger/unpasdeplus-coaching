import Layout from "../../../src/layout"
import Banner from "/public/images/banners/blog.webp"
import OnePost from "../../../src/sections/blog/post"
import { siteData } from "../../../src/data/metadata"
import { getPost } from "../../../src/utils/fetch"
import { Post } from "../../../src/models/posts"

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const post: Post = await getPost(params.slug)
    const title = `${post?.title ?? "Blog"} | ${siteData.title}`;
    return {
        title,
    }
}

export default async function Page({ params }: { params: { slug: string } }) {
    const post: Post = await getPost(params.slug)
    return (
        <Layout banner={Banner} className="bg-gray-100">
            <OnePost params={{ post }} />
        </Layout>
    )
}