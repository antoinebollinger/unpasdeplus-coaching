import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import How_1 from '../public/images/how_1.jpg';
import How_2 from '../public/images/how_2.jpg';
import How_3 from '../public/images/how_3.jpg';
import Image from "next/image";

export default function How() {
    return (
        <section id="testimonial" className="bg-gray-100 testimonial-area py-120">
            <div className="container">
                <div className="justify-center row">
                    <div className="w-full mx-4 lg:w-1/2">
                        <div className="pb-10 text-center section-title">
                            <h4 className="title">Comment ça se passe ?</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="w-full">
                        <div className="row testimonial-active">
                            <div className="w-full lg:w-1/3">
                                <div className="text-center single-testimonial">
                                    <div className="testimonial-image">
                                        <Image
                                            src={How_2}
                                            alt="How 1"
                                        />
                                    </div>
                                    <div className="testimonial-content">
                                        <h6 className="text-lg font-semibold text-gray-900">Entretien préalable</h6>
                                        <span className="text-sm text-gray-700">Gratuit et sans engagement</span>
                                        <ul className="pt-5 mt-6 border-t border-gray-300 text-left">
                                            <li><FontAwesomeIcon icon={faCircleCheck} /> Un premier RDV pour faire connaissance</li>
                                            <li><FontAwesomeIcon icon={faCircleCheck} /> Aborder votre demande, expliquer le coaching, ma méthodologie et les principes d'actions</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3">
                                <div className="text-center single-testimonial">
                                    <div className="testimonial-image">
                                        <Image
                                            src={How_1}
                                            alt="How 1"
                                        />
                                    </div>
                                    <div className="testimonial-content">
                                        <h6 className="text-lg font-semibold text-gray-900">Les séances</h6>
                                        <span className="text-sm text-gray-700">Plusieurs possibilités selon vos dispos et envies</span>
                                        <ul className="pt-5 mt-6 border-t border-gray-300 text-left">
                                            <li><FontAwesomeIcon icon={faCircleCheck} /> Présentiel</li>
                                            <li><FontAwesomeIcon icon={faCircleCheck} /> Visio</li>
                                            <li><FontAwesomeIcon icon={faCircleCheck} /> Téléphone</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3">
                                <div className="text-center single-testimonial">
                                    <div className="testimonial-image">
                                        <Image
                                            src={How_3}
                                            alt="How 1"
                                        />
                                    </div>
                                    <div className="testimonial-content">
                                        <h6 className="text-lg font-semibold text-gray-900">Le +</h6>
                                        <span className="text-sm text-gray-700">Coaching Outdoor</span>
                                        <p className="pt-5 mt-6 border-t border-gray-300 text-left">
                                            Des séances de coaching outdoor pendant le parcours de coaching. A l'extérieur de votre cadre habituel, en pleine nature, pour cultiver la mise en mouvement.
                                        </p>
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