import Image from "next/image";
import Sabrina_bio from "../../public/images/sabrina_bio.jpg";
import Wave from "../../public/images/header-shape.svg";

export default function Outro() {
    return (
        <section id="outro">
            <div className="container">
                <div className="max-w-2xl mx-auto">
                    <div className="relative">
                        <div className="absolute top-0 w-full h-auto -mt-1">
                            <Image
                                src={Wave}
                                width={Wave.width}
                                height={Wave.height}
                                alt="wave"
                                className="rotate-180"
                            />
                        </div>
                        <Image
                            src={Sabrina_bio}
                            width={Sabrina_bio.width}
                            height={Sabrina_bio.height}
                            alt="Sabrina Appriou"
                            className="object-cover h-full w-full"

                        />
                        <div className="absolute bottom-0 w-full h-auto -mb-1">
                            <Image
                                src={Wave}
                                width={Wave.width}
                                height={Wave.height}
                                alt="wave"
                            />
                        </div>
                    </div>
                    <h4 className="text-center text-primary-800 uppercase"> En tant que <strong>coach</strong>, j’accompagne aujourd'hui les personnes à faire <strong>UN PAS DE PLUS</strong> dans leur <strong>épanouissement personnel et/ou professionnel</strong> pour un changement profond & durable !</h4>
                </div>
            </div>
        </section>
    )
}