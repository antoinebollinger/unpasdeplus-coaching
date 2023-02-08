import Image from "next/image";
import Navbar from "./navbar";
import Headline from "./headline";

import Wave from "../public/images/svg/wave-white.svg";
import Home from "../public/images/banners/home.jpg";

Header.defaultProps = {
    background: {
        img: Home
    },
    logo: false
}

export default function Header({ props, background, logo }) {
    return (
        <header className="relative min-h-[60vh]" id="header">
            <div className="navigation">
                <div className="container">
                    <div className="row">
                        <div className="w-full">
                            <Navbar />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 z-0">
                <Image
                    src={background.img.src}
                    alt="background"
                    width={background.img.width}
                    height={background.img.height}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="absolute inset-0 z-10 flex justify-center items-center">
                <Headline props={props} logo={logo} />
            </div>
            <div className="absolute bottom-0 z-10 w-full h-auto -mb-1 header-shape">
                <Image
                    src={Wave}
                    alt="wave"
                    width={Wave.width}
                    height={Wave.height}
                    className="object-cover w-full h-full"
                />
            </div>
        </header>
    )
}