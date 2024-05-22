"use client"
import { useEffect } from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { reveal } from "../../utils/reveal"
import Lescles from "/public/images/coaching-entreprise/cles.jpg"
import Coaching_1 from "/public/images/coaching-entreprise/coaching_1.jpg"
import Coaching_2 from "/public/images/coaching-entreprise/coaching_2.jpg"
import Coaching_3 from "/public/images/coaching-entreprise/coaching_3.jpg"
import Coaching_4 from "/public/images/coaching-entreprise/coaching_4.jpg"
import Coaching_5 from "/public/images/coaching-entreprise/coaching_5.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { renderToString } from "react-dom/server"

export default function Cles({ className = "bg-gray-100" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll("#cles .transition"),
            classesToRemove: ["translate-y-full", "scale-0", "opacity-0"]
        })
    }, [])

    const list = (
        img: StaticImageData,
        title: string,
        text: string,
        alt?: string
    ) => {
        return (
            <div className="w-full flex flex-col gap-6 rounded-xl shadow-xl p-6 bg-white">
                <Image
                    src={img}
                    className="w-full rounded transition duration-200 scale-0 object-cover"
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
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-2/3 lg:w-1/4">
                        <Image
                            src={Lescles}
                            alt="Le coaching en entreprise"
                            className="w-full rounded-full mx-auto transition duration-200 scale-0"
                        />
                    </div>
                    <div className="w-full lg:w-3/4">
                        <p className="h1">Les clés pour accompagner la parentalité</p>
                        <div className="flex flex-col gap-6">
                            <h2>
                                Coaching en entreprise&nbsp;: un outil puissant pour accompagner la parentalité
                            </h2>
                            <p className="text-lg leading-6 transition duration-200 opacity-0 translate-y-full">
                                Le coaching en entreprise offre un espace dédié aux salariés parents pour <strong>explorer leurs défis</strong>, un <strong>soutien personnalisé</strong>, pour créer un environnement propice au <strong>mieux-être au travail</strong>.
                            </p>
                            <p className="text-lg leading-6 transition duration-200 opacity-0 translate-y-full">
                                Offrir du coaching aux salariés parents, c’est se soucier de la parentalité de ses salariés et donc de leur <strong>mieux-être au travail</strong>. Les employés se sentent compris, plus sereins et reconnaissants.
                            </p>
                            <p className="text-lg leading-6 transition duration-200 opacity-0 translate-y-full">
                                Cela renforce une <strong>culture d’entreprise bienveillante et adaptable</strong>. Un environnement plus favorable et inclusif.
                            </p>
                            <p className="text-xl font-bold leading-6 transition duration-200 opacity-0 translate-y-full">
                                A la clé&nbsp;: des salariés engagés envers leur entreprise.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-col-1 md:grid-cols-2 gap-16 justify-center items-stretch mb-16">
                    {list(
                        Coaching_1,
                        "Coaching individuel pour les salariés parents",
                        `<p>Un accompagnement pour prendre soin de leur <strong>santé physique et mentale</strong> dans les défis de la vie. C’est garantir un <strong>soutien émotionnel</strong> aux parents dans leur <strong>transition de vie</strong> pour mieux gérer le stress, surmonter les <strong>défis personnels</strong> et limiter ainsi les <strong>risques psychosociaux</strong>.</p>`
                    )}
                    {list(
                        Coaching_2,
                        "Coaching à la reprise du travail après un congé maternité / paternité / parental ",
                        `<p>
                            Être parent et travailler implique une nouvelle <strong>organisation professionnelle et personnelle</strong>.
                        </p>
                        <ul class="list-none list-inside fa-ul flex flex-col gap-6">
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Accompagner les parents dans leur nouveau rôle de parents, comme préparer le <strong>retour de congés maternité/paternité</strong> permet au salarié de vivre sereinement cette transition.
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                             Accompagner les salariés après une <strong>absence maladie de longue durée</strong> pour réintégrer en douceur le monde du travail.
                            </li>
                        </ul>
                        <p>
                            L’entreprise a un rôle à jouer dans le <strong>bien-être du salarié</strong> pour permettre aux salariés parents de <strong>concilier carrière et parentalité</strong> avec <strong>moins de stress et d’anxiété</strong>.
                        </p>`
                    )}
                    {list(
                        Coaching_3,
                        "Coaching transitions de vie & carrière",
                        `<p>
                            Être parent, c’est aussi l’être à <strong>différentes étapes de la vie</strong>.
                        </p>
                        <ul class="list-none list-inside fa-ul flex flex-col gap-6">
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Être parent de jeunes enfants, d’adolescents, où la gestion de la routine de vie peut être source de <strong>charge mentale importante</strong> pour le salarié-parent et avoir des répercussions au sein du milieu professionnel.
                            </li>
                        </ul>`
                    )}
                    {list(
                        Coaching_4,
                        "Coaching salariés aidants au travail&nbsp;: surmonter les défis avec le Coaching en Entreprise",
                        `<p>
                            Les salariés aidants jonglent souvent entre les <strong>responsabilités professionnelles et les obligations familiales</strong>, ce qui peut créer des défis dans le milieu de travail. Confrontés à différents freins comme des contraintes de gestion du temps et flexibilité, du stress et charge émotionnelle qui ont un <strong>impact sur la carrière et les choix professionnels</strong>.
                        </p>
                        <ul class="list-none list-inside fa-ul flex flex-col gap-6">
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Le coaching peut aider les salariés aidants à mieux <strong>gérer le stress</strong>, améliorer le <strong>bien-être émotionnel</strong> et maintenir une <strong>performance optimale au travail</strong>.
                            </li>
                        </ul>`
                    )}
                    {list(
                        Coaching_5,
                        "Sensibiliser et former&nbsp;: cultiver une politique inclusive",
                        `<ul class="list-none list-inside fa-ul flex flex-col gap-6">
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}
                            Organiser des ateliers collectifs de sensibilisation et de formation sur les <strong>défis spécifiques</strong> auxquels sont confrontés les parents permet de cultiver une <strong>culture d’entreprise inclusive</strong>.
                            </li>
                            <li>
                            ${renderToString(<span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>)}Sensibiliser l’équipe à la nécessité d’un <strong>équilibre vie pro-perso</strong> contribue à créer une atmosphère de compréhension mutuelle au sein de l’entreprise.
                            </li>
                        </ul>`
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