'use client';
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { reveal } from '../../utils/reveal'
import IntroImg from '/public/images/parents/intro.webp'

export default function Intro() {
    useEffect(() => {
        reveal({
            collection: Array.from(document.querySelectorAll('.parents-img')),
            classesToRemove: ['scale-0']
        })
        reveal({
            collection: Array.from(document.querySelectorAll('.intro li')),
            classesToRemove: ['opacity-0'],
            delayIncrement: 50
        })
    }, [])


    return (
        <section id="introduction" className="intro">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-2/3 lg:w-1/3 text-center">
                        <Image
                            src={IntroImg}
                            alt="Intro parents"
                            height="250"
                            className="mx-auto transition duration-200 scale-0 parents-img"
                        />
                    </div>
                    <div className="w-full lg:w-2/3">
                        <p className="text-lg leading-6 mb-6">
                            Un coaching pour vous accompagner à prendre soin de votre santé physique et mentale en relevant vos défis quotidiens. Acquérir des habitudes mentales <strong>pour gagner en sérénité et en confiance en soi</strong>.
                        </p>
                        <ul className="list-disc list-inside square text-lg leading-6">
                            <li className="mb-4 opacity-0">
                                Accompagnement individuel de 3 ou 6 mois
                            </li>
                            <li className="mb-4 opacity-0">
                                Parcours personnalisé sur l’hygiène de vie ( alimentation, sport, habitudes de santé)
                            </li>
                            <li className="mb-4 opacity-0">
                                Des exercices de coaching entre les séances
                            </li>
                            <li className="mb-4 opacity-0">
                                Echange en ligne pour garder la dynamique
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center">
                    <Link href="/contact">
                        <button type="submit" className="main-btn gradient-btn focus:outline-none uppercase">Je prends contact pour un appel découverte</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}