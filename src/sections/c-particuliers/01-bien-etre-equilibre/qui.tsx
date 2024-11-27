"use client"
import { useEffect } from "react"
import Image from "next/image"
import { reveal } from "../../../utils/reveal"
import QuiImg from "/public/images/coaching-bien-etre-equilibre/qui.webp"
import Stress from "/public/images/coaching-bien-etre-equilibre/stress.webp"
import Emotions from "/public/images/coaching-bien-etre-equilibre/emotions.webp"
import Habitudes from "/public/images/coaching-bien-etre-equilibre/habitudes.webp"
import Alimentation from "/public/images/coaching-bien-etre-equilibre/alimentation.webp"
import Sport from "/public/images/coaching-bien-etre-equilibre/sport.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPersonBreastfeeding, faPersonRunning, faLightbulb, faHandshakeAngle, faCheck } from "@fortawesome/free-solid-svg-icons"

export default function Qui({ className = "bg-gray-100" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll("#qui .img"),
            classesToRemove: ["scale-0", "opacity-0"]
        })
        reveal({
            collection: document.querySelectorAll("#qui li"),
            classesToRemove: ["opacity-0"],
            delayIncrement: 50
        })
    }, [])

    return (
        <section id="qui" className={className}>
            <div className="container">
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-full md:w-1/4 mx-auto transition duration-200 scale-0 opacity-0 img md:order-last">
                        <Image
                            src={QuiImg}
                            width={QuiImg.width}
                            height={QuiImg.height}
                            className="w-full rounded-full"
                            alt="Le coaching est fait pour vous si..."
                            title="Le coaching est fait pour vous si..."
                        />
                    </div>
                    <div className="w-full md:w-3/4">
                        <h2>Le coaching bien-être & équilibre est fait pour vous si...</h2>
                        <ul className="list-none list-inside fa-ul text-lg leading-8 mb-16">
                            {
                                [
                                    (
                                        <>
                                            <span className="fa-li text-xl"><FontAwesomeIcon icon={faPersonBreastfeeding} /></span>
                                            Prendre soin de vous relève du défi.
                                        </>
                                    ),
                                    (
                                        <>
                                            <span className="fa-li text-xl"><FontAwesomeIcon icon={faPersonRunning} /></span>
                                            Vous savez que prendre soin de son <strong>bien-être physique et de sa santé mentale</strong> est important pour votre équilibre  <strong>physique, mental</strong> et <strong>émotionnel</strong> mais vous ne parvenez pas à le faire seul.e.
                                        </>
                                    ),
                                    (
                                        <>
                                            <span className="fa-li text-xl"><FontAwesomeIcon icon={faLightbulb} /></span>
                                            Vous recherchez plus qu’un accompagnement, c’est être <strong>soutenu</strong> dans les <strong>défis quotidiens</strong> tout en prenant soin de vous, forger des habitudes gagnantes pour entrainer un mental à toute épreuve.

                                        </>
                                    ),
                                    (
                                        <>
                                            <span className="fa-li text-xl"><FontAwesomeIcon icon={faHandshakeAngle} /></span>
                                            Vous souhaitez appréhender les situations de façon différente pour <strong>éviter de se décourager</strong>, de «&nbsp;craquer&nbsp;» face aux <strong>situations difficiles</strong> et qui vous rendent vulnérables. <br />Rester déterminé.es dans cette volonté de prendre soin de soi. La priorité, c’est vous !
                                        </>
                                    )
                                ].map((e, i) => (
                                    <li className="transition duration-200 opacity-0" key={i}>{e}</li>
                                ))
                            }
                        </ul>

                        <h2>Grâce au coaching bien-être & équilibre, vous serez&nbsp;:</h2>
                        <ul className="list-none list-inside fa-ul text-lg leading-8">
                            {
                                [
                                    (
                                        <>
                                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                            <strong>Guidé.e</strong><br />Avancer pas à pas, à votre rythme dans cette volonté de <strong>mieux-être</strong> lors des séances de coaching.
                                        </>
                                    ),
                                    (
                                        <>
                                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                            <strong>Soutenu.e</strong><br />Surmonter les <strong>défis</strong>, les <strong>freins</strong> avec plus de <strong>sérénité</strong> et plus de <strong>confiance en soi</strong>.
                                        </>
                                    ),
                                    (
                                        <>
                                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                                            <strong>Challengé.e</strong><br />Accompagné.e par un <strong>objectif atteignable</strong> et <strong>réalisable</strong> qui sera source de motivation, de plaisir et de performance.
                                        </>
                                    ),
                                    (
                                        <>
                                            <br />À la clé&nbsp;: <strong>retrouver un équilibre</strong> dans votre vie personnelle et professionnelle sur le plan mental, physique et émotionnel.
                                        </>
                                    )
                                ].map((e, i) => (
                                    <li className="transition duration-200 opacity-0" key={i}>{e}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-6 justify-between items-center">
                    {
                        [
                            {
                                img: Stress,
                                text: "Mieux gérer<br />son stress au quotidien",
                            },
                            {
                                img: Emotions,
                                text: "Mieux gérer ses émotions"
                            },
                            {
                                img: Habitudes,
                                text: "Mettre en place de<br />nouvelles habitudes de vie"
                            },
                            {
                                img: Alimentation,
                                text: "S’alimenter de manière<br />saine et équilibrée"
                            },
                            {
                                img: Sport,
                                text: "Développer votre forme grâce<br />à une activité physique adaptée"
                            }
                        ].map((e, i) => (
                            <div key={i}>
                                <Image
                                    src={e.img}
                                    width={200}
                                    className="mx-auto rounded-full mb-6 transition duration-200 scale-0 img"
                                    alt={e.text.replace("<br />", " ")}
                                    title={e.text.replace("<br />", " ")}
                                />
                                <p className="text-center font-bold" dangerouslySetInnerHTML={{ __html: e.text }} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section >
    )
}