"use client"
import Reviews from "../../../utils/reviews"

export default function Temoignages({ className = "" }: { className?: string }) {
    return (
        <section id="temoignages" className={className}>
            <div className="container relative">
                <h3 className="h1 text-center">Témoignages</h3>
                <Reviews reviews={[
                    {
                        "author": "Delphine",
                        "tag": "#coachingpertedepoids #motivation #objectifs #coachingsanté&bienêtre #travailintrospection",
                        "text": "Après de multiples <strong>tentatives</strong> dans mon objectif de perte de poids, j’ai décidé de faire appel à un coach pour m’aider à atteindre mes objectifs. Sabrina m’a soutenue et épaulée. Elle m’a vraiment aidée à identifier les problèmes et les résoudre petit à petit. Son écoute a été primordiale.<br/>Grâce au coaching, j’ai réussi à <strong>rebondir</strong> face à la <strong>baisse de motivation</strong> et reprendre ma vie en main.<br/>Je recommande à 100%, un <strong>investissement</strong> qui vaut le coup ! Pour moi, c’est un nouveau départ. Je suis beaucoup plus épanouie. Une <strong>expérience qui a changé ma vie !</strong><br/>Juste merci beaucoup Sabrina !"
                    },
                    {
                        "author": "Clara",
                        "tag": "#coachingpertedepoids #motivation #objectifs #coachingsanté&bienêtre #travailintrospection",
                        "text": "Je suis ravie d’avoir été accompagnée par Sabrina qui est très professionnelle. C’est une coach très positive et douce qui rassure et met en confiance !<br/>Sabrina m’a aidée à atteindre mes <strong>objectifs de perte de poids</strong> en débloquant les <strong>barrières psychologiques</strong> qui me freinaient dans ma réussite. Je conseille fortement l’aide d’un coach qui nous aide à <strong>cadrer</strong> nos <strong>objectifs</strong> afin qu’ils soient <strong>atteignables</strong> et <strong>mesurables</strong> dans le temps. Sabrina est disponible et positive, c’est un plaisir de travailler avec elle ! Elle a su m’accompagner <strong>au-delà de mes attentes initiales</strong>."
                    },
                ]} />
            </div>
        </section >
    )
}