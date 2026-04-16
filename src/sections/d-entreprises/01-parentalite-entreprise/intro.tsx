"use client"
import { useEffect } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import { reveal } from "../../../utils/reveal"
import IntroImg from "/public/images/offres-entreprises/carriere-parentalite/intro.webp"

const Calendly = dynamic(() => import("../../../components/calendly"))

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
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center lg:items-start mb-16">
                    <div className="w-2/3 lg:w-1/4 order-0 lg:order-1">
                        <Image
                            src={IntroImg}
                            className="w-full rounded-xl mx-auto transition duration-200 scale-0 entreprises-img"
                            alt="Le coaching en entreprise"
                            title="Le coaching en entreprise"
                        />
                    </div>
                    <div className="w-full lg:w-3/4">
                        <h1>Parentalité en entreprise&nbsp;: accompagner les salariés parents et améliorer la qualité de vie au travail</h1>
                        <br />
                        <p className="text-lg leading-6 mb-6">
                            La <strong>parentalité en entreprise</strong> est devenue un véritable enjeu pour les organisations. Aujourd’hui, de nombreux salariés doivent <strong>concilier vie professionnelle et vie familiale</strong>, gérer leur <strong>charge mentale</strong>, faire face à la fatigue, ou aux imprévus liés au quotidien parental. La mise en place  politique de <strong>bien-être au travail</strong> centrée sur les parents contribue à renforcer l’engagement et la performance des équipes.
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <Calendly text={<>Agissez pour la parentalité<br />et le bien-être de vos équipes</>} />
                </div>
            </div>
        </section>
    )
}