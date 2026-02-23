"use client"
import { useEffect } from "react"
import Image from "next/image"
import { reveal } from "../../utils/reveal"
import LogosCombines from "/public/images/icones/emcc_francecompetences.webp"
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
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">

                    <div className="w-full lg:w-3/4">
                        <p className="text-2xl mb-10">
                            «&nbsp;Ne limite pas tes défis, défis tes limites&nbsp;»
                        </p>
                        <h1 className="h2">Coach de vie à Vannes - Retrouver confiance, équilibre et clarté dans votre vie</h1>
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
                    <div className="w-2/3 lg:w-1/4 text-center">
                        <Image
                            src={LogosCombines}
                            width={300}
                            height={300}
                            className="w-full rounded-xl mx-auto transition duration-200 scale-0"
                            alt="Facilitatrice de la mise en mouvement"
                            title="Facilitatrice de la mise en mouvement"
                        />
                    </div>
                </div>
                <div className="text-center">
                    <Calendly />
                </div>
            </div>
        </section>
    )
}