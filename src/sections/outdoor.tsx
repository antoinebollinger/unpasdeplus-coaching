'use client'
import { useEffect } from 'react'
import Image from "next/image"
import { reveal } from '../utils/reveal'
import Outro from '/public/images/particuliers/outdoor/outro.webp'

export default function Outdoor() {
    useEffect(() => {
        reveal({
            collection: Array.from(document.querySelectorAll('.about-img')),
            classesToRemove: ['scale-0', 'opacity-0']
        });
    }, []);

    return (
        <section id="outdoor">
            <div className="container">

                <div className="text-center pb-10">
                    <h4 className="title">Coaching Outdoor</h4>
                    <p className="text-3xl">Oser sortir de son cadre habituel pour explorer le champ des possibles</p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-full paragraph">
                        <p>
                            <strong>La marche est un outil précieux</strong> pour éveiller nos sens et nous reconnecter à notre nature profonde. C'est une méthode innovante pour des résultats concrets.
                        </p>
                        <p>
                            <strong>La marche va être le lieu d'échange entre notre environnement extérieur et intérieur vers une quête de soi.</strong>
                        </p>
                    </div>
                </div>


                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-full md:w-1/3 mx-auto transition duration-200 scale-0 opacity-0 about-img">
                        <Image
                            src={Outro}
                            width={Outro.width}
                            height={Outro.height}
                            className="w-full"
                            alt="Parents"
                        />
                    </div>
                    <div className="w-full md:w-2/3 md:order-first">
                        <h4 className="text-4xl text-tertary-900 font-bold mb-4">Cet accompagnement est fait pour vous :</h4>
                        <ul className="list-disc list-inside paragraph square font-bold">
                            <li className="opacity-0">
                                Clarifier votre situation personnelle / professionnelle,
                            </li>
                            <li className="opacity-0">
                                Retrouver de l'énergie en avançant pas à pas,
                            </li>
                            <li className="opacity-0">
                                Profiter de la nature, d'un bol d'air pour être pleinement à l'écoute de ses sensations,
                            </li>
                            <li className="opacity-0">
                                Se sentir libre d'exprimer ses nouvelles idées en explorant le champs des possibles,
                            </li>
                            <li className="opacity-0">
                                Oser prendre une journée pour soi pour s'autoriser à faire une « pause » pour aborder un sujet, travailler sur vos objectifs personnels et/ou professionnels,
                            </li>
                            <li className="opacity-0">
                                Se reconnecter à soi et à notre environnement naturel,
                            </li>
                            <li className="opacity-0">
                                Sortir de l'immobilisme.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center">
                    <a href="#contact">
                        <button type="submit" className="main-btn gradient-btn focus:outline-none uppercase">Je prends contact pour en savoir plus !<br />Gratuit et sans engagement</button>
                    </a>
                </div>

            </div>
        </section >
    )
}