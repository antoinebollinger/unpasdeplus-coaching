"use client"
import { fa1, fa2, fa3, fa4 } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react"
import { reveal } from "../../../utils/reveal"

export default function Pourquoi({ className = "bg-gray-100" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll("#pourquoi .transition"),
            classesToRemove: ["translate-y-full", "scale-0", "opacity-0"]
        })
    }, [])

    return (
        <section id="pourquoi" className={className}>
            <div className="container">
                <div className="w-full lg:w-2/3 mx-auto flex flex-col gap-6">
                    <div className="flex flex-col gap-6">
                        <h2>
                            Pourquoi investir dans le coaching en gestion des carrières&nbsp;?
                        </h2>
                        <ul className="list-none list-inside fa-ul text-lg leading-8 flex flex-col gap-6">
                            <li className="transition duration-200 opacity-0 translate-y-full">
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={fa1} /></span>
                                <strong>Anticiper les changements professionnels&nbsp;:</strong> aide à la reconversion, préparation à une mobilité interne ou externe, gestion des évolutions de poste.Gérer les périodes de transition avec sérénité.
                            </li>
                            <li className="transition duration-200 opacity-0 translate-y-full">
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={fa2} /></span>
                                <strong>Renforcer la satisfaction au travail&nbsp;:</strong> clarifier les objectifs de carrière et aligner les objectifs individuels avec les priorités stratégiques de l’entreprise.
                            </li>
                            <li className="transition duration-200 opacity-0 translate-y-full">
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={fa3} /></span>
                                <strong>Soutenir les collaborateurs dans les moments de transition&nbsp;:</strong> intégration dans un nouveau rôle, accompagnement après une période difficile (burn-out, transitions personnelles, réorganisation). C’est maintenir la motivation et l’engagement des collaborateurs face au changement.
                            </li>
                            <li className="transition duration-200 opacity-0 translate-y-full">
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={fa4} /></span>
                                <strong>Valoriser les talents de votre entreprise&nbsp;:</strong> développer les compétences et renforcer l’engagement des équipes. Intégrer plus rapidement les nouveaux rôles et responsabilités.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}