"use client"
import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import newLogo from "/public/logos/logo-texte-horizontal.svg"
import Socials from "./socials"

export default function Navbar() {
    const pathname = usePathname()

    const stickyNavBar = (e: Event) => {
        e.preventDefault()
        let scrollpos = window.scrollY
        const navigation = document.querySelector(".navigation")
        const backToTop = document.querySelector<HTMLElement>(".back-to-top")
        if (scrollpos > 100)
            navigation.classList.add("stuck")
        else
            navigation.classList.remove("stuck")
        if (scrollpos > 300)
            backToTop.style.opacity = "1"
        else
            backToTop.style.opacity = "0"
    }

    useEffect(() => {
        document.addEventListener("scroll", stickyNavBar)

        const navtoggler = document.querySelector(".navbar-toggler")
        const navcollapse = document.querySelector(".navbar-collapse")
        const navlinks = document.querySelectorAll(".page-scroll")

        navtoggler?.addEventListener("click", (e) => {
            navtoggler.classList.toggle("active")
            navcollapse.classList.toggle("show")
        })
        navlinks?.forEach(link => link.addEventListener("click", (e) => {
            navtoggler.classList.remove("active")
            navcollapse.classList.remove("show")
        }))
    }, [])

    return (
        <nav className="flex items-center justify-between navbar navbar-expand-md" >
            <Link href="/" className="mr-4 navbar-brand" aria-label="Home">
                <Image
                    src={newLogo}
                    alt="Logo"
                    height="80"
                    className="h-[80px]"
                />
            </Link>
            <button className="block navbar-toggler focus:outline-none lg:hidden" type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
            </button>
            <div className="absolute left-0 z-30 hidden w-full px-5 py-2 duration-200 bg-white shadow lg:opacity-100 lg:w-auto navbar-collapse lg:block top-100 mt-full lg:static lg:bg-transparent lg:shadow-none" id="navbarOne">
                <ul className="mr-auto navbar-nav lg:flex uppercase" id="main-ul">
                    <li className={`nav-item ${pathname == "/a-propos-de-moi" ? "active" : ""}`}>
                        <Link href="/a-propos-de-moi" className="page-scroll">
                            À propos <br className="hidden lg:block" />de moi
                        </Link>
                    </li>
                    <li className={`relative nav-item ${pathname.startsWith("/coaching") ? "active" : ""}`}>
                        <button>Mes offres</button>
                        <div className="dropdown">
                            <ul>
                                <li className={`nav-item ${pathname == "/coaching-perte-de-poids" ? "active" : ""}`}>
                                    <Link href="/coaching-perte-de-poids" className="page-scroll">
                                        Coaching perte de poids
                                    </Link>
                                </li>
                                <li className={`nav-item ${pathname == "/coaching-bien-etre-equilibre" ? "active" : ""}`}>
                                    <Link href="/coaching-bien-etre-equilibre" className="page-scroll">
                                        Coaching bien-être & équilibre
                                    </Link>
                                </li>
                                <li className={`nav-item ${pathname == "/coaching-entreprise" ? "active" : ""}`}>
                                    <Link href="/coaching-entreprise" className="page-scroll">
                                        Coaching entreprise
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={`nav-item ${pathname == "/contact" ? "active" : ""}`}>
                        <Link href="/contact" className="page-scroll">
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item flex gap-4 items-center">
                        <span>
                            <Socials className="flex footer-social" />
                        </span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}