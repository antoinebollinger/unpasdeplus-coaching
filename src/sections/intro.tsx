'use client';
import { useEffect } from 'react'
import Image from 'next/image'
import { reveal } from '../utils/reveal'
import MamanZen from '/public/images/index/maman-zen.webp'
import Logo from '/public/logos/logo-texte-vertical.svg'

export default function Intro() {
    useEffect(() => {
        reveal({
            collection: Array.from(document.querySelectorAll('.about-img')),
            classesToRemove: ['scale-0']
        })
    }, [])

    return (
        <section id="intro">
            <div className="container">
                <div className="flex justify-center items-center">
                    <Image
                        src={Logo}
                        alt="Logo"
                        height="300"
                    />
                </div>
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                    <div className="w-2/3 lg:w-1/2 mx-auto transition duration-200 scale-0 about-img">
                        <Image
                            src={MamanZen}
                            className="w-full rounded-xl"
                            alt="Femme épanouie et zen"
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <p className="leading-10">
                            Commencer à faire <strong>UN PAS</strong>, enclencher la mise en mouvement, <strong>le premier PAS</strong>, peut parfois être difficile voire compliqué.
                            <br />
                            <br />
                            <strong>Oser faire ce premier PAS</strong> pour accompagner le changement, d'une situation qu'on ne souhaite plus, qu'on ne désire plus.
                            <br />
                            <br />
                            Accompagner le changement marque la fin de quelque chose et une envie de renouveau. Mais comment faire pour accompagner cette phase de transition, cette zone neutre où l'on est dans un questionnement intérieur, où l'on s'interroge ? Comment s'y prendre pour bien accompagner ce changement ?
                        </p>
                        <br />
                        <br />
                        <h4 className="title text-center">Ma mission</h4>
                        <br />
                        <p className="text-center font-bold text-primary-600">
                            Je vous accompagne à faire UN PAS vers une meilleure connaissance de soi, une meilleure conscience de SOI pour être plus aligné avec votre identité & confiant dans vos choix de vie.
                        </p>
                        <p className="text-center font-bold text-tertary-900">
                            UN PAS DE PLUS vers une vie plus harmonieuse, celle qui vous ressemble, à votre image.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}