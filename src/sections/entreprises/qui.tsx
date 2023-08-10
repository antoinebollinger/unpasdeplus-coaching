'use client';
import { useEffect } from 'react'
import Image from 'next/image'
import { reveal } from '../../utils/reveal'
import Qui1 from '/public/images/entreprises/qui-1.webp'
import Qui2 from '/public/images/entreprises/qui-2.webp'

export default function Qui({ className = 'bg-gray-100' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: Array.from(document.querySelectorAll('.qui-img')),
            classesToRemove: ['scale-0', 'opacity-0']
        })
        reveal({
            collection: Array.from(document.querySelectorAll('#qui li')),
            classesToRemove: ['opacity-0'],
            delayIncrement: 50
        })
    }, [])

    return (
        <section id="qui" className={className}>
            <div className="container">
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-full md:w-1/2 order-last md:order-first">
                        <p className="text-lg leading-6 mb-6">
                            <strong>Un salarié heureux</strong> est un salarié <strong>performant et engagé</strong>. Selon une étude du Harvad/MIT :
                        </p>
                        <ul className="list-check text-lg leading-8 mb-6">
                            <li className="opacity-0">
                                <strong>31%</strong> plus productif
                            </li>
                            <li className="opacity-0">
                                <strong>2 x</strong> moins malade
                            </li>
                            <li className="opacity-0">
                                <strong>6 x</strong> moins absent
                            </li>
                            <li className="opacity-0">
                                <strong>2 x</strong> plus loyal
                            </li>
                            <li className="opacity-0">
                                <strong>55%</strong> plus créatif
                            </li>
                        </ul>
                        <p className="text-lg leading-6 mb-6">
                            <strong>Un salarié en forme est plus productif</strong> : 7,9% plus productif en moyenne avec la pratique du sport.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 mx-auto transition duration-200 scale-0 opacity-0 qui-img">
                        <Image
                            src={Qui2}
                            width={Qui2.width}
                            height={Qui2.height}
                            className="w-full"
                            alt="Parents en difficulté"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-full md:w-1/2 mx-auto transition duration-200 scale-0 opacity-0 qui-img">
                        <Image
                            src={Qui1}
                            width={Qui1.width}
                            height={Qui1.height}
                            className="w-full"
                            alt="Parents zen"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <p className="text-lg leading-6 mb-6">
                            Pourtant...
                        </p>
                        <ul className="list-mark text-lg leading-8">
                            <li className="opacity-0">
                                <strong>78%</strong> des salariées mères rencontrent des <strong>difficultés à conciler vie professionnelle et familiale</strong>
                            </li>
                            <li className="opacity-0">
                                <strong>68%</strong> des mères se disent <strong>physiquement fatiguées</strong>
                            </li>
                            <li className="opacity-0">
                                <strong>1 salarié sur 2</strong> se dit <strong>épuisé</strong>
                            </li>
                            <li className="opacity-0">
                                <strong>83%</strong> des salariés parents ont le sentiment de <strong>manquer de temps au quotidien</strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}