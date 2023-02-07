import Image from "next/image";
import IntroIllustration from "../../public/images/particuliers/parents/intro.jpg";

import { useEffect } from 'react';
import { reveal } from '../../components/reveal';

export default function Parentalite() {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll(".about-img"),
            classesToRemove: ["scale-0", "opacity-0"]
        });
    }, []);

    return (
        <section id="parentalite">
            <div className="container">
                <div className="text-center pb-10">
                    <h4 className="subtitle">Accompagnement</h4>
                    <h4 className="title">Parents : Bien dans sa tête, bien dans ses baskets</h4>
                </div>
                <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center mb-10">
                    <div className="w-1/2 md:w-1/4 md:pr-6 pb-6 md:pb-0 mx-auto transition duration-200 scale-0 opacity-0 about-img">
                        <Image
                            src={IntroIllustration}
                            width={IntroIllustration.width}
                            height={IntroIllustration.height}
                            className="w-full rounded-full"
                            alt="Parents"
                        />
                    </div>
                    <div className="w-full md:w-3/4 md:pl-6 paragraph">
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
                            <strong>Les injonctions sociétales nous poussent à être un superparents</strong>, un super papa, une wondermaman, être au top au boulot, assurer à la maison, être physiquement au top : le défi des parents d'aujourd'hui. <strong>Mais toutes ces injonctions où il faut tout « assurer » dans tous les domaines de vie n'amènent-elles pas à de l’épuisement ou de l’insatisfaction tant dans la vie personnelle que professionnelle ?</strong>
                        </p>

                    </div>
                </div>

                <div className="flex flex-wrap flex-col sm:flex-row justify-center items-start mb-10">
                    <div className="w-full md:w-1/2 md:pl-6 paragraph">
                        <h4 className="subtitle">Aujourd'hui :</h4>
                        <p>
                            Vous êtes (jeunes) parents, parents d'un ou plusieurs enfants
                        </p>
                        <p>
                            OU vous avez repris le travail après un congé maternité, parental,
                        </p>
                        <p>
                            Vous êtes surchargés, épuisés, débordés, fatigués physiquement, moralement, de devoir être sur tous les fronts, aussi bien à la maison qu'au travail,
                        </p>
                        <p>
                            Vous avez le sentiment de ne pas avoir du temps pour vous, pour votre famille, et remettez en question vos choix de vie,
                        </p>
                        <p>
                            Vous n'arrivez plus à trouver le juste équilibre dans votre vie,
                        </p>
                        <p>
                            Vous passez votre temps à courir après le temps,
                        </p>
                        <p>
                            Vous êtes épuisés de tenter de concilier vos différents rôles (mère, femme, professionnelle...).
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-6 paragraph">
                        <h4 className="subtitle">Vous souhaitez :</h4>
                        <p>
                            Vous retrouver en tant que femme, homme, en étant plus à votre écoute,
                        </p>
                        <p>
                            Vous recentrer pour retrouver une vie plus saine et plus sereine,
                        </p>
                        <p>
                            Retrouver confiance en vous pour faire des choix alignés avec votre identité,
                        </p>
                        <p>
                            Retrouver de l'énergie en prenant soin de sa tête & de son corps,
                        </p>
                        <p>
                            Oser être VOUS.
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <h4 className="subtitle text-primary-600">
                        Cet accompagnement vous permettra d'avancer à votre rythme,d'échanger en toute bienveillance, librement & sans jugement, vous donner toutes les clés pour avancer sereinement dans votre vie de parents & femme/homme.
                    </h4>
                </div>
            </div>
        </section>
    )
}