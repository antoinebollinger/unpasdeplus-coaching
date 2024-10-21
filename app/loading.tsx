import Image from "next/image"
import dynamic from "next/dynamic"
import Loading from "/public/images/svg/loading.svg"

const Layout = dynamic(() => import("../src/layout"))

export default function Page() {
    return (
        <Layout>
            <div className="min-h-[35vh] flex justify-center items-center">
                <Image
                    src={Loading}
                    alt="Loading"
                    width="100"
                />
            </div>
        </Layout >
    )
}