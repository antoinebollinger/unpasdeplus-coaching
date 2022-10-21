import Layout from '../components/layout';
import Service from '../sections/service';
import Coaching from '../sections/coaching';
import How from '../sections/how';
import Contact from '../sections/contact';
import About from '../sections/about';

export default function Home() {
    const onThisPage = [
        {
            title: "Le coaching",
            link: "#service"
        },
        {
            title: "Mes accompagnements",
            link: "#coaching"
        },
        {
            title: "Qui je suis",
            link: "#about"
        },
        {
            title: "Contact",
            link: "#contact"
        }
    ]
    return (
        <Layout title="Accueil" onThisPage={onThisPage}>
            <Service />
            <Coaching />
            <How />
            <About />
            <Contact />
        </Layout>
    )
}