import { UserIcon, PhoneIcon, MailIcon } from '@heroicons/react/outline'

export default function Form() {
    return (
        <div className="w-full text-primary-900">
            <div className="grid grid-cols-1 gap-6">
                <label className="flex">
                    <div className="flex items-center justify-center bg-gray-200 rounded-l-md px-3">
                        <UserIcon className="h-5 w-5 inline-block" />
                    </div>
                    <input
                        type="text"
                        className="
                            block
                            w-full
                            rounded-r-md
                            bg-gray-100
                            border-transparent
                            focus:border-gray-500 focus:bg-white focus:ring-0
                        "
                        placeholder="Votre nom"
                    />
                </label>
                <label className="flex">
                    <div className="flex items-center justify-center bg-gray-200 rounded-l-md px-3">
                        <PhoneIcon className="h-5 w-5 inline-block" />
                    </div>
                    <input
                        type="text"
                        className="
                            block
                            w-full
                            rounded-r-md
                            bg-gray-100
                            border-transparent
                            focus:border-gray-500 focus:bg-white focus:ring-0
                        "
                        placeholder="Votre téléphone"
                    />
                </label>
                <label className="flex">
                    <div className="flex items-center justify-center bg-gray-200 rounded-l-md px-3">
                        <MailIcon className="h-5 w-5 inline-block" />
                    </div>
                    <input
                        type="email"
                        className="
                            block
                            w-full
                            rounded-r-md
                            bg-gray-100
                            border-transparent
                            focus:border-gray-500 focus:bg-white focus:ring-0
                        "
                        placeholder="Votre email"
                    />
                </label>
                <label className="block">
                    <textarea
                        className="
                            mt-1
                            block
                            w-full
                            rounded-md
                            bg-gray-100
                            border-transparent
                            focus:border-gray-500 focus:bg-white focus:ring-0
                        "
                        rows="4"
                        placeholder="Votre message"
                    ></textarea>
                </label>
                <button
                    type="submit"
                    className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                >
                    Envoyer
                </button>
            </div>
        </div>
    )
}