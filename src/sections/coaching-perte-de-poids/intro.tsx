"use client"
import { useEffect } from "react"
import Image from "next/image"
import { reveal } from "../../utils/reveal"
import IntroImg from "/public/images/coaching-perte-de-poids/intro.jpg"
import Calendly from "../../components/calendly"

export default function Intro({ className = "" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll(".parents-img"),
            classesToRemove: ["scale-0"]
        })
        reveal({
            collection: document.querySelectorAll("#introduction li"),
            classesToRemove: ["opacity-0"],
            delayIncrement: 50
        })
    }, [])

    return (
        <section id="introduction" className={className}>
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-2/3 lg:w-1/4">
                        <Image
                            src={IntroImg}
                            alt="Intro parents"
                            className="w-full rounded-full mx-auto transition duration-200 scale-0 parents-img"
                        />
                    </div>
                    <div className="w-full lg:w-3/4">
                        <p className="h1">Perdre du poids de manière saine et durable&nbsp;: l’art du coaching bienveillant.</p>
                        <br />
                        <p className="text-lg leading-6 mb-6">
                            La quête <strong>d’une perte de poids saine et durable</strong> est souvent parsemée d’embûches.
                            <br />
                            <br />
                            Le coaching bienveillant peut être la clé pour <strong>atteindre vos objectifs</strong> de manière <strong>saine et durable</strong>.
                            <br />
                            <br />
                            Une <strong>approche saine et positive</strong> qui respecte vos besoins et votre rythme.
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