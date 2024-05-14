'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { reveal } from '../../utils/reveal'
import IntroImg from '/public/images/coaching-perte-de-poids/intro.jpg'

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
                <div className="w-full lg:w-2/3 mx-auto flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-2/3 lg:w-1/4 lg:order-1">
                        <Image
                            src={IntroImg}
                            alt="Intro parents"
                            className="w-full rounded-full mx-auto transition duration-200 scale-0 parents-img"
                        />
                    </div>
                    <div className="w-full lg:w-3/4 lg:order-0">
                        <p className="h2">Perdre du poids de manière saine et durable : l'art du coaching bienveillant.</p>
                        <br />
                        <p className="text-lg leading-6 mb-6">
                            La quête <strong>d'une perte de poids saine et durable</strong> est souvent parsemée d'embûches.
                            <br />
                            <br />
                            Le coaching bienveillant peut être la clé pour <strong>atteindre vos objectifs</strong> de manière <strong>saine et durable</strong>.
                            <br />
                            <br />
                            Une <strong>approche saine et positive</strong> qui respecte vos besoins et votre rythme.
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <a target="_blank" rel="nofollow" href="https://calendly.com/unpasdeplus-coaching56/30min" className="main-btn gradient-btn focus:outline-none uppercase">
                        Je prends contact pour appel découverte (Calendly)
                    </a>
                </div>
            </div>
        </section>
    )
}