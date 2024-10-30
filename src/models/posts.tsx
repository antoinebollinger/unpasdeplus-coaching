import { Author, Blog, Images, Replies } from "./blog"

export interface Post {
    kind: string
    id: string
    blog: Blog
    published: string
    updated: string
    url: string
    selfLink: string
    title: string
    content: string
    images: Images[]
    author: Author
    replies: Replies
    location: Location
    etag: string
}

export interface PostList {
    kind: string
    items: Post[]
    etag: string
}