'use client'
import { useEffect } from 'react'
import { reveal } from '../../utils/reveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faChartLine, faCheck, faCircleCheck, faCircleInfo, faHandPointRight, faPlus, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

export default function Apports({ className = '' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll('.consequence'),
            classesToRemove: ['scale-0', 'opacity-0'],
            delayIncrement: 300
        })
        reveal({
            collection: document.querySelectorAll('.progression'),
            classesToRemove: ['h-0', 'lg:w-0'],
            classesToAdd: ['h-full', 'lg:w-full'],
        })
        reveal({
            collection: document.querySelectorAll('.resultats li'),
            classesToRemove: ['translate-y-full', 'opacity-0'],
            delayIncrement: 100
        })
    }, [])

    return (
        <div id="apports" className={`py-120 ${className}`}>
            <div className="container">
                <div className="w-full lg:w-2/3 mx-auto flex flex-col gap-12">
                    <p className="text-lg leading-6">
                        <FontAwesomeIcon icon={faTriangleExclamation} className="text-primary-600 text-4xl" /> Les risques psychosociaux liés à la <strong>parentalité</strong>, <strong>aux défis quotidiens personnels et professionnels</strong> ont des conséquences pour l'entreprise&nbsp;:
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
                            ].map((e, i) => (
                                <div className={`w-1/2 lg:w-1/5 relatif flex justify-center items-center rounded-full shadow-lg bg-primary-100 ratio1 transition duration-200 scale-0 opacity-0 consequence`} key={i}>
                                    <p className="absolute text-lg text-center leading-6 font-bold" dangerouslySetInnerHTML={{ __html: e }}>
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                    <p className="text-xl leading-8">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-tertary-900 text-4xl" /> Engager une politique RH inclusive en soutenant la parentalité en entreprise et la qualité de vie au travail avec des <strong>actions concrètes</strong>, c'est agir pour <strong>l'épanouissement professionnel et professionnel des salarié.es parents</strong> mais aussi pour <strong>la préservation de la propre performance de l'entreprise</strong>&nbsp;:
                    </p>
                    <ul className="list-none list-inside fa-ul text-2xl leading-12 resultats">
                        <li className="opacity-0 translate-y-full">
                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faPlus} /></span>
                            <span className="font-bold uppercase">Attractivité</span>
                        </li>
                        <li className="opacity-0 translate-y-full">
                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faPlus} /></span>
                            <span className="font-bold uppercase">Engagement</span>
                        </li>
                        <li className="opacity-0 translate-y-full">
                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faPlus} /></span>
                            <span className="font-bold uppercase">Fidélisation</span>
                        </li>
                        <li className="opacity-0 translate-y-full">
                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faHandPointRight} /></span>
                            Les collaborateurs se sentent compris à <span className="text-2xl font-bold text-tertary-900">91%</span>  et ont envie de rester à <span className="text-2xl font-bold text-tertary-900">81%</span>.
                        </li>
                        <li className="opacity-0 translate-y-full">
                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faArrowTrendUp} /></span>
                            <span className="font-bold uppercase">Rétention des talents</span>
                        </li>
                        <li className="opacity-0 translate-y-full">
                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faChartLine} /></span>
                            L'image de l'entreprise est améliorée de <span className="text-2xl font-bold text-tertary-900">84%</span> auprès des collaborateurs.
                        </li>
                        <li className="opacity-0 translate-y-full">
                            <span className="fa-li text-tertary-900"><FontAwesomeIcon icon={faCheck} /></span>
                            <span className="font-bold uppercase">Marque employeur</span>
                        </li>
                    </ul>
                    <p className="text-lg leading-6">
                        <FontAwesomeIcon icon={faCircleInfo} /> Le saviez-vous&nbsp;: en 2025, le bien-être est le premier critère de fidélité envers une entreprise selon une étude Women'UP, pour 75% des actifs en 2025.
                    </p>
                </div>
            </div>
        </div>
    )
}