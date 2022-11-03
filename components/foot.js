import Image from "next/image";
import { useEffect, useRef } from "react";

import RightFootBlack from "../public/images/foot_right_black.png";
import LeftFootBlack from "../public/images/foot_left_black.png";

export default function Foot({ className }) {
    const containerRef = useRef();

    const walking = () => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        const leftFoot = container.querySelector('.left_foot');
        const rightFoot = container.querySelector('.right_foot');
        const totalWidth = container.getBoundingClientRect().width;
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
        walking();
    }, []);

    return (
        <div className={className} ref={containerRef}>
            <div className="foot left_foot w-[50px] lg:w-[80px] absolute left-[-150px] bottom-0 animate-piscaL">
                <Image
                    src={LeftFootBlack}
                    alt="Left foot"
                />
            </div>
            <div className="foot right_foot w-[50px] lg:w-[80px] absolute left-[-150px] bottom-0 animate-piscaR">
                <Image
                    src={RightFootBlack}
                    alt="Right foot"
                />
            </div>
        </div >
    );
}