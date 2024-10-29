import Link from "next/link"
import Image from "next/image"
import { getPosts } from "../../../src/utils/fetch"
import displayDate from "../../../src/utils/date"

export default async function Main({ className = "" }: { className?: string }) {
    const posts = await getPosts()

    return (
        <section className={className}>
            <div className="container">
                <div className="text-center mb-16">
                    <h1>Mon blog</h1>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch mb-16">
                    {posts.map(post => (
                        <Link href={`/blog/${post.id}`} key={post.id} className="w-full lg:w-1/3 gap-6 rounded-xl shadow-xl p-4 bg-gray-100 transition hover:scale-[1.05]">
                            <h2>{post.title}</h2>
                            <p><small>{displayDate(post.published)}</small></p>
                            <Image
                                src={post.images[0].url}
                                width={500}
                                height={300}
                                alt={post.title}
                                className="w-full mb-4"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}