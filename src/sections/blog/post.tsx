import { displayDate } from "../../../src/utils/date"
import { Post } from "../../../src/models/posts"
import Comments from "./comments"
import { getPost } from "../../utils/fetch"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment } from "@fortawesome/free-solid-svg-icons"

export default async function SinglePost({ postId }: { postId: string }) {
    const post: Post = await getPost(postId)

    return (
        <section className="py-120">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch mb-16">
                    {
                        <div className="w-full lg:w-2/3 gap-6 bg-white rounded-xl shadow-xl p-4">
                            <h2>{post.title}</h2>
                            <p><small>{displayDate(post.published)}</small></p>
                            <div className="post-body mb-6" dangerouslySetInnerHTML={{ __html: post.content ?? "" }} />
                            <hr className="mb-6" />
                            <div className="flex">
                                <span className="text-xl grow"><FontAwesomeIcon icon={faComment} /> {post.replies.totalItems}</span>
                            </div>
                            <Comments postId={post.id} />
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}