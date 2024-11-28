"use client"
import { useEffect } from "react"
import dynamic from "next/dynamic"
import { reveal } from "../../utils/reveal"
import { offres } from "../../utils/offres"
import Entreprise from "/public/images/offres-entreprises/entreprises.webp"

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
                    <h2 className="h1 text-start lg:text-center">Offres Entreprises</h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-16 justify-center items-stretch mb-16">
                    {offres(
                        Entreprise,
                        "Gestion des carrières & transitions",
                        "/offres-entreprises/coaching-gestion-carrieres-transitions",
                        "Coaching Gestion des carrières & transitions"
                    )}
                    {offres(
                        Entreprise,
                        "Bien-être au travail & performance",
                        "/offres-entreprises/coaching-bien-etre-travail-performance",
                        "Coaching Bien-être au travail & performance"
                    )}
                    {offres(
                        Entreprise,
                        "Carrière & Parentalité",
                        "/offres-entreprises/coaching-carriere-parentalite",
                        "Coaching Carrière & Parentalité"
                    )}
                </div>
                <div className="text-center">
                    <Calendly />
                </div>
            </div>
        </section>
    )
}