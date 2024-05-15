'use client'
import { useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { reveal } from '../../utils/reveal'
import Entreprise from '/public/images/accueil/entreprises.webp'

export default function Cles({ className = 'bg-gray-100' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll('#cles .transition'),
            classesToRemove: ['translate-y-full', 'scale-0', 'opacity-0']
        })
    }, [])

    const list = (
        img: StaticImageData,
        title: string,
        text: string,
        alt?: string
    ) => {
        return (
            <div className="w-full flex flex-col gap-6 rounded-xl shadow-xl p-6 bg-white transition">
                <Image
                    src={img}
                    className="w-full h-[150px] rounded transition duration-200 scale-0 object-cover"
                    alt={alt ?? "Illustration du coaching"}
                />
                <h2 dangerouslySetInnerHTML={{ __html: title }} />
                <div className="flex flex-col gap-6" dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        )
    }

    return (
        <section id="cles" className={className}>
            <div className="container">
                <div className="w-full lg:w-2/3 mx-auto flex flex-col gap-6 mb-16">
                    <p className="h1">Les clés pour accompagner la parentalité</p>
                    <div className="flex flex-col gap-6">
                        <h2>
                            Coaching en entreprise&nbsp;: un outil puissant pour accompagner la parentalité
                        </h2>
                        <p className="text-lg leading-6 transition duration-200 opacity-0 translate-y-full">
                            Le coaching en entreprise offre un espace dédié aux salariés parents pour <strong>explorer leurs défis</strong>, un <strong>soutien personnalisé</strong>, pour créer un environnement propice au <strong>mieux-être au travail</strong>.
                        </p>
                        <p className="text-lg leading-6 transition duration-200 opacity-0 translate-y-full">
                            Offrir du coaching aux salariés parents, c'est se soucier de la parentalité de ses salariés et donc de leur <strong>mieux-être au travail</strong>. Les employés se sentent compris, plus sereins et reconnaissants.
                        </p>
                        <p className="text-lg leading-6 transition duration-200 opacity-0 translate-y-full">
                            Cela renforce une <strong>culture d'entreprise bienveillante et adaptable</strong>. Un environnement plus favorable et inclusif.
                        </p>
                        <p className="text-xl font-bold leading-6 transition duration-200 opacity-0 translate-y-full">
                            A la clé&nbsp;: des salariés engagés envers leur entreprise.
                        </p>
                    </div>
                </div>
                <div className="grid grid-col-1 md:grid-cols-2 gap-16 justify-center items-stretch mb-16">
                    {list(
                        Entreprise,
                        "Coaching individuel pour les salariés parents",
                        "<p>Un accompagnement pour prendre soin de leur santé physique et mentale dans les défis de la vie. C'est garantir un <strong>soutien émotionnel</strong> aux parents dans leur transition de vie pour mieux gérer le stress, surmonter les défis personnels et limiter ainsi les risques psychosociaux.</p>"
                    )}
                    {list(
                        Entreprise,
                        "Coaching à la reprise du travail après un congé maternité / paternité / parental ",
                        "<p>Être parent et travailler implique une nouvelle <strong>organisation professionnelle et personnelle</strong>.</p><ul><li>✔ Accompagner les parents dans leur nouveau rôle de parents, comme préparer le retour de congés maternité/paternité  permet au salarié de vivre sereinement cette transition.</li><li>✔ Accompagner les salariés après une <strong>absence maladie de longue durée</strong> pour réintégrer en douceur le monde du travail.</li></ul><p>L'entreprise a un rôle à jouer dans le bien-être du salarié pour permettre aux salariés parents de <strong>concilier carrière et parentalité</strong> avec <strong>moins de stress et d'anxiété</strong>.</p>"
                    )}
                    {list(
                        Entreprise,
                        "Coaching transitions de vie & carrière",
                        "<p>Être parent, c'est aussi l'être à <strong>différentes étapes de la vie</strong>.</p><ul><li>✔ Être parent de jeunes enfants, d'adolescents, où la gestion de la routine de vie peut être source de <strong>charge mentale importante</strong> pour le salarié-parent et avoir des répercussions au sein du milieu professionnel.</li></ul>"
                    )}
                    {list(
                        Entreprise,
                        "Coaching parent aidant au travail&nbsp;: surmonter les défis avec le Coaching en Entreprise",
                        "<p>Les parents aidants jonglent souvent entre les responsabilités professionnelles et les obligations familiales, ce qui peut créer des défis dans le milieu de travail. Confrontés à différents freins comme des contraintes de gestion du temps et flexibilité, du Stress et charge émotionnelle qui ont un impact sur la carrière et les choix professionnels.</p><ul><li>✔ Le coaching peut aider les parents aidants à mieux gérer le stress, améliorer le bien-être émotionnel et maintenir une performance optimale au travail.</li></ul>"
                    )}
                    {list(
                        Entreprise,
                        "Sensibiliser et former&nbsp;: cultiver une politique inclusive",
                        "<ul><li>✔ Organiser des ateliers collectifs de sensibilisation et de formation sur les <strong>défis spécifiques</strong> auxquels sont confrontés les parents permet de cultiver une <strong>culture d'entreprise inclusive</strong>.</li><li>✔ Sensibiliser l'équipe à la nécessité d'un <strong>équilibre vie pro-perso</strong> contribue à créer une atmosphère de compréhension mutuelle au sein de l'entreprise.</li></ul>"
                    )}
                </div>
                <div className="text-center mb-16">
                    <Link href="/contact" className="main-btn gradient-btn focus:outline-none uppercase">
                        En savoir plus
                    </Link>
                </div>
                <div className="text-center">
                    <h2>Coach professionnelle dans le Morbihan, basé à Vannes. En présentiel ou en distanciel.</h2>
                </div>
            </div>
        </section >
    )
}