'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { reveal } from '../../utils/reveal'
import SalarieeHeureuse from '/public/images/entreprises/salariee_heureuse.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Qui({ className = 'bg-gray-100' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll('.qui-transition, #pourquoi li, .apports-text'),
            classesToRemove: ['translate-y-full', 'scale-0', 'opacity-0']
        })
    }, [])

    return (
        <section id="pourquoi" className={className}>
            <div className="container">
                <div className="w-full mx-auto">
                    <h2>Pourquoi accompagner<br />vos salarié.es parents&nbsp;?</h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                        <div className="w-full md:w-3/4 order-last md:order-first">
                            <p className="text-lg leading-6 mb-6">
                                <strong>Un salarié heureux</strong> est un salarié <strong>performant et engagé</strong>. Selon une étude du Harvard/MIT&nbsp;:
                            </p>
                            <div className="flex justify-center align-center">
                                <ul className="list-none list-inside fa-ul text-lg leading-8 mb-6">
                                    {
                                        [
                                            (<>
                                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                                <span className="text-2xl font-bold text-tertary-900">31%</span> plus productif
                                            </>),
                                            (<>
                                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                                <span className="text-2xl font-bold text-tertary-900">2 x</span> moins malade
                                            </>),
                                            (<>
                                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                                <span className="text-2xl font-bold text-tertary-900">6 x</span> moins absent
                                            </>),
                                            (<>
                                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                                <span className="text-2xl font-bold text-tertary-900">2 x</span> plus loyal
                                            </>),
                                            (<>
                                                <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                                <span className="text-2xl font-bold text-tertary-900">55%</span> plus créatif
                                            </>)
                                        ].map((e, i) => (
                                            <li className="transition duration-200 opacity-0" key={i}>{e}</li>
                                        ))
                                    }

                                </ul>
                            </div>
                            <p className="text-lg leading-6 mb-6">
                                Et <strong>un salarié en forme</strong>&nbsp;:
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
                        <div className="w-full md:w-1/4 mx-auto transition duration-200 scale-0 opacity-0 qui-img">
                            <Image
                                src={SalarieeHeureuse}
                                width={SalarieeHeureuse.width}
                                height={SalarieeHeureuse.height}
                                className="w-full rounded-full"
                                alt="Parents en difficulté"
                            />
                        </div>
                    </div>
                    <h2>Pourtant...</h2>
                    <div>
                        {[
                            [
                                '78%',
                                'des salariées mères rencontrent des <strong>difficultés à concilier vie professionnelle et familiale</strong>'
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
                                'des salarié.es parents ont le sentiment de <strong>manquer de temps au quotidien</strong>'
                            ]
                        ].map((e, i) => {
                            return (
                                <div className="flex flex-col gap-6 justify-center items-center mb-10" key={i}>
                                    <div className="transition duration-200 opacity-0 scale-0 apports-text">
                                        <div className="w-[100px] h-[100px] rounded-full shadow-lg bg-secondary-100 flex justify-center items-center">
                                            <p className="text-4xl text-primary-600 font-bold">{e[0]}</p>
                                        </div>
                                    </div>
                                    <div className="w-full grow transition duration-200 opacity-0 translate-y-full apports-text">
                                        <p className="text-2xl text-gray-900 lg:text-center" dangerouslySetInnerHTML={{ __html: e[1] }} />
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