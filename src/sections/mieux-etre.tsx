'use client'
import { useEffect } from 'react';
import Image from 'next/image'
import { reveal } from '../utils/reveal';
import Intro from '/public/images/particuliers/mieux-etre/intro.webp'
import MieuxEtreImg from 'public/images/particuliers/mieux-etre/mieux-etre.webp'

export default function MieuxEtre() {
    useEffect(() => {
        reveal({
            collection: Array.from(document.querySelectorAll('.about-img')),
            classesToRemove: ['scale-0', 'opacity-0']
        });
        reveal({
            collection: Array.from(document.querySelectorAll('.paragraph li')),
            classesToRemove: ['opacity-0'],
        });
    }, []);

    return (
        <section id="mieux-etre" className="bg-gray-100">
            <div className="container">

                <div className="text-center pb-10">
                    <h4 className="title">De l'image du corps à l'image de soi</h4>
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
                            Vous avez pris du poids pendant la grossesse et avez des difficultés à retrouver votre poids d'avant-grossesse
                        </p>
                        <p>
                            OU vous avez pris du poids suite à un changement de vie ou un événement dans votre vie (un nouveau poste à responsabilité, une séparation, etc.).
                        </p>
                        <p>
                            Prendre du temps pour soi, prendre soin de soi sans culpabiliser, tout en étant dévoué en tant que parents, peut s’avérer difficile voire impossible.
                        </p>
                        <p>
                            <strong>Vous connaissez un changement physique et avez du mal à supporter votre image extérieure, qui vous renvoit à une image intérieure dévalorisante.</strong>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-full md:order-first">
                        <h4 className="text-4xl text-primary-800 font-bold mb-4">Aujourd'hui :</h4>
                        <ul className="list-disc list-inside paragraph square">
                            <li className="opacity-0">
                                Vous avez <strong>un rapport difficile avec votre corps</strong> et cela a un fort impact sur votre estime de soi,
                            </li>
                            <li className="opacity-0">
                                Vous avez <strong>entrepris des actions mais êtes frustrés</strong> de ne pas avoir les résultats escomptés,
                            </li>
                            <li className="opacity-0">
                                Vous ressentez le <strong>besoin d'un changement plus profond</strong> et plus durable.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-full md:w-1/3 mx-auto transition duration-200 scale-0 opacity-0 about-img">
                        <Image
                            src={MieuxEtreImg}
                            width={MieuxEtreImg.width}
                            height={MieuxEtreImg.height}
                            className="w-full rounded-full"
                            alt="Parents"
                        />
                    </div>
                    <div className="w-full md:w-2/3">
                        <h4 className="text-4xl text-tertary-900 font-bold mb-4">Vous souhaitez :</h4>
                        <ul className="list-disc list-inside paragraph square font-bold">
                            <li className="opacity-0">
                                Vous sentir plus à l'aise avec votre image, votre corps,
                            </li>
                            <li className="opacity-0">
                                Vous réconcilier avec votre corps,
                            </li>
                            <li className="opacity-0">
                                Vous réconcilier avec l'alimentation,
                            </li>
                            <li className="opacity-0">
                                Retrouver un équilibre de vie personnelle & professionnelle,
                            </li>
                            <li className="opacity-0">
                                Retrouver du sens dans vos actions,
                            </li>
                            <li className="opacity-0">
                                Retrouver confiance en vous,
                            </li>
                            <li className="opacity-0">
                                Être plus à l'écoute de vos besoins avec moins de contrôle et plus de lâcher-prise,
                            </li>
                            <li className="opacity-0">
                                Avoir un objectif qui sera source de challenge et être accompagné pour faire face à l'adversité.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mb-10">
                    <h4 className="subtitle text-primary-600">
                        Cet accompagnement vous permettra d'être plus à l'écoute de vos besoins, émotions, sensations. Il vous donnera toutes les clés nécessaires pour lever freins & blocages pour une vie harmonieuse en adéquation avec votre tête & votre corps.
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