"use client"
import { useCallback, useState } from "react"
import { dialogProps } from "../models/types"

export function openDialog({
    header = "",
    body = "",
    href = "#",
    buttons = "block"
}: dialogProps) {
    const dialog = document.getElementById("dialog")
    dialog.querySelector(".dialog-title").innerHTML = ""
    dialog.querySelector(".dialog-body").innerHTML = ""
    dialog.querySelector(".dialog-title").insertAdjacentHTML("afterbegin", header)
    dialog.querySelector(".dialog-body").insertAdjacentHTML("afterbegin", body);
    (dialog.querySelector(".dialog-link") as HTMLElement).dataset.href = href
    document.getElementById("dialog-buttons").className = buttons
    dialog.classList.remove("hidden")
}

export function closeDialog() {
    const dialog = document.getElementById("dialog")
    const url = (dialog.querySelector(".dialog-link") as HTMLElement).dataset.href
    dialog.querySelector(".dialog-title").innerHTML = ""
    dialog.querySelector(".dialog-body").innerHTML = "";
    (dialog.querySelector(".dialog-link") as HTMLElement).dataset.href = "#"
    document.getElementById("dialog-buttons").className = "block"
    dialog.classList.add("hidden")
    return url
}

export default function Dialog(
    { className = "" }: { className?: string }
) {
    const [header, setHeader] = useState("")
    const [body, setBody] = useState("")
    const [href, setHref] = useState("#")

    const close = useCallback((goLink = false) => {
        const url = closeDialog()
        setHeader("")
        setBody("")
        setHref("#")
        if (!goLink) return
        window.open(url)
    }, [])

    return (
        <div className={`hidden fixed inset-0 ${className}`} id="dialog">
            <div tabIndex={-1} className="overflow-y-auto overflow-x-hidden absolute inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
                <div className="relative p-4 w-full max-w-xl">
                    <div className="relative bg-white rounded-lg shadow dialog-content">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" onClick={() => close()}>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                        <div className="p-6 text-center">
                            <p className="dialog-title mb-5 font-bold text-gray-600 text-xl uppercase">{header}</p>
                            <p className="dialog-body mb-5 text-lg font-normal text-gray-500">{body}</p>
                            <div id="dialog-buttons">
                                <div className="flex justify-around gap-8">
                                    <button type="button" className="w-full text-center text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10" onClick={() => close()}>Annuler</button>
                                    <button data-href={href} className="dialog-link w-full text-center text-white bg-orange-900 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5" onClick={() => close(true)}>Valider</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}