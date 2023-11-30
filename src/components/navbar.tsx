'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import newLogo from '/public/logos/logo-texte-horizontal.svg'
import Socials from './socials'

export default function Navbar() {
    const pathname = usePathname();

    const stickyNavBar = (e: Event) => {
        e.preventDefault()
        let scrollpos = window.scrollY
        const navigation = document.querySelector('.navigation')
        const backToTop = document.querySelector<HTMLElement>('.back-to-top')
        if (scrollpos > 10)
            navigation.classList.add('sticky')
        else
            navigation.classList.remove('sticky')
        if (scrollpos > 300)
            backToTop.style.opacity = '1'
        else
            backToTop.style.opacity = '0'
    };

    useEffect(() => {
        document.addEventListener('scroll', stickyNavBar)

        const navtoggler = document.querySelector('.navbar-toggler')
        const navcollapse = document.querySelector('.navbar-collapse')
        const navlinks = document.querySelectorAll('.page-scroll')

        navtoggler?.addEventListener('click', (e) => {
            navtoggler.classList.toggle('active')
            navcollapse.classList.toggle('show')
        })
        navlinks?.forEach(link => link.addEventListener('click', (e) => {
            navtoggler.classList.remove('active')
            navcollapse.classList.remove('show')
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
                <ul className="items-center content-start mr-auto lg:justify-center lg:justify-end navbar-nav lg:flex uppercase">
                    <li className={`nav-item ${pathname == "/coaching-sante" ? "active" : ""}`}>
                        <Link href="/coaching-sante" className="page-scroll">
                            Coaching<br />santé
                        </Link>
                    </li>
                    <li className={`nav-item ${pathname == "/coaching-entreprise" ? "active" : ""}`}>
                        <Link href="/coaching-entreprise" className="page-scroll">
                            Coaching<br />entreprise
                        </Link>
                    </li>
                    <li className={`nav-item ${pathname == "/qui-je-suis" ? "active" : ""}`}>
                        <Link href="/qui-je-suis" className="page-scroll">
                            Qui<br />je&nbsp;suis
                        </Link>
                    </li>
                    <li className={`nav-item ${pathname == "/contact" ? "active" : ""}`}>
                        <Link href="/contact" className="page-scroll">
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item flex gap-4 items-center">
                        <span>Suivez-moi</span><Socials className="flex footer-social" />
                    </li>
                </ul>
            </div>
        </nav>
    )
}