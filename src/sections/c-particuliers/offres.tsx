"use client"
import { useEffect } from "react"
import dynamic from "next/dynamic"
import { reveal } from "../../utils/reveal"
import { offres } from "../../utils/offres"
import Balance from "/public/images/accueil/balance.webp"
import Equilibre from "/public/images/accueil/equilibre.webp"

const Calendly = dynamic(() => import("../../components/calendly"))

export default function Offres({ className = "" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll(".liens-img"),
            classesToRemove: ["scale-0"]
        })
    }, [])

    return (
        <section id="mes-offres" className={className}>
            <div className="container">
                <div className="text-center pb-10">
                    <h2 className="h1 text-start lg:text-center">Offres Particuliers</h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-16 justify-center items-stretch mb-16">
                    {offres(
                        Equilibre,
                        "Coaching bien-être & équilibre",
                        "/offres-particuliers/coaching-bien-etre-equilibre",
                        "Bien-être & équilibre"
                    )}
                    {offres(
                        Balance,
                        "Coaching perte de poids",
                        "/offres-particuliers/coaching-perte-de-poids",
                        "Perte de poids"
                    )}
                </div>
                <div className="text-center">
                    <Calendly />
                </div>
            </div>
        </section>
    )
}