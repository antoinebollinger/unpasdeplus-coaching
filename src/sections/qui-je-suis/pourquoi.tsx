'use client'
import { useEffect, useState } from 'react'
import { reveal } from '../../utils/reveal'

export default function Pourquoi({ className = 'bg-gray-100' }: { className?: string }) {
    const [widthC, setWidthC] = useState(0)
    const [widthI, setWidthI] = useState(150)

    useEffect(() => {
        const handleResize = () => {
            const container: HTMLElement = document.querySelector('.circles-container')
            setWidthC(container.offsetWidth / 2)
            setWidthI(container.offsetWidth / 3)
            container.style.height = `${2 * widthC}px`
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        const circles = Array.from(document.querySelectorAll('.circle'))
        const angle: number = (2 * Math.PI / circles.length)
        console.log(widthI);

        circles.forEach((circle: HTMLElement, index: number) => {
            circle.style.width = `${widthI}px`
            circle.style.height = `${widthI}px`
            circle.style.left = `${widthC - widthI / 2 + widthC * Math.cos(index * angle)}px`
            circle.style.top = `${widthC - widthI / 2 + widthC * Math.sin(index * angle)}px`
        })

        reveal({
            collection: Array.from(document.querySelectorAll('.circle')),
            classesToRemove: ['scale-0', 'opacity-0'],
        })
    }, [widthC, widthI])

    return (
        <section id="pourquoi" className={className}>
            <div className="container">
                <div className="w-full lg:w-2/3 mx-auto">
                    <div className="mb-[140px]">
                        <p className="text-lg">
                            <strong>Un pas de plus</strong> fait référence au cercle vertueux du mouvement physique et mental, et des effets bénéfiques considérables du "pas". Faire un pas qui entraîne un autre avec ces différents leviers :
                        </p>
                    </div>
                    <div className="relative w-3/4 md:w-1/2 mx-auto circles-container">
                        <div className="absolute rounded-full bg-secondary-100 border border-secondary-900 inset-0 flex justify-center items-center">
                            <p className="lg:text-xl text-center">Cercle vertueux<br />du<br />mouvement physique</p>
                        </div>
                        {
                            ["Motivation", "Persévérance", "Méthode", "Régularité", "Entraînement", "Répétition"].map((e, i) => (
                                <div className="absolute rounded-full bg-tertary-100 border border-tertary-900 transition duration-300 opacity-0 scale-0 circle" key={i} >
                                    <div className="absolute inset-0 flex justify-center items-center">
                                        <p className="text-sm lg:text-xl text-tertary-900">{e}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section >
    )
}