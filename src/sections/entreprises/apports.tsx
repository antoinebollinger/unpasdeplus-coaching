'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import { reveal } from '../../utils/reveal'
import IntroImg from '/public/images/entreprises/intro.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Apports({ className = '' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: Array.from(document.querySelectorAll('.consequence')),
            classesToRemove: ['scale-0', 'opacity-0'],
            delayIncrement: 300
        })
        reveal({
            collection: Array.from(document.querySelectorAll('.progression')),
            classesToRemove: ['h-0', 'lg:w-0'],
            classesToAdd: ['h-full', 'lg:w-full'],
        })
    }, [])

    const list = (text: string, i: number) => {
        return (
            <div className={`w-1/2 lg:w-1/5 relatif flex justify-center items-center rounded-full bg-primary-100 transition duration-200 scale-0 opacity-0 consequence`} key={i}>
                <Image
                    src={IntroImg}
                    alt="Intro entreprises"
                    className="w-full rounded-full opacity-0"
                />
                <p className="absolute text-lg text-center leading-6 font-bold" dangerouslySetInnerHTML={{ __html: text }}>
                </p>
            </div>
        )
    }
    return (
        <section id="qui" className={className}>
            <div className="container">
                <div className="w-full lg:w-2/3 mx-auto flex flex-col gap-12">
                    <p className="text-lg leading-6">
                        Les risques psychosociaux liés à la <strong>parentalité</strong>, <strong>aux défis quotidiens personnels et professionnels</strong> ont des conséquences pour l'entreprise :
                    </p>
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
                                "Atteinte<br/>de l'image de<br/>l'entreprise"
                            ].map((e, i) => list(e, i))
                        }
                    </div>
                    <p className="text-lg leading-6">
                        Engager une politique RH inclusive en soutenant la parentalité en entreprise et la qualité de vie au travail avec des <strong>actions concrètes</strong>, c'est agir pour <strong>l'épanouissement professionnel et professionnel des salariés parents</strong> mais aussi pour <strong>la préservation de la propre performance de l'entreprise</strong> :
                    </p>
                    <ul className="list-none list-inside fa-ul text-lg leading-8">
                        <li className="opacity-0">
                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                            <strong>Attractivité</strong>, <strong>Engagement</strong>, <strong>Fidélisation</strong> et donc <strong>Rétention des talents</strong>
                        </li>
                        <li className="opacity-0">
                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                            Les collaborateurs se sentent compris à 91% et ont envie de rester à 81%.
                        </li>
                        <li className="opacity-0">
                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                            L'image de l'entreprise est améliorée de 84% auprès des collaborateurs.
                        </li>
                    </ul>
                    <p className="text-lg leading-6">
                        Le saviez-vous : en 2025, le bien-être est le premier critère de fidélité envers une entreprise selon une étude Women'UP, pour 75% des actifs en 2025.
                    </p>
                </div>
            </div>
        </section>
    )
}