import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { onThisPage } from "../models/types"

export default function Backtotop({
    onThisPage
}: {
    onThisPage?: onThisPage[]
}) {
    return (
        <a className="back-to-top" href="#top" aria-label="Haut de page">
            <FontAwesomeIcon icon={faChevronUp} />
        </a>
    )
}