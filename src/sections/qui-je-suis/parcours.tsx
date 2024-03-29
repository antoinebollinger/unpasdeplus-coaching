'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { reveal } from '../../utils/reveal'
import Career1 from '/public/images/qui-je-suis/1.webp'
import Career2 from '/public/images/qui-je-suis/2.webp'
import Career3 from '/public/images/qui-je-suis/3.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'

export default function Parcours({ className = 'bg-gray-100' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll('.career-step'),
            classesToRemove: ['translate-x-3/4', 'translate-y-full', 'scale-0', 'opacity-0'],
        })
    }, [])

    return (
        <section id="parcours" className={className}>
            <div className="container">
                <div className="w-full lg:w-2/3 mx-auto mb-16">
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                        <div className="w-1/2 md:w-1/4 hidden lg:block">
                            <Image
                                src={Career1}
                                width={150}
                                className="opacity-0"
                                alt="Illustration"
                            />
                        </div>
                        <div className="w-full md:w-3/4">
                            <h3 className="h1">Mon parcours</h3>
                            <p className="text-lg italic">Ma trajectoire de vie raconte qui je suis et ce que je peux vous apporter.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                        <div className="w-1/2 md:w-1/4 transition duration-200 opacity-0 scale-0 career-step">
                            <Image
                                src={Career1}
                                width={150}
                                height={150}
                                className="rounded-full shadow mx-auto"
                                alt="Illustration"
                            />
                        </div>
                        <div className="w-full md:w-3/4 transition duration-200 opacity-0 translate-x-3/4 career-step">
                            <p className="text-lg text-gray-900">
                                J'ai travaillé 13 ans à la Société Générale. Je voyais pleins d'opportunités pour les prochaines années. Une envie de gravir les échelons avec un confort financier à la clé. Tout se passait bien. Après la naissance de mon premier enfant : changement de poste, rythme de travail au 4/5ème pour trouver <strong>un équilibre de vie</strong>.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                        <div className="w-1/2 md:w-1/4 transition duration-200 opacity-0 scale-0 career-step">
                            <Image
                                src={Career2}
                                width={150}
                                height={150}
                                className="rounded-full shadow mx-auto"
                                alt="Illustration"
                            />
                        </div>
                        <div className="w-full md:w-3/4 transition duration-200 opacity-0 translate-x-3/4 career-step">
                            <p className="text-lg text-gray-900">
                                Cependant,<strong> difficile de concilier vie pro et vie perso</strong>&nbsp;: être présente au travail, avoir du temps pour mes enfants, avoir du temps pour moi. J'avais l'impression de courir après la montre, d'être pressée par le temps et de <strong>subir ma vie</strong>.<br />Ce rythme de vie commençait à m’épuiser. Je me suis sentie tiraillée entre mon envie de réussir ma carrière et celle de voir grandir mes enfants.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                        <div className="w-1/2 md:w-1/4 transition duration-200 opacity-0 scale-0 career-step">
                            <Image
                                src={Career3}
                                width={150}
                                height={150}
                                className="rounded-full shadow mx-auto"
                                alt="Illustration"
                            />
                        </div>
                        <div className="w-full md:w-3/4 transition duration-200 opacity-0 translate-x-3/4 career-step">
                            <p className="text-lg text-gray-900">
                                Ma <strong>charge mentale</strong> s’accroissait et j’ai commencé à remettre en question mes choix professionnels. Face à l'épuisement professionnel, la lassitude, je me rends à l'évidence&nbsp;: je dois trouver une solution plus pérenne. A cela s'ajoute une <strong>quête de sens</strong>, et ce profond besoin de me reconnecter à <strong>mes valeurs</strong>, <strong>mon identité</strong>, <strong>ma personnalité</strong>.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:max-w-5xl mx-auto">
                    <p className="text-lg text-gray-900 mb-2 transition duration-200 opacity-0 translate-y-full career-step">
                        Parce que ce parcours, c'est aussi le parcours d'autres parents, mamans, papas qui tentent de trouver le meilleur équilibre en prenant en compte les <strong>responsabilités familiales et professionnelles</strong>.
                    </p>
                    <p className="text-lg text-gray-900 mb-2 transition duration-200 opacity-0 translate-y-full career-step">
                        Parce que je suis convaincue que nous avons tous des ressources mais que parfois la <strong>charge émotionnelle</strong> nous <strong>empêche d'avancer</strong>, de nous épanouir. Avoir une meilleure de <strong>conscience de soi</strong>, <strong>connaissance de soi</strong> aide à <strong>changer nos schémas de pensée</strong>.
                    </p>
                    <p className="text-lg text-gray-900 mb-12 transition duration-200 opacity-0 translate-y-full career-step">
                        Parce que faire un métier qui me passionne et qui a du sens pour moi, me former au coaching professionnel était une évidence. Exercer le <strong>métier</strong> avec <strong>éthique</strong> et <strong>déontologie</strong> en respectant la charte déontologique du coach.
                    </p>
                    <p className="text-lg text-gray-900 transition duration-200 opacity-0 translate-y-full career-step">
                        <FontAwesomeIcon icon={faHandPointRight} /> C'est donc dans l'envie de contribuer, à mon niveau, au bien-être des autres que <strong>Un pas de plus Coaching</strong> a vu le jour.
                    </p>
                </div>
            </div>
        </section>
    )
}