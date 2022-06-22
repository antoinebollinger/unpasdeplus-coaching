import Layout from '../components/layout'
import Intro from '../components/intro'
import Outro from '../components/outro'
import Footer from '../components/footer'
import Programs from '../sections/programs'
import Header from '../components/header'
import Contact from '../sections/contact'
import About from '../sections/about'

export default function Home() {
    return (
        <Layout>
            <Header />
            <Intro />
            <About />
            <Programs />
            <Outro />
            <Contact />
            <Footer />
        </Layout>
    )
}