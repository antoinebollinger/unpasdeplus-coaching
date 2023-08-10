import Link from 'next/link'

export default function Services({ className = 'bg-gray-100' }: { className?: string }) {
    return (
        <section className={className}>
            <div className="container">
                <div className="text-center pb-10">
                    <h3>Mes services</h3>
                </div>
                <div className="w-full lg:w-2/3 mx-auto flex flex-col lg:flex-row gap-16 justify-center items-stretch">
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        <h4>Accompagner et soutenir</h4>
                        <p className="text-lg text-start grow">
                            <strong>Accompagner & soutenir</strong> vos salariés dans des <strong>changements de vie</strong> tels que <strong>le retour au travail après un congé maternité/partenité, absence de longue maladie ou face à une charge mentale importante.</strong>
                        </p>
                        <Link href="/accompagnement-parents" className="mx-auto">
                            <button type="submit" className="main-btn gradient-btn focus:outline-none uppercase">En savoir plus</button>
                        </Link>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        <h4>Sensibiliser</h4>
                        <p className="text-lg text-start grow">
                            <strong>Sensibiliser, accompagner</strong> les managers & RH sur la parentalité en entreprise et intensifier les actions sur la qualité de vie au travail.
                        </p>
                        <Link href="/accompagnement-parents" className="mx-auto">
                            <button type="submit" className="main-btn gradient-btn focus:outline-none uppercase">En savoir plus</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}