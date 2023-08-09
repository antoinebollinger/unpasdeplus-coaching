'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { reveal } from '../utils/reveal'
import Intro from '/public/images/particuliers/parentalite/intro.webp'
import Parents1 from '/public/images/particuliers/parentalite/maman-debordee.webp'
import Parents2 from '/public/images/particuliers/parentalite/maman-zen.webp'

export default function Parentalite() {
    useEffect(() => {
        reveal({
            collection: Array.from(document.querySelectorAll('.about-img')),
            classesToRemove: ['scale-0', 'opacity-0']
        });
        reveal({
            collection: Array.from(document.querySelectorAll('.paragraph li')),
            classesToRemove: ['opacity-0'],
            delayIncrement: 50
        });
    }, []);

    return (
        <section id="parentalite">
            <div className="container">
                <div className="text-center pb-10">
                    <h3 className="title">Parents : Bien dans sa tête, bien dans ses baskets</h3>
                </div>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-2/3 md:w-1/4 mx-auto transition duration-200 scale-0 opacity-0 about-img">
                        <Image
                            src={Intro}
                            width={Intro.width}
                            height={Intro.height}
                            className="w-full"
                            alt="Parents"
                        />
                    </div>
                    <div className="w-full md:w-3/4 paragraph">
                        <p>
                            <strong>Être parent est merveilleux et difficile à la fois.</strong>
                        </p>
                        <p>
                            Être parent est un vrai chamboulement, un changement de vie, une nouvelle organisation, un changement état d'esprit. <strong>Il y a bien un avant et après</strong>.
                        </p>
                        <p>
                            Prendre du temps pour soi, prendre soin de soi sans culpabiliser, tout en étant dévoué en tant que parents, peut s’avérer difficile voire impossible.
                        </p>
                        <p>
                            <strong>Les injonctions sociétales nous poussent à être de superparents</strong>, un super papa, une wondermaman, être au top au boulot, assurer à la maison, être physiquement au top : le défi des parents d'aujourd'hui. <strong>Mais toutes ces injonctions à « assurer » dans tous les domaines de vie n'amènent-elles pas à de l’épuisement, à de l’insatisfaction tant sur le plan personnel que professionnel ?</strong>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-full md:w-2/3 order-last md:order-first">
                        <h4 className="text-4xl text-primary-800 font-bold mb-4">Aujourd'hui :</h4>
                        <ul className="list-disc list-inside paragraph square">
                            <li className="opacity-0">
                                Vous êtes (jeunes) parents, parents d'un ou plusieurs enfants
                            </li>
                            <li className="opacity-0">
                                OU vous avez repris le travail après un congé maternité, parental,
                            </li>
                            <li className="opacity-0">
                                Vous êtes <strong>surchargés, épuisés, débordés, fatigués</strong> physiquement, moralement, de devoir être sur tous les fronts, aussi bien à la maison qu'au travail,
                            </li>
                            <li className="opacity-0">
                                Vous avez le sentiment de <strong>ne pas avoir du temps pour vous</strong>, pour votre famille, et remettez en question vos choix de vie,
                            </li>
                            <li className="opacity-0">
                                Vous n'arrivez plus à trouver le juste équilibre dans votre vie,
                            </li>
                            <li className="opacity-0">
                                Vous passez votre temps <strong>à courir après le temps</strong>,
                            </li>
                            <li className="opacity-0">
                                Vous êtes <strong>épuisés de tenter de concilier vos différents rôles</strong> (mère, femme, professionnelle...).
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 mx-auto transition duration-200 scale-0 opacity-0 about-img">
                        <Image
                            src={Parents1}
                            width={Parents1.width}
                            height={Parents1.height}
                            className="w-full"
                            alt="Parents"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-full md:w-1/3 mx-auto transition duration-200 scale-0 opacity-0 about-img">
                        <Image
                            src={Parents2}
                            width={Parents2.width}
                            height={Parents2.height}
                            className="w-full"
                            alt="Parents"
                        />
                    </div>
                    <div className="w-full md:w-2/3">
                        <h4 className="text-4xl text-tertary-900 font-bold mb-4">Vous souhaitez :</h4>
                        <ul className="list-disc list-inside paragraph square font-bold">
                            <li className="opacity-0">
                                Vous retrouver en tant que femme, homme, en étant plus à votre écoute,
                            </li>
                            <li className="opacity-0">
                                Vous recentrer pour retrouver une vie plus saine et plus sereine,
                            </li>
                            <li className="opacity-0">
                                Retrouver confiance en vous pour faire des choix alignés avec votre identité,
                            </li>
                            <li className="opacity-0">
                                Retrouver de l'énergie en prenant soin de sa tête & de son corps,
                            </li>
                            <li className="opacity-0">
                                Oser être VOUS !
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mb-10">
                    <h4 className="subtitle text-primary-600">
                        Cet accompagnement vous permettra d'avancer à votre rythme,d'échanger en toute bienveillance, librement & sans jugement, vous donner toutes les clés pour avancer sereinement dans votre vie de parents & femme/homme.
                    </h4>
                </div>

                <div className="text-center">
                    <a href="#contact">
                        <button type="submit" className="main-btn gradient-btn focus:outline-none uppercase">Je prends contact pour en savoir plus !<br />Gratuit et sans engagement</button>
                    </a>
                </div>
            </div>
        </section>
    )
}