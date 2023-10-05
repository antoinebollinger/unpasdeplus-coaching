import { siteData } from "../data/metadata"

export default function PolitiqueConfidentialite() {
    return (
        <section id="legals" className="pb-120 legals">
            <div className="container">
                <h1>Politique de confidentialité</h1>

                <h2>Données personnelles:</h2>

                <p>
                    Conformément à la Loi Informatique et Libertés du 6 janvier 1978, le Client dispose des droits d’interrogation, d’accès, de modification, d’opposition et de rectification sur les données personnelles le concernant. Il suffit alors d’envoyer un message: <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_TO}`}>{process.env.NEXT_PUBLIC_EMAIL_TO}</a>.
                </p>

                <p>
                    Le client reconnaît avoir pris connaissance de la politique de protection des données personnelles et consent à ce que ses données soient collectées et utilisées, sachant que celles-ci seront traitées de manière strictement confidentielle. Les données personnelles du Client sont conservées par le Prestataire pendant une durée de trois (3) ans à compter du dernier contact avec le Client.
                </p>

                <p>
                    En saisissant ses informations et ses coordonnées sur l'un des formulaires du site <strong>{siteData.domain}</strong>, le client reconnaît accepter recevoir des informations / publications de la part de la société par email et accepter de recevoir la newsletter. Il est libre de se désinscrire à tout instant. Il suffit pour cela de cliquer sur le lien présent à la fin des emails ou par email : <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_TO}`}>{process.env.NEXT_PUBLIC_EMAIL_TO}</a>.
                </p>

                <h2>Cookies</h2>

                <p>
                    L’utilisateur est informé que lors de ses visites sur le site <strong>{siteData.domain}</strong>, un cookie peut s’installer automatiquement sur son logiciel de navigation. Un cookie est un élément qui ne permet pas d’identifier l’utilisateur mais sert à enregistrer des informations relatives à la navigation de celui-ci sur le site Internet. Le paramétrage de votre logiciel de navigation permet d’informer de la présence de cookies et éventuellement de la refuser. Il y a un certain nombre de façons pour vous permettre de gérer les cookies. Chaque navigateur étant différent, nous vous invitons à prendre connaissance avec le menu « Aide » de votre navigateur, les règles de préférences concernant les cookies.
                </p>

                <p>
                    Nos cookies ont pour finalité exclusive de permettre ou faciliter la communication par voie électronique et sont strictement nécessaire à la fourniture de nos services de communication en ligne. Ce site utilise Google Analytics, un service d’analyse de site Internet fourni par Google Inc.Google Analytics utilise des cookies, qui sont des fichiers texte placés sur votre ordinateur, pour aider le site internet à analyser l’utilisation du site par ses utilisateurs. Les données générées par les cookies concernant votre utilisation du site (y compris votre adresse IP) seront transmises et stockées par Google sur des serveurs situés aux Etats-Unis. Google utilisera cette information dans le but d’évaluer votre utilisation du site, de compiler des rapports sur l’activité du site à destination de son éditeur et de fournir d’autres services relatifs à l’activité du site et à l’utilisation d’Internet. Google est susceptible de communiquer ces données à des tiers en cas d’obligation légale ou lorsque ces tiers traitent ces données pour le compte de Google, y compris notamment l’éditeur de ce site. Google ne recoupera pas votre adresse IP avec toute autre donnée détenue par Google. Vous pouvez désactiver l’utilisation de cookies en sélectionnant les paramètres appropriés de votre navigateur. Cependant, une telle désactivation pourrait empêcher l’utilisation de certaines fonctionnalités de ce site. En utilisant ce site Internet, vous consentez expressément au traitement de vos données nominatives par Google dans les conditions et pour les finalités décrites ci-dessus.

                </p>

                <h2>Affiliation et partenariat&nbsp;:</h2>

                <p>
                    Certains liens sont susceptibles d’être affiliés. L’éditeur perçoit ainsi une commission pour tout achat ou inscription à partir de ces liens sans qu’il n’y ait aucune incidence pour l’utilisateur. Chaque lien est vérifié et approuvé par l’éditeur qui recommande les produits mentionnés. Toutefois, l’utilisateur reste libre de passer par ces liens ou non.
                </p>
            </div>
        </section >

    )
}