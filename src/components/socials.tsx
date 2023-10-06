import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { siteData } from '../data/metadata'

export default function Socials({
    className
}: {
    className?: string
}) {
    return (
        <ul className={className}>
            <li>
                <a href={siteData.facebook} aria-label="Suivez-moi sur Facebook" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
            </li>
            <li>
                <a href={siteData.instagram} aria-label="Suivez-moi sur Instagram" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </li>
            <li>
                <a href={siteData.linkedin} aria-label="Suivez-moi sur LinkedIn" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </li>
        </ul>
    )
}