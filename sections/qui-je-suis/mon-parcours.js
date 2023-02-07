import Image from 'next/image';
import Career1 from "../../public/images/career/1.webp";
import Career2 from "../../public/images/career/2.webp";
import Career3 from "../../public/images/career/3.webp";
import Career4 from "../../public/images/career/4.webp";

import { useEffect } from 'react';
import { reveal } from '../../components/reveal';

export default function Career() {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll(".career-step"),
            classesToRemove: ["translate-x-3/4", "scale-0", "opacity-0"],
            classesToAdd: ["translate-x-0"],
        });
    }, []);

    const list = (img, text) => {
        return (
            <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center mb-8">
                <div className="career-step w-1/2 md:w-1/5 md:pr-6 mx-auto transition duration-300 opacity-0 scale-0">
                    <Image
                        src={img}
                        width={img.width}
                        height={img.height}
                        className="w-full rounded-full"
                        alt="Illustration"
                    />
                </div>
                <div className="career-step w-full md:w-3/4 md:pl-6 p-2 transition duration-300 opacity-0 translate-x-3/4">
                    <p className="text-lg text-gray-900" dangerouslySetInnerHTML={{ __html: text }} />
                </div>
            </div>
        )
    }

    return (
        <section id="career" className="bg-gray-100">
            <div className="container">
                <div className="text-center pb-10">
                    <h4 className="title">Mon parcours</h4>
                    <p className="text-lg italic">Ma trajectoire de vie raconte qui je suis et ce que je peux vous apporter.</p>
                </div>
                <div className="lg:max-w-full mx-auto">
                    {list(
                        Career1,
                        "J'ai débuté ma carrière à l'age de 23 ans dans un grand goupe bancaire.Je voyais pleins d'opprtunités pour les prochaines années. Une envie de gravir les échelons et avoir un confort financier. Tout se passait bien. Après la naissance de mon premier enfant, j'ai changé de poste et de rythme de travail, un travail à 4 / 5ème pour être disponible pour mon enfant.J'ai continué à garder ce rythme avec l'arrivée de mon deuxième enfant."
                    )}
                    {list(
                        Career2,
                        "Cependant, il était parfois difficile de concilier ma vie de femme, de maman, et de femme active : être présente au travail (avec beaucoup de temps de trajet), avoir du temps pour mes enfants, avoir du temps pour moi. J'avais l'impression de courir après la montre, d'être pressée par le temps et de subir ma vie.<br/>Ce rythme de vie commençait à m’épuiser. Je me suis sentie tiraillée entre mon envie de réussir ma carrière et celle de voir grandir mes enfants. Ma charge mentale s’accroissait et j’ai commencé à remettre en question mes choix professionnels."
                    )}
                    {list(
                        Career3,
                        "Très vite, j’ai dû faire face à l’épuisement, à la lassitude, à l’incompréhension. Désillusion dans mes projets professionnels, contraintes qui se faisaient de plus en plus ressentir, et le sentiment que je subissais cette vie. Je me rends à l'évidence que je dois trouver une solution plus pérenne pour rééquilibrer ma vie.<br/>A ce moment-là, je comprends que mes choix de vie ne sont plus en phases avec mes valeurs, mon identité, ma personnalité. Je me sens de plus en plus déconnectée de mon milieu professionnel et un besoin de me reconnecter à mes besoins."
                    )}
                    {list(
                        Career4,
                        "Je me forme au métier de coaching, un métier d’accompagnement, c’est-à-dire aider les personnes dans le changement, la transition professionnelle et/ou personnelle. Je veux être plus proche de l’humain, aider ces personnes à se réaliser en allant puiser au fond d’elles toutes les ressources dont elles disposent déjà, à se libérer émotionnellement.<br/>Je contribue ainsi, à mon niveau, au bien-être des autres. Je me sens alignée avec les valeurs qui me sont chères: authenticité, intégrité, générosité, pugnacité, respect de soi."
                    )}
                </div>
            </div>
        </section>
    )
}