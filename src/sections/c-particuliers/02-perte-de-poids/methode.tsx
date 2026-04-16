"use client"
import { useEffect } from "react"
import { reveal } from "../../../utils/reveal"
import Image from "next/image"
import Balance from "/public/images/offres-particuliers/perte-de-poids/balance.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

export default function Methode({ className = "" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll("#methode img, #methode p"),
            classesToRemove: ["opacity-0", "scale-0"],
            delayIncrement: 50
        })
    }, [])

    return (
        <section id="methode" className={className}>
            <div className="container">
                <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
                    <div className="w-1/2 md:w-1/4 order-1 lg:order-0">
                        <Image
                            src={Balance}
                            className="w-full rounded-xl mx-auto transition duration-200 scale-0"
                            alt="Entrainement adapté, alimentation équilibrée"
                            title="Entrainement adapté, alimentation équilibrée"
                        />
                    </div>
                    <div className="w-full md:w-3/4 flex flex-col gap-6">
                        <h2>Une approche globale du coaching perte de poids</h2>
                        <p className="text-lg leading-6">La perte de poids durable passe par plusieurs dimensions.</p>
                        <div>
                            <h3>Le rééquilibrage alimentaire</h3>
                            <p className="text-lg leading-6 transition duration-200 opacity-0 text">
                                Le rééquilibrage alimentaire consiste à retrouver une alimentation variée et équilibrée, adaptée à votre mode de vie.
                                <br />
                                Il ne s’agit pas d’interdire certains aliments, mais d’apprendre à mieux comprendre vos besoins et vos habitudes.
                                <br />
                                L’objectif est de retrouver un <strong>équilibre alimentaire durable</strong>, sans frustration ni culpabilité.
                            </p>
                        </div>
                        <div>
                            <h3>Comprendre son comportement alimentaire</h3>
                            <p className="text-lg leading-6 transition duration-200 opacity-0 text">
                                Le comportement alimentaire est influencé par de nombreux facteurs&nbsp;: habitudes, émotions, stress ou fatigue.
                                <br />
                                Certaines situations peuvent entraîner&nbsp;:
                                <br />
                                <ul className="list-none list-inside fa-ul text-lg leading-8 mt-2">
                                    <li>
                                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                        des <strong>grignotages</strong>
                                    </li>
                                    <li>
                                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                        des <strong>compulsions alimentaires</strong>
                                    </li>
                                    <li>
                                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                        une <strong>alimentation liée aux émotions</strong>
                                    </li>
                                </ul>
                                Le coaching permet d’identifier ces mécanismes afin de mieux comprendre votre rapport à la nourriture.
                            </p>
                        </div>
                        <div>
                            <h3>La perte de poids émotionnelle</h3>
                            <p className="text-lg leading-6 transition duration-200 opacity-0 text">
                                Les émotions jouent un rôle important dans notre relation à l’alimentation.
                                <br />
                                Stress, ennui, fatigue ou surcharge mentale peuvent conduire à manger sans faim.
                                <br />
                                Travailler sur la perte de poids émotionnelle permet d’apprendre à reconnaître ces mécanismes et à développer d’autres stratégies pour gérer ses émotions.
                            </p>
                        </div>
                        <div>
                            <h3>L’image de soi et la relation au corps</h3>
                            <p className="text-lg leading-6 transition duration-200 opacity-0 text">
                                La perte de poids est souvent liée à la manière dont on se perçoit.
                                <br />
                                Une image de soi fragilisée peut influencer la motivation, la relation à l’alimentation et la confiance en sa capacité à changer.
                                <br />
                                Le coaching permet de travailler sur&nbsp;:
                                <br />
                                <ul className="list-none list-inside fa-ul text-lg leading-8 mt-2">
                                    <li>
                                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                        l’<strong>acceptation de soi</strong>
                                    </li>
                                    <li>
                                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                        la <strong>confiance en ses capacités</strong>
                                    </li>
                                    <li>
                                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                        une <strong>relation plus sereine avec son corps</strong>
                                    </li>
                                </ul>
                                Améliorer l’image de soi aide souvent à renforcer la motivation pour la perte de poids et à installer des changements durables.
                            </p>
                        </div>
                        <div>
                            <h3>Retrouver la motivation pour la perte de poids</h3>
                            <p className="text-lg leading-6 transition duration-200 opacity-0 text">
                                La motivation peut fluctuer au fil du temps.
                                <br />
                                Le coaching permet de renforcer votre motivation pour la perte de poids en clarifiant vos objectifs et en mettant en place des <strong>habitudes progressives et réalistes</strong>.
                                <br />
                                L’idée est de construire un changement durable, adapté à votre rythme de vie.
                            </p>
                        </div>
                        <div>
                            <h3>Remettre du mouvement dans son quotidien</h3>
                            <p className="text-lg leading-6 transition duration-200 opacity-0 text">
                                L’activité physique joue un rôle essentiel dans l’équilibre global.
                                <br />
                                Il ne s’agit pas forcément de pratiquer un sport intensif, mais d’intégrer davantage de mouvement dans votre quotidien.
                                <br />
                                Le coaching permet d’identifier les solutions adaptées à votre rythme et à vos envies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}