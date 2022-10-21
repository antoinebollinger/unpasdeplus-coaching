import Image from "next/image";
import Link from "next/link";
import Sabrina from "../public/images/sabrina.webp";

export default function About() {
    return (
        <section id="about" className="relative py-120">
            <div className="container px-8 mx-auto">
                <div className="justify-center row">
                    <div className="w-full mx-4 lg:w-1/2">
                        <div className="pb-10 text-center section-title">
                            <h4 className="title">Qui je suis</h4>
                        </div>
                    </div>
                </div>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div className="flex flex-wrap flex-col sm:flex-row justify-center">
                    <div className="w-1/2 md:w-1/4 md:pr-6 mx-auto">
                        <Image
                            src={Sabrina}
                            className="w-full rounded-full"
                            alt="Sabrina Appriou"
                        />
                    </div>
                    <div className="w-full md:w-3/4 md:pl-6">
                        <p className="text-3xl text-gray-800 font-bold leading-none mb-3">
                            Sabrina Appriou
                        </p>
                        <p className="text-gray-600 mb-8">
                            Fondatrice d'UN PAS DE PLUS - Coach certifiée Linkup Coaching
                        </p>
                        <p className="text-3xl text-gray-800 font-bold leading-none mb-3">
                            Ma mission
                        </p>
                        <p className="text-gray-600 mb-8">
                            J'accompagne les personnes à faire UN PAS DE PLUS pour un changement profond et durable dans leur vie personnelle et/ou professionnelle.
                        </p>
                        <p className="text-3xl text-gray-800 font-bold leading-none mb-3">
                            À propos de moi
                        </p>
                        <p className="text-gray-600 mb-4">
                            Cela fait plus de dix ans que je veille à manger bio, local et éthique. Je me sens en adéquation avec ces choix de vie qui font mon identité : une personne en mouvement, spirituellement et physiquement !<br />Ainsi, au fil des années, j’ai gagné en sérénité en prenant soin de mon corps et de ma tête.<br />Cela n’a pas toujours été le cas ! Découvrez mon parcours pour comprendre comment je suis parvenue à m’épanouir et à devenir la personne que je suis aujourd’hui.
                        </p>
                    </div>
                </div>
                <div className="w-full text-center">
                    <Link href="/bio">
                        <button className="main-btn">
                            Découvrir mon parcours
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}