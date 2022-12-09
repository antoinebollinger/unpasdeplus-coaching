import Image from "next/image";
import Sabrina from "../../public/images/sabrina.webp";

import { useEffect } from 'react';
import { reveal } from '../../components/reveal';

export default function Intro() {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll(".about-img"),
            classesToRemove: ["scale-0", "opacity-0"]
        });
    }, []);

    return (
        <section id="bio">
            <div className="container">
                <div className="flex flex-wrap flex-col sm:flex-row justify-center">
                    <div className="w-1/2 md:w-1/4 md:pr-6 pb-6 md:pb-0 mx-auto transition duration-200 scale-0 opacity-0 about-img">
                        <Image
                            src={Sabrina}
                            width={Sabrina.width}
                            height={Sabrina.height}
                            className="w-full rounded-full"
                            alt="Sabrina Appriou"
                        />
                    </div>
                    <div className="w-full md:w-3/4 md:pl-6">
                        <div className="handwrite mb-8 text-center text-md-left">
                            <h4 className="title uppercase">Sabrina Appriou</h4>
                            <h5 className="text-3xl text-md-5xl">
                                Fondatrice d'UN PAS DE PLUS
                            </h5>
                        </div>
                        <p>
                            J'ai 38 ans, <strong>maman de 3 enfants</strong> (13, 11 et 3 ans).
                        </p>
                        <p>
                            Je suis passionnée de <strong>course à pied</strong>, sport que je pratique depuis 20 ans déjà. <strong>J'aime les challenges</strong>, que ce soit dans le domaine sportif, professionnel ou personnel. Selon moi, <strong>ils sont sources de motivation</strong> et permettent de nous dépasser.
                        </p>
                        <p>
                            Dynamique, sans cesse en mouvement, <strong>j'adore me fixer des objectifs</strong> et sortir des sentiers battus.
                        </p>
                        <p>
                            <strong>Je suis connectée à la nature</strong>, aux paysages. Cela m'aide à me ressourcer et à nourrir mon intérieur. Je pratique la marche active et suis adepte des courses en milieu naturel.
                        </p>
                        <p>
                            J'accord également une grande importance à <strong>une alimentation saine</strong>.
                        </p>
                        <p><q> <em>L'homme doit harmoniser l'esprit et le corps (Hippocrate)</em> </q></p>
                        <p>
                            Cela fait près de dix ans que je veille à manger bio, local et éthique.Je me sens en adéquation avec ces choix de vie qui font mon identité: une personne en mouvement, spirituellement et physiquement !
                        </p>
                        <p>
                            Au fil des années, <strong>j'ai gagné en sérénité en prenant soin de mon corps et de ma tête</strong>.
                        </p>
                        <p>
                            Mes valeurs : <strong>authentique, intègre et généreuse</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}