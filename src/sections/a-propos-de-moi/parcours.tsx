"use client"
import Image from "next/image"
import Career1 from "/public/images/a-propos-de-moi/1.webp"
import Career2 from "/public/images/a-propos-de-moi/2.webp"

export default function Parcours() {
    return (
        <div className="parcours">
            <div className="text-center pb-10">
                <p className="h2">Mon parcours</p>
                <h1>Trouver son équilibre est un entrainement</h1>
            </div>
            <div className="w-full">
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                    <div className="w-1/2 md:w-1/4">
                        <Image
                            src={Career1}
                            width={150}
                            height={150}
                            className="rounded-full shadow mx-auto"
                            alt="Illustration"
                        />
                    </div>
                    <div className="w-full md:w-3/4">
                        <p className="text-lg text-gray-900">
                            Une vie sans trop me poser de question&nbsp;: métro, boulot, dodo. Salariée et maman de 2 enfants en bas âge. Rythme effréné, le sentiment de mener une course contre la montre au quotidien. C’était il y a quelques années.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                    <div className="w-1/2 md:w-1/4">
                        <Image
                            src={Career2}
                            width={150}
                            height={150}
                            className="rounded-full shadow mx-auto"
                            alt="Illustration"
                        />
                    </div>
                    <div className="w-full md:w-3/4">
                        <p className="text-lg text-gray-900">
                            Au fil du temps, je me suis sentie tiraillée entre être présente pour mes enfants et réussir professionnellement, tout en essayant de trouver <strong>mon équilibre de vie personnelle, familiale et professionnelle</strong>. À cette période-là, je trouve <strong>mon équilibre</strong> grâce à ma passion&nbsp;: <strong>l’activité physique, la course à pied</strong>. Un <strong>allié au quotidien</strong> dans mes défis.
                        </p>
                    </div>
                </div>
            </div>
            <div className="lg:max-w-5xl mx-auto">
                <p className="text-lg text-gray-900 mb-2">
                    Parce que le sport va bien au-delà d’une simple activité physique. C’est un véritable <strong>accélérateur de développement personnel et professionnel</strong>. La persévérance, la discipline, la motivation, l’équilibre de vie, la gestion de la performance sont autant de qualités pour <strong>surmonter les défis</strong>, forger <strong>le mental</strong>, garder <strong>le cap sur ses objectifs</strong>.
                </p>
                <p className="text-lg text-gray-900 mb-2">
                    Parce que prendre soin de son bien-être, c’est prendre soin de sa <strong>santé physique</strong>, sa <strong>santé mentale</strong> et de son <strong>bien-être émotionnel</strong>.
                </p>
                <p className="text-lg text-gray-900 mb-12">
                    Parce que je suis convaincue que nous pouvons être des athlètes de haut niveau face à nos défis du quotidien, Un Pas de Plus coaching a vu le jour, et a pour mission d’allier <strong>bien-être</strong>, <strong>équilibre</strong> et <strong>performance</strong> pour une vie épanouissante.
                </p>
            </div>
        </div>
    )
}