"use client"
import dynamic from "next/dynamic"
import { reviews } from "../../../data/reviews"
import Reviews from "../../../utils/reviews"

const Calendly = dynamic(() => import("../../../components/calendly"))

export default function Temoignages({ className = "bg-gray-100" }: { className?: string }) {
    return (
        <section id="temoignages" className={className}>
            <div className="container">
                <h2 className="text-center mb-16">Ils se sont transformés grâce au coaching perte de poids</h2>
                <div className="relative bg-gray-200 rounded-xl p-6 mb-16">
                    <Reviews reviews={reviews.filter((_, index) => [0, 1].includes(index))} />
                </div>
                <p className="text-lg leading-6 mb-16">
                    <strong>Vous souhaitez transformer votre relation à l’alimentation et perdre du poids durablement&nbsp;?</strong>
                    <br />
                    <br />
                    Je vous propose un premier échange pour faire le point sur votre situation et voir comment le coaching peut vous accompagner.
                </p>
                <div className="text-center">
                    <Calendly />
                </div>
            </div>
        </section >
    )
}