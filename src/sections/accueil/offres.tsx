"use client"
import { useEffect } from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { reveal } from "../../utils/reveal"
import Balance from "/public/images/accueil/balance.webp"
import Equilibre from "/public/images/accueil/equilibre.webp"
import Entreprise from "/public/images/accueil/entreprises.webp"
import Calendly from "../../components/calendly"

export default function Offres({ className = "bg-gray-100" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll(".liens-img"),
            classesToRemove: ["scale-0"]
        })
    }, [])

    const list = (
        img: StaticImageData,
        text: string,
        href: string,
        alt?: string
    ) => {
        return (
            <Link href={href} className="w-full lg:w-1/3 flex flex-col gap-6 rounded-xl shadow-xl p-4 bg-white transition hover:scale-[1.05]">
                <p className="text-lg text-center">
                    <strong>{text}</strong>
                </p>
                <Image
                    src={img}
                    className="w-full h-[200px] object-cover rounded transition duration-200 scale-0 liens-img"
                    alt={alt ?? "Illustration du coaching"}
                />
            </Link>
        )
    }

    return (
        <section id="mes-offres" className={className}>
            <div className="container">
                <div className="text-center pb-10">
                    <h2 className="h1 text-start lg:text-center">Mes offres</h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-16 justify-center items-stretch mb-16">
                    {list(
                        Balance,
                        "Coaching perte de poids",
                        "/coaching-perte-de-poids",
                        "Perte de poids"
                    )}
                    {list(
                        Equilibre,
                        "Coaching bien-être & équilibre",
                        "/coaching-bien-etre-equilibre",
                        "Bien-être & équilibre"
                    )}
                    {list(
                        Entreprise,
                        "Coaching entreprise",
                        "/coaching-entreprise",
                        "Coaching en entreprise"
                    )}
                </div>
                <div className="text-center">
                    <Calendly />
                </div>
            </div>
        </section>
    )
}