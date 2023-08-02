import Image from "next/image";
import Wave from "/public/images/svg/wave-white.svg";
import WaveGray from "/public/images/svg/wave-gray.svg";
import Banner from "/public/images/banners/break.webp";

type breakProps = {
    banner?: any,
    displayBanner?: boolean,
    text?: string,
    textStyle?: string,
    first?: string,
    last?: string
}

export default function Break({
    banner = Banner,
    displayBanner = true,
    text,
    textStyle = "text-center text-primary-800 uppercase text-3xl font-bold",
    first = "white",
    last = "white"
}: breakProps) {
    return (
        <div className="relative bg-secondary-400">
            <div className="absolute inset-0 z-0">
                {displayBanner ? <Image
                    src={banner.src}
                    alt="Banner"
                    width={banner.width}
                    height={banner.height}
                    className="object-cover w-full h-full"
                /> : ""}
            </div>
            <div className="relative z-10 w-full h-auto rotate-180 -translate-y-1">
                <Image
                    src={first == "white" ? Wave : WaveGray}
                    alt="Wave"
                    width={(first == "white" ? Wave : WaveGray).width}
                    height={(first == "white" ? Wave : WaveGray).height}
                    className="object-cover w-full h-full"
                />
            </div>
            {text && <div className="container relative z-10">
                <h4 className={textStyle} dangerouslySetInnerHTML={{ __html: text }}></h4>
            </div>}
            <div className="relative z-10 w-full h-auto translate-y-1">
                <Image
                    src={last == "white" ? Wave : WaveGray}
                    alt="wave"
                    width={(last == "white" ? Wave : WaveGray).width}
                    height={(last == "white" ? Wave : WaveGray).height}
                    className="object-cover w-full h-full"
                />
            </div>
        </div>
    )
}