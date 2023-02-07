import Layout from '../components/layout';
import MaMission from '../sections/index/ma-mission';
import Break from '../components/break';
import Intro from '../sections/index/intro';
import QuiJeSuis from '../sections/index/qui-je-suis';
import Contact from '../sections/contact';

export default function Home() {
    const onThisPage = [
        {
            title: "Ma mission",
            link: "#mamission"
        },
        {
            title: "Qui je suis",
            link: "#quijesuis"
        },
        {
            title: "Contact",
            link: "#contact"
        }
    ]
    return (
        <Layout onThisPage={onThisPage}>
            <MaMission />
            <Break last="gray" logo />
            <Intro />
            <QuiJeSuis />
            <Contact />
        </Layout>
    )
}