"use client"
import { useEffect } from "react"
import Image from "next/image"
import { reveal } from "../../../utils/reveal"
import IntroImg from "/public/images/coaching-entreprise/intro.webp"
import Calendly from "../../../components/calendly"

export default function Intro({ className = "" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll(".entreprises-img"),
            classesToRemove: ["scale-0"]
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
                        <h1>Accompagner la parentalité en entreprise</h1>
                        <br />
                        <p className="text-lg leading-6 mb-6">
                            <strong>Concilier vie pro perso</strong> est un défi constant, et jugé <strong>difficile</strong> pour les <strong>parents actifs pour 77%</strong>.
                            <br />
                            <br />
                            Notre mission&nbsp;: agir sur le <strong>bien-être des salariés-parents</strong> pour permettre aux entreprises d’avoir des <strong>salariés en forme</strong> et <strong>concilier sereinement parentalité et travail</strong>.
                        </p>
                        <p className="text-xl leading-8 mb-6">
                            <strong>Conciliation travail & famille</strong>&nbsp;: une priorité n° 1 pour 66% des parents.
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