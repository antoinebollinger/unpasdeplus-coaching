"use client"
import { useEffect } from "react"
import { reveal } from "../../../utils/reveal"

export default function Enjeux({ className = "bg-gray-100" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll("#enjeux .transition"),
            classesToRemove: ["translate-y-full", "scale-0", "opacity-0"]
        })
    }, [])

    return (
        <section id="enjeux" className={className}>
            <div className="container">
                <div className="w-full lg:w-2/3 mx-auto flex flex-col gap-6">
                    <p className="h1">Travail et parentalité, un défi au quotidien</p>
                    <div className="flex flex-col gap-6">
                        <h2>
                            Comprendre les enjeux de l’équilibre vie pro perso pour les salariés-parents
                        </h2>
                        <p className="text-lg leading-6 transition duration-200 opacity-0 translate-y-full">
                            Avant de mettre en place des initiatives, il est essentiel de comprendre les <strong>défis</strong> auxquels sont confrontés les parents dans leur <strong>quête d'un meilleur équilibre pro perso</strong>. Des horaires de travail rigides, des responsabilités familiales et la pression quotidienne peuvent entraîner <strong>stress</strong>, <strong>anxiété</strong>, <strong>charge mentale</strong> et compromettre le bien-être global des salariés.
                        </p>
                        <p className="text-lg leading-6 transition duration-200 opacity-0 translate-y-full">
                            Aujourd’hui, les salariés-parents recherchent plus de <strong>flexibilité au travail</strong> pour <strong>mieux concilier vie pro perso</strong>. Des conditions de travail, une qualité de vie au travail où l’on prend en compte les <strong>responsabilités familiales</strong>, les <strong>contraintes et les imprévus</strong> d’un salarié parent.
                        </p>
                        <p className="text-lg leading-6 transition duration-200 opacity-0 translate-y-full">
                            Réussir à tout jongler&nbsp;: s’occuper de ses enfants, être performant au travail, prendre du temps pour soi est un jeu d’équilibriste. Difficile parfois de trouver un <strong>équilibre de vie</strong> face à une <strong>charge mentale importante</strong> qu’incombe d’être à la fois parent et salarié.
                        </p>
                        <p className="text-lg leading-6 transition duration-200 opacity-0 translate-y-full">
                            Ces <strong>défis à la fois personnels et professionnels</strong> peuvent avoir des répercussions sur la <strong>santé physique et mentale</strong> des salariés. Ces défis peuvent être sources de risques psychosociaux au travail.
                        </p>
                    </div>
                </div>
            </div>
        </section >
    )
}