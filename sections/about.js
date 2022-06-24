import Link from "next/link"
import Image from "next/image"
import sabrina from '../public/images/sabrina.webp'

export default function About() {
    return (
        <section className="bg-white" id="about">
            <div className="container px-8 mx-auto">
                <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                    Qui je suis
                </h2>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div className="flex flex-wrap flex-col sm:flex-row justify-center ">
                    <div className="w-1/2 md:w-1/4 md:pr-6 mx-auto">
                        <Image
                            src={sabrina}
                            className="w-full rounded-full"
                            alt="Sabrina Appriou"
                        />
                    </div>
                    <div className="w-full md:w-3/4 md:pl-6">
                        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                            Sabrina Appriou
                        </h3>
                        <p className="text-gray-600 mb-8">
                            Fondatrice d'UN PAS DE PLUS - Coach certifiée Linkup Coaching
                        </p>
                        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                            Ma mission
                        </h3>
                        <p className="text-gray-600 mb-8">
                            J'accompagne les personnes à faire UN PAS DE PLUS pour un changement profond et durable dans leur vie personnelle et/ou professionnelle.
                        </p>
                        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                            Ma bio
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Cela fait plus de dix ans que je veille à manger bio, local et éthique. Je me sens en adéquation avec ces choix de vie qui font mon identité : une personne en mouvement, spirituellement et physiquement !<br />Ainsi, au fil des années, j’ai gagné en sérénité en prenant soin de mon corps et de ma tête.<br />Cela n’a pas toujours été le cas ! Découvrez mon parcours pour comprendre comment je suis parvenue à m’épanouir et à devenir la personne que je suis aujourd’hui.
                        </p>
                        <Link href="/bio">
                            <a className="text-primary-800 hover:text-primary-700">👉 Découvrir mon parcours</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    )
}