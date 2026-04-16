"use client"
import { useEffect } from "react"
import Image from "next/image"
import { reveal } from "../../utils/reveal"
import Sabrina from "/public/images/a-propos-de-moi/Sabrina_Appriou.webp"
import { madelyn } from "../../../styles/font"

export default function Bio({ className = "" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll(".transition"),
            classesToRemove: ["scale-0", "opacity-0", "translate-y-full", "translate-x-full"]
        })
    }, [])

    return (
        <section id="bio" className={className}>
            <div className="container">
                <div className="flex flex-col md:flex-row gap-6 justify-center items-start mb-16">
                    <div className="w-1/2 md:w-1/4 mx-auto transition duration-200 scale-0 opacity-0">
                        <Image
                            src={Sabrina}
                            className="rounded-xl"
                            alt="Sabrina Appriou, coach certifiée"
                            title="Sabrina Appriou, coach certifiée"
                        />
                    </div>
                    <div className="w-full md:w-3/4">
                        <div className="transition duration-200 opacity-0 translate-y-full">
                            <h1 className="h2">Coach de vie à Vannes | Coaching personnel & bien-être - <strong><span className={`${madelyn.className} text-5xl lg:text-4xl -translate-y-4`}>Un&nbsp;Pas&nbsp;de&nbsp;Plus</span>&nbsp;Coaching</strong></h1>
                            <p className="text-lg mb-6">
                                Depuis plus de 20 ans, je pratique la course à pied, sur route comme en trail, en connexion avec la nature.
                            </p>
                            <p className="text-lg mb-6">
                                L'activité physique fait partie intégrante de ma vie et est pour moi un moteur essentiel de vitalité et de bien-être. Bouger son corps n'est pas seulement un sport&nbsp;: c'est un levier puissant pour nourrir la force mentale, la résilience et la motivation à passer à l'action.
                            </p>
                            <p className="text-lg mb-6">
                                Je suis convaincue que le mouvement du corps et du mental est un véritable moteur de transformation. Oser sortir de sa zone de confort, relever les défis du quotidien et transformer les obstacles en opportunités permet de développer confiance en soi, force mentale et équilibre émotionnel.
                            </p>
                            <p className="text-lg mb-6">
                                Chaque pas en avant est une victoire. Chaque défi surmonté est une chance de grandir, de se découvrir et de s'épanouir.
                            </p>
                            <p className="text-lg mb-6">
                                Après 13 années passées dans le milieu bancaire, j'ai choisi de me former au coaching professionnel, afin d'accompagner les personnes et les groupes dans leur évolution, personnelle comme professionnelle. Mon objectif&nbsp;: aider chacun à retrouver confiance, légitimité et motivation, tout en harmonisant corps, mental et émotions.
                            </p>
                            <p className="text-lg mb-6">
                                C'est pour permettre à chacun de croire en soi, oser, et faire Un Pas de Plus vers un mieux-être physique, mental et émotionnel qu'est né <strong><span className={`${madelyn.className} text-5xl lg:text-4xl -translate-y-4`}>Un&nbsp;Pas&nbsp;de&nbsp;Plus</span>&nbsp;Coaching</strong>.
                            </p>
                            <p className="text-lg mb-6">
                                Bienvenue chez <strong><span className={`${madelyn.className} text-5xl lg:text-4xl -translate-y-4`}>Un&nbsp;Pas&nbsp;de&nbsp;Plus</span>&nbsp;Coaching</strong>, où chaque étape de votre chemin est guidée avec écoute, bienveillance et engagement.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}