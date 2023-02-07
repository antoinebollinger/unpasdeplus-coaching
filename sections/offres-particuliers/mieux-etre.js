import Image from "next/image";
import MieuxEtreIllustration from "../../public/images/particuliers/mieux-etre/intro.jpg";

import { useEffect } from 'react';
import { reveal } from '../../components/reveal';

export default function MieuxEtre() {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll(".about-img"),
            classesToRemove: ["scale-0", "opacity-0"]
        });
    }, []);

    return (
        <section id="mieux-etre">
            <div className="container">
                <div className="text-center pb-10">
                    <h4 className="subtitle">Accompagnement</h4>
                    <h4 className="title">De l'image du corps à l'image de soi</h4>
                </div>
                <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center mb-10">
                    <div className="w-1/2 md:w-1/4 md:pr-6 pb-6 md:pb-0 mx-auto transition duration-200 scale-0 opacity-0 about-img">
                        <Image
                            src={MieuxEtreIllustration}
                            width={MieuxEtreIllustration.width}
                            height={MieuxEtreIllustration.height}
                            className="w-full rounded-full"
                            alt="De l'image du corps à l'image de soi"
                        />
                    </div>
                    <div className="w-full md:w-3/4 md:pl-6 paragraph">
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

                <div className="flex flex-wrap flex-col sm:flex-row justify-center items-start mb-10">
                    <div className="w-full md:w-1/2 md:pl-6 paragraph">
                        <h4 className="subtitle">Aujourd'hui :</h4>
                        <p>
                            Vous avez un rapport difficile avec votre corps et cela a un fort impact sur votre estime de soi,
                        </p>
                        <p>
                            Vous avez entrepris des actions mais êtes frustrés de ne pas avoir les résultats escomptés,
                        </p>
                        <p>
                            Vous ressentez le besoin d'un changement plus profond et plus durable.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-6 paragraph">
                        <h4 className="subtitle">Vous souhaitez :</h4>
                        <p>
                            Vous sentir plus à l'aise avec votre image, votre corps,
                        </p>
                        <p>
                            Vous réconcilier avec votre corps,
                        </p>
                        <p>
                            Vous réconcilier avec l'alimentation,
                        </p>
                        <p>
                            Retrouver un équilibre de vie personnelle & professionnelle,
                        </p>
                        <p>
                            Retrouver du sens dans vos actions,
                        </p>
                        <p>
                            Retrouver confiance en vous,
                        </p>
                        <p>
                            Être plus à l'écoute de vos besoins avec moins de contrôle et plus de lâcher-prise,
                        </p>
                        <p>
                            Avoir un objectif qui sera source de challenge et être accompagné pour faire face à l'adversité.
                        </p>
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