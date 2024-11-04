import dynamic from "next/dynamic"
import Loading from "../src/components/loading"

const Layout = dynamic(() => import("../src/layout"))

export default function Page() {
    return (
        <Layout>
            <Loading />
        </Layout >
    )
}