import Image from "next/image"
import LoadingImg from "/public/images/svg/loading.svg"

export default function Loading() {
    return (
        <div className="min-h-[35vh] flex justify-center items-center">
            <Image
                src={LoadingImg}
                alt="Loading"
                width="100"
            />
        </div>
    )
}