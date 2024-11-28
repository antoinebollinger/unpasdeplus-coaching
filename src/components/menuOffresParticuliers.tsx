"use client"
import { useEffect } from "react"
import { offres } from "../utils/offres"
import { reveal } from "../utils/reveal"
import Balance from "/public/images/accueil/balance.webp"
import Equilibre from "/public/images/accueil/equilibre.webp"

export default function MenuOffresParticuliers() {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll(".liens-img"),
            classesToRemove: ["scale-0"]
        })
    }, [])

    return (
        <div className="flex flex-col lg:flex-row gap-16 justify-center items-stretch mb-16">
            {offres(
                Equilibre,
                "Coaching<br/>Bien-être & équilibre",
                "/offres-particuliers/coaching-bien-etre-equilibre",
                "Bien-être & équilibre"
            )}
            {offres(
                Balance,
                "Coaching<br/>Perte de poids",
                "/offres-particuliers/coaching-perte-de-poids",
                "Perte de poids"
            )}
        </div>
    )
}