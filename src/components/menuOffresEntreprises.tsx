"use client"
import { useEffect } from "react"
import { offres } from "../utils/offres"
import { reveal } from "../utils/reveal"
import Entreprise_1 from "/public/images/offres-entreprises/gestion-carrieres-transitions.webp"
import Entreprise_2 from "/public/images/offres-entreprises/bien-etre.webp"
import Entreprise_3 from "/public/images/offres-entreprises/carriere-parentalite.webp"

export default function MenuOffresEntreprises() {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll(".liens-img"),
            classesToRemove: ["scale-0"]
        })
    }, [])

    return (
        <div className="flex flex-col lg:flex-row gap-16 justify-center items-stretch mb-16">
            {offres(
                Entreprise_1,
                "Coaching<br/>Gestion des carrières & transitions",
                "/offres-entreprises/coaching-gestion-carrieres-transitions",
                "Coaching Gestion des carrières & transitions"
            )}
            {offres(
                Entreprise_2,
                "Coaching<br/>Bien-être au travail & performance",
                "/offres-entreprises/coaching-bien-etre-travail-performance",
                "Coaching Bien-être au travail & performance"
            )}
            {offres(
                Entreprise_3,
                "Coaching<br/>Carrière & parentalité",
                "/offres-entreprises/coaching-carriere-parentalite",
                "Coaching Carrière & Parentalité"
            )}
        </div>
    )
}