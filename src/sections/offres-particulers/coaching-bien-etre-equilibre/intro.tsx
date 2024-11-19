"use client"
import { useEffect } from "react"
import Image from "next/image"
import { reveal } from "../../../utils/reveal"
import IntroImg from "/public/images/coaching-bien-etre-equilibre/intro.webp"
import Calendly from "../../../components/calendly"

export default function Intro({ className = "" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll(".parents-img"),
            classesToRemove: ["scale-0"]
        })
        reveal({
            collection: document.querySelectorAll("#introduction li"),
            classesToRemove: ["opacity-0"],
            delayIncrement: 50
        })
    }, [])

    return (
        <section id="introduction" className={className}>
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-2/3 lg:w-1/4">
                        <Image
                            src={IntroImg}
                            className="w-full rounded-full mx-auto transition duration-200 scale-0 parents-img"
                            alt="Retrouver bien-être et équilibre au quotidien"
                            title="Retrouver bien-être et équilibre au quotidien"
                        />
                    </div>
                    <div className="w-full lg:w-3/4">
                        <h1>Retrouver équilibre et bien-être au quotidien</h1>
                        <br />
                        <p className="text-lg leading-6 mb-6">
                            Le coaching bien-être & équilibre vous accompagne à prendre soin de vous et à trouver un équilibre <strong>physique, mental</strong> et <strong>émotionnel</strong>.
                            <br />
                            <br />
                            Vous souhaitez vous sentir mieux au quotidien&nbsp;? Mais vous manquez de temps pour <strong>prendre soin de vous</strong> et vous avez besoin d’un soutien permanent pour <strong>rester motivé.e</strong> durant la durée du coaching&nbsp;?
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <Calendly />
                </div>
            </div>
        </section>
    )
}