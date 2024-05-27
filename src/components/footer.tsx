"use client"
import Link from "next/link"
import Image from "next/image"
import Logo from "/public/logos/logo-texte-horizontal.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import { useEffect } from "react"
import { openDialog } from "../utils/dialog"
import { CustomEvent, onThisPage } from "../models/types"
import { siteData, emailMessage } from "../data/metadata"
import Socials from "./socials"
import Wave from "/public/images/svg/wave-pink.svg"

export default function Footer({
    onThisPage = [
        {
            title: "Haut de page",
            link: "#header"
        },
    ]
}: {
    onThisPage?: onThisPage[]
}) {
    useEffect(() => {
        document.forms["newsletter-form"].addEventListener("submit", async (e: CustomEvent) => {
            e.preventDefault()

            if (!e.target.elements["consent"].checked)
                return

            if (e.target.elements["email_from"].value === "")
                return

            openDialog({
                body: emailMessage.sending, buttons: "hidden"
            })

            const data = new FormData(e.target)
            data.append("email_to", process.env.NEXT_PUBLIC_EMAIL_TO)
            data.append("name_to", process.env.NEXT_PUBLIC_NAME_TO)
            data.append("transporter", "unpasdeplus")

            try {
                const sendEmail = await fetch(`${process.env.NEXT_PUBLIC_EMAIL_API}/newsletter`, {
                    method: "POST",
                    body: data
                })
                const response = await sendEmail.json()
                if (response.sent)
                    openDialog({
                        body: emailMessage.newsletterSent, buttons: "hidden"
                    })
                else
                    throw new Error("Fetch returned with sent = false")
            } catch (error) {
                openDialog({
                    body: emailMessage.fetchError.sprintf([process.env.NEXT_PUBLIC_EMAIL_TO, error.message]), buttons: "hidden"
                })
            }
        })
    }, []);

    const year = () => {
        const date = new Date()
        return date.getFullYear()
    }

    return (
        <footer id="footer" className="footer-area">
            <div className="z-10 w-full h-[120px] -mb-1 header-shape flex items-end">
                <Image
                    src={Wave}
                    alt="Wave"
                    className="w-full m-h-[120px]"
                />
            </div>
            <div className="footer-widget bg-secondary-100 pb-16">
                <div className="container">
                    <div className="row">
                        <div className="w-full">
                            <div className="items-end justify-between block mb-8 footer-logo-support md:flex">
                                <div className="flex items-center footer-logo">
                                    <Link href="/">
                                        <Image
                                            src={Logo}
                                            alt="Logo"
                                            height="80"
                                        />
                                    </Link>
                                    <Socials className="flex ml-8 footer-social hidden" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="w-full md:w-1/3 xl:w-1/4">
                            <div className="mb-8 footer-link">
                                <ul>
                                    <li>
                                        <Link href="/">
                                            Accueil
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/a-propos-de-moi">
                                            À propos de moi
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
                                    <li>
                                        <Link href="/politique-confidentialite">
                                            Politique de confidentialité
                                        </Link>
                                    </li>
                                    <li>
                                        <div className="flex gap-2"><Socials className="flex gap-2" /></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 xl:w-1/4">
                            <div className="mb-8 footer-link">
                                <p className="footer-title">Mes offres</p>
                                <ul>
                                    <li>
                                        <Link href="/coaching-perte-de-poids">
                                            Coaching perte de poids
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/coaching-bien-etre-equilibre">
                                            Coaching bien-être & équilibre
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/coaching-entreprise">
                                            Coaching entreprise
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 xl:w-1/4">
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
                        <div className="w-full md:w-1/2 xl:w-1/4">
                            <div className="mb-8 footer-newsletter">
                                <p className="footer-title">Inscription à ma newsletter</p>
                                <div className="newsletter">
                                    <form id="newsletter-form" className="relative">
                                        <input type="email" name="email_from" placeholder="Entrez votre email" className="w-full py-3 pl-6 pr-12 duration-200 bg-gray-100 border border-gray-100 rounded-full focus:border-primary-600 focus:outline-none mb-4" required />
                                        <button type="submit" className="absolute top-0 right-0 mt-3 mr-6 text-xl text-primary-600" aria-label="S’incrire à ma newsletter">
                                            <FontAwesomeIcon icon={faAngleDoubleRight} />
                                        </button>
                                        <label htmlFor="consent" className="text-sm single-form cursor-pointer">
                                            <input type="checkbox" name="consent" id="consent" className="accent-pink-500" required />&nbsp;
                                            Vous acceptez de recevoir notre newletter. Vous pouvez vous désinscrire à tout moment à l’aide des liens de désinscription ou en me contactant à l’adresse <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_TO}`} title="Envoyer un mail à Sabrina" className="font-bold text-primary-900 hover:text-primary-700 transition">{process.env.NEXT_PUBLIC_EMAIL_TO}</a>.
                                        </label>
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
                        <div className="w-full h-[72px] flex justify-center items-center">
                            <p className="text-white text-center">
                                Copyright © {siteData.domain} {year()}<br />Site réalisé par <a target="_blank" className="font-bold duration-200 hover:text-primary-300" rel="nofollow" href="https://antoinebollinger.fr">Antoine Bollinger</a>
                            </p>
                        </div>
                        <div className="w-full h-[72px] md:hidden"></div>
                    </div>
                </div>
            </div>
        </footer >
    )
}