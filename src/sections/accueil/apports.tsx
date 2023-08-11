'use client'
import { useEffect } from 'react'
import { reveal } from '../../utils/reveal'

export default function Apports({ className = 'bg-gray-100' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: Array.from(document.querySelectorAll('.apports-text')),
            classesToRemove: ['translate-x-3/4', 'scale-0', 'opacity-0'],
            classesToAdd: ['translate-x-0'],
        })
    }, [])

    const list = (illustration: string, text: string) => {
        return (
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                <div className="transition duration-300 opacity-0 scale-0 apports-text">
                    <div className="w-[100px] h-[100px] rounded-full bg-primary-100 flex justify-center items-center">
                        <p className="text-4xl">{illustration}</p>
                    </div>
                </div>
                <div className="grow transition duration-300 opacity-0 translate-x-3/4 apports-text">
                    <p className="text-2xl text-gray-900" dangerouslySetInnerHTML={{ __html: text }} />
                </div>
            </div>
        )
    }

    return (
        <section id="apports-coaching" className={className}>
            <div className="container">
                <div className="text-center pb-10">
                    <h3 className="text-center lg:text-start">Les apports du coaching</h3>
                    <p className="text-lg italic">« La victoire sur soi est la plus grande des victoires » (Platon)</p>
                </div>
                <div className="lg:max-w-5xl mx-auto pb-10">
                    {list(
                        "81%",
                        "des clients <strong>satisfaits</strong> de leur accompagnement"
                    )}
                    {list(
                        "80%",
                        "ont noté une nette amélioration de leur <strong>confiance en eux</strong>"
                    )}
                    {list(
                        "70%",
                        "ont remarqué une <strong>amélioration</strong> de leur <strong>performance au travail</strong>"
                    )}
                    {list(
                        "5,7",
                        "fois le montant investi, c'est le retour sur investissement moyen des entreprises"
                    )}
                    <p className="italic">Source : étude ICF-PWC (2021)</p>
                </div>
                <div className="lg:max-w-5xl mx-auto">
                    <p className="leading-10 text-xl">
                        <strong>Le coaching a pour but de vous booster en prenant conscience que le changement passe avant tout par soi.</strong>
                    </p>
                </div>
            </div>
        </section>
    )
}