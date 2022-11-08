import Image from "next/image";

import logo_empty from "../public/logo_empty.png";
import logo_left from "../public/logo_left.png";
import logo_right from "../public/logo_right.png";

Logo.defaultProps = {
    size: {
        h: 'h-48',
        w: 'w-48'
    }
}

export default function Logo({ size }) {
    return (
        <div className={`${size.h} ${size.w} relative`}>
            <div className="absolute inset-0 animate-piscaL">
                <Image
                    src={logo_left}
                    alt="Left foot"
                />
            </div>
            <div className="absolute inset-0 animate-piscaR">
                <Image
                    src={logo_right}
                    alt="Right foot"
                />
            </div>
            <div className="absolute inset-0">
                <Image
                    src={logo_empty}
                    alt="Empty logo"
                />
            </div>
        </div >
    )
}