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
    return (
        <a
            onClick={(e) => {
                e.preventDefault()
                openModal({
                    title: renderToString(modalTitle), content: renderToString(<>
                        <iframe src={process.env.NEXT_PUBLIC_CALENDAR_URL} width="100%" height="600" frameBorder="0"></iframe>
                    </>)
                })
            }}
            target="_blank"
            rel="nofollow"
            href={process.env.NEXT_PUBLIC_CALENDAR_URL}
            className={className}
        >
            {text}
        </a>
    );
}
