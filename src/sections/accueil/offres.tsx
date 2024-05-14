'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { reveal } from '../../utils/reveal'
import PerteDePoids from '/public/images/accueil/baskets.jpg'
import Parents from '/public/images/accueil/parents.jpg'
import Entreprise from '/public/images/accueil/entreprises.webp'

export default function Offres({ className = 'bg-gray-100' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll('.liens-img'),
            classesToRemove: ['scale-0']
        })
    }, [])

    return (
        <section id="mes-offres" className={className}>
            <div className="container">
                <div className="text-center pb-10">
                    <h2 className="h1 text-start lg:text-center">Mes offres</h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-16 justify-center items-stretch mb-16">
                    <div className="w-full lg:w-1/3 flex flex-col gap-6 rounded-xl shadow-xl p-4 bg-white">
                        <Image
                            src={PerteDePoids}
                            width={200}
                            className="mx-auto rounded-full transition duration-200 scale-0 liens-img"
                            alt="Coaching Perte de poids"
                        />
                        <p className="text-lg text-center">
                            <strong>Coaching perte de poids</strong>
                        </p>
                        <Link href="/coaching-perte-de-poids" className="main-btn gradient-btn focus:outline-none uppercase mx-auto">
                            En savoir plus
                        </Link>
                    </div>
                    <div className="w-full lg:w-1/3 flex flex-col gap-6 rounded-xl shadow-xl p-4 bg-white">
                        <Image
                            src={Parents}
                            width={200}
                            className="mx-auto rounded-full transition duration-200 scale-0 liens-img"
                            alt="Coaching bien-être & équilibre"
                        />
                        <p className="text-lg text-center">
                            <strong>Coaching bien-être & équilibre</strong>
                        </p>
                        <Link href="/coaching-bien-etre-equilibre" className="main-btn gradient-btn focus:outline-none uppercase mx-auto">
                            En savoir plus
                        </Link>
                    </div>
                    <div className="w-full lg:w-1/3 flex flex-col gap-6 rounded-xl shadow-xl p-4 bg-white">
                        <Image
                            src={Entreprise}
                            width={200}
                            className="mx-auto rounded-full transition duration-200 scale-0 liens-img"
                            alt="Coaching entreprise"
                        />
                        <p className="text-lg text-center">
                            <strong>Coaching entreprise</strong>
                        </p>
                        <Link href="/coaching-entreprise" className="main-btn gradient-btn focus:outline-none uppercase mx-auto">
                            En savoir plus
                        </Link>
                    </div>
                </div>
                <div className="text-center">
                    <a target="_blank" rel="nofollow" href="https://calendly.com/unpasdeplus-coaching56/30min" className="main-btn gradient-btn focus:outline-none uppercase">
                        Réserver votre appel découverte offre
                    </a>
                </div>
            </div>
        </section>
    )
}