import Image from 'next/image'
import Logo from '/public/logos/logo-texte-vertical.svg'
import EMCC from '/public/images/icones/emcc.jpg'
import FranceCompetences from '/public/images/icones/france_competences.jpg'
import { madelyn } from '../../../styles/font'

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
                        <p className="text-lg mb-10">
                            « <span className={`${madelyn.className} text-5xl`}>La victoire sur soi est la plus grande des victoires</span> » (Platon)
                            <br />
                            Le coaching a pour but de vous booster en prenant conscience que le changement passe avant tout par soi.</p>
                        <h1 className="uppercase">Votre partenaire mental</h1>
                        <div className="flex flex-col lg:flex-row gap-6 mb-10">
                            <div className="w-full lg:w-auto">
                                <Image
                                    src={EMCC}
                                    width={150}
                                    height={150}
                                    className="mx-auto"
                                    alt="Illustration"
                                />
                            </div>
                            <div className="w-full lg:w-auto">
                                <Image
                                    src={FranceCompetences}
                                    width={150}
                                    height={150}
                                    className="mx-auto"
                                    alt="Illustration"
                                />
                            </div>
                        </div>
                        <h2>Trouvez les clés et les ressources pour faire face aux défis quotidiens</h2>
                        <p className="text-lg leading-6">
                            <span className="text-primary-600 font-bold">Un pas de plus</span>, c'est du <strong>coaching professionnel</strong>. Le coaching consiste à accompagner des personnes dans la définition et l'atteinte de leurs objectifs, au bénéfice du développement de leur potentiel et de la réussite de leur évolution personnelle et professionnelle.
                            <br />
                            <br />
                            <span className="text-primary-600 font-bold">Un pas de plus</span>, c'est un <strong>coaching bien-être</strong> pour accompagner et dynamiser la <strong>santé physique et mentale des parents</strong>. C'est également du <strong>coaching en entreprise</strong> pour accompagner et soutenir la parentalité responsable après un congé maternité, paternité ou parental, ou après une absence de longue durée.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}