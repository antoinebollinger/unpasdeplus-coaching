"use client"
import Link from "next/link"
import Image from "next/image"
import { getPosts, searchPosts } from "../../utils/fetch"
import { displayDate } from "../../utils/date"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { Post } from "../../models/posts"
import React, { useEffect, useState } from "react"
import { debounce } from "../../utils/debounce"
import Loading from "../../components/loading"

export default function Posts({ className = "" }: { className?: string }) {
    const [query, setQuery] = useState("")
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchData = async (query: string) => {
        setLoading(true)
        const posts: Post[] = await searchPosts(query)
        setPosts(posts)
        setLoading(false)
    }

    useEffect(() => {
        fetchData(query)
    }, [query])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    return (
        <section className={className}>
            <div className="container">
                <div className="text-center mb-8 lg:mb-16">
                    <h1>Mon blog</h1>
                </div>
                <div className="mx-auto lg:w-1/2 mb-8 lg:mb-16">
                    <div id="search-form" className="relative">
                        <input
                            type="text"
                            value={query}
                            onChange={handleInputChange}
                            placeholder="Rechercher"
                            className="w-full py-3 pl-6 pr-12 duration-200 bg-white border border-gray-100 rounded-full focus:border-primary-600 focus:outline-none mb-4" required
                        />
                        <button type="submit" className="absolute top-0 right-0 mt-3 mr-6 text-xl text-primary-600" aria-label="Rechercher">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>
                {loading && <Loading />}
                {!loading && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map(post => (
                            <Link href={`/blog/${post.id}`} key={post.id} className="flex flex-col rounded-xl shadow-xl p-4 bg-white transition hover:scale-[1.05]">
                                <div className="grow">
                                    <h2>{post.title}</h2>
                                    <p><small>{displayDate(post.published)}</small></p>
                                    {post.images && <Image
                                        src={post.images[0].url}
                                        width={500}
                                        height={300}
                                        alt={post.title}
                                        className="w-full mb-4"
                                    />
                                    }
                                </div>
                                <div className="flex">
                                    <span className="text-xl grow"><FontAwesomeIcon icon={faComment} /> {post.replies.totalItems}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section >
    )
}