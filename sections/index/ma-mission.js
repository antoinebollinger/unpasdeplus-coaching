import Image from "next/image";
import MamanDebordee from "../../public/images/maman-debordee.png";

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
                <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center">
                    <div className="w-full md:w-1/2 md:pl-6 md:order-first order-last">
                        <p className="text-2xl leading-[3rem] mb-2 text-center md:text-start">
                            Accompagner les <strong>parents surchargés</strong>, <strong>débordés</strong>
                            <br /><strong>&</strong>
                            <br />
                            les personnes qui ont un <strong>rapport difficile avec leur corps</strong>
                            <br />à (re)prendre soin de leur santé mentale & physique pour un <strong>changement profond & durable</strong>.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 pb-6 md:pb-0 md:pr-6 mx-auto transition duration-200 scale-0 about-img">
                        <Image
                            src={MamanDebordee}
                            className="w-full"
                            alt="Maman débordée"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}