import { useEffect } from "react"
import Image from "next/image"

import coaching1 from "../public/coaching/1.webp";
import coaching2 from "../public/coaching/2.webp";
import coaching3 from "../public/coaching/3.webp";
import coaching4 from "../public/coaching/4.webp";
import coaching5 from "../public/coaching/5.webp";

export default function Coaching({ coachingData }) {
    const slides = [coaching1, coaching2, coaching3, coaching4, coaching5];

    useEffect(() => {
        const reveal = function (entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                setTimeout(() => {
                    entry.target.classList.remove('translate-x-3/4');
                    entry.target.classList.remove('-translate-x-3/4');
                    entry.target.classList.remove('opacity-0');
                    entry.target.classList.add('translate-x-0');
                    observer.unobserve(entry.target);
                }, 100);
            });
        };
        const timelineObserver = new IntersectionObserver(reveal, { root: null, threshold: 0.1 });
        document.querySelectorAll('.slide-in')?.forEach(function (li) {
            timelineObserver.observe(li);
        });
    });

    return (
        <section className="bg-white overflow-x-hidden" id="coaching">
            <div className="container mx-auto px-8 text-gray-800">
                <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                    Le coaching, c'est quoi ?
                </h2>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <h3 className="italic text-xl text-gray-500 font-bold leading-none text-center mb-8">
                    <q> Écoute ta propre voix et libère ton plein potentiel </q>
                </h3>
                <div class="lg:max-w-2xl mx-auto">
                    <div>
                        {coachingData.map(({ id, contentHtml }) => (
                            <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center mb-8" key={id}>
                                <div className="w-1/2 md:w-1/4 md:pr-6 mx-auto slide-in transition duration-300 opacity-0 -translate-x-3/4">
                                    <Image
                                        src={slides[+id - 1]}
                                        className="w-full rounded-full"
                                        alt="Sabrina Appriou"
                                    />
                                </div>
                                <div className="w-full md:w-3/4 md:pl-6 slide-in transition duration-300 opacity-0 translate-x-3/4">
                                    <div className="bio__content" dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}