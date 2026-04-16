"use client"
import { useEffect } from "react"
import { reveal } from "../../../utils/reveal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

export default function Pourquoi({ className = "bg-gray-100" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll("#pourquoi li"),
            classesToRemove: ["opacity-0"],
            delayIncrement: 50
        })
    }, [])

    return (
        <section id="pourquoi" className={className}>
            <div className="container">
                <div className="w-full lg:w-3/4 mx-auto">
                    <h2>Pourquoi les régimes ne fonctionnent pas sur le long terme</h2>
                    <br />
                    <p className="text-lg leading-6 mb-6">
                        Beaucoup de personnes ont vécu l’expérience des régimes&nbsp;: perte de poids rapide, puis reprise progressive.
                        <br />
                        Ces méthodes reposent souvent sur des restrictions alimentaires importantes.
                        <br />
                        <br />
                        Elles ne prennent pas toujours en compte&nbsp;:
                    </p>
                    <ul className="list-none list-inside fa-ul text-lg leading-8">
                        <li>
                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                            Le <strong>comportement alimentaire</strong>
                        </li>
                        <li>
                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                            Les <strong>émotions liées à l’alimentation</strong>
                        </li>
                        <li>
                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                            La <strong>motivation profonde</strong>
                        </li>
                        <li>
                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                            La <strong>relation à l’alimentation</strong>
                        </li>
                    </ul>
                    <p className="text-lg leading-6 mt-6">
                        Résultat&nbsp;: frustration, culpabilité et effet yo-yo.
                        <br />
                        <br />
                        C’est pourquoi mon accompagnement s’inscrit dans une démarche d’<strong>arrêt des régimes</strong>, pour construire une relation plus saine et durable avec l’alimentation.
                    </p>
                </div>
            </div>
        </section >
    )
}