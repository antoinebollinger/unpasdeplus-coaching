import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import How_1 from '../public/images/how_1.jpg';
import How_2 from '../public/images/how_2.jpg';
import How_3 from '../public/images/how_3.jpg';
import Image from "next/image";
import { useEffect } from "react";

export default function How({ className }) {
    useEffect(() => {
        let delay = 100;
        const reveal = (entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                setTimeout(() => {
                    entry.target.classList.remove('translate-x-3/4');
                    entry.target.classList.remove('-scale-0');
                    entry.target.classList.remove('opacity-0');
                    entry.target.classList.add('translate-x-0');
                    // entry.target.classList.add('delay-' + delay);
                    observer.unobserve(entry.target);
                }, delay);
                delay += 400;
            });
        };
        const timelineObserver = new IntersectionObserver(reveal, { root: null, threshold: 0.25 });
        document.querySelectorAll('.slide-in')?.forEach(li => timelineObserver.observe(li));
    }, []);

    return (
        <section id="how" className={`bg-gray-100 testimonial-area ${className}`}>
            <div className="container pb-120">
                <div className="justify-center row">
                    <div className="w-full mx-4 lg:w-1/2">
                        <div className="pb-10 text-center section-title">
                            <h4 className="title">Comment ça se passe ?</h4>
                        </div>
                    </div>
                </div>
                <div className="lg:max-w-3xl mx-auto">
                    <div>

                        <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center mb-8">
                            <div className="w-1/2 md:w-1/4 md:pr-6 mx-auto slide-in transition duration-300 opacity-0 -scale-0">
                                <Image
                                    src={How_2}
                                    className="w-full rounded-full"
                                    alt="Entretien préalable"
                                />
                            </div>
                            <div className="single-how slide-in transition duration-300 opacity-0 translate-x-3/4">
                                <p className="text-xl font-semibold text-gray-900">Entretien préalable</p>
                                <span className="text-lg text-gray-700">Gratuit et sans engagement</span>
                                <ul className="pt-5 text-left">
                                    <li><FontAwesomeIcon icon={faCircleCheck} className="text-primary-900" /> Un premier RDV pour faire connaissance</li>
                                    <li><FontAwesomeIcon icon={faCircleCheck} className="text-primary-900" /> Aborder votre demande, expliquer le coaching, ma méthodologie et les principes d'actions</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center mb-8">
                            <div className="w-1/2 md:w-1/4 md:pr-6 mx-auto slide-in transition duration-300 opacity-0 -scale-0">
                                <Image
                                    src={How_1}
                                    className="w-full rounded-full"
                                    alt="Les séances"
                                />
                            </div>
                            <div className="single-how slide-in transition duration-300 opacity-0 translate-x-3/4">
                                <p className="text-xl font-semibold text-gray-900">Les séances</p>
                                <span className="text-lg text-gray-700">Plusieurs possibilités selon vos dispos et envies</span>
                                <ul className="pt-5 text-left">
                                    <li><FontAwesomeIcon icon={faCircleCheck} className="text-primary-900" /> Présentiel</li>
                                    <li><FontAwesomeIcon icon={faCircleCheck} className="text-primary-900" /> Visio</li>
                                    <li><FontAwesomeIcon icon={faCircleCheck} className="text-primary-900" /> Téléphone</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center mb-8">
                            <div className="w-1/2 md:w-1/4 md:pr-6 mx-auto slide-in transition duration-300 opacity-0 -scale-0">
                                <Image
                                    src={How_3}
                                    className="w-full rounded-full"
                                    alt="Le plus coaching Outdoor"
                                />
                            </div>
                            <div className="single-how slide-in transition duration-300 opacity-0 translate-x-3/4">
                                <p className="text-xl font-semibold text-gray-900">Le +</p>
                                <span className="text-lg text-gray-700">Coaching Outdoor</span>
                                <p className="pt-5 text-left">
                                    Des séances de coaching outdoor pendant le parcours de coaching. A l'extérieur de votre cadre habituel, en pleine nature, pour cultiver la mise en mouvement.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}