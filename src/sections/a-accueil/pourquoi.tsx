"use client"
import { useEffect } from "react"
import Image from "next/image"
import { reveal } from "../../utils/reveal"
import SabrinaPic from "/public/images/contact/cabinet_rounded.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

export default function Pourquoi({ className = "bg-gray-100" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll("#pourquoi .img"),
            classesToRemove: ["scale-0"]
        })
        reveal({
            collection: document.querySelectorAll("#pourquoi .transition"),
            classesToRemove: ["opacity-0", "translate-y-full"]
        })
    }, [])

    return (
        <section id="pourquoi" className={className}>
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-full lg:w-1/4 transition duration-200 scale-0 img">
                        <Image
                            src={SabrinaPic}
                            width={300}
                            height={300}
                            className="w-full rounded-xl"
                            alt="Sabrina Appriou, coach certifiée"
                            title="Sabrina Appriou, coach certifiée"
                        />
                    </div>
                    <div className="w-full lg:w-3/4 lg:order-0">
                        <h3 className="h2">Pourquoi faire appel à un coach de vie à Vannes ?</h3>
                        <br />
                        <ul className="list-none list-inside fa-ul text-lg leading-6">
                            {
                                [
                                    (<>
                                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                        Vous vous sentez perdu·e dans votre vie personnelle ou professionnelle ?
                                    </>),
                                    (<>
                                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                        Vous manquez de confiance en vous ou d'estime de vous ?

                                    </>),
                                    (<>
                                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                        Vous vous sentez dépassé·e par la surcharge mentale et le stress au quotidien ?
                                    </>),
                                    (<>
                                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                        Vous avez du mal à trouver un équilibre entre travail, famille et temps pour vous ?
                                    </>),
                                    (<>
                                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                        Vous souhaitez améliorer votre relation avec votre corps et votre bien-être physique ?
                                    </>),
                                    (<>
                                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                        Vous avez perdu motivation et énergie dans vos projets ou votre quotidien ?
                                    </>),
                                    (<>
                                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                        Vous traversez une transition de vie et avez besoin de soutien pour avancer sereinement ?
                                    </>),
                                    (<>
                                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                        Vous souhaitez vous remettre en mouvement, physiquement et mentalement ?
                                    </>), (<>
                                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                        Vous avez du mal à prendre des décisions importantes et vous vous sentez bloqué·e ?
                                    </>)
                                ].map((e, i) => (
                                    <li className="transition duration-200 opacity-0 mb-2" key={i}>{e}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section >
    )
}