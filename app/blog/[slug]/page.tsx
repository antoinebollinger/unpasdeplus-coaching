import Layout from "../../../src/layout"
import SinglePost from "../../../src/sections/blog/post"
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
    return (
        <Layout className="bg-gray-100">
            <SinglePost postId={params.slug} />
        </Layout>
    )
}