import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faBrain, faLightbulb, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import Coaching from '../public/images/service.jpeg';
import Change from '../public/images/change.jpg';
import Image from 'next/image';

export default function Service({ className }) {
    return (
        <section id="service" className={`relative services-area ${className}`}>
            <div className="pb-120">
                <div className="container">
                    <div className="justify-center row">
                        <div className="w-full mx-4 lg:w-1/2">
                            <div className="pb-10 text-center section-title">
                                <h4 className="title">Le coaching</h4>
                                <q className="text italic"> La victoire sur soi est la plus grande des victoires </q>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-col sm:flex-row justify-center">
                        <div className="w-full md:w-3/4 md:pl-6 order-2 lg:order-1">
                            <div className="row">
                                <div className="w-full md:w-1/2">
                                    <div className="block mx-4 services-content sm:flex">
                                        <div className="services-icon">
                                            <FontAwesomeIcon icon={faCircleQuestion} />
                                        </div>
                                        <div className="mb-8 ml-0 services-content media-body sm:ml-3">
                                            <h4 className="services-title">C'est quoi ?</h4>
                                            <p className="text">
                                                Le coaching consiste à accompagner des personnes dans la définition et l'atteinte de leurs objectifs, au bénéfice du développement de leur potentiel et de la réussite de leur évolution personnelle et professionnelle.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <div className="block mx-4 services-content sm:flex">
                                        <div className="services-icon">
                                            <FontAwesomeIcon icon={faBrain} />
                                        </div>
                                        <div className="mb-8 ml-0 services-content media-body sm:ml-3">
                                            <h4 className="services-title">L'intelligence émotionnelle</h4>
                                            <p className="text">
                                                L'intelligence émotionnelle a une place importante en coaching. Mais qu'est-ce que l'intelligence émotionnelle ? Nous parlons de la capacité à nous adresser efficacement aux autres et à nous-même, à nous connecter à nos émotions, à les gérer, à nous auto-motiver, à freiner nos pulsions, à vaincre nos frustrations.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <div className="block mx-4 services-content sm:flex">
                                        <div className="services-icon">
                                            <FontAwesomeIcon icon={faBolt} />
                                        </div>
                                        <div className="mb-8 ml-0 services-content media-body sm:ml-3">
                                            <h4 className="services-title">Le métier de coach</h4>
                                            <p className="text">
                                                Mon métier repose sur une écoute active, un questionnement pertinent et des outils & méthodes de coaching, dans un cadre confidentiel.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 md:w-1/4 md:pr-6 mx-auto order-1 lg-order-2">
                            <Image
                                src={Coaching}
                                className="w-full"
                                alt="Sabrina Appriou"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-120">
                <div className="container">
                    <div className="justify-center row">
                        <div className="w-full mx-4 lg:w-1/2">
                            <div className="pb-10 text-center section-title">
                                <h4 className="title">Le coaching professionnel individuel</h4>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-col sm:flex-row justify-center">
                        <div className="w-1/2 md:w-1/4 md:pr-6 mx-auto">
                            <Image
                                src={Change}
                                className="w-full"
                                alt="Sabrina Appriou"
                            />
                        </div>
                        <div className="w-full md:w-3/4 md:pl-6">
                            <div className="row">
                                <div className="w-full md:w-1/2">
                                    <div className="block mx-4 services-content sm:flex">
                                        <div className="services-icon">
                                            <FontAwesomeIcon icon={faCircleQuestion} />
                                        </div>
                                        <div className="mb-8 ml-0 services-content media-body sm:ml-3">
                                            <h4 className="services-title">C'est quoi ?</h4>
                                            <p className="text">
                                                C'est un accompagnement individuel où nous exporons votre demande et définissons un objectif à la fois atteignable et challengeant.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <div className="block mx-4 services-content sm:flex">
                                        <div className="services-icon">
                                            <FontAwesomeIcon icon={faLightbulb} />
                                        </div>
                                        <div className="mb-8 ml-0 services-content media-body sm:ml-3">
                                            <h4 className="services-title">Cet accompagnement est fait pour vous :</h4>
                                            <p className="text">
                                                C'est un accompagnement à un moment de votre vie, avec une personne extérieure à votre sphère privée et professionnelle, en toute bienveillance et sans jugement. Le coaching a pour but de vous booster en prenant conscience que le changement passe avant tout par soi.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <div className="block mx-4 services-content sm:flex">
                                        <div className="services-icon">
                                            <FontAwesomeIcon icon={faBolt} />
                                        </div>
                                        <div className="mb-8 ml-0 services-content media-body sm:ml-3">
                                            <h4 className="services-title">Ma mission</h4>
                                            <p className="text">
                                                J'accompagne les personnes à faire UN PAS DE PLUS dans leur époanouissement personnel et/ou professionnel pour un changement profond et durable.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}