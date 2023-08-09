'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { reveal } from '../utils/reveal'
import Career1 from '/public/images/qui-je-suis/1.webp'
import Career2 from '/public/images/qui-je-suis/2.webp'
import Career3 from '/public/images/qui-je-suis/3.webp'

export default function MonParcours() {
    useEffect(() => {
        reveal({
            collection: Array.from(document.querySelectorAll('.career-step')),
            classesToRemove: ['translate-x-3/4', 'scale-0', 'opacity-0'],
            classesToAdd: ['translate-x-0'],
        });
    }, []);

    const list = (img, text: string) => {
        return (
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                <div className="w-1/2 md:w-1/5 mx-auto transition duration-300 opacity-0 scale-0 career-step">
                    <Image
                        src={img}
                        width={img.width}
                        height={img.height}
                        className="w-full rounded-full"
                        alt="Illustration"
                    />
                </div>
                <div className="w-full md:w-3/4 transition duration-300 opacity-0 translate-x-3/4 career-step">
                    <p className="text-lg text-gray-900" dangerouslySetInnerHTML={{ __html: text }} />
                </div>
            </div>
        )
    }

    return (
        <section id="mon-parcours">
            <div className="container">
                <div className="text-center pb-10">
                    <h4 className="title">Mon parcours</h4>
                    <p className="text-lg italic">Ma trajectoire de vie raconte qui je suis et ce que je peux vous apporter.</p>
                </div>
                <div className="lg:max-w-5xl mx-auto">
                    {list(
                        Career1,
                        "J'ai débuté ma carrière à l'age de 23 ans dans un grand goupe bancaire.Je voyais pleins d'opprtunités pour les prochaines années. Une envie de gravir les échelons avec un confort financier à la clé. Tout se passait bien. Après la naissance de mon premier enfant, j'ai changé de poste et de rythme de travail, être au 4/5ème pour trouver un équilibre de vie."
                    )}
                    {list(
                        Career2,
                        "Cependant,<strong> difficile de concilier vie pro et vie perso</strong> : être présente au travail, avoir du temps pour mes enfants, avoir du temps pour moi. J'avais l'impression de courir après la montre, d'être pressée par le temps et de <strong>subir ma vie</strong>.<br/>Ce rythme de vie commençait à m’épuiser. Je me suis sentie tiraillée entre mon envie de réussir ma carrière et celle de voir grandir mes enfants."
                    )}
                    {list(
                        Career3,
                        "Ma <strong>charge mentale</strong> s’accroissait et j’ai commencé à remettre en question mes choix professionnels. Face l'épuisement professionnel, la lassitude, je me rends à l'évidence : je dois trouver une solution plus pérenne. A cela s'ajoute une <strong>quête de sens</strong>, et ce profond besoin de me reconnecter à <strong>mes valeurs</strong>, <strong>mon identité</strong>, <strong>ma personnalité</strong>."
                    )}
                </div>
                <div className="lg:max-w-5xl mx-auto">
                    <p className="text-lg text-gray-900">
                        Parce que ce parcours , c'est aussi le parcours d'autres parents, mamans, papas qui tentent de trouver le meilleur équilibre en prenant en compte les <strong>responsabilités familiales et professionnelles</strong>.
                        <br />
                        <br />
                        Parce que je sais qu'on a tous des ressources en nous mais parfois la <strong>charge émotionnelle</strong> nous <strong>empêche d'avancer</strong>, de nous épanouir. Avoir une meilleure de <strong>conscience de soi</strong>, <strong>connaissance de soi</strong> aide à <strong>changer nos schémas de pensée</strong>.
                        <br />
                        <br />
                        Parce que faire un métier qui me passionne et qui a du sens pour moi, me former au coaching professionnel était une évidence. Exercer le <strong>métier</strong> avec <strong>éthique</strong> et <strong>déontologie</strong> respectant la charte déontologique du coach.
                        <br />
                        <br />
                        C'est donc l'envie de contribuer, à mon niveau, au bien-être des autres que <strong>Un pas de plus</strong> voit le jour.
                    </p>
                </div>
            </div>
        </section>
    )
}