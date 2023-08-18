'use client'
import { useEffect, useState, useCallback } from 'react'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import { DotButton, PrevButton, NextButton } from '../../utils/emblaButtons'
import Autoplay from 'embla-carousel-autoplay'

export default function Temoignages() {
    const [emblaRef, emblaApi] = useEmblaCarousel({}, [Autoplay()])
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const scrollPrev = useCallback(
        () => emblaApi && emblaApi.scrollPrev(),
        [emblaApi]
    )
    const scrollNext = useCallback(
        () => emblaApi && emblaApi.scrollNext(),
        [emblaApi]
    )
    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    )

    const onInit = useCallback((emblaApi: EmblaCarouselType) => {
        setScrollSnaps(emblaApi.scrollSnapList())
    }, [])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return
        onInit(emblaApi)
        onSelect(emblaApi)
        emblaApi.on('reInit', onInit)
        emblaApi.on('reInit', onSelect)
        emblaApi.on('select', onSelect)
    }, [emblaApi, onInit, onSelect])

    return (
        <section>
            <div className="container relative">
                <h3 className="text-center">Témoignages</h3>
                <div className="embla">
                    <div className="embla__viewport" ref={emblaRef}>
                        <div className="embla__container">
                            {
                                [
                                    {
                                        "author": "Delphine P.",
                                        "text": "Après de multiples échecs dans mon régime plus ou moins équilibré, j'ai décidé de faire appel à un coach pour m'aider à atteindre mes objectifs. Chaque tentative finissait en échec, parce que j'étais focus sur ma perte de poids rapide.<br/>Dès que mon poids stagnait, j'abandonnais. La démotivation m'envahissait et je reprenais le poids perdu voire plus. Je le vivais donc comme un échec et c'était extrêmement compliqué. Aujourd'hui, j'ai accepté que le chemin vers la perte de poids va être long avec des moments de stagnation avant de recommencer à perdre. Mes proches me sentent beaucoup plus confiante, à l'aise avec ma perte de poids et de mon changement physique. Je suis beaucoup plus épanouie.<br/>Pour moi, c'est un nouveau départ. Une expérience qui a changé ma vie. Sabrina m'a soutenue, épaulée. Elle m'a aidée à identifier les problèmes et les résoudre petit à petit. Son écoute a été primordiale. Elle m'a vraiment aidée à rebondir et à reprendre ma vie en main.<br/>Je recommande à 100% . C'est un investissement qui vaut le coup! On a toujours des objectifs. Mais dès lors que l'on ne les atteigne pas, on vit cela comme un échec. Tu penses que tu as une motivation au maximum mais en fait , les échecs reprennent tout à coup le dessus. Tu sens la baisse de motivation qui est là. Alors qu’avec le coaching, tu as quelqu'un pour t'épauler, te soutenir et te faire rebondir.<br/>Pour moi en tout cas, un vrai changement de vie en plus de mon changement de vie que j'ai choisi !<br/>Juste merci beaucoup Sabrina!"
                                    },
                                    {
                                        "author": "Clara L.",
                                        "text": "Je suis ravie d’avoir été accompagnée par Sabrina qui est très professionnelle. C’est une coach très positive et douce qui rassure et met en confiance!<br/>Sabrina m’a aidée à atteindre mes objectifs de perte de poids en débloquant les barrières psychologiques qui me freinaient dans ma réussite. Je conseille fortement l’aide d’un coach qui nous aide à “cadrer” nos objectifs afin qu’ils soient atteignables et mesurables dans le temps. Sabrina est disponible et positive , c’est un plaisir de travailler avec elle! Elle a su m’accompagner au delà de mes attentes initiales."
                                    }
                                ].map((e, i) => (
                                    <div className="embla__slide" key={i}>
                                        <div className="w-full h-full mx-auto flex flex-col justify-center items-center gap-5">
                                            <h4 className="text-xl text-primary-700" dangerouslySetInnerHTML={{ __html: e.author }} />
                                            <p className="lg:text-lg text-gray-900 lg:px-12" dangerouslySetInnerHTML={{ __html: `"${e.text}"` }} />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* <div className="embla__buttons">
                        <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
                        <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
                    </div> */}
                </div>
                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}