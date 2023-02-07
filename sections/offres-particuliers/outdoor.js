import Image from "next/image";
import IntroIllustration from "../../public/images/particuliers/outdoor/intro.jpg";
import OutroIllustration from "../../public/images/particuliers/outdoor/outro.jpg";

import { useEffect } from 'react';
import { reveal } from '../../components/reveal';

export default function Outdoor() {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll(".about-img"),
            classesToRemove: ["scale-0", "opacity-0"]
        });
    }, []);

    return (
        <section id="outdoor">
            <div className="container">
                <div className="text-center pb-10">
                    <h4 className="subtitle">Accompagnement</h4>
                    <h4 className="title">Coaching Outdoor</h4>
                    <p className="text-3xl">Oser sortir de son cadre habituel pour explorer le champ des possibles</p>
                </div>
                <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center mb-10">
                    <div className="w-1/2 md:w-1/4 md:pr-6 pb-6 md:pb-0 mx-auto transition duration-200 scale-0 opacity-0 about-img">
                        <Image
                            src={IntroIllustration}
                            width={IntroIllustration.width}
                            height={IntroIllustration.height}
                            className="w-full rounded-full"
                            alt="Coaching Outdoor"
                        />
                    </div>
                    <div className="w-full md:w-3/4 md:pl-6 paragraph">
                        <p>
                            <strong>La marche est un outil précieux</strong> pour éveiller nos sens et nous reconnecter à notre nature profonde. C'est une méthode innovante pour des résultats concrets.
                        </p>
                        <p>
                            <strong>La marche va être le lieu d'échange entre notre environnement extérieur et intérieur vers une quête de soi.</strong>
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center">
                    <div className="w-full md:w-3/4 md:pl-6 paragraph">
                        <h4 className="subtitle">Cet accompagnement est fait pour vous :</h4>
                        <p>
                            Clarifier votre situation personnelle / professionnelle,
                        </p>
                        <p>
                            Retrouver de l'énergie en avançant pas à pas,
                        </p>
                        <p>
                            Profiter de la nature, d'un bol d'air pour être pleinement à l'écoute de ses sensations,
                        </p>
                        <p>
                            Se sentir libre d'exprimer ses nouvelles idées en explorant le champs des possibles,
                        </p>
                        <p>
                            Oser prendre une journée pour soi pour s'autoriser à faire une « pause » pour aborder un sujet, travailler sur vos objectifs personnels et/ou professionnels,
                        </p>
                        <p>
                            Se reconnecter à soi et à notre environnement naturel,
                        </p>
                        <p>
                            Sortir de l'immobilisme.
                        </p>
                    </div>
                    <div className="w-1/2 md:w-1/4 md:pr-6 pb-6 md:pb-0 mx-auto transition duration-200 scale-0 opacity-0 about-img">
                        <Image
                            src={OutroIllustration}
                            width={OutroIllustration.width}
                            height={OutroIllustration.height}
                            className="w-full rounded-full"
                            alt="Coaching Outdoor"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}