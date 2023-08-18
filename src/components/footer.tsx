'use client'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '/public/logos/logo-texte-horizontal.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { closeModal, openModal } from '../utils/modal'
import { CustomEvent, onThisPage } from '../models/types'
import { emailMessage } from '../data/metadata'
import Socials from './socials'

export default function Footer({
    onThisPage = [
        {
            title: 'Haut de page',
            link: '#header'
        },
    ]
}: {
    onThisPage?: onThisPage[]
}) {
    useEffect(() => {
        document.forms['newsletter-form'].addEventListener('submit', async (e: CustomEvent) => {
            e.preventDefault()
            if (e.target.elements["email_from"].value === '')
                return
            openModal({
                body: emailMessage.sending, buttons: 'hidden'
            })
            const data = new FormData(e.target)
            data.append('email_to', process.env.NEXT_PUBLIC_EMAIL_TO)
            data.append('name_to', process.env.NEXT_PUBLIC_NAME_TO)
            try {
                const sendEmail = await fetch(`${process.env.NEXT_PUBLIC_EMAIL_API}/newsletter`, {
                    method: 'POST',
                    body: data
                })
                const response = await sendEmail.json()
                if (response.sent)
                    openModal({
                        body: emailMessage.newsletterSent, buttons: 'hidden'
                    })
                else
                    throw new Error('Fetch returned with sent = false')
            } catch (error) {
                openModal({
                    body: emailMessage.fetchError.sprintf([process.env.NEXT_PUBLIC_EMAIL_TO, error.message]), buttons: 'hidden'
                })
            }
        })
    }, []);

    return (
        <footer id="footer" className="footer-area bg-secondary-100">
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
                                        <Link href="/qui-je-suis">
                                            Qui je suis
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            Contact
                                        </Link>
                                    </li>
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
                                        <Link href="/accompagnement-parents">
                                            Parents
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/accompagnement-entreprises">
                                            Entreprises
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
                                        onThisPage?.map((e, i) => (
                                            <li key={i}><a href={e.link} dangerouslySetInnerHTML={{ __html: e.title }} /></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="w-full sm:w-7/12 md:w-1/2 lg:w-1/3">
                            <div className="mb-8 footer-newsletter">
                                <p className="footer-title">Inscription à ma newsletter</p>
                                <div className="newsletter">
                                    <form id="newsletter-form" className="relative mb-4">
                                        <input type="email" name="email_from" placeholder="Je m'inscris en indiquant mon email" className="w-full py-3 pl-6 pr-12 duration-300 bg-gray-100 border border-gray-100 rounded-full focus:border-primary-600 focus:outline-none" required />
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