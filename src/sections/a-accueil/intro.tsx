"use client"
import { useEffect } from "react"
import Image from "next/image"
import { reveal } from "../../utils/reveal"
import IntroPic from "/public/images/accueil/intro.webp"
import EMCC from "/public/images/icones/emcc.webp"
import FranceCompetences from "/public/images/icones/france_competences.webp"
import Calendly from "../../components/calendly"

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

                <div className="w-full lg:w-3/4 mb-16">
                    <p className="text-2xl mb-10">
                        «&nbsp;Ne limite pas tes défis, défis tes limites&nbsp;»
                    </p>
                    <h1>Coach de vie à Vannes - Retrouver confiance, équilibre et clarté dans votre vie</h1>
                    <div className="flex flex-col lg:flex-row gap-6 mb-10">
                        <div className="w-full lg:w-auto">
                            <Image
                                src={EMCC}
                                width={150}
                                height={150}
                                className="mx-auto"
                                alt="EMCC France"
                                title="EMCC France"
                            />
                        </div>
                        <div className="w-full lg:w-auto">
                            <Image
                                src={FranceCompetences}
                                width={150}
                                height={150}
                                className="mx-auto"
                                alt="Certification France Compétences, enregistrée au RNCP"
                                title="Certification France Compétences, enregistrée au RNCP"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-2/3 lg:w-1/4 text-center lg:order-1">
                        <Image
                            src={IntroPic}
                            width={300}
                            height={300}
                            className="w-full rounded-xl mx-auto transition duration-200 scale-0"
                            alt="Facilitatrice de la mise en mouvement"
                            title="Facilitatrice de la mise en mouvement"
                        />
                    </div>
                    <div className="w-full lg:w-3/4 lg:order-0">
                        <h2>Coach de vie à Vannes – Retrouver confiance, équilibre et clarté dans votre vie.</h2>
                        <p className="text-lg leading-6">
                            En tant que coach de vie à Vannes, j'accompagne les femmes et les hommes qui traversent une période de doute, de transition ou de fatigue émotionnelle, et qui doutent de leur légitimité ou de leur place.
                            <br />
                            <br />
                            Mon accompagnement vise à les aider à <strong>retrouver confiance en eux, équilibre et motivation</strong>, dans leur vie personnelle et professionnelle.
                            <br />
                            <br />
                            Mon approche du coaching de vie associe le travail sur le mental, les émotions et le passage à l'action par le mouvement, pour vous aider à dépasser vos blocages et avancer concrètement vers vos objectifs.
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <Calendly />
                </div>
            </div>
        </section>
    )
}