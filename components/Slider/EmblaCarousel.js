import { useState, useEffect, useCallback } from "react";
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function EmblaCarousel({ children, slides, className, id }) {
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
            <div className={`embla ${className}`} id={id}>
                {children}
                <div className="embla__viewport" ref={viewportRef}>
                    <div className="embla__container">
                        {slides.map((img, index) => {
                            return (
                                <div className="embla__slide" key={index}>
                                    <div className="embla__slide__inner">
                                        <Image
                                            className="embla__slide__img grayscale opacity-[70%]"
                                            src={img}
                                            alt={img.title}
                                        />
                                    </div>
                                    <div className="absolute inset-0 z-20 hidden lg:flex flex-col justify-end opacity pb-4">
                                        <h2 className="text-2xl text-center">{img.title}</h2>
                                        <h3 className="text-xl text-center">{img.content}</h3>
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