"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";
import { openModal } from "../utils/modal"
import { renderToString } from "react-dom/server"

export default function Calendly({
    className = "main-btn gradient-btn focus:outline-none uppercase cursor-pointer",
    text = (
        <>
            <FontAwesomeIcon icon={faCalendarDays} />&nbsp;&nbsp;Réserver votre<br />appel découverte offert
        </>
    ),
    modalTitle = (
        <>
            <FontAwesomeIcon icon={faCalendarDays} />&nbsp;&nbsp;Réserver votre appel découverte offert
        </>
    ),
}: {
    className?: string;
    text?: ReactNode;
    modalTitle?: ReactNode;
}) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        openModal({
            title: renderToString(modalTitle), content: renderToString(
                <iframe src={process.env.NEXT_PUBLIC_CALENDAR_URL} width="100%" height="600"></iframe>
            )
        })
    }

    return (
        <a
            onClick={handleClick}
            target="_blank"
            rel="nofollow"
            className={className}
        >
            {text}
        </a>
    );
}
