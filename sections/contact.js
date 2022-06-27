import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Form from "../components/form"

export default function Contact() {
    return (
        <section id="contact">
            <div className="container mx-auto flex flex-wrap px-8 items-center">
                <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
                    Contact
                </h2>
                <div className="w-full mb-8">
                    <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div className="w-full md:w-1/2 md:pr-8">
                    <p className="font-bold">Pour prendre RDV, avoir plus de renseignements, me poser des questions, me parler de vous !</p>
                    <br />
                    <p className="font-bold">Plusieurs moyens vous sont proposés pour me contacter : email, téléphone, ou bien remplissez le formulaire.</p>
                    <br />
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:sabrina.appriou@hotmail.fr" title="Envoyer un mail à Sabrina" className="text-2xl hover:text-secondary-200 transition">sabrina.appriou@hotmail.fr</a>
                    </p>
                    <br />
                    <p>
                        <FontAwesomeIcon icon={faPhone} /> <a href="tel:+33661794699" title="Téléphoner à Sabrina" className="text-2xl hover:text-secondary-200 transition">06 61 79 46 99</a>
                    </p>
                </div>
                <div className="w-full md:w-1/2 mt-8 md:mt-0 border-t md:border-t-0 pt-8 md:pt-0">
                    <Form />
                </div>
            </div>
        </section>
    )
}
