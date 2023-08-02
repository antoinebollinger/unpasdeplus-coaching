import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Socials({ className }: { className: string }) {
    return (
        <ul className={className}>
            <li>
                <a href="https://www.facebook.com/sabrina.appriou" aria-label="Suivez-moi sur Facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/sabs.app/" aria-label="Suivez-moi sur Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/sabrina-appriou-0138a8122/" aria-label="Suivez-moi sur LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </li>
        </ul>
    )
}