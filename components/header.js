import Image from 'next/image'
import logo from '../public/images/logo_blanc.png'

export default function Header() {

    return (
        <header className="container px-8 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 py-6 text-center mx-auto">
                <Image
                    src={logo}
                    className="w-full md:w-4/5 z-50 mx-auto z-0"
                    alt="Step by Step" />
                <p className="uppercase text-2xl tracking-loose w-full">Pour un changement profond et durable</p>
            </div>
        </header>
    )
}