import Link from "next/link";
import Image from "next/image";
import logo from '../public/images/logo_violet.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer className="bg-white">
            <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
            <div className="container mx-auto px-8">
                <div className="w-full flex flex-col md:flex-row py-6">
                    <div className="flex-1 mb-6 text-black">
                        <Link href="/">
                            <a className="opacity-80 hover:opacity-100">
                                <Image
                                    src={logo}
                                    width="150"
                                    height="150"
                                    alt="Step by Step" />
                                <br />
                                {/* UNPASDEPLUS */}
                            </a>
                        </Link>
                    </div>
                    <div className="flex-1 lg:text-end">
                        <p className="uppercase text-gray-500 md:mb-6">Partie légale</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <Link href="/terms">
                                    <a className="no-underline hover:underline text-primary-800 hover:text-primary-700">Conditions d'utilisation</a>
                                </Link>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <Link href="/privacy">
                                    <a className="no-underline hover:underline text-primary-800 hover:text-primary-700">Politique de confidentialité</a>
                                </Link>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <p className="text-primary-900">Copyright © unpasdeplus.com 2022</p>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 lg:text-end">
                        <p className="uppercase text-gray-500 md:mb-6">Réseaux sociaux</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a
                                    href="https://www.instagram.com/sabs.app/"
                                    className="no-underline hover:underline text-primary-800 hover:text-primary-700"
                                >
                                    Instagram <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a
                                    href="https://www.facebook.com/sabrina.appriou"
                                    className="no-underline hover:underline text-primary-800 hover:text-primary-700"
                                >
                                    Facebook <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a
                                    href="https://www.linkedin.com/in/sabrina-appriou-0138a8122/"
                                    className="no-underline hover:underline text-primary-800 hover:text-primary-700"
                                >
                                    LinkedIn <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}