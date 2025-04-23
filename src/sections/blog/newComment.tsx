"use client"
import { useEffect } from "react"
import { CustomEvent } from "../../models/types"

export default function NewComment() {
    useEffect(() => {
        document.forms["newComment-form"].addEventListener("submit", async (e: CustomEvent) => {
            e.preventDefault()

            console.log(e.target.elements["comment"].value)

        })
    }, [])

    return (
        <div>
            <form id="newComment-form">
                <input name="comment" type="text" placeholder="Saisir un commentaire" className="w-full rounded-xl border-gray-100" />
            </form>
        </div>
    )
}