import Image from 'next/image'
import stepByStep from '../public/images/stepbystep.png'
import EmblaCarousel from '../lib/Slider/EmblaCarousel'

import media1 from "../public/caroussel/1.webp";
import media2 from "../public/caroussel/2.webp";
import media3 from "../public/caroussel/3.webp";
import media4 from "../public/caroussel/4.webp";
import media5 from "../public/caroussel/5.webp";
import media6 from "../public/caroussel/6.webp";

export default function Header() {
    const slides = [media1, media2, media3, media4, media5, media6];

    return (
        <header className="pt-24" id="home">
            <div className="container lg:px-2 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                    <p className="uppercase tracking-loose w-full">Pour un changement profond et durable</p>
                    <h1 className="my-4 text-5xl font-bold leading-tight">
                        UN PAS DE PLUS
                    </h1>
                    <p className="leading-normal text-2xl mb-8">
                        Coaching professionnel & particulier
                    </p>

                </div>
                <div className="w-full md:w-3/5 py-6 text-center">
                    <EmblaCarousel slides={slides} />
                    {/* <Image
                        src={stepByStep}
                        className="w-full md:w-4/5 z-50 mx-auto z-0"
                        alt="Step by Step" /> */}
                </div>
            </div>

        </header>
    )
}