import Intro from "../components/intro"
import Layout from "../components/layout"
import Outro from '../components/outro'
import Image from "next/image"
import sabrina from '../public/images/sabrina.webp'
import running from '../public/images/running.jpg'
import nature from '../public/images/nature.jpg'
import { useEffect } from "react"

export default function Bio() {
    useEffect(() => {
        const reveal = function (entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                setTimeout(() => {
                    entry.target.classList.remove('translate-x-3/4');
                    entry.target.classList.remove('lg:-translate-x-3/4');
                    entry.target.classList.remove('opacity-0');
                    entry.target.classList.add('translate-x-0');
                    observer.unobserve(entry.target);
                }, 100);
            });
        };
        const timelineObserver = new IntersectionObserver(reveal, { root: null, threshold: 0.1 });
        document.querySelectorAll('.slide-in')?.forEach(function (li) {
            timelineObserver.observe(li);
        });
    })

    return (
        <Layout home={false} title={"Ma bio"}>
            <Intro className="" />
            <article className="pt-24 bg-white overflow-x-hidden">
                <div className="container max-w-5xl mx-auto text-gray-800">
                    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                        Ma bio
                    </h1>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <div className="flex flex-wrap flex-col sm:flex-row content-center">
                        <div className="w-full w-1/2 mx-auto md:w-1/4 p-6">
                            <Image
                                src={sabrina}
                                className="w-full mx-auto rounded-full"
                                alt="Sabrina Appriou"
                            />
                        </div>
                        <div className="w-full sm:w-3/4 p-6">
                            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                Sabrina Appriou
                            </h3>
                            <p className="text-gray-600 mb-8">
                                Fondatrice d'UN PAS DE PLUS - Coach certifiée Linkup Coaching
                            </p>
                            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                Ma mission
                            </h3>
                            <p className="text-gray-600 mb-8">
                                J'accompagne les personnes à faire UN PAS DE PLUS pour un changement profond et durable dans leur vie personnelle et/ou professionnelle.
                            </p>
                            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                Ma bio
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Cela fait plus de dix ans que je veille à manger bio, local et éthique.Je me sens en adéquation avec ces choix de vie qui font mon identité: une personne en mouvement, spirituellement et physiquement !<br />Ainsi, au fil des années, j’ai gagné en sérénité en prenant soin de mon corps et de ma tête.<br />Cela n’a pas toujours été le cas !Découvrez mon parcours pour comprendre comment je suis parvenue à m’épanouir et à devenir la personne que je suis aujourd’hui.
                            </p>
                        </div>
                    </div>
                    <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
                    <div className="flex flex-wrap sm:flex-row-reverse">
                        <div className="w-full sm:w-1/2 p-6">
                            <Image src={running} className="w-full mx-auto" alt="Personne qui fait du running" />
                        </div>
                        <div className="w-5/6 sm:w-1/2 p-6 flex flex-col justify-center">
                            <p className="text-gray-600 mb-8">
                                Passionnée de course à pied, sport que je pratique depuis 20 ans déjà, j’aime les challenges.Que ce soit dans le domaine sportif, professionnel ou personnel.Selon moi, les challenges sont source de motivation et permettent de nous dépasser.
                            </p>
                            <p className="italic mx-auto text-center">Ne limite pas tes défis, défie tes limites</p>
                        </div>
                    </div>
                    <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
                    <div className="flex flex-wrap">
                        <div className="w-full sm:w-1/2 p-6">
                            <Image src={nature} className="w-full mx-auto" alt="Représentation de la nature" />
                        </div>
                        <div className="w-5/6 sm:w-1/2 p-6 flex flex-col justify-center">
                            <p className="text-gray-600 mb-8">
                                Connectée à la nature, aux paysages.Cela m’aide à me ressourcer et à nourrir mon intérieur.Je pratique la marche active et suis adepte des trails, c’est-à-dire des courses en sentier, en milieu naturel.J’accorde également une grande importance à une alimentation saine.
                            </p>
                            <p className="mx-auto text-center"><span className="italic">L’homme doit harmoniser l’esprit et le corps</span> (Hippocrate)</p>
                        </div>
                    </div>
                    <hr className="border-b border-gray-100 opacity-25 my-0 py-0 mb-8" />
                    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                        Mon parcours
                    </h1>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <div className="slide-in transition duration-300 opacity-0 translate-x-3/4 p-6">
                        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3 text-center">
                            L'entreprise
                        </h3>
                        <h4 className="text-2xl text-gray-800 font-bold leading-none mb-6 text-center">
                            Mes débuts, ma carrière
                        </h4>
                        <div className="text-gray-600">
                            <p className="mb-2">
                                J'ai intégré le monde de l'entreprise après mes études à l'âge de 23 ans. J'ai évolué dans différents services avec des environnements très différents.Je devais m'adapter à ces changements et faire preuve d'une capacité d'adaptation.
                            </p>
                            <p className="mb-2">
                                Cela passait parfois par des concessions, faire des choix pas toujours simple...Mais je le DEVAIS pour évoluer professionnellement !Comme je passait beaucoup de temps dans les transports, au travail, à s'inscrire à des formations internes pour espérer évoluer ! Donc, beaucoup d'investissement personnel pour « Réussir » professionnellement.
                            </p>
                        </div>
                    </div>
                    <div className="slide-in transition duration-300 opacity-0 translate-x-3/4 lg:-translate-x-3/4 p-6">
                        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3 text-center">
                            Vie pro / vie perso
                        </h3>
                        <h4 className="text-2xl text-gray-800 font-bold leading-none mb-6 text-center">
                            Comment les conciliers?
                        </h4>
                        <div className="text-gray-600">
                            <p className="mb-2">
                                Mais ce rythme de vie commençait à m’épuiser.Je me suis sentie tiraillée entre mon envie de réussir ma carrière et celle de voir grandir mes enfants.Ma charge mentale s’accroissait et j’ai commencé à remettre en question mes choix professionnels.
                            </p>
                            <p className="mb-2">
                                Très vite, j’ai dû faire face à l’épuisement, à la lassitude, à l’incompréhension.Désillusion dans mes projets professionnels, contraintes qui se faisaient de plus en plus ressentir, et le sentiment que je subissais cette vie.Je me rends donc à l'évidence que je dois trouver une solution plus pérenne pour rééquilibrer ma vie.
                            </p>
                            <p className="mb-2">
                                Je comprends que mes choix de vie ne sont plus alignés à <span className="font-bold">mes valeurs</span>, <span className="font-bold">mon identité</span>, <span className="font-bold">ma personnalité</span>.Je me sens de plus en plus déconnecté de mon milieu professionnel et un besoin de me reconnecter à mes besoins.
                            </p>
                        </div>
                    </div>
                    <div className="slide-in transition duration-300 opacity-0 translate-x-3/4 p-6">
                        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3 text-center">
                            La trentaine
                        </h3>
                        <h4 className="text-2xl text-gray-800 font-bold leading-none mb-6 text-center">
                            Transition de vie: remise en question, nouveau cap
                        </h4>
                        <div className="text-gray-600">
                            <p className="mb-2">
                                Arrivée à la trentaine, je ne parvenais plus à trouver ma place dans ces choix de vie qui ne me correspondait pas du tout.Je me sentais en perpétuel conflit avec moi-même et surtout prisonnière de ma vie professionnelle.Je devais faire semblant que tout allait bien, trouver la motivation pour faire des choses qui n’avaient aucun sens pour moi...Difficile.
                            </p>
                            <p className="mb-2">
                                Mais à qui en parler?Avais-je vraiment envie d’entendre l’avis des autres?De personnes qui ne savaient pas ce que je ressentais au fond de moi?Pour entendre des « tu te plains alors que tu as une situation confortable ! » ou des « Démissionne et trouve autre chose ! »?Facile à dire !
                            </p>
                            <p className="mb-2">
                                Alors comment trouver une issue à cette situation qui, effectivement, était à tout point de vue pourtant « confortable »: salariée d’une grande entreprise depuis près de 10 ans, 13<sup>ème</sup> mois, CE, salaire?Une bonne situation.Stable.Alors pourquoi chercher à changer?Surtout avec cette ancienneté et des enfants en bas âge à charge !
                            </p>
                        </div>
                    </div>
                    <div className="slide-in transition duration-300 opacity-0 translate-x-3/4 lg:-translate-x-3/4 p-6">
                        <h4 className="text-2xl text-gray-800 font-bold leading-none mb-6 text-center">
                            Ma quête de sens
                        </h4>
                        <div className="text-gray-600">
                            <p className="mb-2">
                                Je décide alors de me prendre main.Cela passe par un accompagnement afin que l’on m’aide à donner un autre sens à ma vie professionnelle et, pourquoi pas, à s’engager dans un changement de vie.
                            </p>
                            <p className="mb-2">
                                Des idées émergent et je comprends qu'il est possible d'avoir une vie harmonieuse alignée à notre état intérieur.
                            </p>
                            <p className="mb-2">
                                À l’issue de cet accompagnement, j’ai compris que je pourrais faire de belle chose en étant moi-même et en étant à l’écoute de mes besoins.Je fonce alors, avec pour objectif de redonner un sens à ma vie!

                            </p>
                        </div>
                    </div>
                    <div className="slide-in transition duration-300 opacity-0 translate-x-3/4 p-6">
                        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3 text-center">
                            Concrétisation de mon projet
                        </h3>
                        <h4 className="text-2xl text-gray-800 font-bold leading-none mb-6 text-center">
                            Ma nouvelle vie
                        </h4>
                        <div className="text-gray-600">
                            <p className="mb-2">
                                J’ai évidemment des moments de doutes.
                            </p>
                            <p className="mb-2">
                                « Vais-je y arriver ? », « Est-ce que ce n’est pas trop risqué ? ».
                            </p>
                            <p className="mb-2">
                                Mais finalement, je me dis: « Qu’est-ce que je risque ? ».
                            </p>
                            <p className="mb-2">
                                Plusieurs sentiments se mêlent. L’excitation de ce changement de vie, la peur d’échouer, que cela ne fonctionne pas. Car j’ai tout de même besoin de me sentir en sécurité. Mais finalement, à ce moment-là de ma vie, je ne l’étais pas. Je ne me sentais plus en sécurité intérieurement. Je réalise donc que je suis prête pour le changement.
                            </p>
                            <p className="mb-2">
                                Je forge mon mental, bien décidée à trouver le chemin de la sérénité : « Je ne perds jamais. Soit je gagne, soit j’apprends » (Nelson Mandela).
                            </p>
                            <p className="mb-2">
                                Je me forme au métier de coaching, un métier d’accompagnement, c’est-à-dire aider les personnes dans le changement, la transition professionnelle et/ou personnelle. Je veux être plus proche de l’humain, aider ces personnes à se réaliser en allant puiser au fond d’elles toutes les ressources dont elles disposent déjà, à se libérer émotionnellement.
                            </p>
                            <p className="mb-2">
                                Je contribue ainsi, à mon niveau, au bien-être des autres. Je me sens alignée avec les valeurs qui me sont chères: authenticité, intégrité, générosité, pugnacité, respect de soi.
                            </p>
                            <p className="mb-2">
                                En tant que coach, j’accompagne aujourd'hui les personnes vers UN PAS DE PLUS dans la connaissance de soi pour révéler tout leur potentiel.
                            </p>
                        </div>
                    </div>
                </div>
            </article>
            <Outro />
        </Layout >
    )
}