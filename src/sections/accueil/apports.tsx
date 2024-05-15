'use client'
import { useEffect } from 'react'
import { reveal } from '../../utils/reveal'

export default function Apports({ className = 'bg-gray-100' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll('#apports-coaching .text'),
            classesToRemove: ['translate-x-3/4', 'lg:translate-y-3/4', 'scale-0', 'opacity-0'],
            classesToAdd: ['translate-x-0', 'translate-y-0'],
        })
    }, [])

    const list = (illustration: string, text: string) => {
        return (
            <div className="flex flex-col gap-6 justify-center items-center mb-10">
                <div className="transition duration-200 opacity-0 scale-0 text">
                    <div className="w-[100px] h-[100px] rounded-full bg-tertary-200 flex justify-center items-center">
                        <p className="text-4xl text-tertary-900 font-bold">{illustration}</p>
                    </div>
                </div>
                <div className="grow transition duration-200 opacity-0 translate-y-0 translate-x-3/4 lg:translate-x-0 lg:translate-y-3/4 text">
                    <p className="text-2xl text-gray-900 text-center" dangerouslySetInnerHTML={{ __html: text }} />
                </div>
            </div>
        )
    }

    return (
        <section id="apports-coaching" className={className}>
            <div className="container">
                <div className="text-center pb-10">
                    <h3 className="h1 text-start lg:text-center">Les apports du coaching</h3>
                </div>
                <div className="lg:max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-6">
                        {list(
                            "81%",
                            "des clients sont <strong>satisfaits</strong> de leur accompagnement"
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
                    </div>
                    <p className="italic">Source&nbsp;: étude ICF-PWC (2021)</p>
                </div>
            </div>
        </section>
    )
}