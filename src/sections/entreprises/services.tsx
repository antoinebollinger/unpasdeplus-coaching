'use client'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useEffect } from 'react'
import { reveal } from '../../utils/reveal'

export default function Services({ className = 'bg-gray-100' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll('#services .service'),
            classesToRemove: ['opacity-0', 'translate-y-full']
        })
    }, [])

    return (
        <section id="services" className={className}>
            <div className="container">
                <div className="text-center pb-10">
                    <h3>Mes services</h3>
                </div>
                <div className="w-full lg:w-2/3 mx-auto flex flex-col lg:flex-row gap-16 justify-center items-stretch">
                    {
                        [
                            (
                                <>
                                    <h4 className="text-center">
                                        Accompagner<br />et soutenir<br /><span className="font-black uppercase">vos salarié.es</span>
                                    </h4>
                                    <ul className="list-none list-inside fa-ul text-lg leading-8 grow">
                                        <li>
                                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>Changement de vie
                                        </li>
                                        <li>
                                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>Retour au travail après un congé maternité/paternité
                                        </li>
                                        <li>
                                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>Retour au travail après une absence de longue durée
                                        </li>
                                        <li>
                                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>Charge mentale importante
                                        </li>
                                    </ul>
                                    <Link href="/contact" className="main-btn gradient-btn focus:outline-none uppercase mx-auto">
                                        En savoir plus
                                    </Link>
                                </>
                            ),
                            (
                                <>
                                    <h4 className="text-center">
                                        Sensibiliser<br />et accompagner les<br /><span className="font-black uppercase">managers & RH</span>
                                    </h4>
                                    <ul className="list-none list-inside fa-ul text-lg leading-8 grow">
                                        <li>
                                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>Dispositif sur la qualité de vie au travail
                                        </li>
                                        <li>
                                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>Parentalité en entreprise
                                        </li>
                                    </ul>
                                    <Link href="/contact" className="main-btn gradient-btn focus:outline-none uppercase mx-auto">
                                        En savoir plus
                                    </Link>
                                </>
                            )
                        ].map((e, i) => (
                            <div className="rounded-xl shadow-xl bg-secondary-100 p-4 w-full lg:w-1/2 flex flex-col gap-6 transtion duration-200 opacity-0 translate-y-full service" key={i}>{e}</div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}