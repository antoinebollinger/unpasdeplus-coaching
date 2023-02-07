import Image from "next/image";
import Logo from "./logo";

import Back from "../public/images/break.jpg";
import Wave from "../public/images/header-shape.svg";
import WaveGray from "../public/images/header-shape-gray.svg";
import { withRouter } from "next/router";

Break.defaultProps = {
    background: {
        img: Back
    },
    logo: false,
    first: "white",
    last: "white"
}

export default function Break({ background, logo, first, last }) {
    return (
        <div className="relative break">
            <div className="absolute inset-0 z-0 bg-primary-100">
                <Image
                    src={background.img.src}
                    alt="background"
                    width={background.img.width}
                    height={background.img.height}
                    className="object-cover w-full h-full hidden"
                />
            </div>
            <div className="relative z-10 w-full h-auto -mb-1 rotate-180">
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

            <div className="relative z-10 w-full h-auto -mb-1">
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