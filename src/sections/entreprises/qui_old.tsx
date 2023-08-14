'use client';
import { useEffect } from 'react'
import Image from 'next/image'
import { reveal } from '../../utils/reveal'
import Qui1 from '/public/images/entreprises/qui-1.webp'
import Qui2 from '/public/images/entreprises/qui-2.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

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
        reveal({
            collection: Array.from(document.querySelectorAll('.apports-text')),
            classesToRemove: ['translate-x-3/4', 'scale-0', 'opacity-0'],
            classesToAdd: ['translate-x-0'],
        })
    }, [])

    const liste = [
        [
            '78%',
            'des salariées mères rencontrent des <strong>difficultés à conciler vie professionnelle et familiale</strong>'
        ],
        [
            '68%',
            'des mères se disent <strong>physiquement fatiguées</strong>'
        ],
        [
            '1 / 2',
            '<strong>1 salarié sur 2</strong> se dit <strong>épuisé</strong>'
        ],
        [
            '83%',
            'des salariés parents ont le sentiment de <strong>manquer de temps au quotidien</strong>'
        ]
    ]

    return (
        <section id="qui" className={className}>
            <div className="container">
                <h3>Pourquoi accompagner vos salarié.es parents ?</h3>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-full md:w-1/2 order-last md:order-first">
                        <p className="text-lg leading-6 mb-6">
                            <strong>Un salarié heureux et en forme</strong> est un salarié <strong>performant et engagé</strong>. Selon une étude du Harvard/MIT :
                        </p>
                        <div className="flex justify-center align-center">
                            <ul className="list-none list-inside fa-ul text-lg leading-8 mb-6">
                                <li className="opacity-0">
                                    <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                    <span className="text-2xl font-bold text-tertary-900">31%</span> plus productif
                                </li>
                                <li className="opacity-0">
                                    <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                    <span className="text-2xl font-bold text-tertary-900">2 x</span> moins malade
                                </li>
                                <li className="opacity-0">
                                    <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                    <span className="text-2xl font-bold text-tertary-900">6 x</span> moins absent
                                </li>
                                <li className="opacity-0">
                                    <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                    <span className="text-2xl font-bold text-tertary-900">2 x</span> plus loyal
                                </li>
                                <li className="opacity-0">
                                    <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                    <span className="text-2xl font-bold text-tertary-900">55%</span> plus créatif
                                </li>
                                <li className="opacity-0">
                                    <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                    <span className="text-2xl font-bold text-tertary-900">7,9%</span> plus productif en moyenne avec <strong>la pratique du sport</strong>
                                </li>
                            </ul>
                        </div>
                        {/* <p className="text-lg leading-6 mb-6">
                            <strong>Un salarié en forme est plus productif</strong> :
                        </p>
                        <div className="flex justify-center align-center">
                            <ul className="list-none list-inside fa-ul text-lg leading-8 mb-6">
                                <li className="opacity-0">
                                    <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                    <span className="text-2xl font-bold text-tertary-900">7,9%</span> plus productif en moyenne avec <strong>la pratique du sport</strong>
                                </li>
                            </ul>
                        </div> */}
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

                <div className="w-full lg:w-2/3 mx-auto">

                    {liste.map(ele => {
                        return (
                            <div className="flex flex-col gap-6 justify-center items-center mb-10">
                                <div className="transition duration-300 opacity-0 scale-0 apports-text">
                                    <div className="w-[100px] h-[100px] rounded-full bg-secondary-100 flex justify-center items-center">
                                        <p className="text-4xl text-primary-600 font-bold">{ele[0]}</p>
                                    </div>
                                </div>
                                <div className="grow transition duration-300 opacity-0 translate-x-3/4 apports-text">
                                    <p className="text-2xl text-gray-900" dangerouslySetInnerHTML={{ __html: ele[1] }} />
                                </div>
                            </div>
                        )
                    })

                    }
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
                        <ul className="list-none list-inside fa-ul text-lg leading-8">
                            <li className="opacity-0">
                                <span className="fa-li text-red-600"><FontAwesomeIcon icon={faXmark} /></span>
                                <strong>78%</strong> des salariées mères rencontrent des <strong>difficultés à conciler vie professionnelle et familiale</strong>
                            </li>
                            <li className="opacity-0">
                                <span className="fa-li text-red-600"><FontAwesomeIcon icon={faXmark} /></span>
                                <strong>68%</strong> des mères se disent <strong>physiquement fatiguées</strong>
                            </li>
                            <li className="opacity-0">
                                <span className="fa-li text-red-600"><FontAwesomeIcon icon={faXmark} /></span>
                                <strong>1 salarié sur 2</strong> se dit <strong>épuisé</strong>
                            </li>
                            <li className="opacity-0">
                                <span className="fa-li text-red-600"><FontAwesomeIcon icon={faXmark} /></span>
                                <strong>83%</strong> des salariés parents ont le sentiment de <strong>manquer de temps au quotidien</strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}