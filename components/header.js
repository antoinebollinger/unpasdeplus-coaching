import Image from "next/image";
import Navbar from "./navbar";
import Headline from "./headline";

import Wave from "../public/images/header-shape.svg";
import Back from "../public/images/header.jpeg";

Header.defaultProps = {
    background: {
        img: Back
    }
}

export default function Header({ props, background }) {
    return (
        <header className="header-area">
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
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src={background.img.src}
                        alt="background"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <Headline props={props} />
                <div className="absolute bottom-0 z-20 w-full h-auto -mb-1 header-shape">
                    <Image
                        src={Wave}
                        alt="wave"
                        layout="responsive"
                        objectFit="fill"
                    />
                </div>
            </div>
        </header>
    )
}