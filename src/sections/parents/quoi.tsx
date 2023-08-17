export default function Quoi({ className = '' }: { className?: string }) {
    return (
        <section id="quoi" className={className}>
            <div className="container">
                <div className="w-full lg:w-2/3 mx-auto flex flex-col gap-6">
                    <h3>C'est quoi exactement ?</h3>
                    <p className="text-lg leading-6">
                        L'accompagnement repose sur une <strong>écoute active</strong>, un <strong>questionnement pertinent</strong> et <strong>des outils & méthodes de coaching</strong>, dans un cadre <strong>confidentiel et bienveillant</strong>.
                    </p>
                    <div>
                        <h4>Qu'est ce que le coaching ?</h4>
                        <p className="text-lg leading-6">
                            Le coaching consiste à accompagner des personnes dans la définition et l'atteinte de leurs objectifs, au bénéfice du développement de leur potentiel et de la réussite de leur évolution personnelle et professionnelle.<br />Le coaching a pour but de vous booster en prenant conscience que <strong>le changement passe avant tout par soi</strong>.
                        </p>
                    </div>
                    <div>
                        <h4>Intelligence émotionnelle</h4>
                        <p className="text-lg leading-6">
                            <strong>L'intelligence émotionnelle</strong> a une place importante en coaching. Mais qu'est-ce que l'intelligence émotionnelle ? Nous parlons de la capacité à nous <strong>adresser efficacement</strong> aux autres et à nous-même, à nous <strong>connecter à nos émotions</strong>, à les gérer, à nous <strong>auto-motiver</strong>, à freiner nos pulsions, à vaincre nos frustrations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}