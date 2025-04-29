"use client"
import Reviews from "../../../utils/reviews"

export default function Temoignages({ className = "" }: { className?: string }) {
    return (
        <section id="temoignages" className={className}>
            <div className="container relative">
                <h3 className="h1 text-center">Témoignages</h3>
                <Reviews reviews={[
                    {
                        "author": "Aline",
                        "tag": "#coachingbienetreequilibre",
                        "text": "Tout commence par une rencontre amicale et très rapidement je me rends compte de l'impact rayonnant et dynamisant de Sabrina sur moi. Au travail comme dans la vie Sabrina nous emmène avec elle en respectant nos besoins et capacités. Toujours en objectif de nous emmener vers le haut et de faire sortir le meilleur de nous .... Naturellement. Merci Sabrina pour tout ce que tu apportes ."
                    },
                    {
                        "author": "Angélique",
                        "tag": "#coachingbienetreequilibre",
                        "text": "Accepter de se faire accompagner, pour progresser là où j’avais atteint mes limites, n'était pas évident. Et je savais encore moins par où commencer. En l'occurrence, Sabrina est une coach de vie qui sait se rendre disponible, à l'écoute et dont l'accompagnement est personnalisé dès la 1ère séance et ce jusqu'à atteindre les objectifs que je m’étais fixés : m’accompagner dans ma transition de vie,  retrouver ma forme physique, et de la motivation au quotidien. Et surtout : un équilibre vie pro/vie perso. Merci encore Sabrina !"
                    },
                ]} />
            </div>
        </section >
    )
}