import Image from 'next/image'
import Layout from '../src/layout'
import Banner from '/public/images/banners/accueil.webp'
import Loading from '/public/images/svg/loading.svg'

export default function Page() {
    return (
        <Layout banner={Banner}>
            <div className="flex justify-center items-center">
                <Image
                    src={Loading}
                    alt="loading"
                    width="100"
                />
            </div>
        </Layout >
    )
}