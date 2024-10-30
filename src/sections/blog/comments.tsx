import { getComments } from "../../utils/fetch"
import { displayDate } from "../../utils/date"

export default async function Comments({ postId }: { postId: string }) {
    const comments = await getComments(postId)

    return (
        <div>
            {comments.map(comment => (
                <div key={comment.id}>
                    <p className="mb-2">
                        <strong>{comment.author.displayName}</strong>, <i>{displayDate(comment.published)}</i>
                    </p>
                    <p className="text-gray-500 mb-4">
                        {comment.content}
                    </p>
                    <hr className="mb-6" />
                </div>
            ))}
        </div>
    )
}