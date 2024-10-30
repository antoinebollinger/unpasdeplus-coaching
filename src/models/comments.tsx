import { Author, Blog } from "./blog"
import { Post } from "./posts"

export interface Comment {
    kind: string
    id: string
    blog: Blog
    post: Post
    published: string
    updated: string
    selfLink: string
    content: string
    author: Author
}

export interface CommentList {
    kind: string
    items: Comment[]
    etag: string
}