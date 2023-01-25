import Image from "next/image";
import StepsImg from "../../public/images/steps_rounded.jpg";

import { useEffect } from "react";
import { reveal } from '../../components/reveal';

export default function Steps() {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll(".single-step"),
            classesToRemove: ["opacity-0", "translate-y-3/4"]
        });

        reveal({
            collection: document.querySelectorAll(".about-img"),
            classesToRemove: ["scale-0"]
        });
    }, []);

    const mySteps = (
        title, text
    ) => {
        return (
            <div className="single-step transition opacity-0 translate-y-3/4">
                <p className="text-3xl text-gray-800 font-bold leading-none mb-3">
                    {title}
                </p>
                <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        );
    }

    return (
        <section id="steps">
            <div className="container">
                <div className="text-center pb-10">
                    <h4 className="title">Les 5 étapes-clés du parcours d'accompagement</h4>
                </div>
                <div className="lg:max-w-4xl mx-auto">
                    <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center">
                        <div className="w-1/2 md:w-1/2 pb-6 md:pb-0 md:pr-6 mx-auto transition duration-200 scale-0 about-img">
                            <Image
                                src={StepsImg}
                                className="w-full rounded-full"
                                alt="Les étapes du parcours"
                            />
                        </div>
                        <div className="w-full md:w-1/2 md:pl-6 flex flex-col gap-5">
                            {mySteps(
                                "1. Introspection",
                                "On part de vous ! Comprendre son fonctionnement, ses schémas de pensées, ses freins actuels, ses blocages."
                            )}
                            {mySteps(
                                "2. Exploration",
                                "Clarifier l'objectif aligné à votre identité, votre personnalité."
                            )}
                            {mySteps(
                                "3. Validation",
                                "On valide ensemble votre objectif."
                            )}
                            {mySteps(
                                "4. Plan d'action",
                                "On met en place un plan d'action pour un accompagnement vers la mise en mouvement."
                            )}
                            {mySteps(
                                "5. Autonomie",
                                "Développer son mindset, un état d'esprit vers le mieux-être pour voir l'avenir en toute sérénité."
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}