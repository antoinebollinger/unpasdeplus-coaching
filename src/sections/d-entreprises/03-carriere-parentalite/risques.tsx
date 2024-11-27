"use client"
import { useEffect } from "react"
import { reveal } from "../../../utils/reveal"

export default function Risques({ className = "" }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll("#risques .consequence"),
            classesToRemove: ["scale-0", "translate-y-full", "opacity-0"],
        })
        reveal({
            collection: document.querySelectorAll("#risques .progression"),
            classesToRemove: ["h-0", "lg:w-0"],
            classesToAdd: ["h-full", "lg:w-full"],
        })
    }, [])

    return (
        <section id="risques" className={className}>
            <div className="container">
                <div className="w-full lg:w-2/3 mx-auto flex flex-col gap-6">
                    <div className="flex flex-col gap-6">
                        <h2>
                            Des risques psychosociaux liés à la parentalité qui ont de lourdes conséquences pour l’entreprise&nbsp;:
                        </h2>
                        <div className="relative flex flex-col lg:flex-row gap-6 justify-center items-center">
                            <div className="absolute z-[-1] inset-0 px-[calc(50%-2px)] lg:px-[calc(20%/2)] flex lg:items-center">
                                <div className="w-[4px] h-0 lg:w-0 lg:h-[4px] bg-primary-700 rounded transition-all duration-2500 progression"></div>
                            </div>
                            {
                                [
                                    "Absentéisme",
                                    "Dégradation<br/>de la<br/>productivité",
                                    "Démotivation<br/>des équipes",
                                    "Turn over",
                                    "Atteinte<br/>de l’image de<br/>l’entreprise"
                                ].map((e, i) => (
                                    <div className={`w-1/2 lg:w-1/5 relatif flex justify-center items-center rounded-full shadow-lg bg-primary-100 ratio1 transition duration-200 scale-0 opacity-0 consequence`} key={i}>
                                        <p className="absolute text-lg text-center leading-6 font-bold" dangerouslySetInnerHTML={{ __html: e }}>
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                        <p className="text-xl leading-8">
                            Pourtant...
                        </p>
                    </div>
                </div>
            </div>
        </section >
    )
}