import Image from "next/image";
import EntreprisesIllustration from "../../public/images/entreprises/intro.jpg";

import { useEffect } from 'react';
import { reveal } from '../../components/reveal';

export default function Entreprises() {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll(".about-img"),
            classesToRemove: ["scale-0", "opacity-0"]
        });
    }, []);

    return (
        <section id="mieux-etre">
            <div className="container">
                <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center mb-10">
                    <div className="w-1/2 md:w-1/4 md:pr-6 pb-6 md:pb-0 mx-auto transition duration-200 scale-0 opacity-0 about-img">
                        <Image
                            src={EntreprisesIllustration}
                            width={EntreprisesIllustration.width}
                            height={EntreprisesIllustration.height}
                            className="w-full rounded-full"
                            alt="Entreprises"
                        />
                    </div>
                    <div className="w-full md:w-3/4 md:pl-6 paragraph">
                        <h4 className="subtitle text-primary-600">
                            Vous êtes dirigeant, responsable des ressources humaines, soucieux du bien-être, de la qualité de vie au travail de vos collaborateurs, salariés.
                        </h4>
                    </div>
                </div>

                <div className="text-center">
                    <a href="#contact">
                        <button type="submit" className="main-btn gradient-btn focus:outline-none uppercase">Je prends contact pour en savoir plus !<br />Gratuit et sans engagement</button>
                    </a>
                </div>
            </div>
        </section>
    )
}