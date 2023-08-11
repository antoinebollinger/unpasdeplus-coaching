import Image from 'next/image'
import Logo from '/public/logos/logo-texte-vertical.svg'

export default function Intro({ className = '' }: { className?: string }) {
    return (
        <section id="introduction" className={className}>
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                    <div className="w-2/3 lg:w-1/3 text-center lg:order-1">
                        <Image
                            src={Logo}
                            alt="Logo"
                            height="250"
                            className="mx-auto"
                        />
                    </div>
                    <div className="w-full lg:w-2/3 lg:order-0">
                        <h3 className="uppercase text-center lg:text-start">Votre partenaire mental</h3>
                        <h4>Trouvez les clés et les ressources pour faire face aux défis quotidiens.</h4>
                        <br />
                        <p className="text-lg leading-6">
                            Un pas de plus, c'est du <strong>coaching professionnel</strong>. Le coaching consiste à accompagner des personnes dans la définition et l'atteinte de leurs objectifs, au bénéfice du développement de leur potentiel et de la réussite de leur évolution personnelle et professionnelle.
                            <br />
                            <br />
                            Un pas de plus, c'est un <strong>accompagnement</strong> pour <strong>booster le mental</strong> des <strong>parents</strong> et un <strong>dispositif d'accompagnement des entreprises</strong> pour prendre soin de la <strong>santé physique et mentale</strong> de leur <strong>salariés parents</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}