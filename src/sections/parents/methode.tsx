'use client';
import { useEffect } from 'react'
import Image from 'next/image'
import { reveal } from '../../utils/reveal'
import Map from '/public/images/parents/map.webp'

export default function Methode({ className = 'bg-gray-100' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: Array.from(document.querySelectorAll('.single-step')),
            classesToRemove: ['opacity-0', 'translate-y-3/4']
        })

        reveal({
            collection: Array.from(document.querySelectorAll('.about-img')),
            classesToRemove: ['scale-0']
        })
    }, [])

    const mySteps = (title, text) => {
        return (
            <div className="single-step transition opacity-0 translate-y-3/4">
                <h5>{title}</h5>
                <p dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        );
    }

    return (
        <section id="methode" className={className}>
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                    <div className="w-full lg:w-2/3">
                        <div className="flex flex-col gap-6">
                            <h3 className="lg:text-center">Ma méthode</h3>
                            <p className="text-lg leading-6 mb-6">
                                L'accompagnement repose sur une <strong>écoute active</strong>, un <strong>questionnement pertinent</strong> et des <strong>outils & méthodes de coaching</strong>, dans un cadre confidentiel et bienveillant. J'utilise également <strong>le sport</strong> comme outil d'accompagnement.
                            </p>
                            <h4 className="text-center">Les 4 étapes clés du parcours d'accompagnement :</h4>

                            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                                <div className="w-1/2 md:w-1/2 transition duration-200 scale-0 about-img">
                                    <Image
                                        src={Map}
                                        width={300}
                                        className="rounded-full mx-auto"
                                        alt="Les étapes du parcours"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col gap-5">
                                    {mySteps(
                                        "Accueillir",
                                        "votre demande"
                                    )}
                                    {mySteps(
                                        "Nourrir",
                                        "la motivation"
                                    )}
                                    {mySteps(
                                        "Activer",
                                        "les leviers du bien-être physique et mental"
                                    )}
                                    {mySteps(
                                        "Développer et entretenir",
                                        "un état d'esprit vers le mieux-être"
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}