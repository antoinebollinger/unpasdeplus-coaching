import Image from 'next/image'
import stepByStep from '../public/images/stepbystep.png'

export default function Header() {

    return (
        <header className="container px-8 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left">
                <p className="uppercase tracking-loose w-full">Pour un changement profond et durable</p>
                <h1 className="my-4 text-5xl font-bold leading-tight">
                    UN PAS DE PLUS
                </h1>
                <p className="leading-normal text-2xl mb-8">
                    Coaching professionnel & particulier
                </p>

            </div>
            <div className="w-full md:w-1/2 py-6 text-center">
                {/* <Image
                    src={stepByStep}
                    className="w-full md:w-4/5 z-50 mx-auto z-0"
                    alt="Step by Step" /> */}
            </div>
        </header>
    )
}