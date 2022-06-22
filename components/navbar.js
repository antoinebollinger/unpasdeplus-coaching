import { Component } from "react";

class Navbar extends Component {
    navMenuDiv;

    toggleNavContent(e) {
        e.preventDefault();
        const navContent = document.getElementById("nav-content");
        navContent.classList.toggle('hidden');
    }

    componentDidMount() {
        let scrollpos = window.scrollY;
        const header = document.getElementById("header");
        const navToggle = document.getElementById('nav-toggle');
        const navContent = document.getElementById("nav-content");
        const navAction = document.getElementById("nav-action");
        const brandname = document.getElementById("brandname");
        const toToggle = document.querySelectorAll(".toggleColour");

        navToggle.addEventListener('click', this.toggleNavContent)

        document.addEventListener("scroll", function () {
            /*Apply classes for slide in bar*/
            scrollpos = window.scrollY;

            if (scrollpos > 10) {
                header.classList.add("bg-white");
                navAction.classList.remove("bg-white");
                navAction.classList.add("gradient");
                navAction.classList.remove("text-gray-800");
                navAction.classList.add("text-white");
                //Use to switch toggleColour colours
                for (var i = 0; i < toToggle.length; i++) {
                    toToggle[i].classList.add("text-gray-800");
                    toToggle[i].classList.remove("text-white");
                }
                header.classList.add("shadow");
                navContent.classList.remove("bg-gray-100");
                navContent.classList.add("bg-white");
            } else {
                header.classList.remove("bg-white");
                navAction.classList.remove("gradient");
                navAction.classList.add("bg-white");
                navAction.classList.remove("text-white");
                navAction.classList.add("text-gray-800");
                //Use to switch toggleColour colours
                for (var i = 0; i < toToggle.length; i++) {
                    toToggle[i].classList.add("text-white");
                    toToggle[i].classList.remove("text-gray-800");
                }

                header.classList.remove("shadow");
                navContent.classList.remove("bg-white");
                navContent.classList.add("bg-gray-100");
            }
        });
    }

    render() {
        return (
            <nav id="header" className="fixed w-full z-30 top-0 text-white">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                    <div className="pl-4 flex items-center">
                        <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href=".">
                            UNPASDEPLUS
                        </a>
                    </div>
                    <div className="block lg:hidden pr-4">
                        <button id="nav-toggle" className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
                        <ul className="list-reset lg:flex justify-end flex-1 items-center">
                            <li className="mr-3">
                                <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Accueil</a>
                            </li>
                            <li className="mr-3">
                                <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#about">Qui je suis</a>
                            </li>
                            <li className="mr-3">
                                <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#programs">Offres de coaching</a>
                            </li>
                        </ul>
                        <a
                            href="#contact"
                            id="nav-action"
                            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                        >
                            Contact
                        </a>
                    </div>
                </div>
                <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
            </nav>
        )
    }
}

export default Navbar