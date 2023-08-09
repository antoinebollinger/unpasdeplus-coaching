'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { reveal } from '../../utils/reveal'
import Pratique1 from '/public/images/parents/1.webp'
import Pratique2 from '/public/images/parents/2.webp'
import Pratique3 from '/public/images/parents/3.webp'
import Pratique4 from '/public/images/parents/4.webp'

export default function Pratique() {
    useEffect(() => {
        reveal({
            collection: Array.from(document.querySelectorAll('.career-step')),
            classesToRemove: ['translate-x-3/4', 'scale-0', 'opacity-0'],
            classesToAdd: ['translate-x-0'],
        })
    }, [])

    const list = (img, text: string) => {
        return (
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                <div className="w-1/2 md:w-1/5 mx-auto transition duration-300 opacity-0 scale-0 career-step">
                    <Image
                        src={img}
                        width={150}
                        className="mx-auto rounded-full"
                        alt="Illustration"
                    />
                </div>
                <div className="w-full md:w-3/4 transition duration-300 opacity-0 translate-x-3/4 career-step">
                    <p className="text-lg text-gray-900" dangerouslySetInnerHTML={{ __html: text }} />
                </div>
            </div>
        )
    }

    return (
        <section id="mon-parcours">
            <div className="container">
                <div className="text-center pb-10">
                    <h3>En pratique, ça donne quoi ?</h3>
                </div>
                <div className="lg:max-w-5xl mx-auto mb-16">
                    {list(
                        Pratique1,
                        "Séances en présentiel et/u distanciel à Vannes et ses alentours. Durée de 1h/1h30 la séance à 10/15 jours d'intervalle"
                    )}
                    {list(
                        Pratique2,
                        "Des exercices de développements personnels entre les séances pour continuer à vous développer."
                    )}
                    {list(
                        Pratique3,
                        "Echanges Whatsapp pour garder la dynamique et vous inspirer."
                    )}
                    {list(
                        Pratique4,
                        "Bilan à mi-parcours pour évaluer le chemin parcouru. Bilan pour clôturer l'accompagnement."
                    )}
                </div>
                <div className="text-center">
                    <Link href="/contact">
                        <button type="submit" className="main-btn gradient-btn focus:outline-none uppercase">Je prends contact pour en savoir plus</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}