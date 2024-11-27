"use client"
import { useEffect } from "react"
import { reveal } from "../../../utils/reveal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

export default function Benefices({ className = "" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll(".entreprises-img"),
            classesToRemove: ["scale-0"]
        })
        reveal({
            collection: document.querySelectorAll("#benefices .transition"),
            classesToRemove: ["opacity-0", "translate-y-full"]
        })
    }, [])

    return (
        <section id="benefices" className={className}>
            <div className="container">
                <div className="w-full lg:w-2/3 mx-auto flex flex-col gap-6">
                    <div className="flex flex-col gap-6">
                        <h2>
                            Les bénéfices concrets pour votre entreprise
                        </h2>
                        <p className="text-xl leading-8 mb-6">
                            Les entreprises qui investissent dans la <strong>qualité de vie au travail</strong> constatent&nbsp;:
                        </p>
                        <ul className="list-none list-inside fa-ul text-lg leading-8 mb-6">
                            {
                                [
                                    (<>
                                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                        Booster l’engagement des salariés : des collaborateurs épanouis sont plus impliqués dans leurs missions.
                                    </>),
                                    (<>
                                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                        Améliorer la performance globale : un climat de travail positif favorise l’innovation et la collaboration.
                                    </>),
                                    (<>
                                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                        Réduire les coûts liés à l’absentéisme et au turnover : les salariés heureux restent et contribuent sur le long terme.
                                    </>),
                                    (<>
                                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                        Attirer les talents : une entreprise attentive au bien-être de ses équipes devient un employeur attractif.
                                    </>)
                                ].map((e, i) => (
                                    <li className="transition duration-200 opacity-0" key={i}>{e}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="w-full lg:w-2/3 mx-auto flex flex-col gap-6">
                    <div className="flex flex-col gap-6">
                        <h2>
                            Quelles sont les clés pour accompagner le bien-être au travail&nbsp;?
                        </h2>
                        <p className="text-lg leading-6 transition duration-200 opacity-0 translate-y-full">
                            Pour favoriser un environnement de travail propice à l’épanouissement et à la performance,
                            plusieurs dimensions sont à prendre en compte : la santé mentale , le bien-être physique
                            et émotionnel de vos salariés.
                        </p>
                        <p className="text-lg leading-6 transition duration-200 opacity-0 translate-y-full">
                            Les accompagner dans leur bien-être au travail , les outiller, c’est leur donner les clés pour
                            s’épanouir durablement dans leur environnement professionnel.
                        </p>
                    </div>
                </div>



            </div>
        </section>
    )
}