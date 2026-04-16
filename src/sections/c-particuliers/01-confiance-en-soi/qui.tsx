"use client"
import { useEffect } from "react"
import Image, { StaticImageData } from "next/image"
import dynamic from "next/dynamic"
import { reveal } from "../../../utils/reveal"
import Stress from "/public/images/offres-particuliers/confiance-en-soi/stress.webp"
import Bouger from "/public/images/offres-particuliers/confiance-en-soi/bouger.webp"
import Sport from "/public/images/offres-particuliers/confiance-en-soi/sport.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { renderToString } from "react-dom/server"

const Calendly = dynamic(() => import("../../../components/calendly"))

export default function Qui({ className = "" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll("#qui .img"),
            classesToRemove: ["scale-0"]
        })
    }, [])

    const list = (
        img: StaticImageData,
        title: string,
        text: string
    ) => {
        return (
            <div className="w-full lg:w-1/3 flex flex-col gap-6 p-6">
                <Image
                    src={img}
                    width={200}
                    className="mx-auto rounded-xl transition duration-200 scale-0 img"
                    alt={title}
                    title={title}
                />
                <h3 className="text-lg text-center">
                    <strong>{title}</strong>
                </h3>
                <div className="text-lg text-start grow">
                    <ul className="list-none list-inside fa-ul flex flex-col" dangerouslySetInnerHTML={{ __html: text }} />
                </div >
                <div className="text-center mt-auto">
                    <Calendly text="Réserver" />
                </div>
            </div >
        )
    }

    return (
        <section id="qui" className={className}>
            <div className="container">
                <div className="w-full lg:w-2/3 mx-auto flex flex-col gap-6 mb-16">
                    <h2 className="text-center">À qui s’adresse cet accompagnement&nbsp;?</h2>
                    <p className="text-lg leading-6 text-center">
                        <strong>Cet accompagnement s’adresse à toute personne qui souhaite retrouver confiance en elle et oser prendre sa place dans sa vie.</strong>
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-16 justify-center items-stretch mb-16">
                    {list(
                        Stress,
                        "Vous vous sentez bloqué·e aujourd’hui",
                        `                                
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Vous traversez une <strong>période de doute</strong>
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                               Vous <strong>manquez de confiance en vous</strong>
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Vous avez <strong>du mal à vous affirmer</strong>
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Vous ressentez un <strong>manque de légitimité</strong>
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Vous êtes souvent freiné·e par le <strong>syndrome de l’imposteur</strong>
                            </li>
                        `
                    )}
                    {list(
                        Bouger,
                        "Vous avez envie que les choses changent",
                        `                                
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Vous voulez <strong>oser passer à l’action</strong>
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                               Vous souhaitez vous <strong>exprimer plus librement</strong>
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Vous avez <strong>envie de prendre votre place</strong>
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Vous aspirez à <strong>plus de sérénité et d’alignement</strong>
                            </li>
                        `
                    )}
                    {list(
                        Sport,
                        "Vous êtes prêt.e à évoluer",
                        `                                
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Vous avez conscience que quelque chose doit changer
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Vous êtes motivé·e à travailler sur vous
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                                Vous souhaitez être accompagné·e dans votre transformation
                            </li>
                        `
                    )}
                </div>
                <div>
                    <p className="text-lg leading-6 text-center">
                        <strong>Cet accompagnement est fait pour vous si vous voulez dépasser vos blocages et construire une confiance en vous solide et durable.</strong>
                    </p>
                </div>
            </div>
        </section>
    )
}