'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import { reveal } from '../../utils/reveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Quoi({ className = 'bg-gray-100' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll('#quoi h2'),
            classesToRemove: ['opacity-0']
        })
        reveal({
            collection: document.querySelectorAll('#quoi .text'),
            classesToRemove: ['opacity-0', 'translate-y-full']
        })
        reveal({
            collection: document.querySelectorAll('#quoi li'),
            classesToRemove: ['opacity-0'],
            delayIncrement: 50
        })
    }, [])

    return (
        <section id="quoi" className={className}>
            <div className="container">
                <div className="w-full lg:w-2/3 mx-auto flex flex-col gap-6">
                    <h1>Trouver l'équilibre dans la perte de poids</h1>
                    <p className="text-lg leading-6 transition duration-200 opacity-0 translate-y-full text">
                        La <strong>perte de poids</strong> n'est pas simplement une question de chiffres sur la balance. C'est trouver son équilibre dans <strong>l'alimentation</strong>, dans une <strong>activé physique adaptée</strong> et sa <strong>santé mentale</strong>.
                    </p>
                    <div>
                        <h2 className="transition duration-200 opacity-0">L'importance du coaching mental</h2>
                        <p className="text-lg leading-6 transition duration-200 opacity-0 translate-y-full text">
                            La <strong>santé mentale</strong> joue un rôle central dans un parcours de perte de poids durable. Le coaching mental vous aidera à <strong>poursuivre vos efforts</strong> grâce à des techniques, des outils de <strong>coaching de motivation</strong> comme des outils de <strong>gestion du stress</strong> pour des changements durables. Une source de motivation pour atteindre vos objectifs.
                            <br />
                            <br />
                            Grâce au <strong>coaching mental</strong>, vous serez soutenu pour surmonter les <strong>obstacles émotionnels et mentaux</strong> qui peuvent être un frein à vos progrès. Être accompagné pour maintenir une attitude positive tout au long du parcours.
                        </p>
                    </div>
                    <div>
                        <h2 className="transition duration-200 opacity-0">Entraînement adapté et plaisir</h2>
                        <p className="text-lg leading-6 transition duration-200 opacity-0 translate-y-full text">
                            Le <strong>coaching perte de poids</strong> comprend une composante importante : l'activité physique.
                            <br />
                            <br />
                            L'activité physique ne doit pas être synonyme de corvée mais agréable à votre quotidien. Se fixer des <strong>challenges sportifs</strong> avec des <strong>objectifs atteignables et réalisables</strong>. Une activité physique adaptée à vous, à votre forme et votre style de vie. L'exercice physique est connu pour réduire le stress en libérant des endorphines, les "hormones du bonheur". <strong>La gestion du stress</strong> est importante dans un contexte de perte de poids, pour réguler les comportements alimentaires.
                            <br />
                            <br />
                            Améliorer son <strong>bien-être mental</strong> et <strong>son humeur</strong>, grâce à <strong>l'activité physique adaptée</strong> pour installer des <strong>habitudes saines et durables</strong>.
                        </p>
                    </div>
                    <div>
                        <h2 className="transition duration-200 opacity-0">Alimentation équilivrée dans l'assiette et dans la tête</h2>
                        <p className="text-lg leading-6 transition duration-200 opacity-0 translate-y-full text">
                            Les émotions peuvent influencer les habitudes alimentaires. Les identifier, les comprendre peuvent aider à une meilleure gestion des émotions pour maintenir une relation saine avec la nourriture.
                            <br />
                            <br />
                            Grâce au coaching perte de poids, vous serez :
                        </p>
                        <br />
                        <ul className="list-none list-inside fa-ul text-lg leading-8">
                            {
                                [
                                    (
                                        <>
                                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                            <strong>Serein.e</strong> sur votre objectif
                                        </>
                                    ),
                                    (
                                        <>
                                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                            <strong>Confiant.e</strong> sur la progression
                                        </>
                                    ),
                                    (
                                        <>
                                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                            <strong>Soutenu.e</strong> tout au long du parcours de coaching dans les moments de doutes ou de démotivation
                                        </>
                                    )
                                ].map((e, i) => (
                                    <li className="transition duration-200 opacity-0" key={i}>{e}</li>
                                ))
                            }
                        </ul>
                        <br />
                        <br />
                        <p className="text-lg leading-6 transition duration-200 opacity-0 translate-y-full text">
                            Un accompagnement adapté pour retrouver <strong>sérénité et équilibre de vie</strong> :
                        </p>
                        <br />
                        <ul className="list-none list-inside fa-ul text-lg leading-8">
                            {
                                [
                                    (
                                        <>
                                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                            Séance de coaching individuelle
                                        </>
                                    ),
                                    (
                                        <>
                                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                            Un programme efficace et complet
                                        </>
                                    ),
                                    (
                                        <>
                                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                            En présentiel à Vannes et alentours / En distanciel sur toute la France
                                        </>
                                    )
                                ].map((e, i) => (
                                    <li className="transition duration-200 opacity-0" key={i}>{e}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="text-center">
                        <Link href="/contact" className="main-btn gradient-btn focus:outline-none uppercase">
                            En savoir plus
                        </Link>
                    </div>
                    <div>
                        <h2 className="transition duration-200 opacity-0">Bien-être du Corps et Amélioration de l'Image de Soi :</h2>
                        <p className="text-lg leading-6 transition duration-200 opacity-0 translate-y-full text">
                            Au-delà de l'objectif perte de poids, le parcours <strong>coaching perte de poids</strong> vous accompagne à <strong>développer une meilleure image de soi</strong>, une meilleure <strong>confiance en soi</strong>, en vos <strong>capacités</strong> pour un <strong>impact positif</strong> dans votre quotidien.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}