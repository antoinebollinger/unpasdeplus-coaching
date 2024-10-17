import { StaticImageData } from "next/image"

export interface banner extends StaticImageData {
    display?: boolean
}

export interface onThisPage {
    title?: string,
    link?: string
}

export interface dialogProps {
    header?: string,
    body?: string,
    href?: string,
    buttons?: string
}

export interface modalProps {
    content?: string,
}

export interface CustomEvent extends SubmitEvent {
    target: HTMLFormElement
}