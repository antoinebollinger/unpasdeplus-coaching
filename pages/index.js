import Layout from '../components/layout';
import Intro from '../sections/main/intro';
import Quality from '../sections/main/quality';
import Coaching from '../sections/main/coaching';
import How from '../sections/main/how';
import About from '../sections/main/about';
import Contact from '../sections/contact';

export default function Home() {
    const onThisPage = [
        {
            title: "C'est quoi, le coaching ?",
            link: "#intro"
        },
        {
            title: "Mes accompagnements",
            link: "#coaching"
        },
        {
            title: "Comment ça se passe ?",
            link: "#how"
        },
        {
            title: "Qui je suis ?",
            link: "#about"
        },
        {
            title: "Contact",
            link: "#contact"
        }
    ]
    return (
        <Layout title="Accueil" onThisPage={onThisPage}>
            <Intro />
            <Quality />
            <Coaching />
            <How />
            <About />
            <Contact />
        </Layout>
    )
}