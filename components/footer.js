import Link from "next/link";
import Image from "next/image";
import Logo from '../public/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

Footer.defaultProps = {
    onThisPage: [
        {
            title: "Haut de page",
            link: "#"
        },
        {
            title: "Contact",
            link: "#contact"
        }
    ]
}
export default function Footer({ onThisPage }) {
    return (
        <footer id="footer" className="footer-area">
            <div className="mb-16 footer-widget">
                <div className="container">
                    <div className="row">
                        <div className="w-full">
                            <div className="items-end justify-between block mb-8 footer-logo-support md:flex">
                                <div className="flex items-center footer-logo">
                                    <Link href="/" className="mt-8">
                                        <Image
                                            src={Logo}
                                            alt="Logo"
                                            width="50"
                                            height="50"
                                        />
                                    </Link>
                                    <ul className="flex mt-8 ml-8 footer-social">
                                        <li><a href="https://www.facebook.com/sabrina.appriou"><FontAwesomeIcon icon={faFacebook} alt="Facebook" /></a></li>
                                        <li><a href="https://www.instagram.com/sabs.app/"><FontAwesomeIcon icon={faInstagram} alt="Instagram" /></a></li>
                                        <li><a href="https://www.linkedin.com/in/sabrina-appriou-0138a8122/"><FontAwesomeIcon icon={faLinkedin} alt="LinkedIn" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6">
                            <div className="mb-8 footer-link">
                                <p className="footer-title uppercase">Un pas de plus</p>
                                <ul>
                                    <li>
                                        <Link href="/">
                                            Accueil
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/le-coaching">
                                            Le coaching
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/qui-je-suis">
                                            Qui je suis
                                        </Link>
                                    </li>
                                    <li><a href="#contact">Contact</a></li>
                                    <li>
                                        <Link href="/mentions-legales">
                                            Mentions légales
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                            <div className="mb-8 footer-link">
                                <p className="footer-title">Mes accompagnements</p>
                                <ul>
                                    <li>
                                        <Link href="/offres-particuliers">
                                            Offres Particuliers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/offres-entreprises">
                                            Offres Entreprises
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full sm:w-5/12 md:w-1/3 lg:w-1/4">
                            <div className="mb-8 footer-link">
                                <p className="footer-title">Sur cette page</p>
                                <ul>
                                    {
                                        onThisPage?.map((e, i) => {
                                            return (
                                                <li key={i}><a href={e.link}>{e.title}</a></li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="w-full sm:w-7/12 md:w-1/2 lg:w-1/3">
                            <div className="mb-8 footer-newsletter">
                                <p className="footer-title">Inscription à ma newsletter</p>
                                <div className="newsletter">
                                    <form action="#" className="relative mb-4">
                                        <input type="text" placeholder="Je m'inscris" className="w-full py-3 pl-6 pr-12 duration-300 bg-gray-200 border border-gray-200 rounded-full focus:border-blue-600 focus:outline-none" />
                                        <button type="submit" className="absolute top-0 right-0 mt-3 mr-6 text-xl text-primary-600">
                                            <FontAwesomeIcon icon={faAngleDoubleRight} alt="Submit" />
                                        </button>
                                    </form>
                                </div>
                                <p className="font-medium text-gray-900 hidden">Indiquez un n° de téléphone ou une adresse email et je vous recontacterai rapidement !</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-primary-900 footer-copyright">
                <div className="container">
                    <div className="row">
                        <div className="w-full">
                            <div className="py-6 text-center">
                                <p className="text-white">
                                    Copyright © unpasdeplus 2022 - Site réalisé par <a className="text-primary-100 duration-300 hover:text-primary-300" rel="nofollow" href="https://antoinebollinger.fr">Antoine Bollinger</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}