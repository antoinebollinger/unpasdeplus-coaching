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
                // ele.classList.add("hover:text-primary-700");
                ele.classList.remove("text-white");
                // ele.classList.remove("hover:text-secondary-200");
            })
        } else {
            header.classList.add("gradient");
            header.classList.remove("bg-white");
            header.classList.remove("shadow");
            toToggle.forEach(ele => {
                ele.classList.remove("text-primary-800");
                // ele.classList.remove("hover:text-primary-700");
                ele.classList.add("text-white");
                // ele.classList.add("hover:text-secondary-200");
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

            <nav id="header" className="fixed w-full z-30 top-0">
                <div className="container w-full mx-auto flex flex-wrap items-center justify-between px-8">
                    <div className="h-[60px] flex items-center">
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
                                <ScrollspyNav scrollTargetIds={['home', 'about', 'programs', 'contact']} activeNavClass="active" scrollDuration="400">
                                    <ul className="list-reset lg:flex justify-end flex-1 items-center lg:text-end font-bold">
                                        <li className="h-[40px] leading-[40px] lg:pl-8">
                                            <a className="toggleColour transition opacity-70 hover:opacity-100" href="#home">Accueil</a>
                                        </li>
                                        <li className="h-[40px] leading-[40px] lg:pl-8">
                                            <a className="toggleColour transition opacity-70 hover:opacity-100" href="#about">Qui je suis</a>
                                        </li>
                                        <li className="h-[40px] leading-[40px] lg:pl-8">
                                            <a className="toggleColour transition opacity-70 hover:opacity-100" href="#programs">Offres de coaching</a>
                                        </li>
                                        <li className="h-[40px] leading-[40px] lg:pl-8">
                                            <a className="toggleColour transition opacity-70 hover:opacity-100" href="#contact">Contact</a>
                                        </li>
                                    </ul>
                                </ScrollspyNav >
                            </div>
                        </>
                    ) : (<></>)}
                </div>
                <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
            </nav>

        )
    }
}

export default Navbar