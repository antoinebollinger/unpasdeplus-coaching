import Foot from "../components/foot";
import { useEffect } from "react";
import Image from "next/image";

import rightFoot from "../public/images/foot_right.png";
import leftFoot from "../public/images/foot_left.png";

export default function Steps() {
    useEffect(() => {
        let delay = 0;
        const reveal = (entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                setTimeout(() => {
                    entry.target.classList.remove('opacity-0');
                    entry.target.querySelector('.single-step-img')?.classList.remove('opacity-0');
                    entry.target.querySelector('.single-step-text')?.classList.remove('translate-y-3/4');
                    setTimeout(() => {
                        entry.target.querySelector('.single-step-img')?.classList.add('opacity-0');
                    }, 1000)
                    observer.unobserve(entry.target);
                }, delay);
                delay += 1000;
            });
        };
        const timelineObserver = new IntersectionObserver(reveal, { root: null, threshold: 0.25 });
        document.querySelectorAll('.single-step')?.forEach(li => timelineObserver.observe(li));
    }, []);

    return (
        <section className="relative services-area">
            <div className="pb-120">
                <div className="container">
                    <div className="justify-center row">
                        <div className="w-full mx-4 lg:w-1/2">
                            <div className="pb-10 text-center section-title">
                                <h4 className="title">5 étapes clés du parcours d'accompagement</h4>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-wrap flex-col md:flex-row justify-center">
                        {/* <Foot className="absolute inset-0 flex flex-col justify-end z-30" /> */}
                        <div className="md:pt-[20%] single-step opacity-0">
                            <div className="single-step-img opacity-0">
                                <Image
                                    src={rightFoot}
                                    alt="Right foot"
                                />
                            </div>
                            <div className="single-step-text translate-y-3/4">
                                <p className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                    Introspection
                                </p>
                                <p className="text-gray-600 mb-8">
                                    On part de vous ! Comprendre son fonctionnement, ses schémas de pensées, ses freins actuels, ses blocages.
                                </p>
                            </div>
                        </div>
                        <div className="md:pt-[15%] single-step opacity-0">
                            <div className="single-step-img opacity-0">
                                <Image
                                    src={leftFoot}
                                    alt="Right foot"
                                />
                            </div>
                            <div className="single-step-text translate-y-3/4">
                                <p className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                    Exploration
                                </p>
                                <p className="text-gray-600 mb-8">
                                    Clarifier l'objectif aligné à votre identité, votre personnalité.
                                </p>
                            </div>
                        </div>
                        <div className="md:pt-[10%] single-step opacity-0">
                            <div className="single-step-img opacity-0">
                                <Image
                                    src={rightFoot}
                                    alt="Right foot"
                                />
                            </div>
                            <div className="single-step-text translate-y-3/4">
                                <p className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                    Validation
                                </p>
                                <p className="text-gray-600 mb-8">
                                    Validation de l'objectif
                                </p>
                            </div>
                        </div>
                        <div className="md:pt-[5%] single-step opacity-0">
                            <div className="single-step-img opacity-0">
                                <Image
                                    src={leftFoot}
                                    alt="Right foot"
                                />
                            </div>
                            <div className="single-step-text translate-y-3/4">
                                <p className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                    Plan d'action
                                </p>
                                <p className="text-gray-600 mb-8">
                                    Accompagnement vers la mise en mouvement
                                </p>
                            </div>
                        </div>
                        <div className="single-step opacity-0">
                            <div className="single-step-img opacity-0">
                                <Image
                                    src={rightFoot}
                                    alt="Right foot"
                                />
                            </div>
                            <div className="single-step-text translate-y-3/4">
                                <p className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                    Autonomie
                                </p>
                                <p className="text-gray-600 mb-8">
                                    Développer son mindset, un état d'esprit vers le mieux-être pour voir l'avenir en toute sérénité.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}