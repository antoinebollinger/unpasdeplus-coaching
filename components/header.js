import Image from "next/image";
import Navbar from "./navbar";
import Headline from "./headline";

import Wave from "../public/images/header-shape.svg";
import Back from "../public/images/bg.jpg";
import RightFoot from "../public/images/foot_right.png";
import LeftFoot from "../public/images/foot_left.png";
import { useEffect } from "react";

Header.defaultProps = {
    background: {
        img: Back
    }
}

export default function Header({ props, background }) {
    const steps = () => {
        const rightFoot = document.querySelector('.right_foot');
        const leftFoot = document.querySelector('.left_foot');
        const totalWidth = document.getElementById('home').getBoundingClientRect().width;
        const step = rightFoot.getBoundingClientRect().width;

        let marginLeft = - step;
        let marginRight = - step / 2;
        setInterval(() => {
            marginLeft += step;
            marginRight += step;
            leftFoot.style.marginLeft = `${marginLeft}px`;
            // leftFoot.style.transition = "margin 0.5s"
            setTimeout(() => {
                rightFoot.style.marginLeft = `${marginRight}px`;
                // rightFoot.style.transition = "margin 0.5s"
            }, 500);
            if (marginLeft > totalWidth) {
                // rightFoot.style.transition = "margin 0s"
                // leftFoot.style.transition = "margin 0s"
                marginLeft = - step;
                marginRight = - step / 2;
            }
        }, 1000);
    }

    useEffect(() => {
        steps();

    }, []);

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
                <div className="absolute inset-0 z-0">
                    <Image
                        src={background.img.src}
                        alt="background"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="bottom"
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
                <div className="absolute inset-0 flex flex-col justify-end z-20">
                    <div className="left_foot w-[150px] ml-[-150px] foot">
                        <Image
                            src={LeftFoot}
                        />
                    </div>
                    <div className="right_foot w-[150px] ml-[-150px] foot">
                        <Image
                            src={RightFoot}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}