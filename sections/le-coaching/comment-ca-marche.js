import Image from "next/image";
import How1 from '../../public/images/how/1.jpg';
import How2 from '../../public/images/how/2.jpg';
import How3 from '../../public/images/how/3.jpg';

import { useEffect } from "react";
import { reveal } from "../../components/reveal";

export default function How() {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll('.how-step'),
            classesToRemove: ["translate-x-3/4", "scale-0", "opacity-0"],
            classesToAdd: ["translate-x-0"],
        });
    }, []);

    const howStep = (img, title, subtitle, text) => {
        return (
            <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center mt-8">
                <div className="how-step w-1/2 md:w-1/4 md:pr-6 pb-6 md:pb-0 mx-auto transition duration-300 opacity-0 scale-0">
                    <Image
                        src={img}
                        className="w-full rounded-full"
                        alt="Entretien préalable"
                    />
                </div>
                <div className="how-step w-full md:w-3/4 md:pl-6 p-2 bg-white rounded shadow-lg transition duration-300 opacity-0 translate-x-3/4">
                    <p className="text-xl font-semibold text-gray-900">{title}</p>
                    <p className="text-lg text-gray-700 pb-5">{subtitle}</p>
                    <div dangerouslySetInnerHTML={{ __html: text }} />
                </div>
            </div>
        )
    }

    return (
        <section id="comment-ca-marche">
            <div className="container">
                <div className="text-center pb-10">
                    <h4 className="title">Comment ça se passe ?</h4>
                </div>
                <div className="lg:max-w-3xl mx-auto">
                    <div>
                        {howStep(
                            How1,
                            "Entretien préalable",
                            "Gratuit et sans engagement",
                            `<ul class="list-disc list-inside">
                                <li>Un premier RDV pour faire connaissance</li>
                                <li>Aborder votre demande, expliquer le coaching, ma méthodologie et les principes d'actions</li>
                            </ul>`
                        )}
                        {howStep(
                            How2,
                            "Les séances",
                            "Plusieurs possibilités selon vos dispos et envies",
                            `<ul class="list-disc list-inside">
                                <li>Présentiel</li>
                                <li>Visio</li>
                                <li>Téléhpone</li>
                            </ul>`
                        )}
                        {howStep(
                            How3,
                            "Le +",
                            "Coaching outdoor",
                            "Des séances de coaching outdoor pendant le parcours de coaching. A l'extérieur de votre cadre habituel, en pleine nature, pour cultiver la mise en mouvement."
                        )}
                    </div>
                </div>
            </div>
        </section >
    )
}