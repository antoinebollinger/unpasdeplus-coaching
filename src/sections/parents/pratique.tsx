'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { reveal } from '../../utils/reveal'
import Pratique1 from '/public/images/parents/1.webp'
import Pratique2 from '/public/images/parents/2.webp'
import Pratique3 from '/public/images/parents/3.webp'
import Pratique4 from '/public/images/parents/4.webp'

export default function Pratique({ className = '' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll('.career-step'),
            classesToRemove: ['translate-x-3/4', 'scale-0', 'opacity-0'],
            classesToAdd: ['translate-x-0'],
        })
    }, [])

    return (
        <section id="pratique" className={className}>
            <div className="container">
                <div className="w-full lg:w-2/3 mx-auto mb-16">
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <div className="w-1/2 md:w-1/4 hidden lg:block">
                            <Image
                                src={Pratique1}
                                width={150}
                                className="opacity-0"
                                alt="Illustration"
                            />
                        </div>
                        <div className="w-full md:w-3/4">
                            <h3>En pratique, ça donne quoi&nbsp;?</h3>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                        <div className="w-1/2 md:w-1/4 mx-auto transition duration-300 opacity-0 scale-0 career-step">
                            <Image
                                src={Pratique1}
                                width={150}
                                height={150}
                                className="mx-auto rounded-full shadow-xl"
                                alt="Illustration"
                            />
                        </div>
                        <div className="w-full md:w-3/4 transition duration-300 opacity-0 translate-x-3/4 career-step">
                            <p className="text-lg text-gray-900">
                                Séances individuelles en <strong>présentiel</strong> et/ou <strong>distanciel</strong> à Vannes et ses alentours. Durée de 1h/1h30 la séance à 10/15 jours d'intervalle
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                        <div className="w-1/2 md:w-1/4 mx-auto transition duration-300 opacity-0 scale-0 career-step">
                            <Image
                                src={Pratique2}
                                width={150}
                                height={150}
                                className="mx-auto rounded-full shadow-xl"
                                alt="Illustration"
                            />
                        </div>
                        <div className="w-full md:w-3/4 transition duration-300 opacity-0 translate-x-3/4 career-step">
                            <p className="text-lg text-gray-900">
                                Des <strong>exercices de développement personnel</strong> entre les séances pour continuer à vous développer.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                        <div className="w-1/2 md:w-1/4 mx-auto transition duration-300 opacity-0 scale-0 career-step">
                            <Image
                                src={Pratique3}
                                width={150}
                                height={150}
                                className="mx-auto rounded-full shadow-xl"
                                alt="Illustration"
                            />
                        </div>
                        <div className="w-full md:w-3/4 transition duration-300 opacity-0 translate-x-3/4 career-step">
                            <p className="text-lg text-gray-900">
                                Echanges WhatsApp pour <strong>garder la dynamique</strong> et vous inspirer.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                        <div className="w-1/2 md:w-1/4 mx-auto transition duration-300 opacity-0 scale-0 career-step">
                            <Image
                                src={Pratique4}
                                width={150}
                                height={150}
                                className="mx-auto rounded-full shadow-xl"
                                alt="Illustration"
                            />
                        </div>
                        <div className="w-full md:w-3/4 transition duration-300 opacity-0 translate-x-3/4 career-step">
                            <p className="text-lg text-gray-900">
                                <strong>Bilan à mi-parcours</strong> pour évaluer le chemin parcouru. <strong>Bilan final</strong> pour clôturer l'accompagnement.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <Link href="/contact" className="main-btn gradient-btn focus:outline-none uppercase">
                        Je prends contact pour en savoir plus
                    </Link>
                </div>
            </div>
        </section>
    )
}