"use client"
import { useEffect } from "react"
import { renderToString } from "react-dom/server"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { reveal } from "../../../utils/reveal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import Coaching_1 from "/public/images/offres-entreprises/bien-etre-travail-performance/offre_1.webp"
import Coaching_2 from "/public/images/offres-entreprises/bien-etre-travail-performance/offre_2.webp"
import Coaching_3 from "/public/images/offres-entreprises/bien-etre-travail-performance/offre_3.webp"

export default function Offre({ className = "" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll("#offre .transition"),
            classesToRemove: ["translate-y-full", "scale-0", "opacity-0"]
        })
    }, [])

    const list = (
        img: StaticImageData,
        title: string,
        text: string
    ) => {
        return (
            <div className="w-full flex flex-col gap-6 rounded-xl shadow-xl p-6 bg-white">
                <Image
                    src={img}
                    className="w-full rounded transition duration-200 scale-0 object-cover"
                    alt={text}
                    title={text}
                />
                <h2 dangerouslySetInnerHTML={{ __html: title }} />
                <div className="flex flex-col gap-6" dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        )
    }

    return (
        <section id="offre" className={className}>
            <div className="container">
                <div className="w-full lg:w-2/3 mx-auto flex flex-col gap-6 mb-16">
                    <div className="flex flex-col gap-6">
                        <h2>
                            Notre approche pour améliorer le bien-être au travail
                        </h2>
                        <p className="text-lg leading-6 transition duration-200 opacity-0 translate-y-full">
                            Notre approche repose sur des outils & méthodes de coaching basés sur les neurosciences, les sciences cognitives, l’intelligence émotionnelle.
                        </p>
                        <h3>
                            Programmes de coaching
                        </h3>
                    </div>
                </div>
                <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-center items-stretch mb-16">
                    {list(
                        Coaching_1,
                        "Coaching individuel",
                        `<ul class="list-none list-inside fa-ul flex flex-col gap-6">
                            <li>
                                ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Accompagner vos collaborateurs à prendre soin de leur santé physique et mentale.
                            </li>
                        </ul>`
                    )}
                    {list(
                        Coaching_2,
                        "Atelier collectif",
                        `<ul class="list-none list-inside fa-ul flex flex-col gap-6">
                            <li>
                                ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Outiller vos collaborateurs sur des problématiques liées à leur bien-être.
                            </li>
                        </ul>`
                    )}
                    {list(
                        Coaching_3,
                        "Conférence",
                        `<ul class="list-none list-inside fa-ul flex flex-col gap-6">
                            <li>
                                ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Sensibiliser les collaborateurs sur des problématiques autour de la santé mentale, de l’équilibre vie pro perso, des risques psychosociaux, etc.).
                            </li>
                        </ul>`
                    )}
                </div>
                <div className="text-center mb-16">
                    <Link href="/contact" className="main-btn gradient-btn focus:outline-none uppercase">
                        Me contacter pour en savoir plus
                    </Link>
                </div>
                <div className="text-center">
                    <h2>Coach consultante professionnelle dans le Morbihan, basé à Vannes.</h2>
                    <h2>À mon cabinet au 30 ter Avenue de la Marne à Vannes,</h2>
                    <h2>présentiel, à distance, en visio sur toute la France.</h2>
                </div>
            </div>
        </section >
    )
}