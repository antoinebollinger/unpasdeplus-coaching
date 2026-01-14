import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons"

export default function Calendly() {
    return (
        <a target="_blank" rel="nofollow" href="https://calendar.app.google/awqKqvPV8B19giEm9" className="main-btn gradient-btn focus:outline-none uppercase">
            <FontAwesomeIcon icon={faCalendarDays} />&nbsp;&nbsp;Réserver votre<br />appel découverte offert
        </a>
    )
}