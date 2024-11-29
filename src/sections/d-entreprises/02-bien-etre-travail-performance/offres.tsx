"use client"
import { useEffect } from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { reveal } from "../../../utils/reveal"
import Coaching_1 from "/public/images/offres-entreprises/bien-etre-travail-performance/coaching_1.webp"
import Coaching_2 from "/public/images/offres-entreprises/bien-etre-travail-performance/coaching_2.webp"
import Coaching_3 from "/public/images/offres-entreprises/bien-etre-travail-performance/coaching_3.webp"
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
                <div className="w-full lg:w-2/3 mx-auto flex flex-col gap-6 mb-16">
                    <div className="flex flex-col gap-6">
                        <h2>
                            Quelles sont les clés pour accompagner le bien-être au travail&nbsp;?
                        </h2>
                        <p className="text-lg leading-6 transition duration-200 opacity-0 translate-y-full">
                            Pour favoriser un environnement de travail propice à l’épanouissement et à la performance, plusieurs dimensions sont à prendre en compte : <strong>la santé mentale</strong>, le <strong>bien-être physique</strong> et <strong>émotionnel de vos salariés</strong>.
                        </p>
                        <p className="text-lg leading-6 transition duration-200 opacity-0 translate-y-full">
                            Les accompagner dans <strong>leur bien-être au travail</strong>, les outiller, c’est leur donner les clés pour s’épanouir durablement dans leur environnement professionnel.
                        </p>
                    </div>
                </div>
                <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-center items-stretch">
                    {list(
                        Coaching_1,
                        "Coaching Santé mentale",
                        `<p>Prendre soin de la santé mentale de vos salariés, c’est cultiver un climat de travail <strong>bienveillant et inclusif</strong>. C’est aussi prévenir les <strong>risques psychosociaux&nbsp;</strong>: stress au travail, anxiété, charge mentale, épuisement, burn-out, conflits interpersonnels.</p>`
                    )}
                    {list(
                        Coaching_2,
                        "Coaching Bien-être physique",
                        `<p>Contribuer à améliorer la <strong>santé physique</strong> de vos salariés, c’est accompagner vos salariés à être à la fois plus <strong>épanouis et performants&nbsp;</strong>:</p>
                        <ul class="list-none list-inside fa-ul flex flex-col gap-6">
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Soutenir les salariés dans leurs responsabilités familiales, personnelles, pour les aider à gérer sereinement les défis du quotidien.
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Contribuer à une meilleure gestion du temps, des priorités pour éviter le burn-out.
                            </li>
                        </ul>`
                    )}
                    {list(
                        Coaching_3,
                        "Coaching Equilibre vie pro et perso",
                        `<p>Concilier vie professionnelle et personnelle peut être un véritable défi pour les salariés. Ces défis peuvent impacter leur motivation et leur productivité.<br/>Accompagner les salariés à mieux concilier vie pro perso, c’est&nbsp;:</p>
                        <ul class="list-none list-inside fa-ul flex flex-col gap-6">
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Soutenir les salariés dans leurs responsabilités familiales, personnelles, pour les aider à gérer sereinement les défis du quotidien.
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Contribuer à une meilleure gestion du temps, des priorités pour éviter le burn-out.
                            </li>
                        </ul>`
                    )}
                </div>
            </div>
        </section >
    )
}