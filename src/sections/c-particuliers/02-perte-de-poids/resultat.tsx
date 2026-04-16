"use client"
import { useEffect } from "react"
import Image from "next/image"
import { reveal } from "../../../utils/reveal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import Youpi from "/public/images/offres-particuliers/perte-de-poids/resultat.webp"

export default function Resultat({ className = "bg-gray-100" }: { className?: string }) {
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
                <div className="w-full lg:w-3/4 mx-auto flex flex-col lg:flex-row gap-6 justify-center items-center lg:items-start">
                    <div className="w-1/2 md:w-1/4 order-0 lg:order-1">
                        <Image
                            src={Youpi}
                            className="w-full rounded-xl mx-auto transition duration-200 scale-0"
                            alt="Serein, confiant, soutenu"
                            title="Serein, confiant, soutenu"
                        />
                    </div>
                    <div className="w-full md:w-3/4 flex flex-col gap-6">
                        <h2>À qui s’adresse ce coaching perte de poids&nbsp;?</h2>
                        <p className="text-lg leading-6">
                            Cet accompagnement s’adresse aux personnes qui souhaitent&nbsp;:
                        </p>
                        <ul className="list-none list-inside fa-ul text-lg leading-8">
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Retrouver une <strong>relation sereine avec l’alimentation</strong>
                            </li>                        <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Sortir du cycle <strong>régimes / reprise de poids</strong>
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Améliorer leur <strong>rapport à la nourriture</strong>
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Comprendre leur <strong>comportement alimentaire</strong>
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Travailler sur la <strong>perte de poids émotionnelle</strong>
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Renforcer leur <strong>motivation pour la perte de poids</strong>
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Adopter un <strong>rééquilibrage alimentaire durable</strong>
                            </li>
                        </ul>
                        <br />
                        <h2>Un accompagnement personnalisé</h2>
                        <p className="text-lg leading-6">
                            Chaque personne a une histoire différente avec l’alimentation.
                            <br />
                            Le coaching est donc entièrement personnalisé et prend en compte&nbsp;:
                        </p>
                        <ul className="list-none list-inside fa-ul text-lg leading-8">
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Votre <strong>mode de vie</strong>
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Votre <strong>histoire alimentaire</strong>
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Vos <strong>émotions</strong>
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Votre <strong>niveau d’activité physique</strong>
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Vos <strong>objectifs</strong>
                            </li>
                        </ul>
                        <p className="text-lg leading-6">
                            L’objectif est de vous aider à retrouver votre équilibre et votre autonomie.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}