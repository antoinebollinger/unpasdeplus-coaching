'use client'
import { useState } from 'react'
import Swipe from 'react-easy-swipe'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Temoignages() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        {
            "author": "Delphine P.",
            "text": "Après de multiples échecs dans mon régime plus ou moins équilibré, j'ai décidé de faire appel à un coach pour m'aider à atteindre mes objectifs. Chaque tentative finissait en échec, parce que j'étais focus sur ma perte de poids rapide.<br/>Dès que mon poids stagnait, j'abandonnais. La démotivation m'envahissait et je reprenais le poids perdu voire plus. Je le vivais donc comme un échec et c'était extrêmement compliqué. Aujourd'hui, j'ai accepté que le chemin vers la perte de poids va être long avec des moments de stagnation avant de recommencer à perdre. Mes proches me sentent beaucoup plus confiante, à l'aise avec ma perte de poids et de mon changement physique. Je suis beaucoup plus épanouie.<br/>Pour moi, c'est un nouveau départ. Une expérience qui a changé ma vie. Sabrina m'a soutenue, épaulée. Elle m'a aidée à identifier les problèmes et les résoudre petit à petit. Son écoute a été primordiale. Elle m'a vraiment aidée à rebondir et à reprendre ma vie en main.<br/>Je recommande à 100% . C'est un investissement qui vaut le coup! On a toujours des objectifs. Mais dès lors que l'on ne les atteigne pas, on vit cela comme un échec. Tu penses que tu as une motivation au maximum mais en fait , les échecs reprennent tout à coup le dessus. Tu sens la baisse de motivation qui est là. Alors qu’avec le coaching, tu as quelqu'un pour t'épauler, te soutenir et te faire rebondir.<br/>Pour moi en tout cas, un vrai changement de vie en plus de mon changement de vie que j'ai choisi !<br/>Juste merci beaucoup Sabrina!"
        },
        {
            "author": "Clara L.",
            "text": "Je suis ravie d’avoir été accompagnée par Sabrina qui est très professionnelle. C’est une coach très positive et douce qui rassure et met en confiance!<br/>Sabrina m’a aidée à atteindre mes objectifs de perte de poids en débloquant les barrières psychologiques qui me freinaient dans ma réussite. Je conseille fortement l’aide d’un coach qui nous aide à “cadrer” nos objectifs afin qu’ils soient atteignables et mesurables dans le temps. Sabrina est disponible et positive , c’est un plaisir de travailler avec elle! Elle a su m’accompagner au delà de mes attentes initiales."
        }

    ]

    const handleNextSlide = () => {
        let newSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1
        setCurrentSlide(newSlide)
    }

    const handlePrevSlide = () => {
        let newSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1
        setCurrentSlide(newSlide)
    }

    return (
        <section id="temoignages">
            <div className="container">
                <div className="text-center pb-10">
                    <h3 className="title">Témoignages</h3>
                </div>
                <div className="relative">
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        onClick={handlePrevSlide}
                        className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-primary-400 z-20"
                    />
                    <div className="w-full lg:h-[70vh] flex overflow-hidden relative m-auto">
                        <Swipe
                            onSwipeLeft={handleNextSlide}
                            onSwipeRight={handlePrevSlide}
                            className="relative z-10 w-full h-full"
                        >
                            {slides.map((slide, index) => {
                                if (index === currentSlide) {
                                    return (
                                        <div className="w-2/3 h-full mx-auto flex flex-col justify-center items-center gap-5" key={index}>
                                            <h4 className="text-xl text-primary-700" dangerouslySetInnerHTML={{ __html: slide.author }} />
                                            <p className="text-lg text-gray-900" dangerouslySetInnerHTML={{ __html: `"${slide.text}"` }} />
                                        </div>
                                    );
                                }
                            })}
                        </Swipe>
                    </div>
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        onClick={handleNextSlide}
                        className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-primary-400 z-20"
                    />

                    <div className="relative flex justify-center p-2">
                        {slides.map((_, index) => {
                            return (
                                <div
                                    className={
                                        index === currentSlide
                                            ? "h-4 w-4 bg-primary-700 rounded-full mx-2 mb-2 cursor-pointer"
                                            : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
                                    }
                                    key={index}
                                    onClick={() => {
                                        setCurrentSlide(index);
                                    }}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}