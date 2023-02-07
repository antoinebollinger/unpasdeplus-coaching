import Image from "next/image";
import Logo from "./logo";

import Wave from "../public/images/header-shape.svg";
import WaveGray from "../public/images/header-shape-gray.svg";

Break.defaultProps = {
    logo: false,
    first: "white",
    last: "white"
}

export default function Break({ logo, first, last }) {
    return (
        <div className="relative bg-primary-100">
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