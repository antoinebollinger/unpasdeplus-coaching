'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { reveal } from '../../utils/reveal'
import IntroImg from '/public/images/parents/parents.jpg'

export default function Intro({ className = '' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll('.parents-img'),
            classesToRemove: ['scale-0']
        })
        reveal({
            collection: document.querySelectorAll('#introduction li'),
            classesToRemove: ['opacity-0'],
            delayIncrement: 50
        })
    }, [])


    return (
        <section id="introduction" className={className}>
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-2/3 lg:w-1/4 lg:order-1">
                        <Image
                            src={IntroImg}
                            alt="Intro parents"
                            className="w-full rounded-full mx-auto transition duration-200 scale-0 parents-img"
                        />
                    </div>
                    <div className="w-full lg:w-3/4 lg:order-0">
                        <h1><strong>Un coaching "Habitudes gagnantes"</strong><br />tant sur le plan <strong>physique</strong> que <strong>mental</strong></h1>
                        <br />
                        <p className="text-lg leading-6 mb-6">
                            Un accompagnement individuel pour vous aider à prendre soin de votre santé physique et mentale en relevant vos défis quotidiens. Acquérir des habitudes mentales <strong>pour gagner en sérénité et en confiance en soi</strong>.
                        </p>
                        <ul className="list-disc list-inside text-lg leading-8">
                            {
                                [
                                    "Coaching individuel de 3 à 6 mois",
                                    "Parcours personnalisé sur l’hygiène de vie (alimentation, activité physique adaptée, habitudes de santé)",
                                    "Des exercices de coaching entre les séances",
                                    "Echange en ligne pour garder la dynamique"
                                ].map((e, i) => (
                                    <li className="opacity-0 transition duration-200" key={i}>{e}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="text-center">
                    <Link href="/contact" className="main-btn gradient-btn focus:outline-none uppercase">
                        Je prends contact pour un appel Découverte
                    </Link>
                </div>
            </div>
        </section>
    )
}