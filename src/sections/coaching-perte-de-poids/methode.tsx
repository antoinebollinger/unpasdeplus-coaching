'use client'
import { useEffect } from 'react'
import { reveal } from '../../utils/reveal'
import Image from 'next/image'
import Balance from '/public/images/coaching-perte-de-poids/balance.jpg'


export default function Methode({ className = '' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll('#methode .transition'),
            classesToRemove: ['opacity-0', 'scale-0'],
            delayIncrement: 50
        })
    }, [])

    return (
        <section id="methode" className={className}>
            <div className="container">
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <div className="w-1/2 md:w-1/4 mx-auto transition duration-200 scale-0 opacity-0">
                        <Image
                            src={Balance}
                            className="rounded-full"
                            alt="Sabrina Appriou"
                        />
                    </div>
                    <div className="w-full md:w-3/4 flex flex-col gap-6">
                        <div>
                            <h2>Entraînement adapté et plaisir</h2>
                            <p className="text-lg leading-6 transition duration-200 opacity-0 text">
                                Le <strong>coaching perte de poids</strong> comprend une composante importante&nbsp;: l'activité physique.
                                <br />
                                <br />
                                L'activité physique ne doit pas être synonyme de corvée mais agréable à votre quotidien. Se fixer des <strong>challenges sportifs</strong> avec des <strong>objectifs atteignables et réalisables</strong>. Une activité physique adaptée à vous, à votre forme et votre style de vie. L'exercice physique est connu pour réduire le stress en libérant des endorphines, les "hormones du bonheur". <strong>La gestion du stress</strong> est importante dans un contexte de perte de poids, pour réguler les comportements alimentaires.
                                <br />
                                <br />
                                Améliorer son <strong>bien-être mental</strong> et <strong>son humeur</strong>, grâce à <strong>l'activité physique adaptée</strong> pour installer des <strong>habitudes saines et durables</strong>.
                            </p>
                        </div>
                        <div>
                            <h2>Alimentation équilivrée dans l'assiette et dans la tête</h2>
                            <p className="text-lg leading-6 transition duration-200 opacity-0 text">
                                Les émotions peuvent influencer les habitudes alimentaires. Les identifier, les comprendre peuvent aider à une meilleure gestion des émotions pour maintenir une relation saine avec la nourriture.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}