import { useEffect } from 'react';
import Image from "next/image";
import Sabrina from "../public/images/sabrina.webp";
import Sabrina_bio from "../public/images/sabrina_bio.jpg";
import Wave from "../public/images/header-shape.svg";

export default function LongBio() {
    useEffect(() => {
        let delay = 100;
        const reveal = (entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                setTimeout(() => {
                    entry.target.classList.remove('scale-0');
                    observer.unobserve(entry.target);
                }, delay);
                delay += 400;
            });
        };
        const timelineObserver = new IntersectionObserver(reveal, { root: null, threshold: 0.25 });
        document.querySelectorAll('.about-img')?.forEach(li => timelineObserver.observe(li));
    }, []);

    return (
        <section id="bio" className="relative py-120 bio">
            <div className="container">
                <div className="flex flex-wrap flex-col sm:flex-row justify-center pb-120">
                    <div className="w-1/2 md:w-1/4 md:pr-6 mx-auto transition duration-200 scale-0 about-img">
                        <Image
                            src={Sabrina}
                            className="w-full rounded-full"
                            alt="Sabrina Appriou"
                        />
                    </div>
                    <div className="w-full md:w-3/4 md:pl-6">
                        <h4 className="title">Sabrina Appriou</h4>
                        <h5 className="text-3xl text-gray-800 font-bold leading-none mb-12">
                            Fondatrice d'UN PAS DE PLUS
                        </h5>
                        <p>
                            J'ai 38 ans, <strong>maman de 3 enfants</strong> (13, 11 et 3 ans).
                        </p>
                        <p>
                            Je suis passionnée de <strong>course à pied</strong>, sport que je pratique depuis 20 ans déjà. <strong>J'aime les challenges</strong>, que ce soit dans le domaine sportif, professionnel ou personnel. Selon moi, <strong>ils sont sources de motivation</strong> et permettent de nous dépasser.
                        </p>
                        <p>
                            Dynamique, sans cesse en mouvement, <strong>j'adore me fixer des objectifs</strong> et sortir des sentiers battus.
                        </p>
                        <p>
                            <strong>Je suis connectée à la nature</strong>, aux paysages. Cela m'aide à me ressourcer et à nourrir mon intérieur. Je pratique la marche active et suis adepte des courses en milieu naturel.
                        </p>
                        <p>
                            J'accord également une grande importance à <strong>une alimentation saine</strong>.
                        </p>
                        <p><q> <em>L'homme doit harmoniser l'esprit et le corps (Hippocrate)</em> </q></p>
                        <p>
                            Cela fait près de dix ans que je veille à manger bio, local et éthique.Je me sens en adéquation avec ces choix de vie qui font mon identité: une personne en mouvement, spirituellement et physiquement !
                        </p>
                        <p>
                            Au fil des années, <strong>j'ai gagné en sérénité en prenant soin de mon corps et de ma tête</strong>.
                        </p>
                        <p>
                            Mes valeurs : <strong>authentique, intègre et généreuse</strong>.
                        </p>
                    </div>
                </div>
                <div className="justify-center row">
                    <div className="w-full mx-4 lg:w-1/2">
                        <div className="pb-10 text-center section-title">
                            <h4 className="title">Mon parcours</h4>
                        </div>
                    </div>
                </div>
                <div className="pb-120">
                    <p>
                        J'ai débuté ma carrière à l'age de 23 ans dans un grand goupe bancaire. Je voyais pleins d'opprtunités pour les prochaines années. Une envie de gravir les échelons et avoir un confort financier. Tout se passait bien. Après la naissance de mon premier enfant, j'ai changé de poste et de rythme de travail, un travail à 4/5ème pour être disponible pour mon enfant. J'ai continué à garder ce rythme avec l'arrivée de mon deuxième enfant.
                    </p>
                    <p>
                        Cependant, il était parfois difficile de concilier ma vie de femme, de maman, et de femme active : être présente au travail (avec beaucoup de temps de trajet), avoir du temps pour mes enfants, avoir du temps pour moi. J'avais l'impression de courir après la montre, d'être pressée par le temps et de subir ma vie.
                    </p>
                    <p>
                        Ce rythme de vie commençait à m’épuiser. Je me suis sentie tiraillée entre mon envie de réussir ma carrière et celle de voir grandir mes enfants. Ma charge mentale s’accroissait et j’ai commencé à remettre en question mes choix professionnels.
                    </p>
                    <p>
                        Très vite, j’ai dû faire face à l’épuisement, à la lassitude, à l’incompréhension. Désillusion dans mes projets professionnels, contraintes qui se faisaient de plus en plus ressentir, et le sentiment que je subissais cette vie. Je me rends à l'évidence que je dois trouver une solution plus pérenne pour rééquilibrer ma vie.
                    </p>
                    <p>
                        Je comprends que mes choix de vie ne sont plus en phases avec mes valeurs, mon identité, ma personnalité. Je me sens de plus en plus déconnectée de mon milieu professionnel et un besoin de me reconnecter à mes besoins.
                    </p>
                    <p>
                        Je me forme au métier de coaching, un métier d’accompagnement, c’est-à-dire aider les personnes dans le changement, la transition professionnelle et/ou personnelle. Je veux être plus proche de l’humain, aider ces personnes à se réaliser en allant puiser au fond d’elles toutes les ressources dont elles disposent déjà, à se libérer émotionnellement.
                    </p>
                    <p>
                        Je contribue ainsi, à mon niveau, au bien-être des autres. Je me sens alignée avec les valeurs qui me sont chères: authenticité, intégrité, générosité, pugnacité, respect de soi.
                    </p>
                    <p>
                        En tant que coach, j’accompagne aujourd'hui les personnes à faire UN PAS DE PLUS dans leur épanouissement personnel et/ou professionnel pour un changement profond & durable.
                    </p>
                </div>
                <div className="row justify-center relative">
                    <Image
                        src={Sabrina_bio}

                        alt="Sabrina Appriou"
                    />
                    <div className="absolute bottom-0 z-20 w-full h-auto -mb-1 header-shape">
                        <Image
                            src={Wave}
                            alt="wave"
                            layout="responsive"
                            objectFit="fill"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}