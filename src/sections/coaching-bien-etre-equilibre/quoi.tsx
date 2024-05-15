'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { reveal } from '../../utils/reveal'
import Quoi_1 from '/public/images/coaching-bien-etre-equilibre/quoi_1.jpg'
import Quoi_2 from '/public/images/coaching-bien-etre-equilibre/quoi_2.jpg'
import Quoi_3 from '/public/images/coaching-bien-etre-equilibre/quoi_3.jpg'


export default function Quoi({ className = '' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll('#quoi h4'),
            classesToRemove: ['opacity-0']
        })
        reveal({
            collection: document.querySelectorAll('#quoi .quoi-text'),
            classesToRemove: ['opacity-0', 'translate-y-full']
        })
        reveal({
            collection: document.querySelectorAll('#quoi .img'),
            classesToRemove: ['scale-0']
        })
    }, [])

    return (
        <section id="quoi" className={className}>
            <div className="container">
                <div className="w-full lg:w-2/3 mx-auto flex flex-col gap-6 mb-16">
                    <h3 className="h1">Le coaching bien-être et équilibre, c'est quoi&nbsp;?</h3>
                    <p className="text-lg leading-6">
                        Le coaching bien-être et équilibre vous aide à retrouver <strong>l'harmonie entre bien-être intérieur et extérieur</strong>.
                        <br />
                        <br />
                        C'est un parcours de coaching pour un <strong>mieux-être au quotidien</strong> s'articulent autour de 3 axes&nbsp;:
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-16 justify-center items-stretch">
                    <div className="w-full lg:w-1/3 flex flex-col gap-6 rounded-xl shadow-xl p-4 bg-white">
                        <Image
                            src={Quoi_1}
                            width={200}
                            className="mx-auto rounded-full transition duration-200 scale-0 img"
                            alt="Coaching Perte de poids"
                        />
                        <p className="text-lg text-center">
                            <strong>Bien-être mental</strong>
                        </p>
                        <div className="text-lg text-start grow">
                            <ul className="list-disc list-inside">
                                <li>
                                    Établir des objectifs visant à améliorer votre bien-être mental peut être une véritable <strong>source de motivation</strong>.
                                </li>
                                <li>
                                    Prendre soin de votre <strong>bien-être mental</strong>, c'est prendre soin de vous-même, de votre <strong>état émotionnel</strong>.
                                </li>
                                <li>
                                    Apprenez à <strong>diminuer le stress et l'anxiété</strong> pour retrouver un équilibre intérieur.
                                </li>
                                <li>
                                    Affrontez les défis de la vie avec calme et sérénité grâce à des techniques de gestion du stress.
                                </li>
                                <li>
                                    Réactivez votre énergie et votre motivation pour atteindre vos objectifs de bien-être mental.
                                </li>
                                <li>
                                    Trouvez <strong>l'équilibre physique, mental et émotionnel</strong> dont vous avez besoin pour mener une vie épanouissante.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 flex flex-col gap-6 rounded-xl shadow-xl p-4 bg-white">
                        <Image
                            src={Quoi_2}
                            width={200}
                            className="mx-auto rounded-full transition duration-200 scale-0 img"
                            alt="Coaching bien-être & équilibre"
                        />
                        <p className="text-lg text-center">
                            <strong>Coaching en alimentation émotionnelle</strong>
                        </p>
                        <div className="text-lg text-start grow">
                            <ul className="list-disc list-inside">
                                <li>
                                    Apprenez à <strong>gérer vos émotions</strong> pour mettre fin à la tendance de manger par émotion.
                                </li>
                                <li>
                                    Explorez la voie d'un <strong>rééquilibrage alimentaire</strong> pour restaurer <strong>l'harmonie entre votre corps et votre esprit</strong>.
                                </li>
                                <li>
                                    Adoptez un rééquilibrage alimentaire pour renouer avec une <strong>relation saine</strong> entre votre <strong>corps et votre esprit</strong>.
                                </li>
                                <li>
                                    Découvrez des techniques pour <strong>canaliser vos émotions</strong> et éviter de recourir à la nourriture comme un moyen d'apaisement.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 flex flex-col gap-6 rounded-xl shadow-xl p-4 bg-white">
                        <Image
                            src={Quoi_3}
                            width={200}
                            className="mx-auto rounded-full transition duration-200 scale-0 img"
                            alt="Coaching entreprise"
                        />
                        <p className="text-lg text-center">
                            <strong>Coaching bien-être physique</strong>
                        </p>
                        <div className="text-lg text-start grow">
                            <ul className="list-disc list-inside">
                                <li>
                                    Prendre soin de son <strong>hygiène de vie</strong> est essentiel pour retrouver un équilibre de vie harmonieux. Un accompagnement pour vous aider à atteindre vos <strong>objectifs de santé et de forme physique</strong> de manière <strong>durable et épanouissante</strong>.
                                </li>
                                <li>
                                    Mettre en place des <strong>stratégies efficaces</strong> pour maintenir votre engagement et vous transformer en habitude de vie. Au-delà des bénéfices physiques, un développement d'une <strong>meilleure image de soi</strong>, une plus grande <strong>confiance</strong> en vos <strong>capacités</strong>. Un impact sur tous les aspects de votre vie. Un accompagnement adapté pour retrouver <strong>sérénité et équilibre de vie</strong>.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}