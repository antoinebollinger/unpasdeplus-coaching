'use client';
import { useEffect } from 'react'
import { reveal } from '../../utils/reveal'

export default function Apports({ className = '' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: Array.from(document.querySelectorAll('.consequence')),
            classesToRemove: ['scale-0', 'opacity-0'],
            delayIncrement: 300
        })
    }, [])

    const list = (text: string, i: number) => {
        return (
            <div className="w-1/5 transition duration-200 scale-0 opacity-0 consequence" key={i}>
                <p className="text-lg text-center leading-6 mb-6">
                    <strong>{text}</strong>
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
                    <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                        {
                            [
                                "Absentéisme",
                                "Dégradation de la productivité",
                                "Démotivation des équipes",
                                "Turn over",
                                "Atteinte de l'image de l'entreprise"
                            ].map((e, i) => list(e, i))
                        }
                    </div>
                    <p className="text-lg leading-6">
                        Engager une politique RH inclusive en soutenant la parentalité en entreprise et la qualité de vie au travail avec des <strong>actions concrètes</strong>, c'est agir pour <strong>l'épanouissement professionnel et professionnel des salariés parents</strong> mais aussi pour <strong>la préservation de la propre performance de l'entreprise</strong> :
                    </p>
                    <ul className="list-check text-lg leading-8">
                        <li className="opacity-0">
                            <strong>Attractivité</strong>, <strong>Engagement</strong>, <strong>Fidélisation</strong> et donc <strong>Rétention des talents</strong>
                        </li>
                        <li className="opacity-0">
                            Les collaborateurs se sentent compris à 91% et ont envie de rester à 81%.
                        </li>
                        <li className="opacity-0">
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