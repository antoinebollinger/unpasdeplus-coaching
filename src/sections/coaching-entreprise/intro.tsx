'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { reveal } from '../../utils/reveal'
import IntroImg from '/public/images/entreprises/intro.webp'

export default function Intro({ className = '' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll('.entreprises-img'),
            classesToRemove: ['scale-0']
        })
    }, [])

    return (
        <section id="introduction" className={className}>
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-2/3 lg:w-1/4 lg:order-1">
                        <Image
                            src={IntroImg}
                            alt="Intro entreprises"
                            className="w-full rounded-full mx-auto transition duration-200 scale-0 entreprises-img"
                        />
                    </div>
                    <div className="w-full lg:w-3/4 lg:order-0">
                        <h1>Améliorer la performance par le bien-être</h1>
                        <p className="text-lg leading-6 mb-6">
                            <strong>L'équilibre vie pro perso</strong> est un défi constant, et jugé <strong>difficile</strong> surtout pour les <strong>parents actifs pour 77%</strong>.
                            <br />
                            <br />
                            Notre mission&nbsp;: agir sur le <strong>bien-être des salariés-parents</strong> pour permettre aux entreprises d'avoir des <strong>salariés en forme</strong> et concilier sereinement parentalité et travail.
                        </p>
                        <p className="text-center text-lg leading-6 mb-6">
                            <strong>Conciliation travail & famille</strong>
                            <br />
                            <br />
                            une priorité n° 1 pour 66% des parents.
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <a target="_blank" rel="nofollow" href="https://calendly.com/unpasdeplus-coaching56/30min" className="main-btn gradient-btn focus:outline-none uppercase">
                        Réserver votre appel découverte offert
                    </a>
                </div>
            </div>
        </section>
    )
}