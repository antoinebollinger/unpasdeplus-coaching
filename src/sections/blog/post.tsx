import { displayDate } from "../../../src/utils/date"
import { Post } from "../../../src/models/posts"
import Comments from "./comments"
import NewComment from "./newComment"
import { getPost } from "../../utils/fetch"

export default async function SinglePost({ postId }: { postId: string }) {
    const post: Post = await getPost(postId)

    return (
        <section className="py-120">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch mb-16">
                    <div className="w-full lg:w-2/3 gap-6 bg-white rounded-xl shadow-xl p-4">
                        <h2>{post.title}</h2>
                        <p><small>{displayDate(post.published)}</small></p>
                        <div className="post-body mb-12" dangerouslySetInnerHTML={{ __html: post.content ?? "" }} />
                        {/* <Comments postId={postId} className="mb-12" />
                        <NewComment /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}