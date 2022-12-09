import Image from "next/image";
import Navbar from "./navbar";
import Headline from "./headline";

import Wave from "../public/images/header-shape.svg";
import Back from "../public/images/bg.jpg";

Header.defaultProps = {
    background: {
        img: Back
    },
    foot: true
}

export default function Header({ props, background, foot }) {
    return (
        <header className="header-area" id="header">
            <div className="navigation">
                <div className="container">
                    <div className="row">
                        <div className="w-full">
                            <Navbar />
                        </div>
                    </div>
                </div>
            </div>
            <div id="home" className="relative z-10 header-hero">
                <div className="absolute inset-0 z-0 h-full">
                    <Image
                        src={background.img.src}
                        alt="background"
                        width={background.img.width}
                        height={background.img.height}
                        className="object-cover w-full h-full"
                    />
                </div>
                <Headline props={props} foot={foot} />
                <div className="absolute bottom-0 z-20 w-full h-auto -mb-1 header-shape">
                    <Image
                        src={Wave}
                        alt="wave"
                        width={background.img.width}
                        height={background.img.height}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </header>
    )
}