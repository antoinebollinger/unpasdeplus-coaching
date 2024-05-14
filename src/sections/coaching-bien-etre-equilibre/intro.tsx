'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { reveal } from '../../utils/reveal'
import IntroImg from '/public/images/coaching-bien-etre-equilibre/intro.jpg'

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
                        <h1>Retrouver équilibre et bien-être au quotidien</h1>
                        <br />
                        <p className="text-lg leading-6 mb-6">
                            Le coaching bien-être et équilibre vous accompagne à prendre soin de vous et à trouver un équilibre <strong>physique, mental et émotionnel</strong>.
                            <br />
                            <br />
                            Vous souhaitez vous sentir mieux au quotidien ? Mais vous manquez de temps pour <strong>prendre soin de vous</strong> et vous avez besoin d'un soutien permanent pour <strong>rester motivé.e</strong> durant la durée du coaching ?
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