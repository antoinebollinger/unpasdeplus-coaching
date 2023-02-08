import Image from "next/image";
import MamanDebordee from "../../public/images/index/maman-debordee.png";
import MamanZen from "../../public/images/index/maman-zen.jpeg";

import { useEffect } from 'react';
import { reveal } from '../../components/reveal';

export default function MaMission() {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll(".about-img"),
            classesToRemove: ["scale-0"]
        });
    }, []);

    return (
        <section id="mamission">
            <div className="container">
                <div className="text-center pb-10">
                    <h4 className="title">Ma mission</h4>
                </div>
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                    <div className="w-full md:w-2/3 lg:w-1/3 mx-auto transition duration-200 scale-0 about-img">
                        <Image
                            src={MamanDebordee}
                            className="w-full"
                            alt="Maman débordée"
                        />
                    </div>
                    <div className="w-full lg:w-1/3">
                        <p className="text-2xl leading-12 mb-2 text-center">
                            Accompagner les <strong>parents surchargés</strong>, <strong>débordés</strong>
                            <br /><strong>&</strong>
                            <br />
                            les personnes qui ont un <strong>rapport difficile avec leur corps</strong>
                            <br />à (re)prendre soin de leur santé mentale & physique pour un <strong>changement profond & durable</strong>.
                        </p>
                    </div>
                    <div className="w-full md:w-2/3 lg:w-1/3 mx-auto transition duration-200 scale-0 about-img">
                        <Image
                            src={MamanZen}
                            className="w-full"
                            alt="Maman zen"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}