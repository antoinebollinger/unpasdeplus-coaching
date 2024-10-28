import Link from "next/link"
import Layout from "../../src/layout"
import customFetch from "../../src/utils/fetch"
import { PostList, Post } from "../../src/models/posts"

export default async function Page() {
    const postsUrl = `https://www.googleapis.com/blogger/v3/blogs/${process.env.NEXT_PUBLIC_BLOGGER_ID}/posts`
    const fetchPosts: PostList = await customFetch(postsUrl)
    const posts: Post[] = fetchPosts.items ?? []
    return (
        <Layout>
            <section className="py-120">
                <div className="container">
                    <div className="text-center mb-16">
                        <h1>Mon blog</h1>
                        <p className="text">Pour prendre RDV, avoir plus de renseignements, me poser des questions, me parler de vous !</p>
                    </div>
                    {posts.map(post => (
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p><small>{post.published}</small></p>
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                            <Link href={`/blog/${post.id}`}>Voir plus</Link>
                        </div>
                    ))}
                </div>
            </section>
        </Layout >
    )
}