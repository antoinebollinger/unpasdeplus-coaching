"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faPhone, faCalendarDays, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
// import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import { useEffect, useLayoutEffect } from "react"
import { openDialog } from "../utils/dialog"
import { emailMessage } from "../data/metadata"
import { CustomEvent } from "../models/types"
import Link from "next/link"

export default function Contact({ className = "" }: { className?: string }) {

    useEffect(() => {
        document.forms["contact-form"].addEventListener("submit", async (e: CustomEvent) => {
            e.preventDefault()

            if (!e.target.elements["consent"].checked)
                return

            openDialog({
                body: emailMessage.sending, buttons: "hidden"
            })

            const data = new FormData(e.target)
            data.append("email_to", process.env.NEXT_PUBLIC_EMAIL_TO)
            data.append("name_to", process.env.NEXT_PUBLIC_NAME_TO)
            data.append("transporter", "unpasdeplus")

            try {
                const sendEmail = await fetch(`${process.env.NEXT_PUBLIC_EMAIL_API}/contact`, {
                    method: "POST",
                    body: data
                })
                const response = await sendEmail.json()
                if (response.sent)
                    openDialog({
                        body: emailMessage.messageSent.sprintf([e.target.elements["name"].value]), buttons: "hidden"
                    })
                else
                    throw new Error("Fetch returned with sent = false")
            } catch (error) {
                openDialog({
                    body: emailMessage.fetchError.sprintf([process.env.NEXT_PUBLIC_EMAIL_TO, error.message]), buttons: "hidden"
                })
            }
        })
    }, [])

    return (
        <section id="contact" className={`contact-area py-120  ${className}`}>
            <div className="container">
                <div className="text-center mb-16">
                    <h1>Contact</h1>
                    <p className="text">Pour prendre RDV, avoir plus de renseignements, me poser des questions, me parler de vous !</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-6 mx-auto mb-16">
                    <div className="w-full lg:w-1/2 bg-gray-100 py-8 px-4 rounded-xl">
                        <h2 className="text-center">Formulaire</h2>
                        <form id="contact-form" data-toggle="validator" className="flex flex-col gap-6">
                            <div className="single-form">
                                <label>Votre nom *
                                    <input type="text" name="name" data-error="Votre nom s’il vous plait." required /></label>
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="single-form">
                                <label>Votre email *
                                    <input type="email" name="email_from" data-error="Veuillez indiquer une adresse email valide." required /></label>
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="single-form">
                                <label>Votre numéro de téléphone
                                    <input type="text" name="phone" /></label>
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="single-form">
                                <label>Votre message *
                                    <textarea rows={5} name="message" data-error="Laissez-moi un message" required></textarea></label>
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="single-form">
                                <label className="cursor-pointer">
                                    <input type="checkbox" name="consent" required />&nbsp;En cochant cette case, je reconnais avoir pris connaissance de la <Link href="/mentions-legales" className="font-bold text-primary-900 hover:text-primary-700 transition">politique de confidentialité</Link> et j’autorise ce site à conserver mes données personnelles transmises via ce formulaire. Aucune exploitation commerciale ne sera faite des données conservées.
                                </label>
                            </div>
                            <p>* Champs requis.</p>
                            <div className="single-form text-center">
                                <button type="submit" className="w-1/2 main-btn gradient-btn focus:outline-none uppercase">Envoyer</button>
                            </div>
                        </form>
                    </div>
                    <div className="w-full lg:w-1/2 py-8 px-4 flex flex-col gap-8">
                        <h2 className="text-center">Ou encore :</h2>
                        <div>
                            <h3><FontAwesomeIcon icon={faPaperPlane} /> Par email</h3>
                            <p className="text-lg md:text-xl">
                                <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_TO}`} title="Envoyer un mail à Sabrina" className="underline hover:text-secondary-700 transition">{process.env.NEXT_PUBLIC_EMAIL_TO}</a>
                            </p>
                        </div>
                        <div>
                            <h3><FontAwesomeIcon icon={faPhone} /> Par téléphone</h3>
                            <p className="text-lg md:text-xl">
                                <a href="tel:+33661794699" title="Téléphoner à Sabrina" className="underline hover:text-secondary-700 transition">06 61 79 46 99</a>
                            </p>
                        </div>
                        <div>
                            <h3><FontAwesomeIcon icon={faCalendarDays} /> Sur Google Calendar</h3>
                            <p className="text-lg md:text-xl">
                                <a target="_blank" rel="nofollow" href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0xX22nFZMeAPX61l1w_gta3X7MiZRFHv1TIFeyIYrGJdfCQRCPYYpBMstmluh2XMzza-YfOcle?gv=true%27" title="Réserver un appel découverte offert" className="underline hover:text-secondary-700 transition">Réserver un appel découverte offert</a>
                            </p>
                        </div>
                        <div>
                            <h3><FontAwesomeIcon icon={faLocationDot} /> Où ?</h3>
                            <p className="text-lg md:text-xl">
                                En présentiel à Vannes et/ou distanciel
                            </p>
                            <br />
                            <p>
                                30 ter avenue de la Marne<br />
                                56000 Vannes<br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}