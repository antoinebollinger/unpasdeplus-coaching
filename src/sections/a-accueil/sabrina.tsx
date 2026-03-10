"use client"
import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { reveal } from "../../utils/reveal"
import SabrinaPic from "/public/images/accueil/Sabrina_Appriou.webp"
import { madelyn } from "../../../styles/font"

export default function Sabrina({ className = "" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll("#sabrina-appriou .img"),
            classesToRemove: ["scale-0"]
        })
    }, [])

    return (
        <section id="sabrina-appriou" className={className}>
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-full lg:w-1/4 transition duration-200 scale-0 img">
                        <Image
                            src={SabrinaPic}
                            width={300}
                            height={300}
                            className="w-full rounded-xl"
                            alt="Sabrina Appriou, coach certifiée"
                            title="Sabrina Appriou, coach certifiée"
                        />
                    </div>
                    <div className="w-full lg:w-3/4 lg:order-0">
                        <h3 className="h1">Qui suis-je ?</h3>
                        <h3 className="h2"><span className={`${madelyn.className} text-5xl lg:text-7xl -translate-y-4`}>Un&nbsp;pas&nbsp;de&nbsp;plus</span>&nbsp;vers votre équilibre, votre mieux-être, à votre rythme</h3>
                        <br />
                        <p className="text-lg leading-6">
                            Je suis Sabrina Appriou, coach de vie à Vannes et fondatrice d'<span className="text-primary-600 font-bold">Un Pas de Plus coaching</span>.
                            <br />
                            <br />
                            J’accompagne les particuliers et les professionnels grâce au coaching de vie, pour retrouver équilibre, confiance en soi et sérénité, en travaillant à la fois sur le corps, le mental et les émotions.
                            <br />
                            <br />
                            Mon approche vise une transformation durable, en vous aidant à mobiliser vos ressources pour avancer vers vos objectifs personnels et professionnels.
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <Link href="/a-propos-de-moi" className="main-btn gradient-btn focus:outline-none uppercase">
                        En savoir plus
                    </Link>
                </div>
            </div>
        </section >
    )
}