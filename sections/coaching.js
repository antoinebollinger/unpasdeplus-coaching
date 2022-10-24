import SelfEstime from '../public/images/self_estime.jpeg';
import Parents from '../public/images/parents.jpg';
import Outdoor from '../public/images/outdoor.jpg';
import EMCC from '../public/images/emcc.jpg';
import FranceCompetences from '../public/images/france_competences.png';
import Diplome from '../public/images/diplome.png';
import Image from 'next/image';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import { useEffect } from 'react';

export default function Coaching({ className }) {
    useEffect(() => {
        let delay_1 = 100;
        const reveal_1 = (entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                setTimeout(() => {
                    entry.target.classList.remove('opacity-0');
                    entry.target.classList.remove('scale-0');
                    observer.unobserve(entry.target);
                }, delay_1);
                delay_1 += 800;
            });
        };
        const timelineObserver_1 = new IntersectionObserver(reveal_1, { root: null, threshold: 0.25 });
        document.querySelectorAll('.single-suivi')?.forEach(li => timelineObserver_1.observe(li));
        let delay_2 = 100;
        const reveal_2 = (entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                setTimeout(() => {
                    entry.target.classList.remove('opacity-0');
                    entry.target.classList.remove('translate-y-1/2');
                    observer.unobserve(entry.target);
                }, delay_2);
                delay_2 += 400;
            });
        };
        const timelineObserver_2 = new IntersectionObserver(reveal_2, { root: null, threshold: [0, 0.25] });
        document.querySelectorAll('.single-pricing')?.forEach(li => timelineObserver_2.observe(li));
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
                        <div className="flex-1 w-full sm:w-3/4 md:w-3/4 lg:w-1/3">
                            <div className="single-pricing one flex flex-col transition duration-300 translate-y-1/2 opacity-0">
                                <div className="flex-1">
                                    <Image
                                        src={SelfEstime}
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

                        <div className="flex-1 w-full sm:w-3/4 md:w-3/4 lg:w-1/3">
                            <div className="single-pricing two flex flex-col transition duration-300 translate-y-1/2 opacity-0">
                                <div className="flex-1">
                                    <Image
                                        src={Parents}
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

                        <div className="flex-1 w-full sm:w-3/4 md:w-3/4 lg:w-1/3">
                            <div className="single-pricing three flex flex-col transition duration-300 translate-y-1/2 opacity-0">
                                <div className="flex-1">
                                    <Image
                                        src={Outdoor}
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
                    <div className="flex flex-wrap flex-col sm:flex-row justify-center items-start">
                        <div className="w-1/2 md:w-1/4 md:pr-6 mx-auto mb-10">
                            <Image
                                src={EMCC}
                                className="w-full rounded"
                                alt="EMCC"
                            />
                            <Image
                                src={FranceCompetences}
                                className="w-full rounded"
                                alt="France compétences"
                            />
                        </div>
                        <div className="w-full md:w-3/4 md:pl-6">
                            <div className="pb-10 text-left section-title">
                                <h4 className="services-title">Des références reconnues</h4>
                            </div>
                            <ul className="pb-10">
                                <li><FontAwesomeIcon icon={faCircleCheck} /> Coach professionnel certifié RNCP 7 - Linkup Coaching</li>
                                <li><FontAwesomeIcon icon={faCircleCheck} /> Accréditation EMCC – labélisation EMCC (European Mentoring Coaching Council)</li>
                                <li><FontAwesomeIcon icon={faCircleCheck} /> Outils & méthodes de coaching</li>
                                <li><FontAwesomeIcon icon={faCircleCheck} /> Charte déontologique du coach</li>
                            </ul>
                            <div className="pb-10 text-left section-title">
                                <h4 className="services-title">Un accompagnement et un suivi personnalisé</h4>
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
                </div>
            </div>
        </section>
    )
}