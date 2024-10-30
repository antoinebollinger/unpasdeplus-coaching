"use client"
import Image from "next/image"
import dynamic from "next/dynamic"
// import Wave from "/public/images/svg/wave-white.svg"
import Wave from "../../public/images/svg/wave"
import type { banner } from "../models/types"
import { useLayoutEffect, useRef } from "react"

const Navbar = dynamic(() => import("./navbar"))
// import Navbar from "./navbar"

export default function Header({
    banner,
    waveClassName
}: {
    banner: banner,
    waveClassName: string
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
                    <Wave className={waveClassName} />
                    {/* <Image
                        src={Wave}
                        alt="Wave"
                        className="object-cover w-full h-full"
                    /> */}
                </div>
            </header>
        </>
    )
}