"use client"
import { useEffect } from "react"
import { reveal } from "../../../utils/reveal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowTrendUp, faChartLine, faCheck, faCircleInfo, faHandPointRight, faPlus } from "@fortawesome/free-solid-svg-icons"

export default function Attractivite({ className = "" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll("#attractivite .transition"),
            classesToRemove: ["translate-y-full", "scale-0", "opacity-0"]
        })
    }, [])

    return (
        <section id="attractivite" className={className}>
            <div className="container">
                <div className="w-full lg:w-2/3 mx-auto flex flex-col gap-6">
                    <div className="flex flex-col gap-6">
                        <h2>
                            Favoriser le bien-être au travail, un levier de performance pour les entreprises&nbsp;:
                        </h2>
                        <ul className="list-none list-inside fa-ul text-2xl leading-12 resultats">
                            <li className="transition duration-200 opacity-0 translate-y-full">
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faPlus} /></span>
                                <span className="font-bold uppercase">Attractivité</span>
                            </li>
                            <li className="transition duration-200 opacity-0 translate-y-full">
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faPlus} /></span>
                                <span className="font-bold uppercase">Engagement</span>
                            </li>
                            <li className="transition duration-200 opacity-0 translate-y-full">
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faPlus} /></span>
                                <span className="font-bold uppercase">Fidélisation</span>
                            </li>
                            <li className="transition duration-200 opacity-0 translate-y-full">
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faHandPointRight} /></span>
                                Les collaborateurs se sentent compris à <span className="text-2xl font-bold text-tertary-900">91%</span>  et ont envie de rester à <span className="text-2xl font-bold text-tertary-900">81%</span>.
                            </li>
                            <li className="transition duration-200 opacity-0 translate-y-full">
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faArrowTrendUp} /></span>
                                <span className="font-bold uppercase">Rétention des talents</span>
                            </li>
                            <li className="transition duration-200 opacity-0 translate-y-full">
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faChartLine} /></span>
                                L’image de l’entreprise est améliorée de <span className="text-2xl font-bold text-tertary-900">84%</span> auprès des collaborateurs.
                            </li>
                            <li className="transition duration-200 opacity-0 translate-y-full">
                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                <span className="font-bold uppercase">Marque employeur</span>
                            </li>
                        </ul>
                        <p className="text-lg leading-6">
                            <FontAwesomeIcon icon={faCircleInfo} /> Le saviez-vous&nbsp;: en 2025, le bien-être est le premier critère de fidélité envers une entreprise selon une étude Women’UP, pour 75% des actifs en 2025.
                        </p>

                    </div>
                </div>
            </div>
        </section >
    )
}