"use client"
import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { reveal } from "../../utils/reveal"
import SabrinaPic from "/public/images/accueil/sabrina.webp"
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
                            className="w-full rounded-full"
                            alt="Sabrina Appriou, coach certifiée"
                            title="Sabrina Appriou, coach certifiée"
                        />
                    </div>
                    <div className="w-full lg:w-3/4 lg:order-0">
                        <h3 className="h1">Sabrina Appriou</h3>
                        <h3 className="h2">Coach consultante professionnelle certifiée, fondatrice <span className={`${madelyn.className} text-5xl lg:text-7xl -translate-y-4`}>Un&nbsp;pas&nbsp;de&nbsp;plus</span>&nbsp;Coaching</h3>
                        <br />
                        <p className="text-lg leading-6">
                            Chaque <strong>obstacle</strong> semble plus grand, chaque <strong>doute</strong> plus lourd, et le chemin peut devenir <strong>douloureux</strong>.
                            <br />
                            <br />
                            Notre mission&nbsp;: vous aider à vous <strong>épanouir</strong>, <strong>à croire en soi</strong>, <strong>à oser</strong>, <strong>à faire</strong> <span className="text-primary-600 font-bold">Un pas de plus</span> vers un <strong>mieux-être physique</strong>, <strong>mental et émotionnel</strong>.
                            <br />
                            <br />
                            Un <strong>espace sécurisé</strong> dans lequel les personnes peuvent avancer à leur rythme, en toute <strong>bienveillance</strong> pour faire Un Pas de Plus en faveur de leur <strong>bien-être physique, émotionnel</strong> et <strong>mental</strong>.
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