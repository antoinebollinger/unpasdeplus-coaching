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
                        "text": "Un grand merci Aline pour ce retour très chaleureux. Ta bonne humeur lors de nos échanges transparait parfaitement à travers ce commentaire. Très heureuse de contribuer à un impact positif dans ton développement personnel et professionnel. Ce témoignage renforce ma conviction dans l'importance de mon travail et me pousse à offrir le meilleur service possible à chacun de mes coachés. Un énorme merci pour ta recommandation. Je te souhaite tout le meilleur!"
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