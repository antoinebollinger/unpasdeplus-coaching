import Image from 'next/image';
import Who from "../../public/images/who.jpg";
import What from "../../public/images/what.jpg";
import Step1 from "../../public/images/mieux-etre/1.jpg";
import Step2 from "../../public/images/mieux-etre/2.jpg";
import Step3 from "../../public/images/mieux-etre/3.jpg";
import Step4 from "../../public/images/mieux-etre/4.jpg";

import { useEffect } from 'react';
import { reveal } from '../../components/reveal';

export default function MieuxEtre() {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll(".coaching-step"),
            classesToRemove: ["scale-0", "opacity-0"],
            delayIncrement: 200
        });

        reveal({
            collection: document.querySelectorAll(".animated-img"),
            classesToRemove: ["scale-0", "opacity-0"]
        });
    }, []);

    const mySteps = (
        img, title, subtitle, list
    ) => {
        return (
            <div className="flex-1 w-full md:w-1/4 mb-4">
                <div className="coaching-step relative h-full z-10 p-6 overflow-hidden bg-white rounded shadow-lg flex flex-col transition duration-300 opacity-0">
                    <div className="flex-1">
                        <Image
                            src={img}
                            alt="Illustration"
                            className="mb-2"
                        />
                        <div className="text-center mb-4">
                            <h5 className="text-2xl">{title}</h5>
                        </div>
                        <div>
                            <p dangerouslySetInnerHTML={{ __html: subtitle }} />
                            <ul className="list-disc list-inside" dangerouslySetInnerHTML={{ __html: list }} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className="relative pb-120 coaching">
            <div className="container">
                <div className="text-center pb-16 lg:pb-120">
                    <h4 className="title text-tertary-900">
                        <span>Une meilleure connaissance de soi</span>
                    </h4>
                    <h4 className="subtitle">
                        Un cheminement vers une meilleure connaissance, une meilleure conscience de soi pour être en harmonie avec sa tête et son corps.
                    </h4>
                </div>

                <div className="lg:max-w-4xl mx-auto pb-16 lg:pb-120">
                    <div className="flex flex-col md:flex-row gap-5 items-center pb-10">
                        <div className="animated-img w-1/2 md:w-1/4 transition duration-300 opacity-0 scale-0">
                            <Image
                                src={Who}
                                width={Who.width}
                                height={Who.height}
                                className="w-full rounded-full"
                                alt="Illustration"
                            />
                        </div>
                        <div className="w-3/4">
                            <p className="text-xl mb-2">
                                Vous avez un <strong>rapport difficile avec votre corps</strong> et cela a un fort impact sur votre image & estime de soi ?
                            </p>
                            <p className="text-xl mb-2">
                                <strong>Vous êtes frustré</strong> de ne pas obtenir les résultats escomptés de vos efforts, de ce que vous avez entrepris ?
                            </p>
                            <p className="text-xl mb-2">
                                Vous ressentez <strong>le besoin d'un changement</strong> plus profond et plus durable ?
                            </p>
                        </div>
                    </div>
                    <div className="text-center">
                        <h4 className="subtitle text-primary-600">
                            Avec ce coaching, vous allez retrouver du sens dans vos actions, vous réconciliez et vivre une vie harmonieuse en adéquation avec votre tête et votre corps !
                        </h4>
                    </div>
                </div>

                <div className="text-center pb-16 lg:pb-120">
                    <h4 className="title text-tertary-900">
                        <span>Ma transition dans le mieux-être</span>
                    </h4>
                    <h4 className="subtitle">
                        Les éléments-clés du coaching de transition de vie
                    </h4>
                </div>

                <div className="flex flex-col md:flex-row gap-5 justify-center items-stretch pb-16 lg:pb-120">
                    {mySteps(
                        Step1,
                        "1. Développer son unicité",
                        "J'apprends à mieux me connaitre, à développer mon unicité pour mieux avancer.",
                        "<li>Approfondir sa personnalité, son fonctionnement pour développer sa zone de mieux-être</li><li>Prendre le temps d'être à son écoute</li><li>Prendre conscience de son potentiel</li><li>Acquérir de la confiance en valorisant ses forces, ses qualités</li><li>Lever les freins et les blocages</li>"
                    )}
                    {mySteps(
                        Step2,
                        "2. Un objectif source de motivation",
                        "Une fois que j'ai développé mon unicité, je vous accompagne dans la fixation d'objectif, qui sera source de motivation.",
                        "<li>Meilleure définition de votre objectif qui fera sens avec votre personnalité</li><li>Une source de motivation en définissant des indicateurs de réussite</li><li>Un fil conducteur tout au long du coaching</li>"
                    )}
                    {mySteps(
                        Step3,
                        "3. Accompagner le changement grâce au cercle vertueux de la mise en mouvement physique",
                        "La mise en mouvement physique contribue à faire un PAS dans le mieux-être et plus bénéfique encore, à faire un PAS de plus dans le mieux-être intérieur.",
                        "<li>Être conscient de sa force, puissance, capacité pour exploiter tout son potentiel</li><li>Développer une meilleure image de soi</li><li>Reconnecter le corps & l'esprit pour faire une unique force</li><li>Se sentir plus à l'aise avec votre image</li><li>Respecter ses besoins & être plus à l'écoute de ses sensations</li>"
                    )}
                    {mySteps(
                        Step4,
                        "4. Transformation & Autonomie",
                        " Expérimenter , c'est être en phase d'apprentissage pour se réajuster et ainsi se transformer durablement.<br/>Développer son mindset, son état d'esprit vers le mieux-être pour voir l'avenir en toute sérénité.<br/>Vous repartez avec un changement profond avec de solides bases :",
                        "<li>Une meilleure régulation des pensées & émotions</li><li>Un développement de votre résilience</li><li>Une meilleure écoute de ses besoins avec plus de lâcher prise</li>"
                    )}
                </div>

                <div className="lg:max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h4 className="subtitle">
                            Ce que le coaching inclut :
                        </h4>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 items-center pb-10">
                        <div className="animated-img w-1/2 md:w-1/4 transition duration-300 opacity-0 scale-0">
                            <Image
                                src={What}
                                width={What.width}
                                height={What.height}
                                className="w-full rounded-full"
                                alt="Illustration"
                            />
                        </div>
                        <div className="w-full md:w-3/4">
                            <ul className="list-disc list-inside">
                                <li>
                                    10 sessions de coaching de 1h – 1h15 avec tous les outils & méthodes de coaching en présentiel, visio, téléphone selon votre choix.
                                </li>
                                <li>
                                    Des séances en coaching outdoor pour cultiver la mise en mouvement et sortir de votre cadre habituel.
                                </li>
                                <li>
                                    Un suivi de 4-6mois.
                                </li>
                                <li>
                                    Suivi personnalisé: en inter-séances, nous restons en contact par message / vocal, le moyen le plus adapté à votre besoin pour avancer sereinement.
                                </li>
                                <li>
                                    Bilan en mi-parcours et en fin de parcours pour évaluer le chemin parcouru, les indicateurs préalablement définis.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}