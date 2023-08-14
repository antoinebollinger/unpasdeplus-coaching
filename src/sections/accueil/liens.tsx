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
            collection: Array.from(document.querySelectorAll('.liens-img')),
            classesToRemove: ['scale-0']
        })
    }, [])

    return (
        <section className={className}>
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
                            Fondatrice UN PAS DE PLUS
                        </p>
                        <Link href="/qui-je-suis" className="mx-auto">
                            <button type="submit" className="main-btn gradient-btn focus:outline-none uppercase">Qui je suis</button>
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
                            Vous manquez de temps pour prendre soin de vous ? Vous avez essayé des choses mais face au quotidien, à vos responsabilités professionnelles et personnelles, vous baissez les bras ?
                            <br />
                            <br />
                            Avez-vous pensé à vous interroger sur vos motivations intrinsèques ?
                        </p>
                        <Link href="/accompagnement-parents" className="mx-auto">
                            <button type="submit" className="main-btn gradient-btn focus:outline-none uppercase">En savoir plus</button>
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
                            <strong>Accompagnement entreprise</strong>
                        </p>
                        <p className="text-lg text-start grow">
                            Vous souhaitez accompagner activement vos salariés-parents pour les aider à mieux concilier vie pro vie perso pour limiter les impacts sur l’entreprise liés à la parentalité, à leur transition de vie ?
                            <br />
                            <br />
                            Avez-vous mis en place un dispositif pour renforcer une politique RH inclusive autour de la parentalité ?
                        </p>
                        <Link href="/accompagnement-entreprises" className="mx-auto">
                            <button type="submit" className="main-btn gradient-btn focus:outline-none uppercase">En savoir plus</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}