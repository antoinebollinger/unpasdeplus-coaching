export default function Header() {
    return (
        <header className="pt-24">
            <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                    <p className="uppercase tracking-loose w-full">Pour un changement profond et durable</p>
                    <h1 className="my-4 text-5xl font-bold leading-tight">
                        UN PAS DE PLUS
                    </h1>
                    <p className="leading-normal text-2xl mb-8">
                        Coaching professionnel & particulier
                    </p>
                    <a
                        href="#about"
                        className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        Découvrir
                    </a>
                </div>
                <div className="w-full md:w-3/5 py-6 text-center">
                    <img src="/images/stepbystep.png" className="w-full md:w-4/5 z-50" />
                </div>
            </div>
        </header>
    )
}