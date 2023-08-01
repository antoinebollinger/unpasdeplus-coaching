'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { reveal } from '../utils/reveal'
import StepsImg from '/public/images/map.webp'

export default function Steps() {
    useEffect(() => {
        reveal({
            collection: Array.from(document.querySelectorAll('.single-step')),
            classesToRemove: ['opacity-0', 'translate-y-3/4']
        });

        reveal({
            collection: Array.from(document.querySelectorAll('.about-img')),
            classesToRemove: ['scale-0']
        });
    }, []);

    const mySteps = (
        title, text
    ) => {
        return (
            <div className="single-step transition opacity-0 translate-y-3/4">
                <p className="text-3xl text-gray-800 font-bold leading-none mb-3">
                    {title}
                </p>
                <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        );
    }

    return (
        <section id="steps" className="bg-gray-100">
            <div className="container">
                <div className="text-center pb-10">
                    <h4 className="title">Les 5 étapes-clés du parcours d'accompagement</h4>
                </div>
                <div className="lg:max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <div className="w-1/2 md:w-1/2 mx-auto transition duration-200 scale-0 about-img">
                            <Image
                                src={StepsImg}
                                className="w-full rounded-full"
                                alt="Les étapes du parcours"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-5">
                            {mySteps(
                                "1. Introspection",
                                "On part de vous ! Comprendre son fonctionnement, ses schémas de pensées, ses freins actuels, ses blocages."
                            )}
                            {mySteps(
                                "2. Exploration",
                                "Clarifier l'objectif aligné à votre identité, votre personnalité."
                            )}
                            {mySteps(
                                "3. Validation",
                                "On valide ensemble votre objectif."
                            )}
                            {mySteps(
                                "4. Plan d'action",
                                "On met en place un plan d'action pour un accompagnement vers la mise en mouvement."
                            )}
                            {mySteps(
                                "5. Autonomie",
                                "Développer son mindset, un état d'esprit vers le mieux-être pour voir l'avenir en toute sérénité."
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}