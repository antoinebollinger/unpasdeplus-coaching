"use client"
import Reviews from "../../../utils/reviews"

export default function Temoignages({ className = "bg-gray-100" }: { className?: string }) {
    return (
        <section id="temoignages" className={className}>
            <div className="container relative">
                <h3 className="h1 text-center">Témoignages</h3>
                <Reviews reviews={[
                    {
                        "author": "Anthony",
                        "tag": "#coachinggestioncarrieres",
                        "text": "Il arrive à tout le monde d'avoir des périodes de doutes. Sabrina n'y répond pas, elle a fait bien plus : elle m'a accompagné en toute simplicité et sans jamais porter de jugement à me poser les bonnes questions. Cela ouvre d'autres perspectives et surtout ne pas s'enfermer. Avoir une écoute extérieure à notre cercle habituel à été bénéfique, et que ça a été avec Sabrina fut un plus. Merci Sabrina !"
                    }
                ]} />
            </div>
        </section >
    )
}