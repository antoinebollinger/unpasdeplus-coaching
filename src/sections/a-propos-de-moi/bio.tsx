"use client"
import { useEffect } from "react"
import { renderToString } from "react-dom/server"
import Image from "next/image"
import { reveal } from "../../utils/reveal"
import Parcours from "./parcours"
import Sabrina from "/public/images/a-propos-de-moi/sabrina.webp"
import Sportive from "/public/images/a-propos-de-moi/sportive.jpg"
import { openModal } from "../../utils/modal"

export default function Bio({ className = "" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll(".transition"),
            classesToRemove: ["scale-0", "opacity-0", "translate-y-full", "translate-x-full"]
        })
        document.querySelector("#voirParcours").addEventListener("click", e => {
            e.preventDefault()
            const parcours = renderToString(<Parcours />)
            openModal({
                content: parcours
            })
        })
    }, [])

    return (
        <section id="bio" className={className}>
            <div className="container">
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-1/2 md:w-1/4 mx-auto transition duration-200 scale-0 opacity-0">
                        <Image
                            src={Sabrina}
                            className="rounded-full"
                            alt="Sabrina Appriou"
                        />
                    </div>
                    <div className="w-full md:w-3/4">
                        <div className="mb-8 text-center md:text-start mb-10">
                            <p className="h1">Bien dans ses baskets, bien dans sa tête</p>
                        </div>
                        <div className="transition duration-200 opacity-0 translate-y-full">
                            <h2>Les challenges, source de motivation</h2>
                            <p className="text-lg mb-6">
                                Mon mantra&nbsp;: «&nbsp;Ne limite pas tes défis, défis tes limites&nbsp;».
                                <br />
                                J’aime les <strong>challenges</strong> personnels, professionnels et sportifs, une <strong>source de motivation</strong> et de <strong>dépassement de soi</strong>. Les défis contribuent à forger le mental, à puiser les <strong>ressources physiques et mentales</strong> nécessaires pour aller au bout d’un objectif.

                            </p>

                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-1/2 md:w-1/4 mx-auto transition duration-200 scale-0 opacity-0 md:order-last">
                        <Image
                            src={Sportive}
                            className="rounded-full"
                            alt="Sabrina Appriou sportive"
                        />
                    </div>
                    <div className="w-full md:w-3/4">
                        <div className="transition duration-200 opacity-0 translate-y-full">
                            <h2>Course à pied, mon activité physique quotidienne</h2>
                            <p className="text-lg mb-6">
                                Je pratique la course à pied depuis l’âge de mes 18 ans. L’activité physique tient une place importante dans mon quotidien. Quand je cours, je me sens libre, forte et combative. Amoureuse de la nature, je suis une adepte des randonnées, des trails (courses en milieu naturel). Le mouvement, c’est la vie !
                            </p>
                        </div>
                        <div className="transition duration-200 opacity-0 translate-y-full">
                            <h2>Alimentation saine et consciente</h2>
                            <p className="text-lg mb-6">
                                Sportive, j’accorde une importance à <strong>l’alimentation</strong>. Un corps sain dans un esprit sain. Pour moi, prendre soin de soi, c’est un <strong>équilibre harmonieux entre le corps et l’esprit</strong>. L’alimentation saine et consciente nourrit à la fois le corps et la tête, sans compromis sur le plaisir.
                            </p>
                        </div>
                        <div className="transition duration-200 opacity-0 translate-y-full">
                            <p className="text-lg mb-6">
                                Au fil des années, j’ai gagné en sérénité en prenant soin de mon corps et ma tête. Cela n’a pas toujours été le cas. Découvrez mon parcours pour comprendre comment je suis parvenue à m’épanouir et à devenir la personne que je suis aujourd’hui.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <a target="_blank" rel="nofollow" href="#" className="main-btn gradient-btn focus:outline-none uppercase" id="voirParcours">
                        Voir mon parcours
                    </a>
                </div>
            </div>
        </section >
    )
}