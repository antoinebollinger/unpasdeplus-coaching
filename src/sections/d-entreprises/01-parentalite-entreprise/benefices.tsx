"use client"
import { useEffect } from "react"
import dynamic from "next/dynamic"
import { reveal } from "../../../utils/reveal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

const Calendly = dynamic(() => import("../../../components/calendly"))

export default function Benefices({ className = "" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll("#performance .transition"),
            classesToRemove: ["opacity-0", "translate-y-full"]
        })
    }, [])

    return (
        <section id="benefices" className={className}>
            <div className="container">
                <div className="w-full lg:w-3/4 mx-auto flex flex-col gap-6">
                    <h2>
                        Les bénéfices de la parentalité en entreprise
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-1/2">
                            <h3>Pour les salariés&nbsp;:</h3>
                            <ul className="list-none list-inside fa-ul text-lg leading-8 mb-6">
                                <li>
                                    <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                    Plus de sérénité et de motivation
                                </li>
                                <li>
                                    <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                    Meilleur équilibre entre vie professionnelle et vie personnelle
                                </li>
                                <li>
                                    <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                    Réduction du stress et de la charge mentale
                                </li>
                                <li>
                                    <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                    Qualité de vie au travail améliorée
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h3>Pour l'entreprise&nbsp;:</h3>
                            <ul className="list-none list-inside fa-ul text-lg leading-8 mb-6">
                                <li>
                                    <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                    Fidélisation des collaborateurs
                                </li>
                                <li>
                                    <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                    Réduction de l’absentéisme et du désengagement
                                </li>
                                <li>
                                    <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                    Meilleure cohésion d’équipe
                                </li>
                                <li>
                                    <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                    Entreprise plus attractive
                                </li>
                                <li>
                                    <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                    Climat de travail plus humain et inclusif
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h2>
                        Mettre en place une démarche de parentalité dans votre entreprise
                    </h2>
                    <p className="text-lg leading-6">
                        Vous souhaitez développer des actions concrètes autour de la <strong>parentalité en entreprise</strong> et du <strong>bien-être au travail</strong> ? Je vous accompagne dans la mise en place d’ateliers, conférences et accompagnements individuels adaptés à vos équipes et à vos enjeux RH.
                    </p>
                    <div className="text-center mt-auto">
                        <Calendly text={<>Échangeons sur vos besoins<br />en parentalité et qualité de vie au travail</>} />
                    </div>
                </div>
            </div>
        </section >
    )
}