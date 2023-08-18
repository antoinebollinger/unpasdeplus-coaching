'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { reveal } from '../../utils/reveal'
import MamanZen from '/public/images/accueil/maman-zen.webp'

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
                    <div className="w-2/3 lg:w-1/3 lg:order-1 transition duration-200 scale-0 approche-img">
                        <Image
                            src={MamanZen}
                            className="w-full rounded-xl"
                            alt="Femme épanouie et zen"
                        />
                    </div>
                    <div className="w-full lg:w-2/3 lg:order-0">
                        <h3>L'approche Un pas de plus</h3>
                        <br />
                        <p className="text-lg leading-6">
                            Je suis convaincue que le <strong>changement d'état d'esprit</strong> repose sur <strong>le travail d'introspection associé à l'activité physique, le sport</strong>. Nous savons que le sport agit sur le <strong>physique</strong> mais <strong>surtout sur le mental</strong>.
                            <br />
                            <br />
                            <strong>La marche met en mouvement</strong>. Marcher, c'est mettre un pied devant l'autre au sens physqique du terme mais c'est aussi <strong>accepter d'avancer</strong> dans des moments de doutes et de vulnérabilité. Trouver notre pas et à notre rythme. Retrouver ainsi cette sensation de <strong>légèreté</strong> et de <strong>liberté</strong>.
                            <br />
                            <br />
                            <strong>Travailler son mental</strong> et <strong>rester concentrer</strong> sur son objectif, c’est comme un entraînement sportif&nbsp;: <strong>entraînement, répétition, méthode, persévérance, régularité et motivation</strong>.
                            <br />
                            <br />
                            Un pas de plus vous propose un <strong>accompagnement</strong> et <strong>un plan d’action concret</strong> autour de la <strong>santé physique et mentale</strong>. Il peut s’agir de <strong>réduire la charge mentale</strong>, d'être accompagner <strong>au retour au travail après un congés maternité/paternité</strong>, <strong>après une absence de longue durée</strong>, <strong>de trouver un équilibre de vie pour prendre soin de soi</strong>.
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