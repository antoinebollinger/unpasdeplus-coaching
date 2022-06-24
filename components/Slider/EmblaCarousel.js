import { useState, useEffect, useCallback } from "react";
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function EmblaCarousel({ slides, className }) {
    const options = { skipSnaps: false, loop: true }
    const plugins = [Autoplay()] // Plugins

    const [viewportRef, embla] = useEmblaCarousel(options, plugins);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
        embla
    ]);

    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla, setSelectedIndex]);

    useEffect(() => {
        if (!embla) return;
        onSelect();
        setScrollSnaps(embla.scrollSnapList());
        embla.on("select", onSelect);
    }, [embla, setScrollSnaps, onSelect]);

    return (
        <>
            <div className={`embla ${className}`}>
                <div className="embla__viewport" ref={viewportRef}>
                    <div className="embla__container">
                        {slides.map((img, index) => {
                            return (
                                <div className="embla__slide" key={index}>
                                    <div className="embla__slide__title text-2xl text-center">
                                        <h2>{img.title}</h2>
                                    </div>
                                    <div className="embla__slide__content text-xl text-center">
                                        <h3>{img.content}</h3>
                                    </div>
                                    <div className="embla__slide__inner">
                                        <Image
                                            className="embla__slide__img grayscale"
                                            src={img}
                                            alt={img.title}
                                        />
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
                <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
            </div>
            <div className="embla__dots">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        selected={index === selectedIndex}
                        onClick={() => scrollTo(index)}
                    />
                ))}
            </div>
        </>
    );
};