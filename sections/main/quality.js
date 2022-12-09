import Image from 'next/image';
import EMCC from '../../public/images/emcc.jpg';
import FranceCompetences from '../../public/images/france_competences.jpg';
import Tools from '../../public/images/tools.jpg';
import Ethics from '../../public/images/ethics.jpg';

import { useEffect } from 'react';
import { reveal } from '../../components/reveal';

export default function Quality() {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll(".quality-ref"),
            classesToRemove: ["scale-0", "opacity-0"],
            delayIncrement: 200
        });
        reveal({
            collection: document.querySelectorAll(".quality-step"),
            classesToRemove: ["scale-0", "opacity-0"],
            delayIncrement: 200
        });
    }, []);

    const ref = (img, text) => {
        return (
            <div className="w-full md:w-1/4 pb-6 md:pb-0 flex flex-col items-center ">
                <div className="quality-ref w-1/2 sm:w-3/4 pb-4 flex justify-center transition duration-300 opacity-0 scale-0">
                    <Image
                        src={img}
                        className="w-3/4 rounded-full"
                        alt="Illustration"
                    />
                </div>
                <h5 className="text-center" dangerouslySetInnerHTML={{ __html: text }} />
            </div >
        )
    }

    return (
        <section id="quality" className="bg-gray-200">
            <div className="container">
                <div className="text-center pb-10">
                    <h4 className="title">Un accompagnement de qualité</h4>
                    <q className="text-lg italic">Avec professionnalisme, éthique et bienveillance</q>
                </div>
                <div className="pb-10 text-center section-title">
                    <h4 className="subtitle">Des références reconnues :</h4>
                </div>
                <div className="flex flex-wrap flex-col sm:flex-row justify-center items-start pb-20">
                    {ref(
                        EMCC,
                        "Accréditation EMCC – labélisation EMCC (European Mentoring Coaching Council)"
                    )}
                    {ref(
                        FranceCompetences,
                        "Coach professionnel certifié RNCP 7 - Linkup Coaching"
                    )}
                    {ref(
                        Tools,
                        "Outils & méthodes de coaching"
                    )}
                    {ref(
                        Ethics,
                        "Charte déontologique du coach"
                    )}
                </div>
                <div className="pb-10 text-center section-title">
                    <h4 className="subtitle">Un accompagnement et un suivi personnalisé :</h4>
                </div>
                <div className="flex gap-5 items-stretch justify-center mb-10">
                    {[
                        "Séances individuelles<br />de 1h-1h15",
                        "Bilan<br />à mi-parcours",
                        "Bilan<br />en fin de parcours"
                    ].map((e, i) => (
                        <div className="quality-step w-full lg:w-1/2 py-10 text-center bg-tertary-900 text-white rounded shadow-lg transition duration-300 opacity-0 scale-0" dangerouslySetInnerHTML={{ __html: e }} key={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}