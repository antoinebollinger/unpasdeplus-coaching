import Layout from '../components/layout'
import Intro from '../components/intro'
import Outro from '../components/outro'
import Programs from '../sections/programs'
import Header from '../components/header'
import Contact from '../sections/contact'
import About from '../sections/about'
import Slider from '../sections/slider'

export default function Home() {
    return (
        <Layout home={true}>
            <Header />
            <Slider />
            <Intro className="" />
            <About />
            <Programs />
            <Outro />
            <Contact />
        </Layout>
    )
}