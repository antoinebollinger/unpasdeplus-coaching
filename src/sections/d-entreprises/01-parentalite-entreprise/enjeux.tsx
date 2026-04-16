"use client"
import { useEffect } from "react"
import { reveal } from "../../../utils/reveal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

export default function Enjeux({ className = "" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll("#enjeux .transition"),
            classesToRemove: ["translate-y-full", "scale-0", "opacity-0"]
        })
    }, [])

    return (
        <section id="enjeux" className={className}>
            <div className="container">
                <div className="w-full lg:w-3/4 mx-auto flex flex-col gap-12">
                    <h2 className="h1">Les enjeux de la parentalité pour les salariés parents</h2>
                    <p className="text-lg leading-6">
                        Les parents salariés doivent souvent jongler entre les obligations professionnelles, la <strong>charge familiale</strong>, la gestion des enfants et le maintien de leur performance au travail. Cette double responsabilité peut générer&nbsp;:
                    </p>
                    <div className="transition duration-200 opacity-0 translate-y-full">
                        <h3>
                            Charge mentale et fatigue
                        </h3>
                        <p className="text-lg leading-6">
                            La <strong>charge mentale</strong> est un facteur clé de stress pour les parents salariés. La gestion des responsabilités professionnelles et responsabilités parentales peut entraîner&nbsp;:
                        </p>
                        <ul className="list-none list-inside fa-ul text-lg leading-8">
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Fatigue chronique
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Baisse de concentration
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Stress élevé
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Culpabilité
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Difficulté à prendre du temps pour soi
                            </li>
                        </ul>
                    </div>
                    <div className=" transition duration-200 opacity-0 translate-y-full">
                        <h3>
                            Équilibre entre vie professionnelle et vie personnelle
                        </h3>
                        <p className="text-lg leading-6">
                            Trouver un équilibre entre <strong>vie professionnelle et vie personnelle</strong> est un vrai défi. Les salariés parents doivent parfois gérer des horaires complexes, des obligations personnelles importantes et des attentes professionnelles élevées.
                            <br />
                            <br />
                            Un manque d’équilibre peut avoir <strong>un impact sur le bien-être, la motivation et la qualité de vie au travail</strong>.
                        </p>
                    </div>
                    <div className=" transition duration-200 opacity-0 translate-y-full">
                        <h3>
                            Retour de congé maternité, paternité ou parental
                        </h3>
                        <p className="text-lg leading-6">
                            Le <strong>retour de congé maternité, de congé paternité ou de congé parental</strong> représente souvent une période sensible.
                            <br />
                            Les salariés peuvent ressentir&nbsp;:
                        </p>
                        <ul className="list-none list-inside fa-ul text-lg leading-8">
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Perte de sens
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Baisse de confiance en soi
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Difficulté à retrouver leur rythme
                            </li>
                            <li>
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                Peu de soutien pour leur réintégration
                            </li>
                        </ul>
                    </div>
                    <div className=" transition duration-200 opacity-0 translate-y-full">
                        <h3>
                            Stress et risque d’épuisement professionnel
                        </h3>
                        <p className="text-lg leading-6">
                            Une <strong>charge mentale élevée</strong> combinée à une forte pression professionnelle peut entraîner un <strong>risque d’épuisement ou de burn-out</strong>. Prévenir ces situations est essentiel pour le <strong>bien-être au travail</strong> et la santé des collaborateurs.
                        </p>
                    </div>
                </div>
            </div>
        </section >
    )
}