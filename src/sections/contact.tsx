'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { closeModal, openModal } from '../utils/modal'

export default function Contact({ className = '' }: { className?: string }) {
    useEffect(() => {
        document.forms['contact-form'].addEventListener('submit', async e => {
            e.preventDefault()
            openModal({
                body: 'Envoi en cours', buttons: 'hidden'
            })
            const data = new FormData(e.target)
            data.append('email_to', process.env.email_to)
            data.append('name_to', process.env.name_to)
            const sendEmail = await fetch(`${process.env.email_api}/email`, {
                method: 'POST',
                body: data
            })
            const response = await sendEmail.json()
            closeModal();
            if (response.sent)
                openModal({
                    body: `Cher.ère ${e.target.elements['name'].value},<br/>Votre message a bien été envoyé. Je reviendrai vers vous très rapidement. A bientôt !`, buttons: 'hidden'
                })
            else
                openModal({
                    body: `Oups... Une erreur est survenue. Merci de réessayer, ou de m'envoyer un email directement à l'adresse <strong>sabrina.appriou@hotmail.com</strong>. A bientôt !`, buttons: 'hidden'
                })
        })
    }, [])

    return (
        <section id="contact" className={`contact-area py-120  ${className}`}>
            <div className="container">
                <div className="justify-center row">
                    <div className="w-full mx-4 lg:w-1/2">
                        <div className="pb-10 text-center section-title">
                            <h4 className="title">Contact</h4>
                            <p className="text">Pour prendre RDV, avoir plus de renseignements, me poser des questions, me parler de vous !</p>
                            <br />
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:sabrina.appriou@hotmail.fr" title="Envoyer un mail à Sabrina" className="text-2xl hover:text-secondary-700 transition">sabrina.appriou@hotmail.fr</a>
                            </p>
                            <br />
                            <p>
                                <FontAwesomeIcon icon={faPhone} /> <a href="tel:+33661794699" title="Téléphoner à Sabrina" className="text-2xl hover:text-secondary-700 transition">06 61 79 46 99</a>
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
                                    <p className="mx-4 form-message">* Champs requis.</p>
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