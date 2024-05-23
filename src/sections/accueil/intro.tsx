"use client"
import { useEffect } from "react"
import Image from "next/image"
import { reveal } from "../../utils/reveal"
import IntroPic from "/public/images/accueil/intro.jpg"
import EMCC from "/public/images/icones/emcc.jpg"
import FranceCompetences from "/public/images/icones/france_competences.jpg"
import { madelyn } from "../../../styles/font"

export default function Intro({ className = "" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll("#introduction img"),
            classesToRemove: ["scale-0"]
        })
    }, [])

    return (
        <section id="introduction" className={className}>
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                    <div className="w-2/3 lg:w-1/4 text-center lg:order-1">
                        <Image
                            src={IntroPic}
                            alt="Logo"
                            height="250"
                            className="w-full rounded-full mx-auto transition duration-200 scale-0"
                        />
                    </div>
                    <div className="w-full lg:w-3/4 lg:order-0">
                        <p className="text-2xl mb-10">
                            «&nbsp;Ne limite pas tes défis, défis tes limites&nbsp;»
                        </p>
                        <p className="h1">Facilitatrice de la mise en mouvement physique, mentale et émotionnelle</p>
                        <div className="flex flex-col lg:flex-row gap-6 mb-10">
                            <div className="w-full lg:w-auto">
                                <Image
                                    src={EMCC}
                                    width={150}
                                    height={150}
                                    className="mx-auto"
                                    alt="Illustration"
                                />
                            </div>
                            <div className="w-full lg:w-auto">
                                <Image
                                    src={FranceCompetences}
                                    width={150}
                                    height={150}
                                    className="mx-auto"
                                    alt="Illustration"
                                />
                            </div>
                        </div>
                        <h1 className="h2"><span className={`${madelyn.className} text-5xl`}>Un pas de plus</span> <span className="text-xl">Coaching</span> allie bien-être et équilibre pour surmonter les défis</h1>
                        <p className="text-lg leading-6">
                            <strong>Bien dans sa tête, bien dans son corps.</strong>
                            <br />
                            <br />
                            Le coaching professionnel consiste à accompagner des personnes dans la définition et l’atteinte de leurs objectifs, au bénéfice du développement  de leur potentiel et de la réussite de leur évolution personnelle et professionnelle.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}