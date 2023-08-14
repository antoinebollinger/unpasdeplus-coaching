'use client';
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { reveal } from '../../utils/reveal'
import IntroImg from '/public/images/parents/intro.webp'

export default function Intro({ className = '' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: Array.from(document.querySelectorAll('.parents-img')),
            classesToRemove: ['scale-0']
        })
        reveal({
            collection: Array.from(document.querySelectorAll('#introduction li')),
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
                            className="w-full mx-auto transition duration-200 scale-0 parents-img"
                        />
                    </div>
                    <div className="w-full lg:w-3/4 lg:order-0">
                        <h3>Accompagnement "Healthy Habits" :<br />bien dans sa tête, bien dans ses baskets</h3>
                        <br />
                        <p className="text-lg leading-6 mb-6">
                            Un coaching pour vous accompagner à prendre soin de votre santé physique et mentale en relevant vos défis quotidiens. Acquérir des habitudes mentales <strong>pour gagner en sérénité et en confiance en soi</strong>.
                        </p>
                        <ul className="list-disc list-inside text-lg leading-8">
                            <li className="opacity-0">
                                Accompagnement individuel de 3 ou 6 mois
                            </li>
                            <li className="opacity-0">
                                Parcours personnalisé sur l’hygiène de vie ( alimentation, sport, habitudes de santé)
                            </li>
                            <li className="opacity-0">
                                Des exercices de coaching entre les séances
                            </li>
                            <li className="opacity-0">
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