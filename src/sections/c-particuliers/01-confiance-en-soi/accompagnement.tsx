"use client"
import { useEffect } from "react"
import Image, { StaticImageData } from "next/image"
import { reveal } from "../../../utils/reveal"
import Quoi_1 from "/public/images/offres-particuliers/confiance-en-soi/quoi_1.webp"
import Quoi_2 from "/public/images/offres-particuliers/confiance-en-soi/quoi_2.webp"
import Quoi_3 from "/public/images/offres-particuliers/confiance-en-soi/quoi_3.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { renderToString } from "react-dom/server"

export default function Accompagnement({ className = "bg-gray-100" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll("#accompagnement .img"),
            classesToRemove: ["scale-0"]
        })
    }, [])

    const list = (
        img: StaticImageData,
        title: string,
        text: string
    ) => {
        return (
            <div className="w-full lg:w-1/3 flex flex-col gap-6 rounded-xl shadow-xl p-6 bg-white">
                <Image
                    src={img}
                    width={200}
                    className="mx-auto rounded-xl transition duration-200 scale-0 img"
                    alt={title}
                    title={title}
                />
                <h3 className="text-lg text-center">
                    <strong>{title}</strong>
                </h3>
                <div className="text-lg text-start grow">
                    <ul className="list-none list-inside fa-ul flex flex-col" dangerouslySetInnerHTML={{ __html: text }} />
                </div >
            </div >
        )
    }

    return (
        <section id="accompagnement" className={className}>
            <div className="container">
                <div className="w-full lg:w-2/3 mx-auto flex flex-col gap-6 mb-16">
                    <h2 className="text-center">Mon accompagnement en coaching confiance en soi</h2>
                    <p className="text-lg leading-6 text-center">
                        <strong>Je vous propose un accompagnement personnalisé pour vous aider à retrouver une confiance durable.</strong>
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-16 justify-center items-stretch">
                    {list(
                        Quoi_1,
                        "Une approche bienveillante et concrète",
                        `                                
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Écoute sans jugement
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                               Compréhension de vos blocages
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Identification de vos croyances limitantes
                            </li>
                        `
                    )}
                    {list(
                        Quoi_2,
                        "Des outils pour passer à l’action",
                        `                                
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Exercices pratiques
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Mises en situation
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Stratégies adaptées à votre quotidien
                            </li>
                        `
                    )}
                    {list(
                        Quoi_3,
                        "Des résultats durables",
                        `                                
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Affirmation de soi
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Meilleure gestion du stress
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Sentiment de légitimité
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Passage à l’action concret
                            </li>
                        `
                    )}
                </div>
            </div>
        </section>
    )
}