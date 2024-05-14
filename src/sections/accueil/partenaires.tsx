'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { reveal } from '../../utils/reveal'
import LesPremieresBretagne from '/public/images/partenaires/les-premieres-bretagne.png'
import FemmesDeBretagne from '/public/images/partenaires/femmes-de-bretagne.jpg'

export default function Partenaires({ className = '' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll('#mes-partenaires .partenaire'),
            classesToRemove: ['opacity-0', 'translate-y-1/4']
        })
    }, [])

    return (
        <section id="mes-partenaires" className={className}>
            <div className="container">
                <div className="text-center pb-10">
                    <h3 className="h1">Mes partenaires</h3>
                </div>
                <div className="w-full lg:w-2/3 mx-auto flex flex-col lg:flex-row gap-16 justify-center items-stretch">
                    {
                        [
                            (
                                <>
                                    <a target="_blank" rel="nofollow" href="https://lespremieresbretagne.com/" className="w-2/3">
                                        <Image
                                            src={LesPremieresBretagne}
                                            alt="Les Premières Bretagne"
                                        />
                                    </a>
                                </>
                            ),
                            (
                                <>
                                    <a target="_blank" rel="nofollow" href="http://www.femmesdebretagne.fr/" className="w-full">
                                        <Image
                                            src={FemmesDeBretagne}
                                            alt="Femmes de Bretage"
                                        />
                                    </a>
                                </>
                            )
                        ].map((e, i) => (
                            <div className="rounded-xl shadow-xl bg-white p-4 w-full lg:w-1/3 flex flex-col lg:flex-row gap-6 justify-center items-center transtion duration-200 opacity-0 translate-y-1/4 partenaire" key={i}>{e}</div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}