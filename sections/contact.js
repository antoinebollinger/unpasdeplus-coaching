import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"

export default function Contact() {
    return (
        <section id="contact" className="contact-area py-120 bg-gray-100">
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
                            <form id="contact-form" action="assets/contact.php" method="post" data-toggle="validator">
                                <div className="row">
                                    <div className="w-full">
                                        <div className="mx-4 mb-6 single-form form-group">
                                            <label>Votre nom *</label>
                                            <input type="text" name="name" data-error="Votre nom s'il vous plait." required />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <div className="mx-4 mb-6 single-form form-group">
                                            <label>Votre email *</label>
                                            <input type="email" name="email" data-error="Veuillez indiquer une adresse email valide." required />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <div className="mx-4 mb-6 single-form form-group">
                                            <label>Votre numéro de téléphone</label>
                                            <input type="text" name="phone" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="mx-4 mb-6 single-form form-group">
                                            <label>Votre message *</label>
                                            <textarea rows="5" name="message" data-error="Laissez-moi un message" required></textarea>
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
        </section>
    )
}