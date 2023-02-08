import Image from "next/image";
import Epanouissement from "../../public/images/index/epanouissement.jpg";

import { useEffect } from 'react';
import { reveal } from '../../components/reveal';

export default function Intro() {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll(".about-img"),
            classesToRemove: ["scale-0"]
        });
    }, []);

    return (
        <section id="intro" className="bg-gray-100">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                    <div className="w-2/3 lg:w-1/3 mx-auto transition duration-200 scale-0 about-img">
                        <Image
                            src={Epanouissement}
                            className="w-full rounded-xl"
                            alt="Femme épanouie"
                        />
                    </div>
                    <div className="w-full lg:w-2/3">
                        <p>
                            Commencer à faire <strong>UN PAS</strong>, enclencher la mise ne mouvement, <strong>le premier PAS</strong>, peut parfois être difficile voire compliqué.
                        </p>
                        <p>
                            <strong>Oser faire ce premier PAS</strong> pour accompagner le changement, d'une situation qu'on ne souhaite plus, qu'on ne désire plus.
                        </p>
                        <p>
                            Accompagner le changement marque la fin de quelque chose et une envie de renouveau. Mais comment faire pour accompagner cette phase de transition, cette zone neutre où l'on est dans un questionnement intérieur, où l'on s'interroge ? Comment s'y prendre pour bien accompagner ce changement ?
                        </p>
                        <p className="font-bold text-primary-600">
                            Je vous accompagne à faire un premier PAS et UN PAS DE PLUS vers une vie plus harmonieuse, celle qui VOUS ressemble, à votre image.
                        </p>
                        <p className="font-bold text-tertary-900">
                            Je vous accompagne à faire UN PAS vers une meilleure connaissance de soi, une meilleure conscience de SOI pour être plus aligné avec votre identité & confiant dans vos choix de vie.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}