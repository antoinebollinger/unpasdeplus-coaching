import Link from "next/link";
import Bio from "../components/bio";

export default function About() {
    return (
        <section className="bg-white" id="about">
            <div className="container px-8 mx-auto">
                <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 sticky">
                    Qui je suis
                </h2>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <Bio className="mb-4" />
                <div className="w-full text-center">
                    <Link href="/bio">
                        <button class="rounded-full gradient px-8 py-4 shadow-lg">
                            Découvrir mon parcours
                        </button>
                    </Link>
                </div>
            </div>
        </section >
    )
}