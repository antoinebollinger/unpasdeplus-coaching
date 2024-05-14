'use client'
import Image from 'next/image'
import Navbar from './navbar'
import Wave from '/public/images/svg/wave-white.svg'
import type { banner } from '../models/types'

export default function Header({
    banner,
}: {
    banner: banner,
}) {
    return (
        <header className="relative min-h-[40vh] md:min-h-[65vh]" id="header">
            <div className="navigation">
                <div className="container">
                    <div className="row">
                        <div className="w-full">
                            <Navbar />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 z-0">
                <Image
                    src={banner.src}
                    alt="Main banner"
                    fill={true}
                    className="object-cover opacity-80"
                    priority={true}
                />
            </div>
            <div className="absolute bottom-0 z-10 w-full h-auto -mb-1 header-shape">
                <Image
                    src={Wave}
                    alt="wave"
                    className="object-cover w-full h-full"
                />
            </div>
        </header>
    )
}