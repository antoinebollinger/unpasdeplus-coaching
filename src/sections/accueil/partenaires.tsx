'use client'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useEffect } from 'react'
import Image from 'next/image'
import { reveal } from '../../utils/reveal'
import LesPremieresBretagne from '/public/images/partenaires/les-premieres-bretagne.png'

export default function Partenaires({ className = 'bg-gray-100' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll('#partenaires .service'),
            classesToRemove: ['opacity-0', 'translate-y-1/4']
        })
    }, [])

    return (
        <section id="partenaires" className={className}>
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
                            )
                        ].map((e, i) => (
                            <div className="rounded-xl shadow-xl bg-white p-4 w-full lg:w-1/3 flex flex-col lg:flex-row gap-6 justify-center transtion duration-200 opacity-0 translate-y-1/4 service" key={i}>{e}</div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}