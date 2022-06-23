import Link from "next/link";
import { Component } from "react"
import ScrollspyNav from 'react-scrollspy-nav'

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
        const header = document.getElementById("header");
        const toToggle = Array.from(document.querySelectorAll(".toggleColour"));
        if (scrollpos > 10) {
            header.classList.remove("gradient");
            header.classList.add("bg-white");
            header.classList.add("shadow");
            toToggle.forEach(ele => {
                ele.classList.add("text-primary-800");
                ele.classList.add("hover:text-primary-700");
                ele.classList.remove("text-white");
                ele.classList.remove("hover:text-secondary-200");
            })
        } else {
            header.classList.add("gradient");
            header.classList.remove("bg-white");
            header.classList.remove("shadow");
            toToggle.forEach(ele => {
                ele.classList.remove("text-primary-800");
                ele.classList.remove("hover:text-primary-700");
                ele.classList.add("text-white");
                ele.classList.add("hover:text-secondary-200");
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
        document.getElementById('reload').addEventListener('click', () => {
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
            <ScrollspyNav scrollTargetIds={['home', 'about', 'programs', 'contact']} activeNavClass="underline" scrollDuration="400">
                <nav id="header" className="fixed w-full z-30 top-0">
                    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                        <div className="lg:pl-2 pl-6 flex items-center">
                            <a className="toggleColour transition no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="." id="reload">
                                UN PAS DE PLUS
                            </a>
                        </div>
                        {this.props.home ? (
                            <>
                                <div className="block lg:hidden lg:pr-2 pr-6">
                                    <button id="nav-toggle" className="toggleColour flex items-center p-1 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <title>Menu</title>
                                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 lg:bg-transparent p-6 lg:p-0 z-20 lg:pr-2 pr-6" id="nav-content">
                                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                                        <li>
                                            <a className="toggleColour transition inline-block py-2 px-0 lg:pl-6 hover:underline" href="#home">Accueil</a>
                                        </li>
                                        <li>
                                            <a className="toggleColour transition inline-block py-2 px-0 lg:pl-6 hover:underline" href="#about">Qui je suis</a>
                                        </li>
                                        <li>
                                            <a className="toggleColour transition inline-block py-2 px-0 lg:pl-6 hover:underline" href="#programs">Offres de coaching</a>
                                        </li>
                                        <li>
                                            <a className="toggleColour transition inline-block py-2 px-0 lg:pl-6 hover:underline" href="#contact">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        ) : (<></>)}
                    </div>
                    <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
                </nav>
            </ScrollspyNav >
        )
    }
}

export default Navbar