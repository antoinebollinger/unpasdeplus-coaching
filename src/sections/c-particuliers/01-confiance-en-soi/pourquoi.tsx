"use client"
import { useEffect } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import { reveal } from "../../../utils/reveal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import PourquoiImg from "/public/images/offres-particuliers/confiance-en-soi/pourquoi.webp"

const Calendly = dynamic(() => import("../../../components/calendly"))

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
                <div className="w-full lg:w-3/4 mx-auto flex flex-col md:flex-row gap-6 justify-center items-center lg:items-start mb-16">
                    <div className="w-1/2 md:w-1/4">
                        <Image
                            src={PourquoiImg}
                            className="w-full rounded-xl mx-auto transition duration-200 scale-0"
                            alt="Serein, confiant, soutenu"
                            title="Serein, confiant, soutenu"
                        />
                    </div>
                    <div className="w-full md:w-3/4 flex flex-col gap-6">
                        <h2>Pourquoi se faire accompagner&nbsp;?</h2>
                        <div className="transition duration-200 opacity-0 translate-y-full">
                            <h3>Vous n’êtes pas seul·e</h3>
                            <p className="text-lg leading-6">
                                Prendre du recul seul.e est souvent difficile.
                            </p>
                        </div>
                        <div className="transition duration-200 opacity-0 translate-y-full">
                            <h3>Le coaching vous permet</h3>
                            <ul className="list-none list-inside fa-ul text-lg leading-8 mt-2">
                                <li>
                                    <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                    une prise de conscience rapide
                                </li>
                                <li>
                                    <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                    un cadre structurant
                                </li>
                                <li>
                                    <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                    un accompagnement motivant
                                </li>
                                <li>
                                    <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                    des résultats concrets
                                </li>
                            </ul>
                        </div>
                        <div className="transition duration-200 opacity-0 translate-y-full">
                            <h2>Prêt·e à reprendre confiance en vous&nbsp;?</h2>
                            <p className="text-lg leading-6">
                                Vous méritez de vous sentir légitime, aligné·e et serein·e.
                            </p>
                        </div>
                        <div className="transition duration-200 opacity-0 translate-y-full">
                            <h3>Passez à l’action dès maintenant</h3>
                            <ul className="list-none list-inside fa-ul text-lg leading-8 mt-2">
                                <li>
                                    <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                    Réservez une séance découverte
                                </li>
                                <li>
                                    <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                    Contactez-moi pour échanger sur vos besoins
                                </li>
                            </ul>
                            <p className="text-lg leading-6">
                                Ensemble, avançons vers une confiance en vous solide et durable.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <Calendly />
                </div>
            </div>
        </section>
    )
}