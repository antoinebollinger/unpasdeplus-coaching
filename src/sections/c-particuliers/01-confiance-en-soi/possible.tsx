"use client"
import { useEffect } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import { reveal } from "../../../utils/reveal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import QuiImg from "/public/images/offres-particuliers/confiance-en-soi/qui.webp"

const Calendly = dynamic(() => import("../../../components/calendly"))

export default function Possible({ className = "" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll("#possible .transition"),
            classesToRemove: ["opacity-0", "scale-0"]
        })
        reveal({
            collection: document.querySelectorAll("#possible li"),
            classesToRemove: ["opacity-0", "translate-x-full"],
            delayIncrement: 50
        })
    }, [])

    return (
        <section id="possible" className={className}>
            <div className="container">
                <div className="w-full lg:w-3/4 mx-auto flex flex-col md:flex-row gap-6 justify-center items-center lg:items-start mb-16">
                    <div className="w-1/2 md:w-1/4">
                        <Image
                            src={QuiImg}
                            className="w-full rounded-xl mx-auto transition duration-200 scale-0"
                            alt="Serein, confiant, soutenu"
                            title="Serein, confiant, soutenu"
                        />
                    </div>
                    <div className="w-full md:w-3/4 flex flex-col gap-6">
                        <h2>Développer la confiance en soi, c’est possible</h2>
                        <p className="text-lg leading-6">
                            La confiance en soi n’est pas innée&nbsp;: elle se construit.
                        </p>
                        <div>
                            <h3>Imaginez pouvoir...</h3>
                            <ul className="list-none list-inside fa-ul text-lg leading-8">
                                <li>
                                    <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                    Vous affirmer avec sérénité
                                </li>
                                <li>
                                    <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                    Prendre votre place sans culpabilité
                                </li>
                                <li>
                                    <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                    Vous exprimer librement
                                </li>
                                <li>
                                    <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                    Vous sentir légitime au travail
                                </li>
                                <li>
                                    <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                    Oser malgré vos peurs
                                </li>
                            </ul>
                        </div>
                        <p className="text-lg leading-6">
                            Développer votre estime de soi, c’est vous autoriser à être pleinement vous-même.
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <Calendly text={<>Réserver votre premier échange offert</>} />
                </div>
            </div>
        </section>
    )
}