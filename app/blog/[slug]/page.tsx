import Layout from "../../../src/layout";
import customFetch from "../../../src/utils/fetch"
import displayDate from "../../../src/utils/date"
import { Post } from "../../../src/models/posts"

export default async function Page({ params }: { params: { slug: string } }) {
    const postsUrl = `https://www.googleapis.com/blogger/v3/blogs/${process.env.NEXT_PUBLIC_BLOGGER_ID}/posts/${params.slug}`
    const post: Post = await customFetch(postsUrl)

    return (
        <Layout>
            <section className="py-120">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch mb-16">
                        {
                            <div key={post.id} className="w-full lg:w-2/3 gap-6 rounded-xl shadow-xl p-4 bg-gray-100">
                                <h2>{post.title}</h2>
                                <p><small>{displayDate(post.published)}</small></p>

                                <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content ?? "" }} />
                            </div>
                        }
                    </div>
                </div>
            </section>
        </Layout>
    )

}