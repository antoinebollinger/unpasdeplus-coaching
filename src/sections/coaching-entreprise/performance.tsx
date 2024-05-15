'use client'
import { useEffect } from 'react'
import { reveal } from '../../utils/reveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Performance({ className = 'bg-gray-100' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll('#performance .transition'),
            classesToRemove: ['opacity-0', 'translate-y-full']
        })
    }, [])

    return (
        <section id="performance" className={className}>
            <div className="container">
                <div className="w-full lg:w-2/3 mx-auto flex flex-col gap-6">
                    <p className="h1">Bien-être et performance au travail</p>
                    <div className="flex flex-col gap-6">
                        <h2>
                            Un salarié heureux est un salarié plus performant au travail
                        </h2>
                        <p className="text-lg leading-6 transition duration-200 opacity-0 translate-y-full">
                            Selon une étude du Harvard/MIT&nbsp;:
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
                        <h2>
                            Soutenir la parentalité et la qualité de vie au travail
                        </h2>
                        <p className="text-lg leading-6 transition duration-200 opacity-0 translate-y-full">
                            Engager une politique RH inclusive en faveur de la parentalité en entreprise, c'est permettre aux salariés de s'épanouir professionnellement et être attentif à leur <strong>santé physique et mentale</strong>. C'est aussi <strong>préserver la propre performance de l'entreprise</strong>.
                        </p>
                        <p className="text-xl font-bold leading-6 transition duration-200 opacity-0 translate-y-full">
                            Les collaborateurs se sentent compris à 91% et ont envie de rester à 81%.
                        </p>
                    </div>
                </div>
            </div>
        </section >
    )
}