'use client';
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { reveal } from '../../utils/reveal'
import IntroImg from '/public/images/entreprises/intro.webp'

export default function Intro({ className = '' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: Array.from(document.querySelectorAll('.entreprises-img')),
            classesToRemove: ['scale-0']
        })
    }, [])

    return (
        <section id="introduction" className={className}>
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-2/3 lg:w-1/3 text-center">
                        <Image
                            src={IntroImg}
                            alt="Intro entreprises"
                            height="250"
                            className="rounded-full mx-auto transition duration-200 scale-0 entreprises-img"
                        />
                    </div>
                    <div className="w-full lg:w-2/3">
                        <p className="text-lg leading-6 mb-6">
                            Prendre soin de la santé physique et mentale de vos collaborateurs, c'est être attentif à la qualité de vie au travail et renforcer de meilleures conditions de travail.
                            <br />
                            <br />
                            Mon accompagnement agit sur le bien-être des parents pour permettre de concilier sereinement parentalité/travail et défis quotidiens personnels et professionnels.
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <Link href="/contact">
                        <button type="submit" className="main-btn gradient-btn focus:outline-none uppercase">Me contacter pour en savoir plus</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}