"use client"
import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { reveal } from "../../utils/reveal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import Youpi from "/public/images/coaching-perte-de-poids/resultat.jpg"

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
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-1/2 md:w-1/4 mx-auto md:order-last transition duration-200 scale-0 opacity-0">
                        <Image
                            src={Youpi}
                            className="rounded-full"
                            alt="Sabrina Appriou"
                        />
                    </div>
                    <div className="w-full md:w-3/4 flex flex-col gap-6">
                        <div>
                            <h2>
                                Grâce au coaching perte de poids, vous serez&nbsp;:
                            </h2>
                            <ul className="list-none list-inside fa-ul text-lg leading-8">
                                {
                                    [
                                        (
                                            <>
                                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                                <strong>Serein.e</strong> sur votre objectif
                                            </>
                                        ),
                                        (
                                            <>
                                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                                <strong>Confiant.e</strong> sur la progression
                                            </>
                                        ),
                                        (
                                            <>
                                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                                <strong>Soutenu.e</strong> tout au long du parcours de coaching dans les moments de doutes ou de baisse de motivation
                                            </>
                                        )
                                    ].map((e, i) => (
                                        <li className="transition duration-200 opacity-0 translate-x-full" key={i}>{e}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <h2>
                                Un accompagnement adapté pour retrouver sérénité et équilibre de vie&nbsp;:
                            </h2>
                            <ul className="list-none list-inside fa-ul text-lg leading-8">
                                {
                                    [
                                        (
                                            <>
                                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                                Séance de coaching individuelle
                                            </>
                                        ),
                                        (
                                            <>
                                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                                Un programme efficace et complet
                                            </>
                                        ),
                                        (
                                            <>
                                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                                En présentiel à Vannes et alentours / En distanciel sur toute la France
                                            </>
                                        )
                                    ].map((e, i) => (
                                        <li className="transition duration-200 opacity-0 translate-x-full" key={i}>{e}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <h2>Bien-être du corps et amélioration de l’image de soi&nbsp;:</h2>
                            <p className="text-lg leading-6 transition duration-200 opacity-0 text">
                                Au-delà de l’objectif perte de poids, le parcours <strong>coaching perte de poids</strong> vous accompagne à <strong>développer une meilleure image de soi</strong>, une meilleure <strong>confiance en soi</strong>, en vos <strong>capacités</strong> pour un <strong>impact positif</strong> dans votre quotidien.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <Link href="/contact" className="main-btn gradient-btn focus:outline-none uppercase">
                        En savoir plus
                    </Link>
                </div>
            </div>
        </section>
    )
}