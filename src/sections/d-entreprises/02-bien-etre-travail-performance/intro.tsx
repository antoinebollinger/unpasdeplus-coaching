"use client"
import { useEffect } from "react"
import Image from "next/image"
import { reveal } from "../../../utils/reveal"
import IntroImg from "/public/images/offres-entreprises/bien-etre-travail-performance/intro_test.webp"
import Calendly from "../../../components/calendly"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

export default function Intro({ className = "" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll(".entreprises-img"),
            classesToRemove: ["scale-0"]
        })
        reveal({
            collection: document.querySelectorAll("#introduction .transition"),
            classesToRemove: ["opacity-0", "translate-y-full"]
        })
    }, [])

    return (
        <section id="introduction" className={className}>
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-2/3 lg:w-1/4">
                        <Image
                            src={IntroImg}
                            className="w-full rounded-full mx-auto transition duration-200 scale-0 entreprises-img"
                            alt="Le coaching en entreprise"
                            title="Le coaching en entreprise"
                        />
                    </div>
                    <div className="w-full lg:w-3/4">
                        <h1>Bien-être au travail et performance&nbsp;:<br />
                            un levier de performance pour les entreprises</h1>
                        <br />
                        <h2>Pourquoi le bien-être au travail est essentiel pour votre entreprise&nbsp;?</h2>
                        <p className="text-lg leading-6 mb-6">
                            Dans un contexte professionnel en constante évolution, le bien-être des salariés est devenu un <strong>levier stratégique</strong> pour assurer la <strong>compétitivité</strong> et la <strong>pérennité</strong> des entreprises. Un salarié épanoui est non seulement plus <strong>engagé</strong>, mais également plus <strong>performant</strong>, contribuant ainsi à des résultats durables.
                        </p>
                        <p className="text-xl leading-8 mb-6">
                            Les entreprises qui investissent dans la <strong>qualité de vie au travail</strong> constatent&nbsp;:
                        </p>
                        <ul className="list-none list-inside fa-ul text-lg leading-8 mb-6">
                            {
                                [
                                    (<>
                                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                        Une <strong>réduction</strong> significative de <strong>l’absentéisme</strong> et du <strong>turnover</strong>.
                                    </>),
                                    (<>
                                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                        Une <strong>augmentation de la productivité</strong> et de la satisfaction des équipes.
                                    </>),
                                    (<>
                                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                        Une <strong>amélioration de l’image de marque</strong> en tant qu’<strong>employeur responsable</strong>.
                                    </>)
                                ].map((e, i) => (
                                    <li className="transition duration-200 opacity-0" key={i}>{e}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="text-center">
                    <Calendly />
                </div>
            </div>
        </section>
    )
}