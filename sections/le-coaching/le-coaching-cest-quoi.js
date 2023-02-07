import Image from 'next/image';
import Intro1 from "../../public/images/intro/1.webp";
import Intro2 from "../../public/images/intro/2.webp";
import Intro3 from "../../public/images/intro/3.webp";
import Intro4 from "../../public/images/intro/4.webp";
import Intro5 from "../../public/images/intro/5.webp";

import { useEffect } from 'react';
import { reveal } from '../../components/reveal';

export default function LeCoachingCestQuoi() {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll(".intro-step"),
            classesToRemove: ["translate-x-3/4", "scale-0", "opacity-0"],
            classesToAdd: ["translate-x-0"],
        });
    }, []);

    const list = (img, text) => {
        return (
            <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center mb-8">
                <div className="intro-step w-1/2 md:w-1/4 md:pr-6 mx-auto transition duration-300 opacity-0 scale-0">
                    <Image
                        src={img}
                        width={img.width}
                        height={img.height}
                        className="w-full rounded-full"
                        alt="Illustration"
                    />
                </div>
                <div className="intro-step w-full md:w-3/4 md:pl-6 p-2 transition duration-300 opacity-0 translate-x-3/4">
                    <p className="text-lg text-gray-900" dangerouslySetInnerHTML={{ __html: text }} />
                </div>
            </div>
        )
    }

    return (
        <section id="le-coaching-cest-quoi">
            <div className="container">
                <div className="text-center pb-10">
                    <h4 className="title">C'est quoi, le coaching ?</h4>
                    <q className="text-lg italic"> La victoire sur soi est la plus grande des victoires </q>
                </div>
                <div className="lg:max-w-4xl mx-auto">
                    {list(
                        Intro1,
                        "<strong>Le coaching</strong> consiste à accompagner des personnes dans la définition et l'atteinte de leurs objectifs, au bénéfice du développement de leur potentiel et de la réussite de leur évolution personnelle et professionnelle."
                    )}
                    {list(
                        Intro2,
                        "C'est donc <strong>un accompagnement</strong> à un moment de votre vie, avec une personne extérieure à votre sphère privée et professionnelle, en toute bienveillance et sans jugement. Le coaching a pour but de vous booster en prenant conscience que le changement passe avant tout par soi."
                    )}
                    {list(
                        Intro3,
                        "L'intelligence émotionnelle a une place importante en coaching. <strong>Mais qu'est-ce que l'intelligence émotionnelle ?</strong> Nous parlons de la capacité à nous adresser efficacement aux autres et à nous-même, à nous connecter à nos émotions, à les gérer, à nous auto-motiver, à freiner nos pulsions, à vaincre nos frustrations."
                    )}
                    {list(
                        Intro4,
                        "<strong>Mon métier repose sur une écoute active</strong>, un questionnement pertinent et des outils & méthodes de coaching, dans un cadre confidentiel. Dans ce cadre, je propose un accompagnement individuel où nous exporons votre demande et définissons un objectif à la fois atteignable et challengeant."
                    )}
                    {list(
                        Intro5,
                        "J'accompagne les personnes à faire <strong>UN PAS DE PLUS</strong> dans leur époanouissement personnel et/ou professionnel pour un changement profond et durable."
                    )}
                </div>
            </div>
        </section>
    )
}