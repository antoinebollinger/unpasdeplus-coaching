import Link from "next/link";
import { Component } from "react"
import ScrollspyNav from 'react-scrollspy-nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
    navMenuDiv;
    ctrl;

    toggleNavContent(e) {
        e.preventDefault();
        const navContent = document.getElementById("nav-content");
        navContent.classList.toggle('hidden');
    }

    toggleColor() {
        let scrollpos = window.scrollY;
        const header = document.getElementById("nav-menu");
        const contact = document.getElementById("contact__btn");
        const toToggle = Array.from(document.querySelectorAll(".toggleColour"));
        if (scrollpos > 10) {
            header.classList.remove("gradient");
            header.classList.add("bg-white");
            header.classList.add("shadow");
            contact?.classList.remove('bg-white');
            contact?.classList.remove('text-primary-800');
            contact?.classList.add('gradient');
            contact?.classList.add('text-white');
            toToggle.forEach(ele => {
                ele.classList.add("text-primary-800");
                ele.classList.remove("text-white");
            })
        } else {
            header.classList.add("gradient");
            header.classList.remove("bg-white");
            header.classList.remove("shadow");
            contact?.classList.add('bg-white');
            contact?.classList.add('text-primary-800');
            contact?.classList.remove('gradient');
            contact?.classList.remove('text-white');
            toToggle.forEach(ele => {
                ele.classList.remove("text-primary-800");
                ele.classList.add("text-white");
            })
        }
    }

    componentDidMount() {
        this.toggleColor();
        document.addEventListener("scroll", this.toggleColor);
        document.getElementById('nav-toggle')?.addEventListener('click', this.toggleNavContent);
        Array.from(document.querySelectorAll('nav ul a')).forEach(ele => {
            ele.addEventListener('click', this.toggleNavContent);
        });
        document.addEventListener('keydown', (e) => {
            this.ctrl = e.ctrlKey;
        });
        document.addEventListener('keyup', () => this.ctrl = false);
        document.getElementById('reload')?.addEventListener('click', () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            if (this.ctrl) {
                window.open(window.location.origin, '_blank');
            } else {
                window.location.replace(window.location.origin);
            }
        })
    }

    render() {
        return (
            <nav id="nav-menu" className="fixed w-full z-30 top-0">
                <div className="container w-full mx-auto flex flex-wrap items-center justify-between px-8">
                    <div className="h-[100px] flex items-center" id="nav-logo">
                        <Link href="/">
                            <a className="toggleColour transition no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                                UN PAS DE PLUS
                            </a>
                        </Link>
                    </div>
                    {this.props.home ? (
                        <>
                            <div className="block lg:hidden">
                                <button id="nav-toggle" className="toggleColour flex items-center p-1 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                    <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Menu</title>
                                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="w-full lg:w-auto lg:flex lg:items-center hidden z-20" id="nav-content">
                                <ScrollspyNav scrollTargetIds={['home', 'coaching', 'about', 'programs', 'contact']} activeNavClass="active" scrollDuration="400">
                                    <ul className="list-reset lg:flex justify-end flex-1 items-center lg:text-end uppercase text-xl">
                                        <li className="h-[40px] leading-[40px] lg:pl-8">
                                            <a className="toggleColour transition opacity-70 hover:opacity-100" href="#home">Accueil</a>
                                        </li>
                                        <li className="h-[40px] leading-[40px] lg:pl-8">
                                            <a className="toggleColour transition opacity-70 hover:opacity-100" href="#coaching">Le coaching</a>
                                        </li>
                                        <li className="h-[40px] leading-[40px] lg:pl-8">
                                            <a className="toggleColour transition opacity-70 hover:opacity-100" href="#programs">Mes offres</a>
                                        </li>
                                        <li className="h-[40px] leading-[40px] lg:pl-8">
                                            <a className="toggleColour transition opacity-70 hover:opacity-100" href="#about">Qui je suis</a>
                                        </li>
                                        <li className="h-[40px] leading-[40px] lg:pl-8 lg:hidden">
                                            <a className="toggleColour transition opacity-70 hover:opacity-100" href="#contact">Contact</a>
                                        </li>
                                        <li className="lg:pl-8 hidden lg:list-item">
                                            <a href="#contact">
                                                <button className="rounded-full px-8 py-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out opacity-90 hover:opacity-100" id="contact__btn">
                                                    Contact
                                                </button>
                                            </a>
                                        </li>
                                    </ul>
                                </ScrollspyNav >
                            </div>
                        </>
                    ) : (
                        <Link href="/">
                            <button className="toggleColour flex items-center p-1 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                <FontAwesomeIcon icon={faArrowCircleLeft} className="h-6 w-6" />
                            </button>
                        </Link>
                    )}
                </div>
            </nav>
        )
    }
}

export default Navbar