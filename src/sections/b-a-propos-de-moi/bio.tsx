"use client"
import { useEffect } from "react"
import Image from "next/image"
import { reveal } from "../../utils/reveal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import Sabrina from "/public/images/a-propos-de-moi/Sabrina_Appriou.webp"
import Sportive from "/public/images/a-propos-de-moi/sportive.webp"
import { madelyn } from "../../../styles/font"

export default function Bio({ className = "" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll(".transition"),
            classesToRemove: ["scale-0", "opacity-0", "translate-y-full", "translate-x-full"]
        })
    }, [])

    return (
        <section id="bio" className={className}>
            <div className="container">
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-1/2 md:w-1/4 mx-auto transition duration-200 scale-0 opacity-0">
                        <Image
                            src={Sabrina}
                            className="rounded-xl"
                            alt="Sabrina Appriou, coach certifiée"
                            title="Sabrina Appriou, coach certifiée"
                        />
                    </div>
                    <div className="w-full md:w-3/4">
                        <div className="transition duration-200 opacity-0 translate-y-full">
                            <h2>Parce que nous sommes tous confrontés à des défis sur le plan personnel, professionnel ou dans la parentalité.</h2>
                            <p className="text-lg mb-6">
                                Mais parfois, <strong>le plus grand obstacle</strong>, <strong>c'est nous-même</strong>.
                            </p>
                            <ul className="list-none list-inside fa-ul text-lg leading-8 mb-6">
                                {
                                    [
                                        (
                                            <>
                                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                                Parce que nos proches, aussi bienveillants soient-ils, n'ont pas toujours les réponses à nos questionnements profonds.
                                            </>
                                        ),
                                        (
                                            <>
                                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                                Parce que vous êtes la seule personne à savoir ce qui est juste pour vous, ce dont vous avez vraiment besoin pour avancer.
                                            </>
                                        ),
                                        (
                                            <>
                                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                                Parce que rester seul·e avec ses doutes, ses peurs ou ses blocages, c'est souvent rester figé·e dans le flou.
                                            </>
                                        ),
                                        (
                                            <>
                                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                                Et parce que oui, seul·e on va peut-être plus vite, mais ensemble, on va plus loin. Plus sereinement. Plus durablement.
                                            </>
                                        )
                                    ].map((e, i) => (
                                        <li className="transition duration-200 opacity-0 translate-x-full" key={i}>{e}</li>
                                    ))
                                }
                            </ul>
                            <p className="text-lg mb-6">
                                Ces <strong>défis du quotidien</strong>, lorsqu'ils s'accumulent, peuvent peser lourd sur votre <strong>santé mentale</strong>, <strong>bien-être émotionnel et santé physique</strong>.
                            </p>
                            <p className="text-lg mb-6">
                                Et c'est là que le <strong>coaching mental</strong> prend tout son sens&nbsp;: pour retrouver de la clarté, du sens, de l'élan, et avancer avec plus de confiance.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-1/2 md:w-1/4 mx-auto transition duration-200 scale-0 opacity-0 md:order-last">
                        <Image
                            src={Sportive}
                            className="rounded-xl"
                            alt="Sabrina Appriou, sportive au quotidien"
                            title="Sabrina Appriou, sportive au quotidien"
                        />
                    </div>
                    <div className="w-full md:w-3/4">
                        <div className="transition duration-200 opacity-0 translate-y-full">
                            <h2>💪 Bouger pour mieux penser, avancer pour mieux être</h2>
                            <p className="text-lg mb-6">
                                Sportive engagée dans le <strong>bien-être global</strong>, je suis en mouvement - physiquement et mentalement.
                            </p>
                            <p className="text-lg mb-6">
                                <strong>La course à pied</strong>, <strong>la marche et une alimentation saine</strong> sont bien plus que des habitudes : ce sont des <strong>moteurs essentiels de mon équilibre de vie</strong>.
                            </p>
                            <p className="text-lg mb-6">
                                Ces pratiques m'aident à <strong>préserver ma santé mentale</strong>, à entretenir un <strong>bien-être physique durable</strong> et à rester ancrée dans un quotidien aligné avec mes valeurs.
                            </p>
                            <p className="text-lg mb-6">
                                Elle nourrissent un <strong>corps en mouvement</strong> et un <strong>esprit serein</strong> - un duo indispensable pour avancer avec énergie et clarté.
                            </p>
                        </div>
                        <div className="transition duration-200 opacity-0 translate-y-full">
                            <h2>👉 Mon mantra&nbsp;: <strong>"Ne limite pas tes défis, défie tes limites"</strong></h2>
                            <p className="text-lg mb-6">
                                C'est une vision que je transmets à travers mon accompagnement en <strong>coaching mental</strong>&nbsp;:
                            </p>
                            <p className="text-lg mb-6">
                                Affronter les obstacles du quotidien, oser sortir de sa zone de confort, <strong>transformer les difficultés en tremplins</strong>.
                            </p>
                            <p className="text-lg mb-6">
                                Car c'est là que naissent la <strong>confiance en soi</strong>, la <strong>résilience</strong>, la <strong>force mentale</strong> et une meilleure connaissance de soi.
                            </p>
                            <p className="text-lg mb-6">
                                Chaque pas en avant est une victoire.
                            </p>
                            <p className="text-lg mb-6">
                                Chaque défi surmonté est une chance de grandir, de se découvrir, de s'épanouir.
                            </p>
                            <p className="text-lg mb-6">
                                Et c'est ce chemin-là que je vous propose d'explorer à mes côtés.
                            </p>
                        </div>
                        <div className="transition duration-200 opacity-0 translate-y-full">
                            <p className="text-lg mb-6">
                                C'est pour accompagner chacun à s'épanouir, à croire en soi, à OSER, à faire <span className="text-primary-600 font-bold">Un pas de plus</span>, vers un <strong>mieux-être physique et mental</strong> qu'<strong><span className={`${madelyn.className} text-5xl lg:text-4xl -translate-y-4`}>Un&nbsp;pas&nbsp;de&nbsp;plus</span>&nbsp;Coaching</strong> a vu le jour.
                            </p>
                            <p className="text-lg mb-6">
                                Bienvenue chez <strong><span className={`${madelyn.className} text-5xl lg:text-4xl -translate-y-4`}>Un&nbsp;pas&nbsp;de&nbsp;plus</span>&nbsp;Coaching</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}