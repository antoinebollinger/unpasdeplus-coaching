export default function Footer() {
    return (
        <footer className="bg-white">
            <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
            <div className="container mx-auto lg:px-2 px-6">
                <div className="w-full flex flex-col md:flex-row py-6">
                    <div className="flex-1 mb-6 text-black">
                        <a className="text-primary no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href=".">
                            UNPASDEPLUS
                        </a>
                    </div>
                    <div className="flex-1 lg:text-end">
                        <p className="uppercase text-gray-500 md:mb-6">Partie légale</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/terms" className="no-underline hover:underline text-primary-800 hover:text-primary-700">Conditions d'utilisation</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/privacy" className="no-underline hover:underline text-primary-800 hover:text-primary-700">Politique de confidentialité</a>
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
                                >Instagram</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a
                                    href="https://www.facebook.com/sabrina.appriou"
                                    className="no-underline hover:underline text-primary-800 hover:text-primary-700"
                                >Facebook</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a
                                    href="https://www.linkedin.com/in/sabrina-appriou-0138a8122/"
                                    className="no-underline hover:underline text-primary-800 hover:text-primary-700"
                                >LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}