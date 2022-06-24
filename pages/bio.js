import Intro from "../components/intro"
import Layout from "../components/layout"
import Bio from "../components/bio"
import Outro from '../components/outro'
import Image from "next/image"
import running from '../public/images/running.jpg'
import nature from '../public/images/nature.jpg'
import { useEffect, useState } from "react"

import { getSortedPostsData, getPostData } from "../lib/bio"

import bio1 from "../public/bio/1.jpg";
import bio2 from "../public/bio/2.jpg";
import bio3 from "../public/bio/3.jpg";
import bio4 from "../public/bio/4.jpg";
import bio5 from "../public/bio/5.jpg";

export async function getServerSideProps() {
    const allPostsData = getSortedPostsData();
    allPostsData.map(async (post) => {
        const postData = await getPostData(post.id);
        return Object.assign(post, { ...postData })
    });
    return {
        props: {
            allPostsData,
        },
    };
}

export default function AboutMe({ allPostsData }) {
    const [render, setRender] = useState(false);
    const slides = [bio1, bio2, bio3, bio4, bio5];

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
        setRender(true);
        console.log(slides);
    }, [])

    return (
        <Layout home={false} title={"Ma bio"}>
            <Intro />
            <section className="bg-white overflow-x-hidden">
                <div className="container px-8 mx-auto text-gray-800">
                    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                        Ma bio
                    </h1>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <Bio />
                    <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
                    <div className="flex flex-wrap sm:flex-row-reverse">
                        <div className="w-full sm:w-1/3 pl-6">
                            <Image src={running} className="w-full mx-auto" alt="Personne qui fait du running" />
                        </div>
                        <div className="w-5/6 sm:w-2/3 pr-6 flex flex-col justify-center">
                            <p className="text-gray-600 mb-8">
                                Passionnée de course à pied, sport que je pratique depuis 20 ans déjà, j’aime les challenges.Que ce soit dans le domaine sportif, professionnel ou personnel.Selon moi, les challenges sont source de motivation et permettent de nous dépasser.
                            </p>
                            <p className="italic mx-auto text-center">Ne limite pas tes défis, défie tes limites</p>
                        </div>
                    </div>
                    <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
                    <div className="flex flex-wrap">
                        <div className="w-full sm:w-1/3 pr-6">
                            <Image src={nature} className="w-full mx-auto" alt="Représentation de la nature" />
                        </div>
                        <div className="w-5/6 sm:w-2/3 pl-6 flex flex-col justify-center">
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
                    {allPostsData.map(({ id, title, subtitle, contentHtml }) => (
                        <div className="p-6" key={id} id={`id_${slides[+id - 1].src}`}>
                            <div className="flex flex-column lg:flex-row">
                                <div className="w-1/3 pr-6">
                                    <Image src={slides[+id - 1]} className="w-full mx-auto" alt={title} />
                                </div>
                                <div className="w-2/3 pl-6 text-gray-600 ">
                                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                        {title}
                                    </h3>
                                    <h4 className="text-2xl text-gray-800 font-bold leading-none mb-6">
                                        {subtitle ?? ''}
                                    </h4>
                                    <div className="slide-in transition duration-300 opacity-0 translate-x-3/4 bio__content"
                                        dangerouslySetInnerHTML={{ __html: render ? contentHtml : '' }}>
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