"use client"
import dynamic from "next/dynamic"
import { reviews } from "../../../data/reviews"
import Reviews from "../../../utils/reviews"

const Calendly = dynamic(() => import("../../../components/calendly"))

export default function Temoignages({ className = "" }: { className?: string }) {
    return (
        <section id="temoignages" className={className}>
            <div className="container">
                <h2 className="text-center mb-16">Ils se sont transformés grâce au coaching confiance en soi</h2>
                <div className="relative bg-gray-200 rounded-xl p-6 mb-16">
                    <Reviews reviews={reviews.filter((_, index) => [3, 4, 5, 11].includes(index))} />
                </div>
                <p className="text-lg leading-6 mb-16 text-center">
                    <strong>Prêt(e) à reprendre confiance en vous et à révéler votre potentiel&nbsp;?</strong>
                </p>
                <div className="text-center">
                    <Calendly text={<>Réserver votre premier échange offert</>} />
                </div>
            </div>
        </section >
    )
}