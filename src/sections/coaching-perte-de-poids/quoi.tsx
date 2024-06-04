"use client"
import { useEffect } from "react"
import { reveal } from "../../utils/reveal"

export default function Quoi({ className = "bg-gray-100" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll(".transition"),
            classesToRemove: ["opacity-0", "translate-x-full"],
            delayIncrement: 50
        })
    }, [])

    return (
        <section id="quoi" className={className}>
            <div className="container">
                <div className="w-full lg:w-2/3 mx-auto flex flex-col gap-6">
                    <h1>Trouver l’équilibre dans la perte de poids</h1>
                    <p className="text-lg leading-6 transition duration-200 opacity-0 text">
                        La <strong>perte de poids</strong> n’est pas simplement une question de chiffres sur la balance. C’est trouver son équilibre dans <strong>l’alimentation</strong>, dans une <strong>activité physique adaptée</strong> et sa <strong>santé mentale</strong>.
                    </p>
                    <div>
                        <h2>L’importance du coaching mental</h2>
                        <p className="text-lg leading-6 transition duration-200 opacity-0 text">
                            La <strong>santé mentale</strong> joue un rôle central dans un parcours de perte de poids durable. Le coaching mental vous aidera à <strong>poursuivre vos efforts</strong> grâce à des techniques, des outils de <strong>coaching de motivation</strong> comme des outils de <strong>gestion du stress</strong> pour des changements durables. Une source de motivation pour atteindre vos objectifs.
                            <br />
                            <br />
                            Grâce au <strong>coaching mental</strong>, vous serez soutenu pour surmonter les <strong>obstacles émotionnels et mentaux</strong> qui peuvent être un frein à vos progrès. Être accompagné pour maintenir une attitude positive tout au long du parcours.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}