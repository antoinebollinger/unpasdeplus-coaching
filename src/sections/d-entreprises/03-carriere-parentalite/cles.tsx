"use client"
import { useEffect } from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { reveal } from "../../../utils/reveal"
import Lescles from "/public/images/coaching-entreprise/cles.webp"
import Coaching_1 from "/public/images/coaching-entreprise/coaching_1.webp"
import Coaching_2 from "/public/images/coaching-entreprise/coaching_2.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { renderToString } from "react-dom/server"

export default function Cles({ className = "bg-gray-100" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll("#cles .transition"),
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
        <section id="cles" className={className}>
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-2/3 lg:w-1/4">
                        <Image
                            src={Lescles}
                            className="w-full rounded-full mx-auto transition duration-200 scale-0"
                            alt="Le clés du coaching en entreprise"
                            title="Le clés du coaching en entreprise"
                        />
                    </div>
                    <div className="w-full lg:w-3/4">
                        <p className="h1">Les clés pour accompagner la parentalité</p>
                        <div className="flex flex-col gap-6">
                            <h2>
                                Coaching en entreprise&nbsp;: un outil puissant pour accompagner la parentalité
                            </h2>
                            <p className="text-lg leading-6 transition duration-200 opacity-0 translate-y-full">
                                Le coaching en entreprise offre un espace dédié aux salariés parents pour <strong>explorer leurs défis</strong>, un <strong>soutien professionnel et personnalisé</strong>, pour créer un environnement propice au <strong>bien-être au travail</strong>.
                            </p>
                            <p className="text-lg leading-6 transition duration-200 opacity-0 translate-y-full">
                                Offrir du coaching aux salariés parents, c'est apporter son soutien à ses salariés et renforcer une culture d'entreprise bienveillante et inclusive.
                            </p>
                            <p className="text-xl font-bold leading-6 transition duration-200 opacity-0 translate-y-full">
                                A la clé&nbsp;: des salariés engagés envers leur entreprise.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-col-1 md:grid-cols-2 gap-16 justify-center items-stretch mb-16">
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