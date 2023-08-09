'use client';
import { useEffect } from 'react'
import Image from 'next/image'
import { reveal } from '../utils/reveal'
import MamanZen from '/public/images/home/maman-zen.webp'
import Logo from '/public/logos/logo-texte-vertical.svg'

export default function Intro() {
    useEffect(() => {
        reveal({
            collection: Array.from(document.querySelectorAll('.about-img')),
            classesToRemove: ['scale-0']
        })
    }, [])

    return (
        <section id="introduction" className="intro">
            <div className="container">
                <div className="pb-120 flex flex-col lg:flex-row gap-6 justify-center items-center">
                    <div className="w-2/3 lg:w-1/3 text-center transition duration-200 scale-0 about-img">
                        <Image
                            src={Logo}
                            alt="Logo"
                            height="250"
                            className="mx-auto"
                        />
                    </div>
                    <div className="w-full lg:w-2/3">
                        <p className="leading-10">
                            Un pas de plus, c'est du <strong>coaching professionnel</strong>. Le coaching consiste à accompagner des personnes dans la définition et l'atteinte de leurs objectifs, au bénéfice du développement de leur potentiel et de la réussite de leur évolution personnelle et professionnelle.
                            <br />
                            <br />
                            Un pas de plus, c'est un <strong>accompagnement</strong> pour <strong>booster le moral</strong> des <strong>parents</strong> et un <strong>dispositif d'accompagnement des entreprises</strong> pour prendre soin de la santé physique et mentale de leur <strong>salariés parents</strong>.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                    <div className="w-2/3 lg:w-1/3 transition duration-200 scale-0 about-img">
                        <Image
                            src={MamanZen}
                            className="w-full rounded-xl"
                            alt="Femme épanouie et zen"
                        />
                    </div>
                    <div className="w-full lg:w-2/3">
                        <h3 className="title text-center">L'approche de UN PAS DE PLUS</h3>
                        <br />
                        <p className="leading-10">
                            Je suis convaincue que le <strong>changement d'état d'esprit</strong> repose sur <strong>le travail d'introspection associé à l'activité physique, le sport</strong>. Nous savons que le sport agit sur le <strong>physique</strong> mais <strong>surtout sur le mental</strong>.
                            <br />
                            <br />
                            <strong>La marche met en mouvement</strong>. Marcher, c'est mettre un pied devant l'autre au sens physqique du terme mais c'est aussi <strong>accepter d'avancer</strong> dans des moments de doutes et de vulnérabilité. Trouver notre pas et à notre rythme. Retrouver ainsi cette sensation de <strong>légèreté</strong> et de <strong>liberté</strong>.
                            <br />
                            <br />
                            <strong>Travailler son mental</strong> et <strong>rester concentrer</strong> sur son objectif, c’est comme un entraînement sportif : <strong>entraînement, répétition, méthode, persévérance, régularité et motivation</strong>.
                            <br />
                            <br />
                            Un pas de plus vous propose un <strong>accompagnement</strong> et <strong>un plan d’action concret</strong> autour de la <strong>santé physique et mentale</strong>. Il peut s’agir de <strong>réduire la charge mentale</strong>, être accompagner <strong>du retour au travail après un congés maternité/paternité</strong>, <strong>après une absence longue maladie</strong>, <strong>trouver un équilibre de vie pour prendre soin de soi</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}