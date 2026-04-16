"use client"
import { useEffect } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import { reveal } from "../../../utils/reveal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import IntroImg from "/public/images/offres-particuliers/confiance-en-soi/intro.webp"

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
                            alt="Retrouver confiance en soi et bien-être au quotidien"
                            title="Retrouver confiance en soi et bien-être au quotidien"
                        />
                    </div>
                    <div className="w-full lg:w-3/4">
                        <h1>Retrouver confiance en soi<br />et oser prendre sa place</h1>
                        <br />
                        <h2>Vous manquez de confiance en vous&nbsp;?</h2>
                        <h3>Vous vous reconnaissez dans ces situations&nbsp;?</h3>
                        <ul className="list-none list-inside fa-ul text-lg leading-8">
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Vous avez <strong>peur du regard des autres ou de vous sentir jugé·e</strong>
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Vous n’arrivez pas à <strong>dire non</strong>
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Vous ressentez une <strong>difficulté à vous affirmer</strong>
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                <strong>Votre perfectionniste vous empêche de passer à l’action</strong>
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Vous vous <strong>comparez sans cesse aux autres</strong>
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Vous avez un <strong>sentiment d’illégitimité</strong>
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Vos <strong>croyances limitantes</strong> vous freinent
                            </li>
                        </ul>
                        <br />
                        <p className="text-lg leading-6">
                            Le manque de confiance en soi peut impacter profondément votre vie professionnelle et personnelle.
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <Calendly />
                </div>
            </div>
        </section>
    )
}