import { getComments } from "../../utils/fetch"
import { displayDate } from "../../utils/date"

export default async function Comments({ postId, className }: { postId: string, className: string }) {
    const comments = await getComments(postId)

    return (
        <div className={className}>
            {comments.map(comment => (
                <div key={comment.id}>
                    <hr className="mb-4" />
                    <p className="mb-2">
                        <strong>{comment.author.displayName}</strong>, <i>{displayDate(comment.published)}</i>
                    </p>
                    <p className="text-gray-500 mb-4">
                        {comment.content}
                    </p>
                </div>
            ))}
            <hr className="mb-4" />
        </div>
    )
}