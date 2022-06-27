import Intro from "../components/intro"
import Layout from "../components/layout"
import Bio from "../components/bio"
import Outro from '../components/outro'
import Image from "next/image"
import running from '../public/images/running.jpg'
import nature from '../public/images/nature.jpg'
import { useEffect } from "react"
import { getData } from "../lib/getData"

import bio1 from "../public/bio/1.jpg";
import bio2 from "../public/bio/2.jpg";
import bio3 from "../public/bio/3.jpg";
import bio4 from "../public/bio/4.jpg";
import bio5 from "../public/bio/5.jpg";

export async function getServerSideProps() {
    const bioData = await getData('bio');
    return {
        props: {
            bioData,
        },
    };
}

export default function AboutMe({ bioData, coachingData }) {
    const slides = [bio1, bio2, bio3, bio4, bio5];

    useEffect(() => {
        const reveal = function (entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                setTimeout(() => {
                    entry.target.classList.remove('translate-x-3/4');
                    entry.target.classList.remove('-scale-0');
                    entry.target.classList.remove('opacity-0');
                    entry.target.classList.add('translate-x-0');
                    observer.unobserve(entry.target);
                }, 100);
            });
        };
        const timelineObserver = new IntersectionObserver(reveal, { root: null, threshold: 0.25 });
        document.querySelectorAll('.slide-in')?.forEach(function (li) {
            timelineObserver.observe(li);
        });
    })

    return (
        <Layout home={false} title={"Ma bio"}>
            <Intro />
            <section className="bg-white overflow-x-hidden">
                <div className="container px-8 mx-auto text-gray-800">
                    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                        Ma bio
                    </h1>
                    <div className="w-full mb-8">
                        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <Bio className="mb-8" />
                    <div className="flex flex-wrap md:flex-row-reverse mb-8">
                        <div className="w-full md:w-1/3 md:pl-6">
                            <Image src={running} className="w-full mx-auto" alt="Personne qui fait du running" />
                        </div>
                        <div className="w-5/6 md:w-2/3 md:pr-6 flex flex-col justify-center">
                            <p className="text-gray-600 mb-8">
                                Passionnée de course à pied, sport que je pratique depuis 20 ans déjà, j’aime les challenges.Que ce soit dans le domaine sportif, professionnel ou personnel.Selon moi, les challenges sont source de motivation et permettent de nous dépasser.
                            </p>
                            <p className="italic mx-auto text-center">Ne limite pas tes défis, défie tes limites</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-8">
                        <div className="w-full md:w-1/3 md:pr-6">
                            <Image src={nature} className="w-full mx-auto" alt="Représentation de la nature" />
                        </div>
                        <div className="w-full md:w-2/3 md:pl-6 flex flex-col justify-center">
                            <p className="text-gray-600 mb-8">
                                Connectée à la nature, aux paysages.Cela m’aide à me ressourcer et à nourrir mon intérieur.Je pratique la marche active et suis adepte des trails, c’est-à-dire des courses en sentier, en milieu naturel.J’accorde également une grande importance à une alimentation saine.
                            </p>
                            <p className="mx-auto text-center"><span className="italic">L’homme doit harmoniser l’esprit et le corps</span> (Hippocrate)</p>
                        </div>
                    </div>
                    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                        Mon parcours
                    </h1>
                    <div className="w-full mb-8">
                        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    {bioData.map(({ id, title, subtitle, contentHtml }) => (
                        <div key={id} className="mb-8">
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-1/3 md:pr-6 slide-in transition duration-300 opacity-0 -scale-0">
                                    <Image src={slides[+id - 1]} className="w-full mx-auto" alt={title} />
                                </div>
                                <div className="w-full md:w-2/3 md:pl-6 text-gray-600 slide-in transition duration-300 opacity-0 translate-x-3/4">
                                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                        {title}
                                    </h3>
                                    <h4 className="text-2xl text-gray-800 font-bold leading-none mb-6">
                                        {subtitle ?? ''}
                                    </h4>
                                    <div className="bio__content"
                                        dangerouslySetInnerHTML={{ __html: contentHtml }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Outro />
        </Layout >
    )
}