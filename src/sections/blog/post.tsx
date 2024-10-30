import displayDate from "../../../src/utils/date"
import { Post } from "../../../src/models/posts"
import Comments from "./comments"

export default async function OnePost({ params }: { params: { post: Post } }) {
    console.log(params.post)

    return (
        <section className="py-120">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch mb-16">
                    {
                        <div key={params.post.id} className="w-full lg:w-2/3 gap-6 bg-white rounded-xl shadow-xl p-4">
                            <h2>{params.post.title}</h2>
                            <p><small>{displayDate(params.post.published)}</small></p>
                            <div className="post-body mb-6" dangerouslySetInnerHTML={{ __html: params.post.content ?? "" }} />
                            <hr className="mb-6" />
                            <Comments comments={params.post.replies.selfLink} />
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}