'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { reveal } from '../../utils/reveal'
import Sabrina from '/public/images/sabrina.webp'

export default function Bio() {
    useEffect(() => {
        reveal({
            collection: Array.from(document.querySelectorAll('.about-img')),
            classesToRemove: ['scale-0', 'opacity-0']
        })
    }, [])

    return (
        <section id="bio">
            <div className="container">
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <div className="w-1/2 md:w-1/4 mx-auto transition duration-200 scale-0 opacity-0 about-img">
                        <Image
                            src={Sabrina}
                            width={Sabrina.width}
                            height={Sabrina.height}
                            className="w-full rounded-full"
                            alt="Sabrina Appriou"
                        />
                    </div>
                    <div className="w-full md:w-3/4">
                        <div className="handwrite mb-8 text-center md:text-start">
                            <h4 className="title uppercase">Sabrina Appriou</h4>
                            <h5 className="text-3xl text-md-5xl">
                                Fondatrice d'UN PAS DE PLUS - Coach certifiée Linkup Coaching
                            </h5>
                        </div>
                        <p className="subtitle my-10">
                            Maman de 3 enfants
                        </p>
                        <p className="text-lg">
                            <strong>Parentalité</strong>, <strong>bien-être au travail</strong>, <strong>charge mentale</strong>, <strong>santé physique et mentale</strong>, sont des sujets importants pour moi en tant que maman de trois enfants et entrepreneure. Face à des défis quotidiens, à trouver sans cesse le meilleur équilibre, j'ai à coeur d'accompagner les parents, jeunes parents à entrainer le mental pour <strong>gagner en sérénité</strong>.
                        </p>
                        <p className="subtitle my-10">
                            Course à pied
                        </p>
                        <p className="text-lg">
                            Passionnée depuis plus de 20 ans déjà. La course à pied est une ressource pour moi de <strong>dépassement de soi</strong>, de <strong>bien-être</strong> et d'être en <strong>mouvement</strong>. Quand je ne cours pas, je marche pour exlorer les sentiers côtiers de la Bretagne.
                        </p>
                        <p className="subtitle my-10">
                            Challenge
                        </p>
                        <p className="text-lg">
                            J'aime les <strong>challenges</strong>, que ce soit dans le domaine sportif, professionnel ou personnel. Selon moi, ils sont source de <strong>motivation</strong> et <strong>permettent de nous dépasser</strong>.
                        </p>
                        <p className="subtitle my-10">
                            Nature
                        </p>
                        <p className="text-lg">
                            <strong>Connectée à la nature</strong>, source d'énergie pour moi et de sérénité. J'accorde également une grande importance <strong>à une alimentation saine et respectueuse de l'environnement</strong>.
                        </p>
                        <p className="subtitle my-10">
                            Alimentation émotionnelle
                        </p>
                        <p className="text-lg">
                            Lors de ma certification de coach professionnel, j'ai présenté un mémoire qui porte sur « Le coaching et la perte de poids ». J’évoque l’impact des émotions sur notre alimentation. Etre accompagner pour en prendre conscience et mieux les gérer.
                        </p>
                    </div>
                </div>
            </div>
        </section >
    )
}