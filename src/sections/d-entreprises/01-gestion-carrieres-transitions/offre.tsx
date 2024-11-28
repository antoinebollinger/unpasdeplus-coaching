"use client"
import { useEffect } from "react"
import { renderToString } from "react-dom/server"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { reveal } from "../../../utils/reveal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import Coaching_1 from "/public/images/offres-entreprises/gestion-carrieres-transitions/coaching_01.webp"
import Coaching_2 from "/public/images/offres-entreprises/gestion-carrieres-transitions/coaching_02.webp"

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
                            Mon offre de coaching - Transitions & Carrières
                        </h2>
                        <p className="text-lg leading-6 transition duration-200 opacity-0 translate-y-full">
                            Accompagner les salariés dans leurs transitions personnelles et professionnelles pour préserver leur bien-être, leur équilibre et leur motivation.
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-2/3 mx-auto grid grid-col-1 md:grid-cols-2 gap-16 justify-center items-stretch mb-16">
                    {list(
                        Coaching_1,
                        "Coaching individuel",
                        `<ul class="list-none list-inside fa-ul flex flex-col gap-6">
                            <li>
                                ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Accompagnement pour clarifier le projet professionnel.
                            </li>
                            <li>
                                ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Préparation aux entretiens d’évolution ou de recrutement.
                            </li>
                            <li>
                                ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Travail sur la confiance en soi et la posture professionnelle.
                            </li>
                        </ul>`
                    )}
                    {list(
                        Coaching_2,
                        "Atelier collectif",
                        `<ul class="list-none list-inside fa-ul flex flex-col gap-6">
                            <li>
                                ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Réflexion sur les trajectoires de carrière en entreprise.
                            </li>
                            <li>
                                ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Formation à la gestion des transitions professionnelles.
                            </li>
                            <li>
                                ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Stratégies pour concilier ambitions et bien-être.
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