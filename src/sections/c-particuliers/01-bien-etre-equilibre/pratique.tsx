"use client"
import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { reveal } from "../../../utils/reveal"
import Pratique1 from "/public/images/offres-particuliers/bien-etre-equilibre/pratique_1.webp"
import Pratique2 from "/public/images/offres-particuliers/bien-etre-equilibre/pratique_2.webp"
import Pratique3 from "/public/images/offres-particuliers/bien-etre-equilibre/pratique_3.webp"
import Pratique4 from "/public/images/offres-particuliers/bien-etre-equilibre/pratique_4.webp"

export default function Pratique({ className = "bg-gray-100" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll("#pratique .img"),
            classesToRemove: ["translate-x-3/4", "scale-0", "opacity-0"],
            classesToAdd: ["translate-x-0"],
        })
    }, [])

    return (
        <section id="pratique" className={className}>
            <div className="container">
                <div className="w-full lg:w-2/3 mx-auto flex flex-col gap-6 mb-16">
                    <h3 className="h1 text-center">En pratique, ça donne quoi&nbsp;?</h3>
                    <div className="w-full flex flex-col md:flex-row gap-6 justify-between items-start">
                        {
                            [
                                {
                                    img: Pratique1,
                                    text: "Coaching en séances individuelles"
                                },
                                {
                                    img: Pratique2,
                                    text: "Un programme efficace et complet"
                                },
                                {
                                    img: Pratique3,
                                    text: "Ateliers collectifs"
                                },
                                {
                                    img: Pratique4,
                                    text: "En présentiel à Vannes & ses alentours<br />Distanciel sur toute la France"
                                }
                            ].map((e, i) => (
                                <div className="w-full" key={i}>
                                    <Image
                                        src={e.img}
                                        width={200}
                                        className="mx-auto rounded-full mb-6 transition duration-200 scale-0 img"
                                        alt={e.text.replace("<br />", " ")}
                                        title={e.text.replace("<br />", " ")}
                                    />
                                    <p className="text-center font-bold" dangerouslySetInnerHTML={{ __html: e.text }} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="text-center">
                    <Link href="/contact" className="main-btn gradient-btn focus:outline-none uppercase">
                        Je prends contact pour en savoir plus
                    </Link>
                </div>
            </div>
        </section>
    )
}