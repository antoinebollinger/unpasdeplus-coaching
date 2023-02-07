import Image from "next/image";

import QuijesuisOutro from "../../public/images/quijesuis_outro_purple.jpg";
import Wave from "../../public/images/header-shape.svg";
import WaveGray from "../../public/images/header-shape-gray.svg";
import { useEffect } from "react";

Outro.defaultProps = {
    background: {
        img: QuijesuisOutro
    },
    first: "gray",
    last: "gray"
}

export default function Outro({ first, last, background }) {
    useEffect(() => {
        console.log(background);
    })
    return (
        <div>
            <div className="relative bg-primary-100">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={background.img.src}
                        alt="background"
                        width={background.img.width}
                        height={background.img.height}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="relative z-10 w-full h-auto -mb-1 rotate-180">
                    <Image
                        src={first == "white" ? Wave : WaveGray}
                        alt="Wave"
                        width={(first == "white" ? Wave : WaveGray).width}
                        height={(first == "white" ? Wave : WaveGray).height}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h4 className="text-center text-primary-200 uppercase text-3xl"> En tant que <strong>coach</strong>, j’accompagne aujourd'hui les personnes à faire <strong>UN PAS DE PLUS</strong> dans leur <strong>épanouissement personnel et/ou professionnel</strong> pour un changement profond & durable !</h4>
                </div>
                <div className="relative z-10 w-full h-auto -mb-1">
                    <Image
                        src={last == "white" ? Wave : WaveGray}
                        alt="wave"
                        width={(last == "white" ? Wave : WaveGray).width}
                        height={(last == "white" ? Wave : WaveGray).height}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    )
}