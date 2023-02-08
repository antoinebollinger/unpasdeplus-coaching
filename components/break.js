import Image from "next/image";
import Logo from "./logo";
import Wave from "../public/images/svg/wave-white.svg";
import WaveGray from "../public/images/svg/wave-gray.svg";
import Background from "../public/images/banners/break.jpg";

Break.defaultProps = {
    background: {
        img: Background
    },
    displayBg: true,
    logo: false,
    text: false,
    first: "white",
    last: "white"
}

export default function Break({ background, displayBg, logo, text, first, last }) {
    return (
        <div className="relative bg-primary-100">
            <div className="absolute inset-0 z-0">
                {displayBg ? <Image
                    src={background.img.src}
                    alt="background"
                    width={background.img.width}
                    height={background.img.height}
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
            {logo && <div className="absolute inset-0 z-20 flex justify-center items-center">
                <Logo />
            </div>
            }
            {text && <div className="relative z-10 max-w-2xl mx-auto">
                <h4 className="text-center text-primary-100 uppercase text-3xl" dangerouslySetInnerHTML={{ __html: text }}></h4>
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