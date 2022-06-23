import Form from "../components/form"

export default function Contact() {
    return (
        <section className="container mx-auto text-center mb-12" id="contact">
            <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 p-6">
                    <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
                        Contact
                    </h2>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <a href="mailto:sabrina.appriou@hotmail.fr" title="Envoyer un mail à Sabrina" className="text-2xl">sabrina.appriou@hotmail.fr</a>
                    <br />
                    <a href="tel:+33661794699" title="Téléphoner à Sabrina" className="text-2xl">06 61 79 46 99</a>
                </div>
                <div className="w-full sm:w-1/2 p-6">
                    <Form />
                </div>
            </div>
        </section>
    )
}