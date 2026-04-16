"use client"
import { useEffect } from "react"
import Image from "next/image"
import Lescles from "/public/images/offres-entreprises/carriere-parentalite/cles.webp"
import { reveal } from "../../../utils/reveal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

export default function Pourquoi({ className = "bg-gray-100" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll("#pourquoi li"),
            classesToRemove: ["opacity-0"],
            delayIncrement: 50
        })
        reveal({
            collection: document.querySelectorAll("#pourquoi .transition"),
            classesToRemove: ["translate-y-full", "scale-0", "opacity-0"]
        })
    }, [])

    return (
        <section id="pourquoi" className={className}>
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                    <div className="w-2/3 lg:w-1/4">
                        <Image
                            src={Lescles}
                            className="w-full rounded-xl mx-auto transition duration-200 scale-0"
                            alt="Le clés du coaching en entreprise"
                            title="Le clés du coaching en entreprise"
                        />
                    </div>
                    <div className="w-full lg:w-3/4 mx-auto">
                        <h2>Pourquoi mettre en place une démarche de parentalité en entreprise&nbsp;?</h2>
                        <br />
                        <p className="text-lg leading-6 mb-6">
                            Accompagner les salariés parents permet de&nbsp;:
                        </p>
                        <ul className="list-none list-inside fa-ul text-lg leading-8">
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Réduire le <strong>stress</strong> et la <strong>charge mentale</strong>
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Favoriser <strong>l’équilibre entre vie professionnelle et vie personnelle</strong>
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Soutenir le <strong>retour de congé maternité ou paternité</strong>
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Renforcer <strong>l’engagement</strong> et la motivation des collaborateurs
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Diminuer <strong>l’absentéisme</strong> et le désengagement
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Valoriser une <strong>politique RH inclusive et humaine</strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section >
    )
}