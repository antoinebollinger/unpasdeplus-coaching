import Link from "next/link"
import Layout from "../../src/layout"
import customFetch from "../../src/utils/fetch"
import displayDate from "../../src/utils/date"
import { PostList, Post } from "../../src/models/posts"
import Image from "next/image"

export default async function Page() {
    const postsUrl = `https://www.googleapis.com/blogger/v3/blogs/${process.env.NEXT_PUBLIC_BLOGGER_ID}/posts?fetchImages=true&key=${process.env.NEXT_PUBLIC_BLOGGER_KEY}`
    const fetchPosts: PostList = await customFetch(postsUrl)
    const posts: Post[] = fetchPosts.items ?? []

    return (
        <Layout>
            <section className="py-120">
                <div className="container">
                    <div className="text-center mb-16">
                        <h1>Mon blog</h1>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch mb-16">
                        {posts.map(post => (
                            <Link href={`/blog/${post.id}`} key={post.id} className="w-full lg:w-1/3 gap-6 rounded-xl shadow-xl p-4 bg-gray-100 transition hover:scale-[1.05]">
                                <h2>{post.title}</h2>
                                <p><small>{displayDate(post.published)}</small></p>
                                <Image
                                    src={post.images[0].url}
                                    width={500}
                                    height={500}
                                    alt={post.title}
                                    className="w-full mb-4"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </Layout >
    )
}