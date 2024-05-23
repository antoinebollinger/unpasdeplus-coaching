'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { openModal } from '../utils/modal'
import { emailMessage } from '../data/metadata'
import { CustomEvent } from '../models/types'
import Link from 'next/link'

export default function Contact({ className = '' }: { className?: string }) {
    useEffect(() => {
        document.forms['contact-form'].addEventListener('submit', async (e: CustomEvent) => {
            e.preventDefault()

            if (!e.target.elements["consent"].checked)
                return

            openModal({
                body: emailMessage.sending, buttons: 'hidden'
            })

            const data = new FormData(e.target)
            data.append('email_to', process.env.NEXT_PUBLIC_EMAIL_TO)
            data.append('name_to', process.env.NEXT_PUBLIC_NAME_TO)
            data.append('transporter', 'gmail')

            try {
                const sendEmail = await fetch(`${process.env.NEXT_PUBLIC_EMAIL_API}/contact`, {
                    method: 'POST',
                    body: data
                })
                const response = await sendEmail.json()
                if (response.sent)
                    openModal({
                        body: emailMessage.messageSent.sprintf([e.target.elements['name'].value]), buttons: 'hidden'
                    })
                else
                    throw new Error('Fetch returned with sent = false')
            } catch (error) {
                openModal({
                    body: emailMessage.fetchError.sprintf([process.env.NEXT_PUBLIC_EMAIL_TO, error.message]), buttons: 'hidden'
                })
            }
        })
    }, [])

    return (
        <section id="contact" className={`contact-area py-120  ${className}`}>
            <div className="container">
                <div className="justify-center row">
                    <div className="w-full mx-4 lg:w-1/2">
                        <div className="pb-10 text-center section-title">
                            <h1>Contact</h1>
                            <p className="text">Pour prendre RDV, avoir plus de renseignements, me poser des questions, me parler de vous !</p>
                            <br />
                            <p className="text-lg md:text-2xl">
                                <FontAwesomeIcon icon={faEnvelope} /> <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_TO}`} title="Envoyer un mail à Sabrina" className="hover:text-secondary-700 transition">{process.env.NEXT_PUBLIC_EMAIL_TO}</a>
                            </p>
                            <br />
                            <p className="text-lg md:text-2xl">
                                <FontAwesomeIcon icon={faPhone} /> <a href="tel:+33661794699" title="Téléphoner à Sabrina" className="hover:text-secondary-700 transition">06 61 79 46 99</a>
                            </p>
                            <br />
                            <p className="text-lg md:text-2xl">
                                <FontAwesomeIcon icon={faLocationDot} /> En présentiel à Vannes et/ou distanciel
                            </p>
                        </div>
                    </div>
                </div>
                <div className="justify-center row">
                    <div className="w-full lg:w-2/3">
                        <div className="contact-form">
                            <form id="contact-form" data-toggle="validator">
                                <div className="row">
                                    <div className="w-full">
                                        <div className="mx-4 mb-6 single-form form-group">
                                            <label>Votre nom *
                                                <input type="text" name="name" data-error="Votre nom s'il vous plait." required /></label>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <div className="mx-4 mb-6 single-form form-group">
                                            <label>Votre email *
                                                <input type="email" name="email_from" data-error="Veuillez indiquer une adresse email valide." required /></label>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <div className="mx-4 mb-6 single-form form-group">
                                            <label>Votre numéro de téléphone
                                                <input type="text" name="phone" /></label>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="mx-4 mb-6 single-form form-group">
                                            <label>Votre message *
                                                <textarea rows={5} name="message" data-error="Laissez-moi un message" required></textarea></label>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="mx-4 mb-6 single-form form-group">
                                            <label className="cursor-pointer">
                                                <input type="checkbox" name="consent" required />&nbsp;En cochant cette case, je reconnais avoir pris connaissance de la <Link href="/mentions-legales" className="font-bold text-primary-900 hover:text-primary-700 transition">politique de confidentialité</Link> et j'autorise ce site à conserver mes données personnelles transmises via ce formulaire. Aucune exploitation commerciale ne sera faite des données conservées.
                                            </label>
                                        </div>
                                    </div>
                                    <p className="mx-4 mb-6 form-message">* Champs requis.</p>
                                    <div className="w-full">
                                        <div className="mx-4 mt-2 text-center single-form form-group">
                                            <button type="submit" className="main-btn gradient-btn focus:outline-none uppercase">Envoyer</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}