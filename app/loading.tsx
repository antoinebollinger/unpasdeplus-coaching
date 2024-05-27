import Image from "next/image"
import Layout from "../src/layout"
import Loading from "/public/images/svg/loading.svg"

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