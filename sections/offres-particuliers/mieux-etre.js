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
                <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center">
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
            </div>
        </section>
    )
}