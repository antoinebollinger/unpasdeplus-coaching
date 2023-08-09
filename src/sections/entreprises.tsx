'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { reveal } from '../utils/reveal'
import EntreprisesIllustration from '/public/images/entreprise/intro.webp'
import Parents from '/public/images/entreprise/parents.webp'


export default function Entreprises() {
    useEffect(() => {
        reveal({
            collection: Array.from(document.querySelectorAll('.about-img')),
            classesToRemove: ['scale-0', 'opacity-0']
        });
        reveal({
            collection: Array.from(document.querySelectorAll('.paragraph li')),
            classesToRemove: ['opacity-0'],
            delayIncrement: 50
        });
    }, []);

    return (
        <section id="mieux-etre">
            <div className="container">

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                    <div className="w-1/2 md:w-1/4 mx-auto transition duration-200 scale-0 opacity-0 about-img">
                        <Image
                            src={EntreprisesIllustration}
                            width={EntreprisesIllustration.width}
                            height={EntreprisesIllustration.height}
                            className="w-full rounded-full"
                            alt="Entreprises"
                        />
                    </div>
                    <div className="w-full md:w-3/4 paragraph">
                        <p>
                            Vous êtes dirigeant, manager, responsable des ressources humaines, soucieux du bien-être, de la qualité de vie au travail de vos collaborateurs, salariés.
                        </p>
                        <p>
                            <strong>Vous souhaitez agir en faveur de l'équilibre de vie professionnelle / vie personnelle de vos salarié.es et créer les meilleures conditions pour renforcer la collaboration.</strong>
                        </p>
                    </div>
                </div>

                <div className="text-center mb-10">
                    <p className="text-3xl">Les salarié.es d’aujourd’hui sont en demande de plus de sens, d’équilibre et de flexibilité. La prise en compte des besoins individuels est au service de la performance collective.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                    <div className="w-full paragraph">
                        <p>
                            <strong>96% des parents</strong> estiment que l'équilibre des temps est une préoccupation importante ( Observatoire de la Qualité de Vie au Travail) , la conciliation de la vie professionnelle et de la parentalité est un enjeu majeur pour les entreprises.
                        </p>
                        <p>
                            <strong>Mais 63%</strong>
                            des répondants considèrent que les managers doivent s’impliquer davantage en prenant en compte la vie personnelle de leurs collaborateurs
                        </p>
                    </div>
                </div>

                <div className="text-center mb-10">
                    <h4 className="subtitle text-primary-600">
                        Concilier vie professionnelle et vie personnelle est devenu un sujet de préoccupation majeur pour les salariés, et donc pour les dirigeants d’entreprise.
                    </h4>
                </div>

                <div className="mb-10">
                    <p className="text-3xl">L’entreprise a un rôle social à jouer et dispose d’une grande variété de moyens pour proposer à ses salariés-parents des services spécifiques leur offrant plus de sérénité dans la conciliation de leur vie professionnelle et de leur vie personnelle.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-full md:w-2/3 order-last md:order-first">
                        <h4 className="text-4xl text-primary-800 font-bold mb-4">Pourquoi offrir ce coaching à vos salarié.es ?</h4>
                        <ul className="list-disc list-inside paragraph square">
                            <li className="opacity-0">
                                Agir en faveur de la parentalité en entreprise consiste à privilégier un environnement de travail qui permette aux salarié.es de s’épanouir professionnellement et personnellement.
                            </li>
                            <li className="opacity-0">
                                Prendre en compte la parentalité en entreprise, c’est aussi aider vos équipes à concilier leurs vies professionnelle, personnelle et familiale: mieux vivre, mieux travailler, plus sereinement et plus efficacement. C'est un gage de meilleure qualité de vie au travail.
                            </li>
                            <li className="opacity-0">
                                L’équilibre des temps de vie constitue un enjeu essentiel pour les entreprises, en tant que levier d’attractivité, de fidélisation et de performance au quotidien. Cet équilibre est devenu un critère différenciant pour les employeurs.
                            </li>
                            <li className="opacity-0">
                                L’amélioration de la qualité de vie au travail est une condition importante de la performance et de l’engagement des collaborateurs.
                            </li>
                            <li className="opacity-0">
                                Fidéliser vos équipes, valoriser vos salarié.es, gagner en efficacité et en engagement en soutenant la parentalité au travail.
                            </li>
                            <li className="opacity-0">
                                Un coach externe pour offrir un cadre sûr et confidentiel à vos salarié.es coaché.es.
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 mx-auto transition duration-200 scale-0 opacity-0 about-img">
                        <Image
                            src={Parents}
                            width={Parents.width}
                            height={Parents.height}
                            className="w-full"
                            alt="Parents"
                        />
                    </div>
                </div>

                <div className="text-center mb-10">
                    <h4 className="subtitle text-primary-600">
                        <strong>Vous souhaitez faire la différence en soutenant vos salarié.es ?</strong> En les accompagnant dans la transition vers le retour au travail après un congé maternité/paternité ou dans des situations de vulnérabilité.
                    </h4>
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                    <div className="w-full paragraph">
                        <p>
                            <strong>Comment ?</strong>

                        </p>
                        <p>
                            Le coaching individuel est un moyen innovant  d'accompagner vos salarié.es avec des outils efficaces & des méthodes de coaching professionnel. Ils bénéficient d'une écoute extérieure, bienveillante, objective & sans jugement indispensable en période de transition ou de vulnérabilité.
                        </p>
                        <p>
                            Vos salarié.es peuvent ainsi réintégrer le monde professionnel plus sereinement et mieux concilier vie professionnel / vie personnelle.
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <a href="#contact">
                        <button type="submit" className="main-btn gradient-btn focus:outline-none uppercase">Je prends contact pour en savoir plus !<br />Gratuit et sans engagement</button>
                    </a>
                </div>

            </div>
        </section>
    )
}