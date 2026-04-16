"use client"
import { useEffect } from "react"
import Image, { StaticImageData } from "next/image"
import dynamic from "next/dynamic"
import { reveal } from "../../../utils/reveal"
import Coaching_1 from "/public/images/offres-entreprises/carriere-parentalite/coaching_1.webp"
import Coaching_2 from "/public/images/offres-entreprises/carriere-parentalite/coaching_2.webp"
import Coaching_3 from "/public/images/offres-entreprises/carriere-parentalite/coaching_3.webp"
import Coaching_5 from "/public/images/offres-entreprises/carriere-parentalite/coaching_5.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { renderToString } from "react-dom/server"

const Calendly = dynamic(() => import("../../../components/calendly"))

export default function Accompagnement({ className = "bg-gray-100" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll("#accompagnement .transition"),
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
        <section id="accompagnement" className={className}>
            <div className="container">
                <div className="w-full lg:w-3/4 mx-auto mb-16">
                    <h2>Mon accompagnement autour de la parentalité en entreprise</h2>
                    <p className="text-lg leading-6">
                        Je propose un accompagnement complet et sur mesure pour les entreprises souhaitant soutenir leurs salariés parents et favoriser un environnement de travail serein et humain.
                    </p>
                </div>
                <div className="grid grid-col-1 md:grid-cols-3 gap-16 justify-center items-stretch">
                    {list(
                        Coaching_2,
                        "Ateliers sur la parentalité en entreprise",
                        `<p>Je propose des ateliers sur différentes thématiques&nbsp;:</p>
                        <ul class="list-none list-inside fa-ul flex flex-col">
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Charge mentale des salariés parents
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Équilibre vie pro / vie perso
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Le temps pour soi
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Lâcher prise et gestion du stress
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Prévention épuisement et burn out
                            </li>
                        </ul>`
                    )}
                    {list(
                        Coaching_1,
                        "Conférences et sensibilisation",
                        `<p>Les conférences permettent de sensibiliser les collaborateurs, les managers et les équipes RH aux <strong>enjeux de la parentalité en entreprise</strong>&nbsp;:</p>
                        <ul class="list-none list-inside fa-ul flex flex-col">
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Bien-être des salariés parents
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Charge mentale
                            </li>                        
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Retour au travail après un congé maternité / paternité
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Prévention du burn-out – épuisement
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Qualité de vie au travail
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Place des parents dans l’entreprise
                            </li>
                        </ul>`
                    )}
                    {list(
                        Coaching_5,
                        "Accompagnement coaching individuel des salariés parents",
                        `<p>J’accompagne individuellement les salariés parents pour&nbsp;:</p>
                        <ul class="list-none list-inside fa-ul flex flex-col">
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Faciliter la <strong>réintégration professionnelle</strong> après un congé maternité, paternité ou parental
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Prévenir <strong>le stress, l’épuisement et la surcharge mentale</strong>
                            </li>                        
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Soutenir les parents dans leur <strong>transition de vie professionnelle et personnelle</strong>
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Retrouver un <strong>équilibre durable entre vie pro et vie perso</strong>
                            </li>
                        </ul>`
                    )}
                    {list(
                        Coaching_3,
                        "Groupes de parole et espaces d’échange",
                        `<p>Les <strong>groupes de parole</strong> permettent aux salariés parents de partager leurs expériences, d’échanger sur leurs difficultés et de trouver des solutions concrètes ensemble.</p>`
                    )}
                </div>
            </div>
        </section >
    )
}