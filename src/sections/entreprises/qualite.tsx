'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { reveal } from '../../utils/reveal'
import EMCC from '/public/images/entreprises/emcc.webp'
import FranceCompetences from '/public/images/entreprises/france_competences.webp'
import Outils from '/public/images/entreprises/outils.webp'
import Ethics from '/public/images/entreprises/ethique.webp'

export default function Qualite({ className = '' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll('.career-step'),
            classesToRemove: ['translate-x-3/4', 'scale-0', 'opacity-0'],
            classesToAdd: ['translate-x-0'],
        })
    }, [])

    return (
        <section id="qualite" className={className}>
            <div className="container">
                <div className="text-center pb-10">
                    <h3>Un accompagnement de qualité</h3>
                    <p className="text-lg italic">Avec professionnalisme, éthique et bienveillance</p>
                </div>
                <div className="lg:max-w-5xl mx-auto mb-16">
                    {
                        [
                            [
                                EMCC,
                                "Accréditation EMCC - labélisation EMCC (European Mentoring Coaching Council)"
                            ],
                            [
                                FranceCompetences,
                                "Coach professionnelle certifiée RNCP 7 - Linkup Coaching"
                            ],
                            [
                                Outils,
                                "Outils et méthodes de coaching"
                            ],
                            [
                                Ethics,
                                "Charte déontologique du coach"
                            ]
                        ].map((e, i) => (
                            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10" key={i}>
                                <div className="w-1/2 md:w-1/5 mx-auto transition duration-300 opacity-0 scale-0 career-step">
                                    <Image
                                        src={e[0]}
                                        width={150}
                                        height={150}
                                        className="mx-auto rounded-full shadow-lg"
                                        alt="Illustration"
                                    />
                                </div>
                                <div className="w-full md:w-3/4 transition duration-300 opacity-0 translate-x-3/4 career-step">
                                    <p className="text-lg text-gray-900" dangerouslySetInnerHTML={{ __html: e[1] }} />
                                </div>
                            </div>
                        ))
                    }
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