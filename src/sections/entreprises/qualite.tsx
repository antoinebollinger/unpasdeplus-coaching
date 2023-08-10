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
            collection: Array.from(document.querySelectorAll('.career-step')),
            classesToRemove: ['translate-x-3/4', 'scale-0', 'opacity-0'],
            classesToAdd: ['translate-x-0'],
        })
    }, [])

    const list = (img, text: string) => {
        return (
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                <div className="w-1/2 md:w-1/5 mx-auto transition duration-300 opacity-0 scale-0 career-step">
                    <Image
                        src={img}
                        width={150}
                        className="mx-auto rounded-full"
                        alt="Illustration"
                    />
                </div>
                <div className="w-full md:w-3/4 transition duration-300 opacity-0 translate-x-3/4 career-step">
                    <p className="text-lg text-gray-900" dangerouslySetInnerHTML={{ __html: text }} />
                </div>
            </div>
        )
    }

    return (
        <section id="pratique" className={className}>
            <div className="container">
                <div className="text-center pb-10">
                    <h3>Un accompagnement de qualité</h3>
                    <p className="text-lg italic">Avec professionnalisme, éthique et bienveillance</p>
                </div>
                <div className="lg:max-w-5xl mx-auto mb-16">
                    {list(
                        EMCC,
                        "Accréditation EMCC - labélisation EMCC (European Mentoring Coaching Council)"
                    )}
                    {list(
                        FranceCompetences,
                        "Coach professionnelle certifiée RNCP 7 - Linkup Coaching"
                    )}
                    {list(
                        Outils,
                        "Outils et méthodes de coaching"
                    )}
                    {list(
                        Ethics,
                        "Charte déontologique du coach"
                    )}
                </div>
                <div className="text-center">
                    <Link href="/contact">
                        <button type="submit" className="main-btn gradient-btn focus:outline-none uppercase">Je prends contact pour en savoir plus</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}