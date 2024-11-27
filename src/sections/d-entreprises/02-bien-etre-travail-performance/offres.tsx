"use client"
import { useEffect } from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { reveal } from "../../../utils/reveal"
import Coaching_1 from "/public/images/coaching-entreprise/coaching_1.webp"
import Coaching_2 from "/public/images/coaching-entreprise/coaching_2.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { renderToString } from "react-dom/server"

export default function Offres({ className = "bg-gray-100" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll("#offres .transition"),
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
        <section id="offres" className={className}>
            <div className="container">
                <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-center items-stretch">
                    {list(
                        Coaching_1,
                        "Coaching équilibre des temps de vie d'un salarié-parent",
                        `<p>Investir dans l'équilibre vie pro perso des salariés parents, c'est construire un environnement de travail plus humain et performant. En reconnaissant et en soutenant leurs besoins spécifiques, l'entreprise gagne en engagement, en productivité et en attractivité.</p>`
                    )}
                    {list(
                        Coaching_2,
                        "Coaching avant un départ en congé maternité / paternité / parental et à la reprise du travail",
                        `<p>Être à la fois futur·e / jeune parent et salarié implique une nouvelle <strong>organisation professionnelle et personnelle</strong>.</p>
                        <ul class="list-none list-inside fa-ul flex flex-col gap-6">
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Accompagner les futurs/jeunes parents dans leur nouveau rôle de parents, pour préparer <strong>l'avant congé maternité / paternité / parental et la reprise du travail</strong> après le congé permet au salarié de vivre sereinement cette transition.
                            </li>
                        </ul>`
                    )}
                </div>
            </div>
        </section >
    )
}