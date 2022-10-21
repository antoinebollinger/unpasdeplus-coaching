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
        const stepW = rightFoot.getBoundingClientRect().width;
        const stepH = rightFoot.getBoundingClientRect().height / 2;

        let marginLeft = - stepW;
        let marginRight = - stepW / 2;
        let marginTop = 0;
        setInterval(() => {
            marginLeft += stepW;
            marginRight += stepW;
            marginTop += stepH;
            leftFoot.style.left = `${marginLeft}px`;
            leftFoot.style.bottom = `${marginTop + stepH}px`;
            setTimeout(() => {
                rightFoot.style.left = `${marginRight}px`;
                rightFoot.style.bottom = `${marginTop}px`;
            }, 500);
            if (marginLeft > totalWidth) {
                marginLeft = - stepW;
                marginRight = - stepW / 2;
                marginTop = 0;
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
                <div className="absolute inset-0 flex flex-col justify-end z-30">
                    <div className="foot left_foot w-[100px] lg:w-[150px] absolute left-[-150px] bottom-0">
                        <Image
                            src={LeftFoot}
                        />
                    </div>
                    <div className="foot right_foot w-[100px] lg:w-[150px] absolute left-[-150px] bottom-0">
                        <Image
                            src={RightFoot}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}