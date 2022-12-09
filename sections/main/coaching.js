import Image from 'next/image';
import SelfEstime from '../../public/images/self_estime.jpeg';
import Parents from '../../public/images/parents.jpg';
import Outdoor from '../../public/images/outdoor.jpg';

import Link from 'next/link';
import { useEffect } from 'react';
import { reveal } from '../../components/reveal';

export default function Coaching() {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll(".coaching-teaser"),
            classesToRemove: ["scale-0", "opacity-0"],
            delayIncrement: 200
        });
    }, [])

    const myCoaching = (
        img, title, text, link
    ) => {
        return (
            <div className="flex-1 w-full sm:w-3/4 md:w-3/4 lg:w-1/3 mb-4">
                <div className="coaching-teaser relative h-full z-10 px-5 pt-6 pb-12 mx-4 mb-8 overflow-hidden bg-white rounded shadow-lg flex flex-col transition duration-300 opacity-0">
                    <div className="flex-1">
                        <Image
                            src={img}
                            alt="Illustration"
                        />
                        <div className="text-center">
                            <h5 className="sub-title">{title}</h5>
                        </div>
                        <div className="mb-8">
                            <p dangerouslySetInnerHTML={{ __html: text }} />
                        </div>
                    </div>
                    <div className="text-center">
                        <Link href={link} className="main-btn">
                            EN SAVOIR PLUS
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section id="coaching">
            <div className="container">
                <div className="text-center pb-10">
                    <h4 className="title">Mes accompagnements</h4>
                </div>
                <div className="row justify-center items-stretch">
                    {myCoaching(
                        SelfEstime,
                        "Coaching mieux-être",
                        "Meilleure connaissance de soi, meilleure conscience de soi. C'est un accompagnement complet, en toute confiance, à votre rythme, sur la relation du corps à l'image de soi.",
                        "/coaching-mieux-etre"
                    )}
                    {myCoaching(
                        Parents,
                        "Coaching parentalité",
                        "C'est un accompagnement complet, en toute confiance, lié aux enjeux du rôle de parents / enfants.",
                        "/coaching-parentalite"
                    )}
                    {myCoaching(
                        Outdoor,
                        "Coaching outdoor",
                        "C'est un accompagnement à l'extérieur de votre cadre habituel. C'est une dynamque positive de mise en mouvement. Un accompagnement en pleine nature pour vous mettre en mouvement physiquement mais aussi intérieurement.",
                        "/coaching-outdoor"
                    )}



                    {/* 
              
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
                                <Link href="/coaching-outdoor" className="main-btn">
                                    EN SAVOIR PLUS
                                </Link>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}