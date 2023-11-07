'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import { reveal } from '../../utils/reveal'
import Schema from '/public/images/svg/schema.svg'

export default function Pourquoi({ className = '' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll('.circle'),
            classesToRemove: ['scale-0', 'opacity-0'],
        })
    }, [])

    return (
        <section id="pourquoi" className={className}>
            <div className="container">
                <div className="lg:max-w-5xl mx-auto">
                    <div className="mb-16">
                        <p className="text-lg">
                            <strong>Un pas de plus Coaching</strong> fait référence au cercle vertueux du mouvement physique et mental, et des effets bénéfiques considérables du "pas". Faire un pas qui entraîne un autre grâce à ces différents leviers&nbsp;:
                        </p>
                    </div>
                    <div className="w-full lg:w-3/4 mx-auto transtion duration-200 scale-0 opacity-0 circle">
                        <Image
                            src={Schema}
                            alt="Schéma"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </section >
    )
}