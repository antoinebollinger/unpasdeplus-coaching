import Image from 'next/image'
import Logo from '/public/logos/logo-texte-vertical.svg'

export default function Intro() {
    return (
        <section id="introduction" className="intro">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                    <div className="w-2/3 lg:w-1/3 text-center">
                        <Image
                            src={Logo}
                            alt="Logo"
                            height="250"
                            className="mx-auto"
                        />
                    </div>
                    <div className="w-full lg:w-2/3">
                        <p className="text-lg leading-6">
                            Un pas de plus, c'est du <strong>coaching professionnel</strong>. Le coaching consiste à accompagner des personnes dans la définition et l'atteinte de leurs objectifs, au bénéfice du développement de leur potentiel et de la réussite de leur évolution personnelle et professionnelle.
                            <br />
                            <br />
                            Un pas de plus, c'est un <strong>accompagnement</strong> pour <strong>booster le moral</strong> des <strong>parents</strong> et un <strong>dispositif d'accompagnement des entreprises</strong> pour prendre soin de la santé physique et mentale de leur <strong>salariés parents</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}