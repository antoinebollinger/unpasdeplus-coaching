import { StaticImageData } from "next/image";

export interface headerProps {
    pretitle?: string | boolean,
    title?: string | boolean,
    subtitle?: string | boolean
}

export interface banner extends StaticImageData {
    display?: boolean
}

export interface breakProps {
    banner?: banner,
    displayBanner?: boolean,
    text?: string,
    textStyle?: string,
    first?: string,
    last?: string
}

export interface onThisPage {
    title?: string,
    link?: string
}

export interface modalProps {
    header?: string,
    body?: string,
    href?: string,
    buttons?: string
}

export interface CustomEvent extends SubmitEvent {
    target: HTMLFormElement
}