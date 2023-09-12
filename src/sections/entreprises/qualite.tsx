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
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                        <div className="w-1/2 md:w-1/5 mx-auto transition duration-300 opacity-0 scale-0 career-step">
                            <Image
                                src={EMCC}
                                width={150}
                                height={150}
                                className="mx-auto rounded-full shadow-lg"
                                alt="Illustration"
                            />
                        </div>
                        <div className="w-full md:w-3/4 transition duration-300 opacity-0 translate-x-3/4 career-step">
                            <p className="text-lg text-gray-900">
                                Accréditation EMCC - labélisation EMCC (European Mentoring Coaching Council)
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                        <div className="w-1/2 md:w-1/5 mx-auto transition duration-300 opacity-0 scale-0 career-step">
                            <Image
                                src={FranceCompetences}
                                width={150}
                                height={150}
                                className="mx-auto rounded-full shadow-lg"
                                alt="Illustration"
                            />
                        </div>
                        <div className="w-full md:w-3/4 transition duration-300 opacity-0 translate-x-3/4 career-step">
                            <p className="text-lg text-gray-900">
                                Coach professionnelle certifiée RNCP 7 - Linkup Coaching
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                        <div className="w-1/2 md:w-1/5 mx-auto transition duration-300 opacity-0 scale-0 career-step">
                            <Image
                                src={Outils}
                                width={150}
                                height={150}
                                className="mx-auto rounded-full shadow-lg"
                                alt="Illustration"
                            />
                        </div>
                        <div className="w-full md:w-3/4 transition duration-300 opacity-0 translate-x-3/4 career-step">
                            <p className="text-lg text-gray-900">
                                Outils et méthodes de coaching
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                        <div className="w-1/2 md:w-1/5 mx-auto transition duration-300 opacity-0 scale-0 career-step">
                            <Image
                                src={Ethics}
                                width={150}
                                height={150}
                                className="mx-auto rounded-full shadow-lg"
                                alt="Illustration"
                            />
                        </div>
                        <div className="w-full md:w-3/4 transition duration-300 opacity-0 translate-x-3/4 career-step">
                            <p className="text-lg text-gray-900">
                                Charte déontologique du coach
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