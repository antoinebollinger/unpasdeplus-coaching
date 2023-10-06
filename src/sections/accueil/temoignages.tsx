'use client'
import { useEffect, useState, useCallback } from 'react'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import { DotButton, PrevButton, NextButton } from '../../components/emblaButtons'

export default function Temoignages({ className = '' }: { className?: string }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({})
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
        <section id="temoignages" className={className}>
            <div className="container relative">
                <h3 className="h1 text-center">Témoignages</h3>
                <div className="embla px-0 md:px-6">
                    <div className="embla__buttons flex">
                        <PrevButton
                            onClick={scrollPrev}
                            disabled={prevBtnDisabled}
                            aria-label="Slide précédent"
                        />
                    </div>
                    <div className="embla__viewport lg:px-12" ref={emblaRef} >
                        <div className="embla__container">
                            {
                                [
                                    {
                                        "author": "Delphine P.",
                                        "tag": "#coachingpertedepoids #motivation #objectifs #coachingsanté&bienêtre #travailintrospection",
                                        "text": "Après de multiples <strong>échecs</strong> dans mon régime alimentaire plus ou moins équilibré, j’ai décidé de faire appel à un coach pour m’aider à atteindre mes objectifs. Sabrina m’a soutenue et épaulée. Elle m’a vraiment aidée à identifier les problèmes et les résoudre petit à petit. Son écoute a été primordiale.<br/>Grâce au coaching, j’ai réussi à <strong>rebondir</strong> face à la <strong>baisse de motivation</strong> et reprendre ma vie en main.<br/>Je recommande à 100%, un <strong>investissement</strong> qui vaut le coup ! Pour moi, c’est un nouveau départ. Une <strong>expérience qui a changé ma vie !</strong><br/>Juste merci beaucoup Sabrina !"
                                    },
                                    {
                                        "author": "Clara L.",
                                        "tag": "#coachingpertedepoids #motivation #objectifs #coachingsanté&bienêtre #travailintrospection",
                                        "text": "Je suis ravie d’avoir été accompagnée par Sabrina qui est très professionnelle. C’est une coach très positive et douce qui rassure et met en confiance !<br/>Sabrina m’a aidée à atteindre mes <strong>objectifs de perte de poids</strong> en débloquant les <strong>barrières psychologiques</strong> qui me freinaient dans ma réussite. Je conseille fortement l’aide d’un coach qui nous aide à <strong>cadrer</strong> nos <strong>objectifs</strong> afin qu’ils soient <strong>atteignables</strong> et <strong>mesurables</strong> dans le temps. Sabrina est disponible et positive, c’est un plaisir de travailler avec elle ! Elle a su m’accompagner <strong>au-delà de mes attentes initiales</strong>."
                                    },
                                ].map((e, i) => (
                                    <div className="embla__slide" key={i}>
                                        <div className="w-full h-full mx-auto flex flex-col justify-center items-center gap-5">
                                            <h4 className="h2 text-xl text-primary-700" dangerouslySetInnerHTML={{ __html: e.author }} />
                                            <p className="text-lg text-tertary-900 italic" dangerouslySetInnerHTML={{ __html: e.tag }} ></p>
                                            <p className="lg:text-lg text-gray-900 lg:px-12 text-center" dangerouslySetInnerHTML={{ __html: e.text }} />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="embla__buttons flex">
                        <NextButton
                            onClick={scrollNext}
                            disabled={nextBtnDisabled}
                            aria-label="Slide suivant"
                        />
                    </div>
                </div>
                <div className="embla__dots">
                    {scrollSnaps.map((_, i) => (
                        <DotButton
                            key={i}
                            onClick={() => scrollTo(i)}
                            className={'embla__dot'.concat(
                                i === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                            aria-label={`Aller au slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}