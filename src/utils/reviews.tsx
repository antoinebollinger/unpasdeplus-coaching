"use client"
import { useEffect, useState, useCallback } from "react"
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react"
import { DotButton, PrevButton, NextButton } from "../components/emblaButtons"
import { review } from "../models/types"

export default function Reviews({ reviews = [] }: { reviews?: review[] }) {
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
        emblaApi.on("reInit", onInit)
        emblaApi.on("reInit", onSelect)
        emblaApi.on("select", onSelect)
    }, [emblaApi, onInit, onSelect])

    return (
        <>
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
                            reviews.map((e, i) => (
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
                        className={"embla__dot".concat(
                            i === selectedIndex ? " embla__dot--selected" : ""
                        )}
                        aria-label={`Aller au slide ${i + 1}`}
                    />
                ))}
            </div>
        </>
    )
}