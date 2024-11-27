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
                <p className="text-lg text-gray-900 mb-4">
                    C'est pour accompagner chacun à traverser ses transitions de vie, à relever ses défis personnels & professionnels qu'<span className="text-primary-600 font-bold">Un pas de plus Coaching</span> a vu le jour et a pour mission d'accompagner les personnes à <strong>se sentir bien dans leur tête et leur corps</strong> pour retrouver un équilibre de vie.
                </p>
                <ul className="text-lg text-gray-900 list-none list-inside fa-ul flex flex-col gap-6 mb-4">
                    <li>
                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span> Parce qu'avoir une meilleure <strong>connaissance de soi</strong>, c'est comprendre son fonctionnement pour agir avec une meilleure <strong>conscience de soi</strong>&nbsp;;
                    </li>
                    <li>
                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span> Parce que <strong>cultiver la mise en mouvement physique</strong>, c'est prendre soin de son corps et aussi de sa tête&nbsp;;<br />
                    </li>
                    <li>
                        <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span> Parce que trouver son <strong>équilibre de vie</strong>, c'est apprendre à <strong>gérer ses émotions</strong> pour faire face aux défis du quotidien.
                    </li>
                </ul>
                <p className="text-lg text-gray-900 mb-4">
                    Parce que nous sommes convaincus que <strong>forger un mental</strong> à toute épreuve, cultiver la <strong>mise en mouvement physique</strong> et avoir une meilleure <strong>gestion de ses émotions</strong>, c'est être capable de surmonter les <strong>défis personnels & professionnels</strong> avec confiance et sérénité.
                </p>
                <p className="text-lg text-gray-900 mb-12">
                    Bienvenue chez <span className="text-primary-600 font-bold">Un pas de plus Coaching</span>&nbsp;!
                </p>
            </div>
        </div>
    )
}