'use client'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '/public/logos/logo-texte-horizontal.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { closeModal, openModal } from '../utils/modal'
import Socials from './socials'

const defaultProps = [
    {
        title: 'Haut de page',
        link: '#'
    },
    {
        title: 'Contact',
        link: '#contact'
    }
]

export default function Footer({ onThisPage = defaultProps }) {
    useEffect(() => {
        document.forms['newsletter-form'].addEventListener('submit', async e => {
            e.preventDefault();
            if (e.target.elements["email_from"].value === '')
                return;
            openModal({
                body: 'Envoi en cours', buttons: 'hidden'
            });
            const data = new FormData(e.target);
            data.append('email_to', process.env.email_to);
            data.append('name_to', process.env.name_to);
            const sendEmail = await fetch(`${process.env.email_api}/newsletter`, {
                method: 'POST',
                body: data
            });
            const response = await sendEmail.json();
            closeModal();
            if (response.sent)
                openModal({
                    body: `Votre demande d'inscription à ma newsletter a bien été envoyée. A très vite !`, buttons: 'hidden'
                });
            else
                openModal({
                    body: `Oups... Une erreur est survenue. Merci de réessayer, ou de m'envoyer un email directement à l'adresse <strong>sabrina.appriou@hotmail.com</strong>. A bientôt !`, buttons: 'hidden'
                });
        })
    }, []);

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
                                            height="60"
                                        />
                                    </Link>
                                    <Socials className="flex mt-8 ml-8 footer-social hidden" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6">
                            <div className="mb-8 footer-link">
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
                                            Coaching Particuliers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/offres-entreprises">
                                            Coaching Entreprises
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
                                    <form id="newsletter-form" className="relative mb-4">
                                        <input type="email" name="email_from" placeholder="Je m'inscris en indiquant mon email" className="w-full py-3 pl-6 pr-12 duration-300 bg-gray-200 border border-gray-200 rounded-full focus:border-blue-600 focus:outline-none" required />
                                        <button type="submit" className="absolute top-0 right-0 mt-3 mr-6 text-xl text-primary-600" aria-label="S'incrire à ma newsletter">
                                            <FontAwesomeIcon icon={faAngleDoubleRight} />
                                        </button>
                                    </form>
                                </div>
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