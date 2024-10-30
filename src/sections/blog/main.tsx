import Link from "next/link"
import Image from "next/image"
import { getPosts } from "../../../src/utils/fetch"
import displayDate from "../../../src/utils/date"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment } from "@fortawesome/free-solid-svg-icons"

export default async function Main({ className = "" }: { className?: string }) {
    const posts = await getPosts()
    console.log(posts)

    return (
        <section className={className}>
            <div className="container">
                <div className="text-center mb-16">
                    <h1>Mon blog</h1>
                </div>
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
            </div>
        </section >
    )
}