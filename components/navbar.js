import { useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

import Logo from '../public/logo.png';

export default function Navbar() {
    const router = useRouter();

    const stickyNavBar = (e) => {
        e.preventDefault();
        let scrollpos = window.scrollY;
        const navigation = document.querySelector(".navigation");
        const backToTop = document.querySelector(".back-to-top");
        if (scrollpos > 10)
            navigation.classList.add("sticky");
        else
            navigation.classList.remove("sticky");
        if (scrollpos > 300)
            backToTop.style.opacity = 1;
        else
            backToTop.style.opacity = 0;
    };

    useEffect(() => {
        document.addEventListener("scroll", stickyNavBar);

        const navtoggler = document.querySelector('.navbar-toggler');
        const navcollapse = document.querySelector('.navbar-collapse');
        const navlinks = document.querySelectorAll('.navbar-nav a');

        navtoggler?.addEventListener('click', (e) => {
            navtoggler.classList.toggle('active');
            navcollapse.classList.toggle('show');
        })
        navlinks?.forEach(link => link.addEventListener('click', (e) => {
            navtoggler.classList.remove('active');
            navcollapse.classList.remove('show');
        }))
    }, []);

    return (
        <nav className="flex items-center justify-between navbar navbar-expand-md" >
            <Link href="/">
                <a className="mr-4 navbar-brand">
                    <Image
                        src={Logo}
                        alt="Logo"
                        width="100px"
                        height="100px"
                    />
                </a>
            </Link>
            <button className="block navbar-toggler focus:outline-none md:hidden" type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
            </button>
            <div className="absolute left-0 z-30 hidden w-full px-5 py-3 duration-300 bg-white shadow md:opacity-100 md:w-auto collapse navbar-collapse md:block top-100 mt-full md:static md:bg-transparent md:shadow-none" id="navbarOne">
                <ul className="items-center content-start mr-auto lg:justify-center md:justify-end navbar-nav md:flex uppercase">
                    <li className={`nav-item ${router.pathname == "/" ? "active" : ""}`}>
                        <Link href="/">
                            <a className="page-scroll text-2xl">
                                <FontAwesomeIcon icon={faHome} />
                            </a>
                        </Link>
                    </li>
                    <li className={`nav-item ${router.pathname == "/bio" ? "active" : ""}`}>
                        <Link href="/bio">
                            <a className="page-scroll">Qui<br />je suis</a>
                        </Link>
                    </li>
                    <li className={`nav-item ${router.pathname == "/coaching-image-soi" ? "active" : ""}`}>
                        <Link href="/coaching-image-soi">
                            <a className="page-scroll">Coaching<br />l'image de soi</a>
                        </Link>
                    </li>
                    <li className={`nav-item ${router.pathname == "/coaching-parentalite" ? "active" : ""}`}>
                        <Link href="/coaching-parentalite">
                            <a className="page-scroll">Coaching<br />parentalité</a>
                        </Link>
                    </li>
                    <li className={`nav-item ${router.pathname == "/coaching-outdoor" ? "active" : ""}`}>
                        <Link href="/coaching-outdoor">
                            <a className="page-scroll">Coaching<br />outdoor</a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="items-center justify-end hidden navbar-social lg:flex">
                <span className="mr-4 font-bold text-gray-900 uppercase">Suivez-moi</span>
                <ul className="flex footer-social">
                    <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                </ul>
            </div>
        </nav>
    )
}