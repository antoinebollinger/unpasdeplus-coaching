'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { reveal } from '../../utils/reveal'
import Sabrina from '/public/images/sabrina.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonRunning, faHandsHoldingChild, faBullseye, faTree, faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Bio({ className = '' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: Array.from(document.querySelectorAll('.about-img')),
            classesToRemove: ['scale-0', 'opacity-0']
        })
    }, [])

    return (
        <section id="bio" className={className}>
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
                            <h3>Sabrina Appriou</h3>
                            <h4>
                                Fondatrice UN PAS DE PLUS
                            </h4>
                        </div>
                        <h5><FontAwesomeIcon icon={faHandsHoldingChild} /> Maman de 3 enfants</h5>
                        <p className="text-lg mb-6">
                            <strong>Parentalité</strong>, <strong>bien-être au travail</strong>, <strong>charge mentale</strong>, <strong>santé physique et mentale</strong>, sont des sujets importants pour moi en tant que maman de trois enfants et entrepreneure. Face à des défis quotidiens, à trouver sans cesse le meilleur équilibre, j'ai à coeur d'accompagner les parents, jeunes parents à entrainer le mental pour <strong>gagner en sérénité</strong>.
                        </p>
                        <h5><FontAwesomeIcon icon={faPersonRunning} /> Course à pied</h5>
                        <p className="text-lg mb-6">
                            Passionnée depuis plus de 20 ans déjà. La course à pied est une ressource pour moi de <strong>dépassement de soi</strong>, de <strong>bien-être</strong> et d'être en <strong>mouvement</strong>. Quand je ne cours pas, je marche pour exlorer les sentiers côtiers de la Bretagne.
                        </p>
                        <h5><FontAwesomeIcon icon={faBullseye} /> Challenge</h5>
                        <p className="text-lg mb-6">
                            J'aime les <strong>challenges</strong>, que ce soit dans le domaine sportif, professionnel ou personnel. Selon moi, ils sont source de <strong>motivation</strong> et <strong>permettent de nous dépasser</strong>.
                        </p>
                        <h5><FontAwesomeIcon icon={faTree} /> Nature</h5>
                        <p className="text-lg mb-6">
                            <strong>Connectée à la nature</strong>, source d'énergie pour moi et de sérénité. J'accorde également une grande importance <strong>à une alimentation saine et respectueuse de l'environnement</strong>.
                        </p>
                        <h5><FontAwesomeIcon icon={faHeart} /> Alimentation émotionnelle</h5>
                        <p className="text-lg mb-6">
                            Lors de ma certification de coach professionnel, j'ai présenté un mémoire qui porte sur « Le coaching et la perte de poids ». J’évoque l’impact des émotions sur notre alimentation. Etre accompagner pour en prendre conscience et mieux les gérer.
                        </p>
                    </div>
                </div>
            </div>
        </section >
    )
}