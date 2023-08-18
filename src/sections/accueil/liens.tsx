'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { reveal } from '../../utils/reveal'
import Sabrina from '/public/images/sabrina.webp'
import Parents from '/public/images/parents/parents.webp'
import Entreprise from '/public/images/entreprises/entreprises.webp'

export default function Liens({ className = 'bg-gray-100' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll('.liens-img'),
            classesToRemove: ['scale-0']
        })
    }, [])

    return (
        <div className={`py-120 ${className}`}>
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-16 justify-center items-stretch">
                    <div className="w-full lg:w-1/3 flex flex-col gap-6">
                        <Image
                            src={Sabrina}
                            width={200}
                            className="mx-auto rounded-full transition duration-200 scale-0 liens-img"
                            alt="Sabrina Appriou"
                        />
                        <p className="text-lg text-center">
                            <strong>Sabrina Appriou</strong>
                        </p>
                        <p className="text-lg text-center grow">
                            Fondatrice Un pas de plus
                        </p>
                        <Link href="/qui-je-suis" className="main-btn gradient-btn focus:outline-none uppercase mx-auto">
                            Qui je suis
                        </Link>
                    </div>
                    <div className="w-full lg:w-1/3 flex flex-col gap-6">
                        <Image
                            src={Parents}
                            width={200}
                            className="mx-auto rounded-full transition duration-200 scale-0 liens-img"
                            alt="Accompagnement parents"
                        />
                        <p className="text-lg text-center">
                            <strong>Accompagnement parents</strong>
                        </p>
                        <p className="text-lg text-start grow">
                            <strong>Vous manquez de temps</strong> pour prendre soin de vous&nbsp;? Vous avez essayé des choses mais face au quotidien, à vos responsabilités professionnelles et personnelles, <strong>vous baissez les bras&nbsp;?</strong>
                            <br />
                            <br />
                            Avez-vous pensé à vous interroger sur vos <strong>motivations intrinsèques</strong>, celles qui se manifestent par un réel engagement et une persévérance dans vos actions&nbsp;?
                        </p>
                        <Link href="/accompagnement-parents" className="main-btn gradient-btn focus:outline-none uppercase mx-auto">
                            En savoir plus
                        </Link>
                    </div>
                    <div className="w-full lg:w-1/3 flex flex-col gap-6">
                        <Image
                            src={Entreprise}
                            width={200}
                            className="mx-auto rounded-full transition duration-200 scale-0 liens-img"
                            alt="Accompagnement entreprises"
                        />
                        <p className="text-lg text-center">
                            <strong>Accompagnement entreprises</strong>
                        </p>
                        <p className="text-lg text-start grow">
                            Vous souhaitez accompagner activement vos salarié.es-parents pour les aider à mieux concilier vie pro vie perso pour limiter les <strong>impacts</strong> sur <strong>l’entreprise</strong> liés à la <strong>parentalité</strong>, à leur transition de vie&nbsp;?
                            <br />
                            <br />
                            Avez-vous mis en place un dispositif pour renforcer une politique RH inclusive autour de la parentalité&nbsp;?
                        </p>
                        <Link href="/accompagnement-entreprises" className="main-btn gradient-btn focus:outline-none uppercase mx-auto">
                            En savoir plus
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}