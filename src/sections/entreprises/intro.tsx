'use client'
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
                    <div className="w-2/3 lg:w-1/4 lg:order-1">
                        <Image
                            src={IntroImg}
                            alt="Intro entreprises"
                            className="w-full rounded-full mx-auto transition duration-200 scale-0 entreprises-img"
                        />
                    </div>
                    <div className="w-full lg:w-3/4 lg:order-0">
                        <h3>Soutenir vos salarié.es,<br />c'est créer la différence</h3>
                        <br />
                        <p className="text-lg leading-6 mb-6">
                            Prendre soin de la <strong>santé physique et mentale de vos collaborateurs</strong>, c'est être attentif à la <strong>qualité de vie au travail</strong> et renforcer de meilleures conditions de travail.
                            <br />
                            <br />
                            Mon accompagnement agit sur le <strong>bien-être des parents</strong> pour permettre de <strong>concilier sereinement parentalité/travail</strong> et défis quotidiens personnels et professionnels.
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <Link href="/contact" className="main-btn gradient-btn focus:outline-none uppercase">
                        Me contacter pour en savoir plus
                    </Link>
                </div>
            </div>
        </section>
    )
}