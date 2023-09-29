'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { reveal } from '../../utils/reveal'
import Sabrina from '/public/images/sabrina.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonRunning, faHandsHoldingChild, faBullseye, faTree, faHeart } from '@fortawesome/free-solid-svg-icons'
import { madelyn } from '../../../styles/font'

export default function Bio({ className = '' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll('.about-img'),
            classesToRemove: ['scale-0', 'opacity-0']
        })
        reveal({
            collection: document.querySelectorAll('.about-text'),
            classesToRemove: ['translate-y-full', 'opacity-0'],
            delayIncrement: 100
        })
    }, [])

    return (
        <section id="bio" className={className}>
            <div className="container">
                <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
                    <div className="w-1/2 md:w-1/4 mx-auto transition duration-200 scale-0 opacity-0 about-img">
                        <Image
                            src={Sabrina}
                            className="rounded-full"
                            alt="Sabrina Appriou"
                        />
                    </div>
                    <div className="w-full md:w-3/4">
                        <div className="mb-8 text-center md:text-start mb-10">
                            <h1>Sabrina Appriou</h1>
                            <h2>
                                Fondatrice <span className={`${madelyn.className} text-7xl -translate-y-4`}>Un&nbsp;pas&nbsp;de&nbsp;plus</span>
                            </h2>
                            <h3>Coach consultante professionnelle certifiée RNCP</h3>
                        </div>
                        <div className="transition duration-200 opacity-0 translate-y-full about-text">
                            <h3><FontAwesomeIcon icon={faHandsHoldingChild} /> Maman de 3 enfants</h3>
                            <p className="text-lg mb-6">
                                <strong>Parentalité</strong>, <strong>bien-être au travail</strong>, <strong>charge mentale</strong>, <strong>santé physique et mentale</strong>, sont des sujets importants pour moi en tant que maman de trois enfants, sportive et entrepreneure. Face aux défis quotidiens, dans le but de trouver sans cesse le meilleur équilibre, j'ai à coeur d'accompagner les parents, jeunes parents à entrainer le mental pour <strong>gagner en sérénité</strong>.
                            </p>
                        </div>
                        <div className="transition duration-200 opacity-0 translate-y-full about-text">
                            <h3><FontAwesomeIcon icon={faPersonRunning} /> Course à pied</h3>
                            <p className="text-lg mb-6">
                                Passionnée depuis plus de 20 ans déjà. La course à pied est une ressource pour moi de <strong>dépassement de soi</strong>, de <strong>bien-être</strong> et d'être en <strong>mouvement</strong>. Quand je ne cours pas, je marche pour explorer les sentiers côtiers de la Bretagne.
                            </p>
                        </div>
                        <div className="transition duration-200 opacity-0 translate-y-full about-text">
                            <h3><FontAwesomeIcon icon={faBullseye} /> Challenge</h3>
                            <p className="text-lg mb-6">
                                J'aime les <strong>challenges</strong>, que ce soit dans les domaines sportif, professionnel ou personnel. Selon moi, ils sont source de <strong>motivation</strong> et <strong>permettent de nous dépasser</strong>.
                            </p>
                        </div>
                        <div className="transition duration-200 opacity-0 translate-y-full about-text">
                            <h3><FontAwesomeIcon icon={faTree} /> Nature</h3>
                            <p className="text-lg mb-6">
                                <strong>Connectée à la nature</strong>, source d'énergie et de sérénité pour moi. J'accorde également une grande importance <strong>à une alimentation saine et respectueuse de l'environnement</strong>.
                            </p>
                        </div>
                        <div className="transition duration-200 opacity-0 translate-y-full about-text">
                            <h3><FontAwesomeIcon icon={faHeart} /> Alimentation émotionnelle</h3>
                            <p className="text-lg mb-6">
                                Lors de ma certification de coach professionnel, j'ai présenté un mémoire qui porte sur « Le coaching et la perte de poids ». J’évoque <strong>l’impact des émotions</strong> sur notre <strong>alimentation</strong>. Etre accompagner pour en prendre <strong>conscience</strong> et <strong>mieux les gérer</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}