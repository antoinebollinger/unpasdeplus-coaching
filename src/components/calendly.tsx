import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons"

export default function Calendly() {
    return (
        <a target="_blank" rel="nofollow" href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0xX22nFZMeAPX61l1w_gta3X7MiZRFHv1TIFeyIYrGJdfCQRCPYYpBMstmluh2XMzza-YfOcle?gv=true%27" className="main-btn gradient-btn focus:outline-none uppercase">
            <FontAwesomeIcon icon={faCalendarDays} />&nbsp;&nbsp;Réserver votre<br />appel découverte offert
        </a>
    )
}