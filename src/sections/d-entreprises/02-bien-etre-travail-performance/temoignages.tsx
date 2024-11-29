"use client"
import Reviews from "../../../utils/reviews"

export default function Temoignages({ className = "bg-gray-100" }: { className?: string }) {
    return (
        <section id="temoignages" className={className}>
            <div className="container relative">
                <h3 className="h1 text-center">Témoignages</h3>
                <Reviews reviews={[
                    {
                        "author": "Alyse Kb",
                        "tag": "#coachingbienetretravail",
                        "text": "Je suis vraiment reconnaissante d'avoir bénéficié du coaching de Sabrina. Sa disponibilité et son écoute m'ont permis de me sentir comprise dès le départ. C'est une femme avec une sensibilité incroyable, capable de cerner rapidement les blocages et d’apporter des solutions adaptées. Grâce à son accompagnement, j'ai gagné en clarté et j'ai amélioré mon organisation au quotidien. Elle a su me booster tout en respectant mon rythme. Elle m’a aidé à mieux structurer mes journées et à aborder mes objectifs de manière plus sereine. Je vois vraiment les effets sur mon travail et mon bien-être au quotidien. Son approche est à la fois professionnelle et humaine. Je recommande vivement son coaching ! Un grand merci pour ton soutien Sabrina !"
                    }
                ]} />
            </div>
        </section >
    )
}