'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { reveal } from '../../utils/reveal'
import Baskets from '/public/images/accueil/baskets.jpg'
import { madelyn } from '../../../styles/font'

export default function Approche({ className = '' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll('.approche-img'),
            classesToRemove: ['scale-0']
        })
    }, [])

    return (
        <section className={className}>
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
                    <div className="w-full lg:w-1/4 lg:order-1 transition duration-200 scale-0 approche-img">
                        <Image
                            src={Baskets}
                            className="w-full rounded-full"
                            alt="Femme épanouie et zen"
                        />
                    </div>
                    <div className="w-full lg:w-3/4 lg:order-0">
                        <h3 className="h1">L'approche <span className={`${madelyn.className} text-7xl -translate-y-4`}>Un&nbsp;pas&nbsp;de&nbsp;plus</span></h3>
                        <br />
                        <p className="text-lg leading-6">
                            Je suis convaincue que le <strong>changement d'état d'esprit</strong> repose sur <strong>le travail d'introspection</strong> associé à la <strong>mise en mouvement du corps</strong>. Nous savons que l'activité physique agit sur le bien-être du corps mais plus encore <strong>sur le mental</strong>.
                            <br />
                            <br />
                            {/* <strong>La marche met en mouvement</strong>. Marcher, c'est mettre un pied devant l'autre au sens physique du terme mais c'est aussi <strong>accepter d'avancer</strong> dans des moments de doutes et de vulnérabilité.
                            <br />
                            <br /> */}
                            <strong>Travailler son mental</strong> et <strong>rester concentrer</strong> sur son objectif, c’est comme un entraînement sportif&nbsp;: <strong>entraînement, répétition, méthode, persévérance, régularité et motivation</strong>.
                            <br />
                            <br />
                            Un pas de plus vous propose un <strong>accompagnement</strong> et <strong>un plan d’action concret</strong> autour de la <strong>santé physique et mentale</strong>&nbsp;: mieux gérer <strong>la charge mentale</strong>, <strong>prendre</strong> davantage <strong>soin de soi</strong>, accompagner les salariés au <strong>retour au travail après un congé maternité/paternité</strong> ou après une <strong>absence de longue durée</strong>.
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <Link href="/contact" className="main-btn gradient-btn focus:outline-none uppercase">
                        Besoin d'être épaulé.e&nbsp;?<br />Contactez-moi
                    </Link>
                </div>
            </div>
        </section >
    )
}