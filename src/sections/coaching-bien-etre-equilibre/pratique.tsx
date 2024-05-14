'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { reveal } from '../../utils/reveal'
import Pratique1 from '/public/images/coaching-bien-etre-equilibre/pratique_1.webp'
import Pratique2 from '/public/images/coaching-bien-etre-equilibre/pratique_2.webp'
import Pratique3 from '/public/images/coaching-bien-etre-equilibre/pratique_3.jpg'
import Pratique4 from '/public/images/coaching-bien-etre-equilibre/pratique_4.webp'

export default function Pratique({ className = 'bg-gray-100' }: { className?: string }) {
    useEffect(() => {
        reveal({
            collection: document.querySelectorAll('.career-step'),
            classesToRemove: ['translate-x-3/4', 'scale-0', 'opacity-0'],
            classesToAdd: ['translate-x-0'],
        })
    }, [])

    return (
        <section id="pratique" className={className}>
            <div className="container">
                <div className="w-full lg:w-2/3 mx-auto mb-16">
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <div className="w-1/2 md:w-1/4 hidden lg:block">
                            <Image
                                src={Pratique1}
                                width={150}
                                className="opacity-0"
                                alt="Illustration"
                            />
                        </div>
                        <div className="w-full md:w-3/4">
                            <h3 className="h1">En pratique, ça donne quoi&nbsp;?</h3>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                        <div className="w-1/2 md:w-1/4 mx-auto transition duration-200 opacity-0 scale-0 career-step">
                            <Image
                                src={Pratique1}
                                width={150}
                                height={150}
                                className="mx-auto rounded-full shadow-xl"
                                alt="Illustration"
                            />
                        </div>
                        <div className="w-full md:w-3/4 transition duration-200 opacity-0 translate-x-3/4 career-step">
                            <p className="text-lg text-gray-900">
                                Coaching en séances individuelles
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                        <div className="w-1/2 md:w-1/4 mx-auto transition duration-200 opacity-0 scale-0 career-step">
                            <Image
                                src={Pratique2}
                                width={150}
                                height={150}
                                className="mx-auto rounded-full shadow-xl"
                                alt="Illustration"
                            />
                        </div>
                        <div className="w-full md:w-3/4 transition duration-200 opacity-0 translate-x-3/4 career-step">
                            <p className="text-lg text-gray-900">
                                Un programme efficace et complet
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                        <div className="w-1/2 md:w-1/4 mx-auto transition duration-200 opacity-0 scale-0 career-step">
                            <Image
                                src={Pratique3}
                                width={150}
                                height={150}
                                className="mx-auto rounded-full shadow-xl"
                                alt="Illustration"
                            />
                        </div>
                        <div className="w-full md:w-3/4 transition duration-200 opacity-0 translate-x-3/4 career-step">
                            <p className="text-lg text-gray-900">
                                Ateliers collectifs
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                        <div className="w-1/2 md:w-1/4 mx-auto transition duration-200 opacity-0 scale-0 career-step">
                            <Image
                                src={Pratique4}
                                width={150}
                                height={150}
                                className="mx-auto rounded-full shadow-xl"
                                alt="Illustration"
                            />
                        </div>
                        <div className="w-full md:w-3/4 transition duration-200 opacity-0 translate-x-3/4 career-step">
                            <p className="text-lg text-gray-900">
                                En présentiel à Vannes & ses alentours / distanciel sur toute la France
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <Link href="/contact" className="main-btn gradient-btn focus:outline-none uppercase">
                        Je prends contact pour en savoir plus
                    </Link>
                </div>
            </div>
        </section>
    )
}