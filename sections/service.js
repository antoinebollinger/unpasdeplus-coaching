import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faBrain, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import ServiceImg from '../public/images/service.jpeg';
import Image from 'next/image';

export default function Service() {
    return (
        <section id="service" className="relative services-area py-120">
            <div className="container">
                <div className="flex">
                    <div className="w-full mx-4 lg:w-1/2">
                        <div className="pb-10 section-title">
                            <h4 className="title">Le coaching</h4>
                            <q className="text italic"> La victoire sur soi est la plus grande des victoires </q>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-full lg:w-2/3">
                        <div className="row">
                            <div className="w-full md:w-1/2">
                                <div className="block mx-4 services-content sm:flex">
                                    <div className="services-icon">
                                        <FontAwesomeIcon icon={faBolt} />
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
                                        <FontAwesomeIcon icon={faLightbulb} />
                                    </div>
                                    <div className="mb-8 ml-0 services-content media-body sm:ml-3">
                                        <h4 className="services-title">Le métier de coach</h4>
                                        <p className="text">
                                            Mon métier repose sur une écoute active, un questionnement pertinent et des outils & méthodes de coaching, dans un cadre confidentiel.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="w-full md:w-1/2">
                                <div className="block mx-4 services-content sm:flex">
                                    <div className="services-icon">
                                        <i className="lni-bulb"></i>
                                    </div>
                                    <div className="mb-8 ml-0 services-content media-body sm:ml-3">
                                        <h4 className="services-title">App Landing</h4>
                                        <p className="text">Short description for the ones who look for something new.</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="services-image">
                <div className="image">
                    <Image
                        src={ServiceImg}
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
        </section>
    )
}