"use client"
import Image from "next/image"
import Career1 from "/public/images/a-propos-de-moi/1.webp"
import Career2 from "/public/images/a-propos-de-moi/2.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

export default function Parcours() {
    return (
        <div className="parcours">
            <div className="text-center pb-10">
                <p className="h2">Mon parcours</p>
                <h1>Trouver son équilibre, un véritable défi</h1>
            </div>
            <div className="w-full">
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                    <div className="w-1/2 md:w-1/4">
                        <Image
                            src={Career1}
                            width={150}
                            height={150}
                            className="rounded-full shadow mx-auto"
                            alt="Illustration"
                        />
                    </div>
                    <div className="w-full md:w-3/4">
                        <p className="text-lg text-gray-900">
                            Salariée dans un grand groupe bancaire pendant plus de 10 ans, une vie sans trop me poser de question&nbsp;: enfants, métro, boulot, dodo.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                    <div className="w-1/2 md:w-1/4">
                        <Image
                            src={Career2}
                            width={150}
                            height={150}
                            className="rounded-full shadow mx-auto"
                            alt="Illustration"
                        />
                    </div>
                    <div className="w-full md:w-3/4">
                        <p className="text-lg text-gray-900">
                            Au fil du temps, me sentir à ma place, m'épanouir professionnellement, représente un défi. Ce sentiment de conflit intérieur avec mes valeurs, mes besoins, mon identité. Cela crée une charge mentale supplémentaire, celle de trouver son équilibre de vie.
                        </p>
                    </div>
                </div>
            </div>
            <div className="lg:max-w-5xl mx-auto">
                <ul className="text-lg text-gray-900 list-none list-inside fa-ul flex flex-col gap-6 mb-4">
                    <li>
                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span> Parce que nous sommes tous confrontés à des défis, qu'ils soient personnels et/ou professionnels&nbsp;;
                    </li>
                    <li>
                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span> Parce que surmonter ses défis seul.e, c’est rester dans le flou, freiné.e par ses freins et de ses doutes, qui empêchent <strong>d’avancer vers un mieux-être</strong>&nbsp;;
                    </li>
                    <li>
                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span> Parce que notre entourage n’a pas toujours les réponses à nos questions et ne comprend pas forcément nos véritables besoins&nbsp;;
                    </li>
                    <li>
                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span> Parce qu’il nous arrive d’être notre propre obstacle face à nos défis et objectifs&nbsp;;
                    </li>
                    <li>
                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span> Parce que seul, on va peut être plus vite mais qu’ensemble, on va toujours plus loin&nbsp;;
                    </li>
                </ul>
                <p className="text-lg text-gray-900 mb-4">
                    C'est pour accompagner chacun à faire Un Pas de Plus vers un <strong>mieux-être physique et mental</strong>, à relever ses <strong>défis personnels & professionnels</strong>, qu'<span className="text-primary-600 font-bold">Un pas de plus Coaching</span> a vu le jour.
                </p>
                <p className="text-lg text-gray-900 mb-4">
                    <span className="text-primary-600 font-bold">Un pas de plus Coaching</span> a pour mission de vous aider à vous <strong>sentir mieux dans votre tête et dans votre corps</strong> pour retrouver un <strong>équilibre de vie</strong>.
                </p>
                <p className="text-lg text-gray-900 mb-12">
                    Bienvenue chez <span className="text-primary-600 font-bold">Un pas de plus Coaching</span>&nbsp;!
                </p>
            </div>
        </div>
    )
}