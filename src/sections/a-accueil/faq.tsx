"use client"
import { openModal } from "../../utils/modal"

export default function Faq({ className = "bg-gray-100" }: { className?: string }) {
    const list = (
        title: string,
        content: string
    ) => {
        return (
            <div className="w-full flex flex-col gap-6 rounded-xl shadow-xl p-6 bg-white">
                <h2>{title}</h2>
                <div className="flex flex-col gap-6 max-h-24 overflow-hidden" dangerouslySetInnerHTML={{ __html: content }} />
                <button
                    onClick={() => openModal({ title, content })}
                    className="text-primary-600 hover::underline mt-2"
                >Voir plus</button>
            </div>
        )
    }

    return (
        <section id="faq" className={className}>
            <div className="container">
                <div className="text-center pb-10">
                    <h2 className="h1 text-start lg:text-center">Foire aux questions</h2>
                </div>
                <div className="w-full mx-auto grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-center items-stretch">
                    {list(
                        "Qu'est-ce qu'un coach de vie peut m'apporter ?",
                        "<p>Un coach de vie vous aide à <strong>faire le point</strong>, à <strong>y voir plus clair</strong> et à <strong>avancer concrètement</strong> dans votre vie personnelle ou professionnelle. Concrètement, le coaching peut vous aider à :</p><ul class='list-disc list-inside'><li>Sortir d'une période de flou, de fatigue ou de surcharge mentale</li><li>Mieux gérer le stress et retrouver de l'énergie</li><li>Clarifier ce que vous voulez vraiment (et ce que vous ne voulez plus)</li><li>Reprendre confiance en vous et en vos capacités</li><li>Dépasser des blocages, des peurs ou des schémas répétitifs</li><li>Passer à l'action, à votre rythme, avec plus de sérénité</li></ul><p>Le coaching, ce n'est <strong>ni une thérapie</strong>, ni des conseils tout fait. C'est un <strong>espace d'écoute</strong>, <strong>de réflexion et de mise en mouvement</strong>, où vous restez pleinement acteur, actrice de votre chemin.</p><p>Mon rôle est de vous accompagner avec bienveillance, des questions justes et des outils adaptés pour que vous puissiez <strong>trouver vos propres réponses</strong> et créer des changements durables.</p>"
                    )}
                    {list(
                        "À qui s’adresse le coaching de vie ?",
                        "<p>Le coaching de vie s'adresse à toute personne qui ressent le besoin de <strong>changer quelque chose</strong>, sans toujours savoir par où commencer. Il est particulièrement adapté si :</p><ul class='list-disc list-inside'><li>Vous vous sentez fatigué·e, débordé·e ou sous pression</li><li>Vous traversez une période de transition (personnelle ou professionnelle)</li><li>Vous avez l'impression d'être bloqué·e ou de tourner en rond</li><li>Vous voulez retrouver du sens, de l'équilibre ou de la motivation</li><li>Vous souhaitez mieux concilier vie personnelle, familiale et professionnelle</li><li>Vous avez envie d'avancer, mais pas seul·e</li></ul><p>Le coaching de vie est fait pour vous si vous être prêt·e à vous impliquer, à vous questionner et à avancer pas à pas, dans un cadre bienveillant et sécurisant.</p>"
                    )}
                    {list(
                        "Comment se déroule un accompagnement avec un coach de vie à Vannes ?",
                        "<p>Un accompagnement avec un <strong>coach de vie</strong> à Vannes se déroule en plusieurs étapes, dans un cadre bienveillant, confidentiel et personnalisé.</p><p><strong>1. Premier échange / séance découverte</strong></p><p>La première rencontre permet de faire le point sur votre situation, vos attentes et vos besoins. C'est aussi l'occasion de vérifier si l'accompagnement vous convient et si la relation de confiance peut s'installer.</p><p><strong>2. Définition des objectifs</strong></p><p>Ensemble, nous clarifions ce que vous souhaitez changer, améliorer ou dépasser. Les objectifs sont concrets, réalistes et adaptés à votre rythme de vie personnelle et professionnelle.</p><p><strong>3. Les séances de coaching</strong></p><p>Les séances de coaching de vie durent généralement entre 1 heure et 1h15, elles ont lieu :</p><ul class='list-disc list-inside'><li>En présentiel à Vannes</li><li>À distance ou en visio, selon votre préférence</li></ul><p>Chaque séance est un espace d'écoute et de réflexion, orienté vers la <strong>prise de conscience</strong> et <strong>la mise en action</strong>.</p><p><strong>4. Mise en mouvement et suivi</strong></p><p>Entre les séances, vous expérimentez de nouvelles actions et prises de recul. Le coaching est un accompagnement <strong>actif</strong>, qui favorise des changements durables.</p><p><strong>5. Bilan de fin d'accompagnement</strong></p><p>En fin de parcours, un bilan permet de mesurer le chemin parcouru, les évolutions et les ressources que vous pouvez continuer à mobiliser en autonomie.</p>"
                    )}
                </div>
            </div>
        </section>
    )
}
