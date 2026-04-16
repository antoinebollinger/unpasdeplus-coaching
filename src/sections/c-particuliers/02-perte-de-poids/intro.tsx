"use client"
import { useEffect } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import { reveal } from "../../../utils/reveal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import IntroImg from "/public/images/offres-particuliers/perte-de-poids/intro.webp"

const Calendly = dynamic(() => import("../../../components/calendly"))

export default function Intro({ className = "" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll("#introduction img"),
            classesToRemove: ["scale-0"]
        })
        reveal({
            collection: document.querySelectorAll("#introduction li"),
            classesToRemove: ["opacity-0"],
            delayIncrement: 50
        })
    }, [])

    return (
        <section id="introduction" className={className}>
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center lg:items-start mb-16">
                    <div className="w-2/3 lg:w-1/4 order-0 lg:order-1">
                        <Image
                            src={IntroImg}
                            className="w-full rounded-xl mx-auto transition duration-200 scale-0"
                            alt="Perdre du poids de manière saine et durable"
                            title="Perdre du poids de manière saine et durable"
                        />
                    </div>
                    <div className="w-full lg:w-3/4">
                        <p className="h1">Coach de perte de poids durable à Vannes et alentours et en ligne</p>
                        <br />
                        <p className="text-lg leading-6 mb-6">
                            Perdre du poids ne se résume pas à suivre un régime.<br />
                            La vraie transformation se joue dans votre <strong>relation à l’alimentation</strong>, <strong>vos émotions</strong>, <strong>votre motivation</strong> et <strong>votre mode de vie</strong>.
                            <br />
                            <br />
                            Mon accompagnement en <strong>coaching perte de poids</strong> repose sur une approche complète&nbsp;:
                        </p>
                        <ul className="list-none list-inside fa-ul text-lg leading-8">
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Développement de la <strong>motivation pour la perte de poids</strong>
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                <strong>Rééquilibrage alimentaire</strong>
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Travail sur le <strong>comportement alimentaire</strong>
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Compréhension du <strong>rapport à la nourriture</strong>
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Gestion des <strong>émotions liées à l’alimentation</strong>
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                L’activité physique et le mouvement
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                L’image de soi
                            </li>
                        </ul>
                        <p className="text-lg leading-6 mt-6">
                            L’objectif n’est pas seulement de perdre du poids, mais de <strong>retrouver un rapport apaisé à la nourriture et à son corps</strong>, pour des résultats durables.
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <Calendly />
                </div>
            </div>
        </section >
    )
}