"use client"
import Image from "next/image"
import Navbar from "./navbar"
import Wave from "/public/images/svg/wave-white.svg"
import type { banner } from "../models/types"
import { useLayoutEffect, useRef } from "react"

export default function Header({
    banner,
}: {
    banner: banner,
}) {
    const navRef = useRef<HTMLDivElement>()
    const headerRef = useRef<HTMLDivElement>()

    useLayoutEffect(() => {
        if (navRef.current) {
            headerRef.current.style.height = `${navRef.current.offsetHeight}px`
        }
    }, [])

    return (
        <>
            <div className="navigation" ref={navRef}>
                <div className="container">
                    <div className="row">
                        <div className="w-full">
                            <Navbar />
                        </div>
                    </div>
                </div>
            </div>
            <header className={`relative md:min-h-[40vh]`} id="header" ref={headerRef}>
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
        </>
    )
}