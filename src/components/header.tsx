'use client';
import Image from 'next/image'
import Navbar from './navbar'
import Headline from './headline'
import Wave from '/public/images/svg/wave-white.svg'
import { useState, useEffect } from 'react'

export default function Header({
    banner,
    headerProps
}) {
    const [siteUrl, setSiteUrl] = useState('')

    useEffect(() => {
        setSiteUrl(window.location.origin)

        document.querySelector('html').style.scrollBehavior = 'auto'

        const anchors = Array.from(document.querySelectorAll('a'))
        anchors?.forEach(anchor => anchor.addEventListener('click', e => {
            document.querySelector('html').style.scrollBehavior = anchor.href.includes('#') ? 'smooth' : 'auto'
        }))
    })

    return (
        <header className="relative min-h-[60vh]" id="header">
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
                    width={banner.width}
                    height={banner.height}
                    className="object-cover w-full h-full opacity-80"
                    priority={true}
                />
            </div>
            <div className="absolute inset-0 z-10 flex justify-center items-center">
                <Headline pretitle={headerProps?.pretitle} title={headerProps?.title} subtitle={headerProps?.subtitle} />
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