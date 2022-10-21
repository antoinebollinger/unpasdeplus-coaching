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

export default function Coaching() {
    return (
        <section id="coaching" className="bg-gray-100 pricing-area">
            <div className="py-120">
                <div className="container">
                    <div className="justify-center row">
                        <div className="w-full mx-4 lg:w-1/2">
                            <div className="pb-10 text-center section-title">
                                <h4 className="title">Mes accompagnements spécifiques</h4>
                                {/* <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="justify-center items-stretch row">
                        <div className="flex-1 w-full sm:w-3/4 md:w-3/4 lg:w-1/3">
                            <div className="single-pricing flex flex-col">
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
                            <div className="single-pricing pro flex flex-col">
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
                            <div className="single-pricing pro flex flex-col">
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
                    <div className="justify-center row pb-10">
                        <div className="w-full mx-4 lg:w-1/2 flex gap-1 items-center justify-around bg-white mb-10">
                            <div className="w-full lg:w-1/2">
                                <Image
                                    src={Diplome}
                                />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <Image
                                    src={FranceCompetences}
                                />
                            </div>
                        </div>
                        <div className="w-full mx-4 lg:w-1/2 ">
                            <ul>
                                <li><FontAwesomeIcon icon={faCircleCheck} /> Coach professionnel certifié RNCP 7 - Linkup Coaching</li>
                            </ul>
                        </div>
                        <div className="w-full mx-4 lg:w-1/2 flex gap-1 items-center justify-center bg-white mb-10">
                            <div className="w-full lg:w-1/2">
                                <Image
                                    src={EMCC}
                                />
                            </div>
                        </div>
                        <div className="w-full mx-4 lg:w-1/2 ">
                            <ul>
                                <li><FontAwesomeIcon icon={faCircleCheck} /> Accréditation EMCC – labélisation EMCC (European Mentoring Coaching Council)</li>
                                <li><FontAwesomeIcon icon={faCircleCheck} /> Outils & méthodes de coaching</li>
                                <li><FontAwesomeIcon icon={faCircleCheck} /> Charte déontologique du coach</li>
                            </ul>
                        </div>
                    </div>
                    <div className="justify-center row">
                        <div className="pb-10 text-center section-title">
                            <h4 className="services-title">Un accompagnement et un suivi personnalisé</h4>
                        </div>
                    </div>
                    <div className="justify-center row">
                        <div className="w-full mx-4 lg:w-1/2 flex gap-1 items-center justify-center bg-white mb-10">
                            <div className="w-full lg:w-1/2">
                                <FontAwesomeIcon icon={faCircleCheck} /> Séances individuelles<br />de 1h-1h15
                            </div>
                            <div className="w-full lg:w-1/2">
                                <FontAwesomeIcon icon={faCircleCheck} /> Bilan<br />à mi-parcours
                            </div>
                            <div className="w-full lg:w-1/2">
                                <FontAwesomeIcon icon={faCircleCheck} /> Bilan<br />en fin de parcours
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}