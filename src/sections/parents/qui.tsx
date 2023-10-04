'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { reveal } from '../../utils/reveal'
import PereFils from '/public/images/parents/pere_fils.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonBreastfeeding, faPersonRunning, faLightbulb, faHandshakeAngle, faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Qui({ className = 'bg-gray-100' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll('.qui-img'),
            classesToRemove: ['scale-0', 'opacity-0']
        })
        reveal({
            collection: document.querySelectorAll('#qui li'),
            classesToRemove: ['opacity-0'],
            delayIncrement: 50
        })
    }, [])

    return (
        <section id="qui" className={className}>
            <div className="container">
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <div className="w-full md:w-1/4 mx-auto transition duration-200 scale-0 opacity-0 qui-img">
                        <Image
                            src={PereFils}
                            width={PereFils.width}
                            height={PereFils.height}
                            className="w-full rounded-full"
                            alt="Parents en difficulté"
                        />
                    </div>
                    <div className="w-full md:w-3/4">
                        <h2>L'accompagnement "Habitudes gagnantes" est fait pour vous si...</h2>
                        <ul className="list-none list-inside fa-ul text-lg leading-8 mb-16">
                            {
                                [
                                    (
                                        <>
                                            <span className="fa-li text-xl"><FontAwesomeIcon icon={faPersonBreastfeeding} /></span>
                                            Vous êtes parents, jeunes parents occupés et <strong>prendre soin de vous relève du défi</strong>.
                                        </>
                                    ),
                                    (
                                        <>
                                            <span className="fa-li text-xl"><FontAwesomeIcon icon={faPersonRunning} /></span>
                                            Vous savez que prendre soin de sa santé physique et mentale est important pour votre <strong>équilibre</strong> mais vous ne parvenez pas à la faire seul.e.
                                        </>
                                    ),
                                    (
                                        <>
                                            <span className="fa-li text-xl"><FontAwesomeIcon icon={faLightbulb} /></span>
                                            Vous recherchez plus qu'un accompagnement, c'est être <strong>soutenu dans les défis quotidiens</strong> tout en prenant soin de vous, <strong>forger des habitudes gagnantes</strong> pour <strong>entrainer un mental</strong> à toute épreuve.

                                        </>
                                    ),
                                    (
                                        <>
                                            <span className="fa-li text-xl"><FontAwesomeIcon icon={faHandshakeAngle} /></span>
                                            Vous souhaitez appréhender les situations de façon différente pour éviter de se décourager, de craquer face aux situations difficiles et qui vous rendent vulnérables. Rester déterminé.es dans cette volonté de prendre soin de soi <strong>grâce aux mouvements et à l'alimentation</strong>. La priorité, c'est vous !
                                        </>
                                    )
                                ].map((e, i) => (
                                    <li className="transition duration-200 opacity-0" key={i}>{e}</li>
                                ))
                            }
                        </ul>

                        <h2>Grâce à l'accompagnement "Habitudes gagnantes", vous serez&nbsp;:</h2>
                        <ul className="list-none list-inside fa-ul text-lg leading-8">
                            {
                                [
                                    (
                                        <>
                                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                            <strong>Guidé.e</strong> lors des séances de coaching pour <strong>avancer pas à pas</strong> dans cette volonté de mieux-être
                                        </>
                                    ),
                                    (
                                        <>
                                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                            <strong>Epaulé.e</strong> par un professionnel lors des <strong>situations décourageantes</strong>, des moments de doutes pour vivre cette transition progressivement.
                                        </>
                                    ),
                                    (
                                        <>
                                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                            <strong>Challengé.e</strong> par un objectif source de <strong>motivation</strong>, de <strong>plaisir</strong> et de <strong>performance</strong> avec <strong>un sentiment de dépassement de soi</strong> et une <strong>fierté dans l'accomplissement</strong>.
                                        </>
                                    ),
                                    (
                                        <>
                                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                            Ainsi, gagner en <strong>sérénité</strong>, en <strong>confiance en soi</strong>, avec une <strong>meilleure connaissance & conscience de soi</strong> pour affronter <strong>les défis quotidiens</strong>.
                                        </>
                                    )
                                ].map((e, i) => (
                                    <li className="transition duration-200 opacity-0" key={i}>{e}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}