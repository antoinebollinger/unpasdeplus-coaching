'use client';
import { useEffect } from 'react'
import Image from 'next/image'
import { reveal } from '../../utils/reveal'
import Qui1 from '/public/images/parents/qui-1.webp'
import Qui2 from '/public/images/parents/qui-2.webp'

export default function Qui() {
    useEffect(() => {
        reveal({
            collection: Array.from(document.querySelectorAll('.qui-img')),
            classesToRemove: ['scale-0', 'opacity-0']
        })
        reveal({
            collection: Array.from(document.querySelectorAll('.qui li')),
            classesToRemove: ['opacity-0'],
            delayIncrement: 50
        })
    }, [])

    return (
        <section id="qui" className="bg-gray-100 qui">
            <div className="container">
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-full md:w-2/3 order-last md:order-first">
                        <h4>L'accompagnement Healthy Habits parents est fait pour vous si...</h4>
                        <ul className="list-disc list-inside square text-lg leading-8">
                            <li className="opacity-0">
                                Vous êtes parents, jeunes parents occupés et <strong>prendre soin de vous relève du défi</strong>.
                            </li>
                            <li className="opacity-0">
                                Vous savez que prendre soin de sa santé physique et mentale est important pour votre équilibre mais vous ne parvenez pas à la faire seul.e.
                            </li>
                            <li className="opacity-0">
                                Vous recherchez plus qu'un accompagnement, c'est être soutenu dans les défis quotidiens tout en prenant soin de soi, forger des habitudes gagnates pour entrainer le mental à toute épreuve.
                            </li>
                            <li className="opacity-0">
                                Vous souhaitez appréhender les situations de façon différente pour éviter de se décourager, de craquer lors de situations difficiles et vulnérables. Rester déterminé.e dans cette volonté de prendre soin de soi grâce aux mouvements et à l'alimentation. La priorité, c'est vous !
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 mx-auto transition duration-200 scale-0 opacity-0 qui-img">
                        <Image
                            src={Qui1}
                            width={Qui1.width}
                            height={Qui1.height}
                            className="w-full"
                            alt="Parents en difficulté"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <div className="w-full md:w-1/3 mx-auto transition duration-200 scale-0 opacity-0 qui-img">
                        <Image
                            src={Qui2}
                            width={Qui2.width}
                            height={Qui2.height}
                            className="w-full"
                            alt="Parents zen"
                        />
                    </div>
                    <div className="w-full md:w-2/3">
                        <h4>Grâce à l'accompagnement Healthy Habits parents, vous serez :</h4>
                        <ul className="list-disc list-inside square text-lg leading-8">
                            <li className="opacity-0">
                                <strong>Guidé.e</strong> lors des séances de coaching pour <strong>avancer pas à pas</strong> dans cette volonté de mieux-être
                            </li>
                            <li className="opacity-0">
                                <strong>Epaulé.e</strong> par un professionnel lors de situations décourageantes, moments de doutes pour vivre cette transition progressivement.
                            </li>
                            <li className="opacity-0">
                                <strong>Challengé.e</strong>gé.e par un objectif source de motivation, de plaisir et de performance avec un sentiment de dépassement et une fierté d'accomplissement.
                            </li>
                            <li className="opacity-0">
                                Ainsi, gagner en <strong>sérénité</strong>, en <strong>confiance en soi</strong>, avec une <strong>meilleure connaissance & conscience de soi</strong> pour affronter <strong>les défis quotidiens</strong>.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}