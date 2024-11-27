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
                        <h1>Accompagner vos salariés à aborder sereinement les changements</h1>
                        <br />
                        <p className="text-lg leading-6 mb-6">
                            Dans un monde professionnel en constante évolution, la <strong>gestion des carrières</strong> est marquée par des étapes clés : <strong>promotions, orientation, prise de poste, reconversion, évolution professionnelle, changement de poste, responsabilités, formation , mobilité ou même des transitions imprévues</strong>.
                            <br />
                            <br />
                            Ces <strong>changements</strong> peuvent être stimulants, mais aussi sources d’incertitudes et de défis.
                            <br />
                            <br />
                            Accompagner vos salariés pour faire de ces <strong>transitions professionnelles</strong> une opportunité
                            de <strong>croissance</strong>, de <strong>réussite</strong> et de <strong>bien-être</strong>.
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