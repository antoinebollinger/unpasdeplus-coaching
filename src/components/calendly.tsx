import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons"

export default function Calendly() {
    return (
        <a target="_blank" rel="nofollow" href="https://www.resalib.fr/praticien/95511-sabrina-appriou-un-pas-de-plus-coaching-coach-professionnel-certifie-vannes" className="main-btn gradient-btn focus:outline-none uppercase">
            <FontAwesomeIcon icon={faCalendarDays} />&nbsp;&nbsp;Réserver votre<br />appel découverte offert
        </a>
    )
}