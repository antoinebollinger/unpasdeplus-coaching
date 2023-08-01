'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faHome, } from '@fortawesome/free-solid-svg-icons'
import newLogo from '/public/logos/logo-texte-horizontal.svg'

export default function Navbar() {
    const pathname = usePathname();

    const stickyNavBar = (e) => {
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
            <Link href="/" className="mr-4 navbar-brand">
                <Image
                    src={newLogo}
                    alt="Logo"
                    height="80"
                />
            </Link>
            <button className="block navbar-toggler focus:outline-none md:hidden" type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
            </button>
            <div className="absolute left-0 z-30 hidden w-full px-5 py-2 duration-300 bg-white shadow md:opacity-100 md:w-auto navbar-collapse md:block top-100 mt-full md:static md:bg-transparent md:shadow-none" id="navbarOne">
                <ul className="items-center content-start mr-auto lg:justify-center md:justify-end navbar-nav md:flex uppercase">
                    <li className={`nav-item ${pathname == "/" ? "active" : ""}`}>
                        <Link href="/">
                            <FontAwesomeIcon icon={faHome} className="text-2xl" />
                        </Link>
                    </li>
                    <li className={`nav-item ${pathname == "/le-coaching" ? "active" : ""}`}>
                        <Link href="/le-coaching" className="page-scroll">
                            Le<br />coaching
                        </Link>
                    </li>
                    <li className={`relative nav-item ${["/offres-particuliers", "/offres-entreprises"].indexOf(pathname) !== -1 ? "active" : ""}`}>
                        <a>
                            Offres<br />de coaching
                        </a>
                        <ul>
                            <li className={`nav-item ${pathname == "/offres-particuliers" ? "active" : ""}`}>
                                <Link href="/offres-particuliers" className="page-scroll">
                                    Particuliers
                                </Link>
                            </li>
                            <li className={`nav-item ${pathname == "/offres-entreprises" ? "active" : ""}`}>
                                <Link href="/offres-entreprises" className="page-scroll">
                                    Entreprises
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={`nav-item ${pathname == "/qui-je-suis" ? "active" : ""}`}>
                        <Link href="/qui-je-suis" className="page-scroll">
                            Qui<br />je suis
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="items-center justify-end hidden navbar-social lg:flex">
                <span className="mr-4 font-bold text-gray-900 uppercase">Suivez-moi</span>
                <ul className="flex footer-social">
                    <li><a href="https://www.facebook.com/sabrina.appriou"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="https://www.instagram.com/sabs.app/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href="https://www.linkedin.com/in/sabrina-appriou-0138a8122/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                </ul>
            </div>
        </nav>
    )
}