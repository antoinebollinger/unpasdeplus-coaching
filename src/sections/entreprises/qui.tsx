'use client'
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
            collection: Array.from(document.querySelectorAll('#pourquoi li')),
            classesToRemove: ['opacity-0'],
            delayIncrement: 50
        })
        reveal({
            collection: Array.from(document.querySelectorAll('.apports-text')),
            classesToRemove: ['translate-y-full', 'scale-0', 'opacity-0'],
            classesToAdd: ['translate-y-0'],
        })
    }, [])

    return (
        <section id="pourquoi" className={className}>
            <div className="container">
                <div className="w-full mx-auto">
                    <h3>Pourquoi accompagner<br />vos salarié.es parents ?</h3>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                        <div className="w-full md:w-2/3 order-last md:order-first">
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
                                </ul>
                            </div>
                            <p className="text-lg leading-6 mb-6">
                                Et <strong>un salarié en forme</strong> :
                            </p>
                            <div className="flex justify-center align-center">
                                <ul className="list-none list-inside fa-ul text-lg leading-8 mb-6">
                                    <li className="opacity-0">
                                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                        <span className="text-2xl font-bold text-tertary-900">7,9%</span> plus productif en moyenne avec <strong>la pratique du sport</strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 mx-auto transition duration-200 scale-0 opacity-0 qui-img">
                            <Image
                                src={Qui2}
                                width={Qui2.width}
                                height={Qui2.height}
                                className="w-full"
                                alt="Parents en difficulté"
                            />
                        </div>
                    </div>
                    <h3>Pourtant...</h3>
                    <div>
                        {[
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
                                '<strong>salarié</strong> se dit <strong>épuisé</strong>'
                            ],
                            [
                                '83%',
                                'des salariés parents ont le sentiment de <strong>manquer de temps au quotidien</strong>'
                            ]
                        ].map((e, i) => {
                            return (
                                <div className="flex flex-col gap-6 justify-center items-center mb-10" key={i}>
                                    <div className="transition duration-300 opacity-0 scale-0 apports-text">
                                        <div className="w-[100px] h-[100px] rounded-full bg-secondary-100 flex justify-center items-center">
                                            <p className="text-4xl text-primary-600 font-bold">{e[0]}</p>
                                        </div>
                                    </div>
                                    <div className="grow transition duration-300 opacity-0 translate-y-full apports-text">
                                        <p className="text-2xl text-gray-900" dangerouslySetInnerHTML={{ __html: e[1] }} />
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}