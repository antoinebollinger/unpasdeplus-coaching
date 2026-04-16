"use client"
import { useEffect } from "react"
import Image from "next/image"
import { reveal } from "../../../utils/reveal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import Sabrina from "/public/images/a-propos-de-moi/Sabrina_Appriou.webp"

export default function Expertise({ className = "" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll("#resultat .transition"),
            classesToRemove: ["opacity-0", "scale-0"]
        })
        reveal({
            collection: document.querySelectorAll("#resultat li"),
            classesToRemove: ["opacity-0", "translate-x-full"],
            delayIncrement: 50
        })
    }, [])

    return (
        <section id="resultat" className={className}>
            <div className="container">
                <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
                    <div className="w-1/2 md:w-1/4">
                        <Image
                            src={Sabrina}
                            className="w-full rounded-xl mx-auto transition duration-200 scale-0"
                            alt="Serein, confiant, soutenu"
                            title="Serein, confiant, soutenu"
                        />
                    </div>
                    <div className="w-full md:w-3/4 flex flex-col gap-6">
                        <h2 className="h1">Mon expertise</h2>
                        <p className="text-lg leading-6">
                            Mon accompagnement en <strong>coaching perte de poids</strong> s’appuie sur des compétences solides, une expérience de terrain et une approche globale de la relation à l’alimentation.
                            <br />
                            Je m’appuie sur des méthodes reconnues dans le domaine du coaching et du changement de comportement, qui permettent de travailler en profondeur sur les habitudes, la motivation et le rapport à la nourriture.
                            <br />
                            <br />
                            Au fil de mes accompagnements, j’ai développé ma propre méthode&nbsp;: <strong>Un Pas de Plus Coaching</strong>.
                            <br />
                            Cette méthode repose sur une approche globale de la perte de poids qui prend en compte trois dimensions essentielles&nbsp;:
                        </p>
                        <ul className="list-none list-inside fa-ul text-lg leading-8">
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Le <strong>mental</strong>, pour renforcer la motivation et dépasser les blocages
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Les <strong>émotions</strong>, souvent à l’origine du comportement alimentaire
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                L’<strong>activité physique et le mouvement</strong>, pour remettre le corps en dynamique
                            </li>
                        </ul>
                        <p className="text-lg leading-6">
                            L’objectif est d’accompagner chaque personne vers une perte de poids durable, en travaillant à la fois sur le rééquilibrage alimentaire, le comportement alimentaire et la relation à l’alimentation.
                            <br />
                            <br />
                            Dans le cadre de ma formation, j’ai également réalisé un travail de recherche et rédigé un mémoire intitulé&nbsp;:
                            <br />
                            <em>«&nbsp;Le coaching et la perte de poids&nbsp;: l’accompagnement par le coaching allié à un suivi diététique&nbsp;»</em>
                            <br />
                            Ce travail m’a permis d’approfondir la manière dont le coaching peut soutenir et renforcer les démarches de perte de poids, en travaillant sur la motivation, les émotions et le changement de comportement.
                            <br />
                            <br />
                            Depuis plus de 6 ans, j’accompagne des personnes dans leur transformation et leur parcours de perte de poids, en les aidant à retrouver&nbsp;:
                        </p>
                        <ul className="list-none list-inside fa-ul text-lg leading-8">
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Une <strong>relation plus sereine avec l’alimentation</strong>
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Une <strong>motivation durable</strong>
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Une <strong>meilleure image d’elles-mêmes</strong>
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Un <strong>équilibre de vie plus global</strong>
                            </li>
                        </ul>
                        <p className="text-lg leading-6 font-italic">
                            «&nbsp;La perte de poids durable ne se joue pas seulement dans l’assiette. Elle se construit aussi dans le mental, les émotions et le mouvement.&nbsp;»
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}