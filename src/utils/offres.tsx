import Image, { StaticImageData } from "next/image"
import Link from "next/link"

export const offres = (
    img: StaticImageData,
    text: string,
    href: string,
    alt?: string
) => {
    return (
        <Link href={href} className="w-full lg:w-1/3 flex flex-col gap-6 rounded-xl shadow-xl p-4 bg-white transition hover:scale-[1.05]">
            <p className="text-lg text-center">
                <strong dangerouslySetInnerHTML={{ __html: text }} />
            </p>
            <Image
                src={img}
                width={337}
                height={200}
                className="w-full h-[200px] object-cover rounded transition duration-200 scale-0 liens-img"
                alt={alt ?? "Image d'illustration du coaching"}
            />
        </Link>
    )
}