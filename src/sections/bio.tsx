'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { reveal } from '../utils/reveal'
import Sabrina from '/public/images/sabrina.webp'

export default function Bio() {
    useEffect(() => {
        reveal({
            collection: Array.from(document.querySelectorAll('.about-img')),
            classesToRemove: ['scale-0', 'opacity-0']
        });
    }, []);

    return (
        <section id="bio">
            <div className="container">
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <div className="w-1/2 md:w-1/4 mx-auto transition duration-200 scale-0 opacity-0 about-img">
                        <Image
                            src={Sabrina}
                            width={Sabrina.width}
                            height={Sabrina.height}
                            className="w-full rounded-full"
                            alt="Sabrina Appriou"
                        />
                    </div>
                    <div className="w-full md:w-3/4">
                        <div className="handwrite mb-8 text-center md:text-start">
                            <h4 className="title uppercase">Sabrina Appriou</h4>
                            <h5 className="text-3xl text-md-5xl">
                                Fondatrice d'UN PAS DE PLUS - Coach certifiée Linkup Coaching
                            </h5>
                        </div>
                        <p className="subtitle my-10">
                            Ma mission
                        </p>
                        <p className="paragraph">
                            J'accompagne les personnes à faire UN PAS DE PLUS pour un changement profond et durable dans leur vie personnelle et/ou professionnelle.
                        </p>
                        <p className="subtitle my-10">
                            À propos de moi
                        </p>
                        <p className="paragraph">
                            J'ai 38 ans, <strong>maman de 3 enfants</strong> (13, 11 et 3 ans).
                            <br />
                            <br />
                            Je suis passionnée de <strong>course à pied</strong>, sport que je pratique depuis 20 ans déjà. <strong>J'aime les challenges</strong>, que ce soit dans le domaine sportif, professionnel ou personnel. Selon moi, <strong>ils sont sources de motivation</strong> et permettent de nous dépasser.
                            <br />
                            <br />
                            Dynamique, sans cesse en mouvement, <strong>j'adore me fixer des objectifs</strong> et sortir des sentiers battus.
                            <br />
                            <br />
                            <strong>Je suis connectée à la nature</strong>, aux paysages. Cela m'aide à me ressourcer et à nourrir mon intérieur. Je pratique la marche active et suis adepte des courses en milieu naturel.
                            <br />
                            <br />
                            J'accord également une grande importance à <strong>une alimentation saine</strong>.
                        </p>
                        <p className="paragraph"><q> <em>L'homme doit harmoniser l'esprit et le corps (Hippocrate)</em> </q></p>
                        <p className="paragraph">
                            Cela fait près de dix ans que je veille à manger bio, local et éthique.Je me sens en adéquation avec ces choix de vie qui font mon identité: une personne en mouvement, spirituellement et physiquement !
                            <br />
                            <br />
                            Au fil des années, <strong>j'ai gagné en sérénité en prenant soin de mon corps et de ma tête</strong>.
                            <br />
                            <br />
                            Mes valeurs : <strong>authentique, intègre et généreuse</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </section >
    )
}