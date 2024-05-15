'use client'
import { useEffect } from 'react'
import { reveal } from '../../utils/reveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Qui({ className = 'bg-gray-100' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll('.qui-transition, #quoi li, .apports-text, #quoi .text, #quoi h2'),
            classesToRemove: ['translate-y-full', 'scale-0', 'opacity-0']
        })
        reveal({
            collection: document.querySelectorAll('.progression'),
            classesToRemove: ['h-0', 'lg:w-0'],
            classesToAdd: ['h-full', 'lg:w-full'],
        })
    }, [])

    return (
        <section id="quoi" className={className}>
            <div className="container">
                <div className="w-full lg:w-2/3 mx-auto flex flex-col gap-6">
                    <p className="h1">Travail et parentalité, un défi au quotidien</p>
                    <div>
                        <h2 className="transition duration-200 opacity-0">
                            Comprendre les enjeux de l'équilibre vie pro perso pour les salariés-parents
                        </h2>
                        <p className="text-lg leading-6 transition duration-200 opacity-0 translate-y-full text">
                            Avant de mettre en place des initiatives, il est essentiel de comprendre les <strong>défis</strong> auxquels sont confrontés les parents dans leur <strong>quête d'équilibre</strong>. Des horaires de travail rigides, des responsabilités familiales et la pression quotidienne peuvent entraîner <strong>stress</strong>, <strong>anxiété</strong>, <strong>charge mentale</strong> et compromettre le bien-être global des salariés.
                            <br />
                            <br />
                            Aujourd'hui, les salariés-parents recherchent plus de <strong>flexibilité d'organisation</strong> pour <strong>mieux concilier vie pro perso</strong>. Des conditions de travail, une qualité de vie au travail où l'on prend en compte les <strong>responsabilités familiales</strong>, les <strong>contraintes et les imprévus</strong> d'un salarié parent.
                            <br />
                            <br />
                            Réussir à tout jongler&nbsp;: s'occuper de ses enfants, être performant au travail, prendre du temps pour soi est un jeu d'équilibriste. Difficile parfois de trouver un <strong>équilibre de vie</strong> face à une <strong>charge mentale importante</strong> qu'incombe d'être à la fois parent et salarié.
                            <br />
                            <br />
                            Ces <strong>défis personnels et défis professionnels</strong> ont des répercussions sur la <strong>santé physique et mentale</strong> des salariés. Charge mentale importante, fatigue physique et mentale jusqu'à un état d'épuisement mental et physique peuvent être sources de <strong>risques psychosociaux</strong> au travail.
                        </p>
                    </div>
                    <div>
                        <h2>
                            Des risques psychosociaux liés à la parentalité qui ont de lourdes conséquences pour l'entreprise
                        </h2>
                        <div className="relative flex flex-col lg:flex-row gap-6 justify-center items-center">
                            <div className="absolute z-[-1] inset-0 px-[calc(50%-2px)] lg:px-[calc(20%/2)] flex lg:items-center">
                                <div className="w-[4px] h-0 lg:w-0 lg:h-[4px] bg-primary-700 rounded transition-all duration-2500 progression"></div>
                            </div>
                            {
                                [
                                    "Absentéisme",
                                    "Dégradation<br/>de la<br/>productivité",
                                    "Démotivation<br/>des équipes",
                                    "Turn over",
                                    "Atteinte<br/>de l'image de<br/>l'entreprise"
                                ].map((e, i) => (
                                    <div className={`w-1/2 lg:w-1/5 relatif flex justify-center items-center rounded-full shadow-lg bg-primary-100 ratio1 transition duration-200 scale-0 opacity-0 consequence`} key={i}>
                                        <p className="absolute text-lg text-center leading-6 font-bold" dangerouslySetInnerHTML={{ __html: e }}>
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                        <p className="text-xl leading-8">
                            Pourtant...
                        </p>
                        <h2>
                            Un salarié heureux est un salarié plus performant au travail
                        </h2>
                        <p>
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
                    </div>
                </div>
            </div>
        </section >
    )
}