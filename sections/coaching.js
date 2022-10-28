import SelfEstime from '../public/images/self_estime.jpeg';
import Parents from '../public/images/parents.jpg';
import Outdoor from '../public/images/outdoor.jpg';
import EMCC from '../public/images/emcc.jpg';
import FranceCompetences from '../public/images/france_competences.jpg';
import Tools from '../public/images/tools.jpg';
import Ethics from '../public/images/ethics.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Coaching({ className }) {
    useEffect(() => {
        let delay_1 = 0;
        const reveal_1 = (entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                setTimeout(() => {
                    entry.target.classList.remove('opacity-0');
                    entry.target.classList.remove('scale-0');
                    observer.unobserve(entry.target);
                }, delay_1);
                delay_1 += 200;
            });
        };
        const timelineObserver_1 = new IntersectionObserver(reveal_1, { root: null, threshold: 0.25 });
        document.querySelectorAll('.single-suivi')?.forEach(li => timelineObserver_1.observe(li));

        let delay_2 = 0;
        const reveal_2 = (entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                setTimeout(() => {
                    entry.target.classList.remove('opacity-0');
                    entry.target.classList.remove('translate-x-1/2');
                    entry.target.classList.remove('-translate-x-1/2');
                    observer.unobserve(entry.target);
                }, delay_2);
                delay_2 += 200;
            });
        };
        const timelineObserver_2 = new IntersectionObserver(reveal_2, { root: null, threshold: 0.25 });
        document.querySelectorAll('.single-pricing')?.forEach(li => timelineObserver_2.observe(li));

        let delay_3 = 0;
        const reveal_3 = (entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                setTimeout(() => {
                    entry.target.classList.remove('opacity-0');
                    entry.target.classList.remove('scale-0');
                    observer.unobserve(entry.target);
                }, delay_3);
                delay_3 += 200;
            });
        };
        const timelineObserver_3 = new IntersectionObserver(reveal_3, { root: null, threshold: 0.25 });
        document.querySelectorAll('.single-ref')?.forEach(li => timelineObserver_3.observe(li));
    }, []);

    return (
        <section id="coaching" className={`bg-gray-100 pricing-area ${className}`}>
            <div className="pb-120">
                <div className="container">
                    <div className="justify-center row">
                        <div className="w-full mx-4 lg:w-1/2">
                            <div className="pb-10 text-center section-title">
                                <h4 className="title">Mes accompagnements spécifiques</h4>
                            </div>
                        </div>
                    </div>
                    <div className="justify-center items-stretch row">
                        <div className="single-program">
                            <div className="single-pricing one flex flex-col transition duration-300 -translate-x-1/2 opacity-0">
                                <div className="flex-1">
                                    <Image
                                        src={SelfEstime}
                                        alt="Coaching de l'image de soi"
                                    />
                                    <div className="text-center pricing-header">
                                        <h5 className="sub-title">Coaching de l'image du corps à l'image de soi</h5>
                                    </div>
                                    <div className="mb-8 pricing-list">
                                        <p>
                                            Meilleure connaissance de soi, meilleure conscience de soi. C'est un accompagnement complet, en toute confiance, à votre rythme, sur la relation du corps à l'image de soi.
                                        </p>
                                    </div>
                                </div>
                                <div className="text-center pricing-btn">
                                    <Link href="/coaching-image-soi">
                                        <a className="main-btn">EN SAVOIR PLUS</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="single-program">
                            <div className="single-pricing two flex flex-col transition duration-300 opacity-0">
                                <div className="flex-1">
                                    <Image
                                        src={Parents}
                                        alt="Parentalité"
                                    />
                                    <div className="text-center pricing-header">
                                        <h5 className="sub-title">Coaching de parentalité</h5>
                                    </div>
                                    <div className="mb-8 pricing-list">
                                        <p>
                                            C'est un accompagnement complet, en toute confiance, lié aux enjeux du rôle de parents / enfants.
                                        </p>
                                    </div>
                                </div>
                                <div className="text-center pricing-btn">
                                    <Link href="/coaching-parentalite">
                                        <a className="main-btn">EN SAVOIR PLUS</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="single-program">
                            <div className="single-pricing three flex flex-col transition duration-300 translate-x-1/2 opacity-0">
                                <div className="flex-1">
                                    <Image
                                        src={Outdoor}
                                        alt="Coaching outdoor"
                                    />
                                    <div className="text-center pricing-header">
                                        <h5 className="sub-title">Coaching outdoor</h5>
                                    </div>
                                    <div className="mb-8 pricing-list">
                                        <p>
                                            C'est un accompagnement à l'extérieur de votre cadre habituel. C'est une dynamque positive de mise en mouvement. Un accompagnement en pleine nature pour vous mettre en mouvement physiquement mais aussi intérieurement.
                                        </p>
                                    </div>
                                </div>
                                <div className="text-center pricing-btn">
                                    <Link href="/coaching-outdoor">
                                        <a className="main-btn">EN SAVOIR PLUS</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-120">
                <div className="container">
                    <div className="justify-center row">
                        <div className="w-full mx-4 lg:w-1/2">
                            <div className="pb-10 text-center section-title">
                                <h4 className="title">Un accompagnement de qualité</h4>
                                <p className="text">Avec professionnalisme, éthique et bienveillance</p>
                            </div>
                        </div>
                    </div>
                    <div className="pb-10 text-center section-title">
                        <h4 className="services-title">Des références reconnues :</h4>
                    </div>
                    <div className="flex flex-wrap flex-col sm:flex-row justify-center items-start pb-20">
                        <div className="w-full md:w-1/4 md:pl-6 flex flex-col items-center">
                            <div className="single-ref transition duration-300 opacity-0 scale-0">
                                <Image
                                    src={EMCC}
                                    className="w-3/4 rounded-full"
                                    alt="EMCC"
                                />
                            </div>
                            <h5 className="text-center">Accréditation EMCC – labélisation EMCC (European Mentoring Coaching Council)</h5>
                        </div>
                        <div className="w-full md:w-1/4 md:pl-6 flex flex-col items-center">
                            <div className="single-ref transition duration-300 opacity-0 scale-0">
                                <Image
                                    src={FranceCompetences}
                                    className="w-3/4 rounded-full"
                                    alt="EMCC"
                                />
                            </div>
                            <h5 className="text-center">Coach professionnel certifié RNCP 7 - Linkup Coaching</h5>
                        </div>
                        <div className="w-full md:w-1/4 md:pl-6 flex flex-col items-center">
                            <div className="single-ref transition duration-300 opacity-0 scale-0">
                                <Image
                                    src={Tools}
                                    className="w-3/4 rounded-full"
                                    alt="EMCC"
                                />
                            </div>
                            <h5 className="text-center">Outils & méthodes de coaching</h5>
                        </div>
                        <div className="w-full md:w-1/4 md:pl-6 flex flex-col items-center">
                            <div className="single-ref transition duration-300 opacity-0 scale-0">
                                <Image
                                    src={Ethics}
                                    className="w-3/4 rounded-full"
                                    alt="EMCC"
                                />
                            </div>
                            <h5 className="text-center">Charte déontologique du coach</h5>
                        </div>
                    </div>
                    <div className="pb-10 text-center section-title">
                        <h4 className="services-title">Un accompagnement et un suivi personnalisé :</h4>
                    </div>
                    <div className="flex gap-5 items-center justify-center mb-10">
                        <div className="single-suivi transition duration-300 opacity-0 scale-0">
                            Séances individuelles<br />de 1h-1h15
                        </div>
                        <div className="single-suivi transition duration-300 opacity-0 scale-0">
                            Bilan<br />à mi-parcours
                        </div>
                        <div className="single-suivi transition duration-300 opacity-0 scale-0">
                            Bilan<br />en fin de parcours
                        </div>
                    </div>

                </div>

            </div>
        </section >
    )
}