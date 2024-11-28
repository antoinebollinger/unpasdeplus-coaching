import dynamic from "next/dynamic"
import MenuOffresParticuliers from "../../components/menuOffresParticuliers"

const Calendly = dynamic(() => import("../../components/calendly"))

export default function Offres({ className = "" }: { className?: string }) {
    return (
        <section id="mes-offres" className={className}>
            <div className="container">
                <div className="text-center pb-10">
                    <h2 className="h1 text-start lg:text-center">Offres Particuliers</h2>
                </div>
                <MenuOffresParticuliers />
                <div className="text-center">
                    <Calendly />
                </div>
            </div>
        </section>
    )
}