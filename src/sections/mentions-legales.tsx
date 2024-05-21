import { siteData } from "../data/metadata"

export default function MentionsLegales() {
    return (
        <section id="legals" className="pb-120 legals">
            <div className="container">
                <h1>Mentions légales</h1>
                <h2>Editeur du site&nbsp;:</h2>

                <p>
                    Le site <strong>{siteData.domain}</strong> est édité par l’entreprise individuelle Appriou Sabrina – 56250 SAINT-NOLFF - SIRET 98320036100019<br />
                    Tel.&nbsp;: <strong>+33(0)6 61 79 46 99</strong><br />
                    Courriel&nbsp;: <strong><a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_TO}`}>{process.env.NEXT_PUBLIC_EMAIL_TO}</a></strong><br />
                    Directrice de la publication&nbsp;: <strong>{siteData.owner}</strong><br />
                    Conception et réalisation&nbsp;: <strong><a href="https://antoinebollinger.fr" target="_blank">antoinebollinger.fr</a></strong><br />
                </p>

                <h2>Hébergement&nbsp;:</h2>

                <p>
                    Le Site est hébergé sur les serveurs de Gandi SAS<br />
                    63,65 Boulevard Massena<br />
                    75013 Paris<br />
                    France<br />
                    Tel.&nbsp;: +33 1 70 37 76 61
                </p>

                <h2>Propriétés intellectuelles:</h2>

                <p>
                    Tous droits réservés. L’accès au site <strong>{siteData.domain}</strong> vous confère un droit d’usage privé et non exclusif de ce site. L’ensemble des éléments édités sur ce site, incluant notamment les textes, photographies, logos, marques, constituent des œuvres au sens du code de la Propriété Intellectuelle. En conséquence La reproduction du contenu de ce site web, en tout ou en partie, est interdite sans la permission écrite de l’auteur.
                </p>

                <p>
                    Crédits Photos&nbsp;: Anthony Rouanet, Sabrina Appriou, stock.adobe.com, Freepik
                </p>
            </div>
        </section >

    )
}