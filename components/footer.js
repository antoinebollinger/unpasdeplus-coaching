export default function Footer() {
    return (
        <footer className="bg-white">
            <div className="container mx-auto px-8">
                <div className="w-full flex flex-col md:flex-row py-6">
                    <div className="flex-1 mb-6 text-black">
                        <a className="text-primary no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href=".">
                            UNPASDEPLUS
                        </a>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-gray-500 md:mb-6">Partie légale</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Conditions dutilisation</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Politique de confidentialité</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-gray-500 md:mb-6">Réseaux sociaux</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a
                                    href="https://www.instagram.com/sabs.app/"
                                    className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                                >Instagram</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a
                                    href="https://www.facebook.com/sabrina.appriou"
                                    className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                                >Facebook</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a
                                    href="https://www.linkedin.com/in/sabrina-appriou-0138a8122/"
                                    className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                                >LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-gray-500 md:mb-6">La société</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Official Blog</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">About Us</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}