"use client"
import { useEffect } from "react"
import Image, { StaticImageData } from "next/image"
import { reveal } from "../../../utils/reveal"
import Quoi_1 from "/public/images/offres-particuliers/bien-etre-equilibre/quoi_1.webp"
import Quoi_2 from "/public/images/offres-particuliers/bien-etre-equilibre/quoi_2.webp"
import Quoi_3 from "/public/images/offres-particuliers/bien-etre-equilibre/quoi_3.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { renderToString } from "react-dom/server"

export default function Quoi({ className = "" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll("#quoi h4"),
            classesToRemove: ["opacity-0"]
        })
        reveal({
            collection: document.querySelectorAll("#quoi .quoi-text"),
            classesToRemove: ["opacity-0", "translate-y-full"]
        })
        reveal({
            collection: document.querySelectorAll("#quoi .img"),
            classesToRemove: ["scale-0"]
        })
    }, [])

    const list = (
        img: StaticImageData,
        title: string,
        text: string
    ) => {
        return (
            <div className="w-full lg:w-1/3 flex flex-col gap-6 rounded-xl shadow-xl p-6 bg-white">
                <Image
                    src={img}
                    width={200}
                    className="mx-auto rounded-full transition duration-200 scale-0 img"
                    alt={title}
                    title={title}
                />
                <p className="text-lg text-center">
                    <strong>{title}</strong>
                </p>
                <div className="text-lg text-start grow">
                    <ul className="list-none list-inside fa-ul flex flex-col gap-6" dangerouslySetInnerHTML={{ __html: text }} />
                </div >
            </div >
        )
    }

    return (
        <section id="quoi" className={className}>
            <div className="container">
                <div className="w-full lg:w-2/3 mx-auto flex flex-col gap-6 mb-16">
                    <h3 className="h1">Le coaching bien-être & équilibre, c’est quoi&nbsp;?</h3>
                    <p className="text-lg leading-6">
                        Le coaching bien-être & équilibre vous aide à retrouver <strong>l’harmonie entre bien-être intérieur et extérieur</strong>.
                        <br />
                        C’est un parcours de coaching pour un <strong>mieux-être au quotidien</strong> s’articulent autour de 3 axes&nbsp;:
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-16 justify-center items-stretch">
                    {list(
                        Quoi_1,
                        "Coaching bien-être mental",
                        `                                
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Établir des objectifs visant à améliorer votre bien-être mental peut être une véritable <strong>source de motivation</strong>.
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Prendre soin de votre <strong>bien-être mental</strong>, c’est prendre soin de vous-même, de votre <strong>état émotionnel</strong>.
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Apprenez à <strong>diminuer le stress et l’anxiété</strong> pour retrouver un équilibre intérieur.
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                <strong>Affrontez les défis</strong> de la vie avec calme et sérénité grâce à des techniques de gestion du stress.
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                <strong>Réactivez votre énergie</strong> et votre motivation pour atteindre vos objectifs de bien-être mental.
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Trouvez <strong>l’équilibre physique, mental</strong> et <strong>émotionnel</strong> dont vous avez besoin pour mener une vie épanouissante.
                            </li>
                        `
                    )}
                    {list(
                        Quoi_2,
                        "Coaching en alimentation émotionnelle",
                        `                                
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Apprenez à <strong>gérer vos émotions</strong> pour mettre fin à la tendance de manger par émotion.
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Explorez la voie d’un <strong>rééquilibrage alimentaire</strong> pour restaurer <strong>l’harmonie entre votre corps et votre esprit</strong>.
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Adoptez un rééquilibrage alimentaire pour renouer avec une <strong>relation saine</strong> entre votre <strong>corps et votre esprit</strong>.
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Découvrez des techniques pour <strong>canaliser vos émotions</strong> et éviter de recourir à la nourriture comme un moyen d’apaisement.
                            </li>
                        `
                    )}
                    {list(
                        Quoi_3,
                        "Coaching bien-être physique",
                        `                                
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Prendre soin de son <strong>hygiène de vie</strong> est essentiel pour retrouver un équilibre de vie harmonieux. Un accompagnement pour vous aider à atteindre vos <strong>objectifs de santé et de forme physique</strong> de manière <strong>durable et épanouissante</strong>.
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Mettre en place des <strong>stratégies efficaces</strong> pour maintenir votre engagement et vous transformer en habitude de vie. Au-delà des bénéfices physiques, un développement d’une <strong>meilleure image de soi</strong>, une plus grande <strong>confiance</strong> en vos <strong>capacités</strong>. Un impact sur tous les aspects de votre vie. Un accompagnement adapté pour retrouver <strong>sérénité et équilibre de vie</strong>.
                            </li>
                        `
                    )}
                </div>
            </div>
        </section>
    )
}