import { Post, PostList } from "../models/posts"

export async function customFetch(url: string = "") {
    const res = await fetch(url, {
        // headers: {
        //     Authorization: `Bearer ${process.env.NEXT_PUBLIC_GOOGLE_TOKEN}`
        // }
    })
    if (!res.ok) return []
    const data = await res.json()
    return data
}

export async function getPost(slug: string) {
    const postsUrl = `${process.env.NEXT_PUBLIC_BLOGGER_API}/blogs/${process.env.NEXT_PUBLIC_BLOGGER_ID}/posts/${slug}?key=${process.env.NEXT_PUBLIC_BLOGGER_KEY}`
    const post: Post = await customFetch(postsUrl)
    return post
}

export async function getPosts() {
    const postsUrl = `${process.env.NEXT_PUBLIC_BLOGGER_API}/blogs/${process.env.NEXT_PUBLIC_BLOGGER_ID}/posts?fetchImages=true&key=${process.env.NEXT_PUBLIC_BLOGGER_KEY}`
    const fetchPosts: PostList = await customFetch(postsUrl)
    const posts: Post[] = fetchPosts.items ?? []
    return posts
}