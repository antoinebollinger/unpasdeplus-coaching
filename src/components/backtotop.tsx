import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function Backtotop({ onThisPage }: { onThisPage?: [] }) {
    return (
        <a className="back-to-top" href="#header" aria-label="Haut de page">
            <FontAwesomeIcon icon={faChevronUp} />
        </a>
    )
}