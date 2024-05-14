'use client'
import { useEffect } from 'react'
import { modalProps } from '../models/types'
import { CustomEvent } from '../models/types'

export function openModal({
    content = ''
}: modalProps) {
    const modal = document.getElementById('modal')
    modal.querySelector('.modal-content').innerHTML = ''
    modal.querySelector('.modal-content').insertAdjacentHTML('afterbegin', content)
    modal.classList.remove('hidden')
}

export function closeModal(

) {
    const modal = document.getElementById('modal')
    modal.querySelector('.modal-content').innerHTML = ''
    modal.classList.add('hidden')
}

export default function Modal(
    {
        className = ''
    }: {
        className?: string
    }
) {
    useEffect(() => {
        document.getElementById("modal").addEventListener("click", (e: CustomEvent) => {
            const child = document.getElementById("modal-child")
            if (child && !child.contains(e.target))
                closeModal()
        })

        return () => {
            document.getElementById("modal").removeEventListener("click", closeModal)
        }
    })

    return (
        <div className={`hidden fixed inset-0 ${className}`} id="modal">
            <div tabIndex={-1} className="absolute inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 p-12">
                <div className="w-full lg:w-2/3 mx-auto max-h-full bg-white rounded-xl p-6 flex flex-col" id="modal-child">
                    <div className="flex justify-end pb-6">
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" onClick={() => closeModal()}>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="modal-content grow overflow-y-auto">

                    </div>
                </div>
            </div>
        </div>
    )
}