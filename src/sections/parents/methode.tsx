'use client';
import { useEffect } from 'react'
import { reveal } from '../../utils/reveal'

export default function Methode({ className = 'bg-gray-100' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll('.single-step'),
            classesToRemove: ['opacity-0', 'translate-y-3/4']
        })
        reveal({
            collection: document.querySelectorAll('.about-img'),
            classesToRemove: ['scale-0']
        })

        reveal({
            collection: document.querySelectorAll('.step'),
            classesToRemove: ['scale-0', 'opacity-0'],
        })
        reveal({
            collection: document.querySelectorAll('.progression'),
            classesToRemove: ['h-0', 'lg:w-0'],
            classesToAdd: ['h-full', 'lg:w-full'],
            delayIncrement: 0
        })
    }, [])

    return (
        <section id="methode" className={className}>
            <div className="container">
                <div className="w-full lg:w-2/3 mx-auto flex flex-col gap-6">

                    <h3 className="h1">Ma méthode</h3>
                    <p className="text-lg leading-6">
                        L'accompagnement repose sur une <strong>écoute active</strong>, un <strong>questionnement pertinent</strong> et des <strong>outils & méthodes de coaching</strong>, dans un cadre confidentiel et bienveillant. J'utilise également <strong>l'activité physique</strong> comme outil d'accompagnement.
                    </p>
                    <h4 className="h2">Les 4 étapes clés du parcours d'accompagnement&nbsp;:</h4>
                    <div className="relative flex flex-col lg:flex-row gap-6 justify-center items-center">
                        <div className="absolute z-[0] inset-0 px-[calc(50%-2px)] lg:px-[calc(20%/2)] flex lg:items-center">
                            <div className="w-[4px] h-0 lg:w-0 lg:h-[4px] bg-tertary-700 rounded transition-all duration-2500 progression"></div>
                        </div>
                        {
                            [
                                "<strong>Accueillir</strong><br/>votre demande",
                                "<strong>Nourrir</strong><br/>la motivation",
                                "<strong>Activer</strong><br/>les leviers du<br/>bien-être<br/>physique et<br/>mental",
                                "<strong>Développer<br/>et entretenir</strong><br/>un état d'esprit<br/>vers le<br/>mieux-être"
                            ].map((e, i) => (
                                <div className={`w-1/2 lg:w-1/4 z-[1] relatif flex justify-center items-center rounded-full shadow-lg bg-tertary-200 ratio1 transition duration-200 scale-0 opacity-0 step`} key={i}>
                                    <p className="absolute lg:text-xl text-center leading-6" dangerouslySetInnerHTML={{ __html: e }}>
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}