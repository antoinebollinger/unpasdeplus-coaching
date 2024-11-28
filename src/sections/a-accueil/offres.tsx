import dynamic from "next/dynamic"
import MenuOffresEntreprises from "../../components/menuOffresEntreprises"
import MenuOffresParticuliers from "../../components/menuOffresParticuliers"

const Calendly = dynamic(() => import("../../components/calendly"))

export default function Offres({ className = "bg-gray-100" }: { className?: string }) {
    return (
        <section id="mes-offres" className={className}>
            <div className="container">
                <div className="text-center pb-10">
                    <h2 className="h1 text-start lg:text-center">Offres Particuliers</h2>
                </div>
                <MenuOffresParticuliers />
                <div className="text-center pb-10">
                    <h2 className="h1 text-start lg:text-center">Offres Entreprises</h2>
                </div>
                <MenuOffresEntreprises />
                <div className="text-center">
                    <Calendly />
                </div>
            </div>
        </section>
    )
}