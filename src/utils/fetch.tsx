import { Comment, CommentList } from "../models/comments"
import { Post, PostList } from "../models/posts"

export async function customFetch({ url = "", method = "GET" }: { url: string, method?: string }) {
    const res = await fetch(url, {
        method,
        cache: "no-store"
    })
    if (!res.ok) return []
    const data = await res.json()
    return data
}

export async function getPost(postId: string) {
    const url = `${process.env.NEXT_PUBLIC_BLOGGER_API}/blogs/${process.env.NEXT_PUBLIC_BLOGGER_ID}/posts/${postId}?key=${process.env.NEXT_PUBLIC_BLOGGER_KEY}`
    const post: Post = await customFetch({ url })
    return post
}

export async function getPosts() {
    const url = `${process.env.NEXT_PUBLIC_BLOGGER_API}/blogs/${process.env.NEXT_PUBLIC_BLOGGER_ID}/posts?fetchImages=true&key=${process.env.NEXT_PUBLIC_BLOGGER_KEY}`
    const fetchPosts: PostList = await customFetch({ url })
    const posts: Post[] = fetchPosts.items ?? []
    return posts
}

export async function searchPosts(search?: string) {
    const url = `${process.env.NEXT_PUBLIC_BLOGGER_API}/blogs/${process.env.NEXT_PUBLIC_BLOGGER_ID}/posts/search?q=${search}&fetchBodies=false&key=${process.env.NEXT_PUBLIC_BLOGGER_KEY}`
    const fetchPosts: PostList = await customFetch({ url })
    const filteredPosts: Post[] = fetchPosts.items ?? []
    const allPosts: Post[] = await getPosts()
    const posts: Post[] = allPosts.filter(post => filteredPosts.some(filter => filter.id === post.id))
    return posts
}

export async function getComments(postId: string) {
    const url = `${process.env.NEXT_PUBLIC_BLOGGER_API}/blogs/${process.env.NEXT_PUBLIC_BLOGGER_ID}/posts/${postId}/comments?key=${process.env.NEXT_PUBLIC_BLOGGER_KEY}`
    const fetchComments: CommentList = await customFetch({ url })
    const comments: Comment[] = fetchComments.items ?? []
    return comments
}

export async function postComment(postId: string, comment: Comment) {
    const url = `${process.env.NEXT_PUBLIC_BLOGGER_API}/blogs/${process.env.NEXT_PUBLIC_BLOGGER_ID}/posts/${postId}/comments?key=${process.env.NEXT_PUBLIC_BLOGGER_KEY}`
    const fetch = await customFetch({ url, method: "POST" })
    return fetch
}