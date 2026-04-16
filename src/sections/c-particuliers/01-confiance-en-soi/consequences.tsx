"use client"
import { useEffect } from "react"
import Image, { StaticImageData } from "next/image"
import dynamic from "next/dynamic"
import { reveal } from "../../../utils/reveal"
import Coaching_1 from "/public/images/offres-particuliers/confiance-en-soi/coaching_1.webp"
import Coaching_2 from "/public/images/offres-particuliers/confiance-en-soi/coaching_2.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { renderToString } from "react-dom/server"

const Calendly = dynamic(() => import("../../../components/calendly"))

export default function Consequences({ className = "bg-gray-100" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll("#consequences .transition"),
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
                <h3 dangerouslySetInnerHTML={{ __html: title }} />
                <div className="flex flex-col gap-6" dangerouslySetInnerHTML={{ __html: text }} />
                <div className="text-center mt-auto">
                    <Calendly />
                </div>
            </div>
        )
    }

    return (
        <section id="consequences" className={className}>
            <div className="container">
                <div className="w-full lg:w-3/4 mx-auto mb-16">
                    <h2 className="text-center">Les conséquences d’un manque de confiance en soi</h2>
                </div>
                <div className="grid grid-col-1 md:grid-cols-2 gap-16 justify-center items-stretch mb-16">
                    {list(
                        Coaching_2,
                        "Dans votre vie professionnelle",
                        `<ul class="list-none list-inside fa-ul flex flex-col">
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            <strong>Difficulté à prendre la parole</strong> en public ou en réunion
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            <strong>Peur de dire non</strong>
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Impression de <strong>ne pas être légitime</strong>
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            <strong>Autosabotage</strong> dans vos projets
                            </li>
                        </ul>`
                    )}
                    {list(
                        Coaching_1,
                        "Dans votre vie personnelle",
                        `<ul class="list-none list-inside fa-ul flex flex-col">
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Manque d’affirmation
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Difficulté à poser vos limites
                            </li>                        
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Stress et charge mentale
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Tendance au perfectionnisme
                            </li>
                        </ul>`
                    )}
                </div>
                <div className="w-full lg:w-3/4 mx-auto">
                    <p className="text-lg leading-6">
                        <strong>Résultat&nbsp;: vous n’osez pas passer à l’action et vous restez bloqué.e dans des situations inconfortables.</strong>
                    </p>
                </div>
            </div>
        </section >
    )
}